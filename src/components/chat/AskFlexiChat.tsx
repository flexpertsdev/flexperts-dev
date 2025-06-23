import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Send,
  Paperclip,
  Mic,
  Smile,
  MoreVertical,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "flexi";
  timestamp: Date;
  status?: "sending" | "sent" | "read";
}

const AskFlexiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Flexi, your AI assistant. How can I help you build something amazing today?",
      sender: "flexi",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate message sent
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
        )
      );
    }, 500);

    // Simulate Flexi typing
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    // Simulate Flexi response
    setTimeout(() => {
      setIsTyping(false);
      const flexiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you want to ${inputValue.toLowerCase()}. Let me help you with that! Here are some suggestions...`,
        sender: "flexi",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, flexiResponse]);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Ask Flexi</h3>
            <p className="text-xs text-muted-foreground">
              {isTyping ? "Typing..." : "Always here to help"}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar className="h-8 w-8">
                {message.sender === "flexi" ? (
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Sparkles className="h-4 w-4" />
                  </AvatarFallback>
                ) : (
                  <AvatarFallback>JD</AvatarFallback>
                )}
              </Avatar>
              <div
                className={`flex max-w-[70%] flex-col gap-1 ${
                  message.sender === "user" ? "items-end" : ""
                }`}
              >
                <Card
                  className={`px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </Card>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {message.sender === "user" && message.status && (
                    <span>
                      {message.status === "sending" && "Sending..."}
                      {message.status === "sent" && "✓"}
                      {message.status === "read" && "✓✓"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <Card className="bg-muted px-4 py-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
                </div>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Smile className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="h-8 w-8"
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AskFlexiChat;