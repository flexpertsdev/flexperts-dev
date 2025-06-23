import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Paperclip,
  Mic,
  Smile,
  MoreVertical,
  Hash,
  Lock,
  Users,
  Pin,
  Bell,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: Date;
  isEdited?: boolean;
  reactions?: Array<{
    emoji: string;
    users: string[];
  }>;
}

interface SpaceInfo {
  id: string;
  name: string;
  type: "public" | "private";
  description: string;
  memberCount: number;
  isPinned?: boolean;
  isMuted?: boolean;
}

const SpaceChat: React.FC = () => {
  const { spaceId } = useParams();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Welcome to the general space! Feel free to discuss anything here.",
      sender: {
        id: "system",
        name: "System",
      },
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "2",
      content: "Hey everyone! Just finished implementing the new feature. Check it out and let me know what you think!",
      sender: {
        id: "user1",
        name: "Alice Johnson",
        avatar: "/placeholder.svg",
      },
      timestamp: new Date(Date.now() - 3600000),
      reactions: [
        { emoji: "👍", users: ["user2", "user3"] },
        { emoji: "🎉", users: ["user2"] },
      ],
    },
    {
      id: "3",
      content: "That looks amazing! Great work Alice! 🚀",
      sender: {
        id: "user2",
        name: "Bob Smith",
        avatar: "/placeholder.svg",
      },
      timestamp: new Date(Date.now() - 3000000),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Mock space info - in real app, this would come from API
  const [spaceInfo] = useState<SpaceInfo>({
    id: spaceId || "1",
    name: "general",
    type: "public",
    description: "General discussion for all team members",
    memberCount: 42,
    isPinned: true,
    isMuted: false,
  });

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
      sender: {
        id: "currentUser",
        name: "John Doe",
        avatar: "/placeholder.svg",
      },
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate other user typing
    setTimeout(() => {
      setIsTyping(["Alice Johnson"]);
    }, 2000);

    // Simulate other user response
    setTimeout(() => {
      setIsTyping([]);
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for sharing! I'll take a look at it right away.",
        sender: {
          id: "user1",
          name: "Alice Johnson",
          avatar: "/placeholder.svg",
        },
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 4000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (days === 1) {
      return "Yesterday";
    } else {
      return timestamp.toLocaleDateString();
    }
  };

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            {spaceInfo.type === "public" ? (
              <Hash className="h-5 w-5" />
            ) : (
              <Lock className="h-5 w-5" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{spaceInfo.name}</h3>
              {spaceInfo.isPinned && (
                <Pin className="h-3 w-3 text-muted-foreground" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {spaceInfo.memberCount} members
              {isTyping.length > 0 && (
                <span className="ml-2">
                  • {isTyping.join(", ")} {isTyping.length === 1 ? "is" : "are"} typing...
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Users className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pin className="h-4 w-4 mr-2" />
                {spaceInfo.isPinned ? "Unpin" : "Pin"} Space
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="h-4 w-4 mr-2" />
                {spaceInfo.isMuted ? "Unmute" : "Mute"} Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Space Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => {
            const showAvatar = index === 0 || 
              messages[index - 1].sender.id !== message.sender.id ||
              message.timestamp.getTime() - messages[index - 1].timestamp.getTime() > 300000; // 5 minutes

            return (
              <div key={message.id} className="group flex gap-3 hover:bg-muted/30 -mx-2 px-2 py-1 rounded">
                {showAvatar ? (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.sender.avatar} />
                    <AvatarFallback>
                      {message.sender.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="w-8" />
                )}
                <div className="flex-1">
                  {showAvatar && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-sm">
                        {message.sender.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatMessageTime(message.timestamp)}
                      </span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  {message.reactions && message.reactions.length > 0 && (
                    <div className="flex gap-1 mt-1">
                      {message.reactions.map((reaction, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80 px-1.5 py-0.5 text-xs"
                        >
                          <span className="mr-1">{reaction.emoji}</span>
                          <span>{reaction.users.length}</span>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isTyping.length > 0 && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {isTyping[0].split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <Card className="bg-muted px-3 py-2">
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
            placeholder={`Message #${spaceInfo.name}`}
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

export default SpaceChat;