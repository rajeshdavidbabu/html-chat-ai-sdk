import { allTitles } from "../scripts/data";

// Creates a standalone question from the chat-history and the current question
export const STANDALONE_QUESTION_TEMPLATE = `Below is a summary of the conversation so far, and a new question asked by the user that needs to be answered by searching in a knowledge base.
Generate a search query based on the conversation and the new question.

Chat History:
{chat_history}

Question:
{question}

Search query:`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE = `You are an enthusiastic AI coding assistant.

Answer with the facts listed in the context below. If there isn't enough information below, say you don't know.
If asking a clarifying question to the user would help, ask the question.
If the user is requesting information about all the components or available components use 'summary' and 'about' as the string.

{context}

Question: {question}
Helpful answer in markdown`;

// For questions that involve summary, about, component library, FAQs, introduction and available components, the output can be ["summary"].

export const METADATA_GENERATOR_TEMPLATE = `
You are an expert text classifier. Your job is to generate an array of strings that are within the "context" that best match with the Input question.
First check for text-similarity match, if not fallback to semantic matching. 
If you are not sure then use ['summary'] and if there is no match then generate an empty array.

Context:
"""
    ${allTitles}
"""

Examples for QA:
Input: Can you summarize the document ?
Output: ["summary", "about"]
Input: How to install alert component ?
Output: ["alert components", "installation"]
Input: How do I use form component ?
Output: ["form components"]
Input: What are the available components ?
Output: ["summary"]
Input: Is this a component library ?
Output: ["summary"]
Input: How to install elephant component ?
Output: []
Input: How to build a kite component ?
Output: []
Input: {question}
Output: 
`;
