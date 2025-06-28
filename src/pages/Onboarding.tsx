import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { useOnboarding } from "@/hooks/useOnboarding";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const { messages, currentStep, isTyping, handleUserInput, inputType } = useOnboarding();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    handleUserInput(option);
  };

  const showInput = inputType === 'text' || inputType === 'email';
  const lastMessage = messages[messages.length - 1];
  const hasOptions = lastMessage?.options && lastMessage.options.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">Flexperts</span>
          </Link>
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Already have an account?
          </Link>
        </div>

        {/* Chat Container */}
        <Card className="h-[calc(100vh-120px)] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="font-semibold">Flexperts Assistant</h2>
                <p className="text-sm text-gray-600">Let's get you started!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onOptionClick={handleOptionClick}
              />
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <ChatInput
              onSend={handleUserInput}
              placeholder={
                isTyping ? "Assistant is typing..." :
                hasOptions ? "Choose an option above or type your message..." :
                inputType === 'email' ? "Enter your email address..." : 
                "Type your message..."
              }
              disabled={isTyping}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;