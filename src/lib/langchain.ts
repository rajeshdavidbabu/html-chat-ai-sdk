import { ConversationalRetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vector-store";
import { getPineconeClient } from "./pinecone-client";
import {
  StreamingTextResponse,
  experimental_StreamData,
  LangChainStream,
} from "ai-stream-experimental";
import { streamingModel, nonStreamingModel } from "./llm";
import {
  STANDALONE_QUESTION_TEMPLATE,
  QA_TEMPLATE,
  METADATA_GENERATOR_TEMPLATE,
} from "./prompt-templates";
import { Document } from "langchain/dist/document";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

type callChainArgs = {
  question: string;
  chatHistory: string;
};

export async function callChain({ question, chatHistory }: callChainArgs) {
  try {
    // Open AI recommendation
    const sanitizedQuestion = question.trim().replaceAll("\n", " ");
    const pineconeClient = await getPineconeClient();

    const { stream, handlers } = LangChainStream({
      experimental_streamData: true,
    });
    const data = new experimental_StreamData();

    const prompt = PromptTemplate.fromTemplate(METADATA_GENERATOR_TEMPLATE);
    const chainA = new LLMChain({ llm: nonStreamingModel, prompt });

    // The result is an object with a `text` property.
    const metadata = await chainA.call({ question: sanitizedQuestion });

    console.log("The resA ", metadata);

    const vectorStore = await getVectorStore(pineconeClient, metadata.text);
    const chain = ConversationalRetrievalQAChain.fromLLM(
      streamingModel,
      vectorStore.asRetriever(5),
      {
        qaTemplate: QA_TEMPLATE,
        questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
        returnSourceDocuments: true, //default 4
        memory: new BufferMemory({
          memoryKey: "chat_history",
          inputKey: "question", // The key for the input to the chain
          outputKey: "text", // The key for the final conversational output of the chain
          returnMessages: true, // If using with a chat model (e.g. gpt-3.5 or gpt-4)
        }),
        questionGeneratorChainOptions: {
          llm: nonStreamingModel,
        },
      }
    );

    // Question using chat-history
    // Reference https://js.langchain.com/docs/modules/chains/popular/chat_vector_db#externally-managed-memory
    chain
      .call(
        {
          question: sanitizedQuestion,
          chat_history: chatHistory,
        },
        [handlers]
      )
      .then(async (res) => {
        const sourceDocuments = res?.sourceDocuments;
        const firstThreeDocuments = sourceDocuments.slice(0, 3);
        const urls = firstThreeDocuments.map(
          (document: Document) => document.metadata.source
        );
        const uniqueUrls = Array.from(new Set(urls)) as string[];
        data.append({
          sources: uniqueUrls,
        });
        data.close();
      });

    // Return the readable stream
    return new StreamingTextResponse(stream, {}, data);
  } catch (e) {
    console.error(e);
    throw new Error("Call chain method failed to execute successfully!!");
  }
}
