import { cn } from "@/lib/utils";
import type { Interview } from "@/types";
import { Eye, Newspaper, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import ToolTipButton from "./tooltip-button";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

const InterviewPin = ({ interview, onMockPage = false }: InterviewPinProps) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
      <CardTitle className="text-lg">{interview?.position}</CardTitle>
      <CardDescription>{interview?.description}</CardDescription>
      <div className="w-full flex items-center gap-2 flex-wrap">
        {interview?.techStack.split(",").map((word, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
          >
            {word}
          </Badge>
        ))}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
            "en-US",
            { dateStyle: "long" }
          )} - ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
            "en-US",
            { timeStyle: "short" }
          )}`}
        </p>
      </CardFooter>

      {!onMockPage && (
        <div className="flex items-center justify-center">
          <ToolTipButton
            content="View"
            buttonVariant={"ghost"}
            onClick={() => {
              navigate(`/generate/${interview?.id}`, { replace: true });
            }}
            disabled={false}
            buttonClassName="hover:text-sky-500 text-white"
            icon={<Eye />}
            loading={false}
          />

          <ToolTipButton
            content="Feedback"
            buttonVariant={"ghost"}
            onClick={() => {
              navigate(`/generate/feedback/${interview?.id}`, {
                replace: true,
              });
            }}
            disabled={false}
            buttonClassName="hover:text-yellow-500 text-white"
            icon={<Newspaper />}
            loading={false}
          />

          <ToolTipButton
            content="Start"
            buttonVariant={"ghost"}
            onClick={() => {
              navigate(`/generate/interview/${interview?.id}`, {
                replace: true,
              });
            }}
            disabled={false}
            buttonClassName="hover:text-sky-500 text-white"
            icon={<Sparkles />}
            loading={false}
          />
        </div>
      )}
    </Card>
  );
};

export default InterviewPin;
