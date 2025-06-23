import { cn } from "@/lib/utils";
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessageProps {
  message: ChatMessageType;
  onOptionClick?: (option: string) => void;
}

export const ChatMessage = ({ message, onOptionClick }: ChatMessageProps) => {
  const isBot = message.type === 'bot';

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-600" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isBot
            ? "bg-gray-100 text-gray-900"
            : "bg-primary-500 text-white"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        
        {message.options && message.options.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start text-left"
                onClick={() => onOptionClick?.(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )}
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};