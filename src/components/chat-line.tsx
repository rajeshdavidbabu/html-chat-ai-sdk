import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";

const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

interface ChatLineProps extends Partial<Message> {
  sources: string[];
}

export function ChatLine({
  role = "assistant",
  content,
  sources,
}: ChatLineProps) {
  if (!content) {
    return null;
  }
  const formattedMessage = convertNewLines(content);

  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role != "assistant"
                ? "text-amber-500 dark:text-amber-200"
                : "text-blue-500 dark:text-blue-200"
            }
          >
            {role == "assistant" ? "AI" : "You"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm prose dark:prose-invert max-w-full">
          <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
        </CardContent>
        <CardFooter>
          <CardDescription className="w-full">
            {sources?.length ? (
              sources.map((source, index) => (
                <Badge key={index} className={"mr-2 mt-2"}>
                  <a href={source} target="_blank">
                    {source}
                  </a>
                </Badge>
              ))
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
