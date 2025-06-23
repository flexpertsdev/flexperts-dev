import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft,
  Paperclip,
  Smile,
  Mic,
  Send,
  MoreVertical,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
  options?: Array<{
    label: string;
    action: () => void;
  }>;
}

interface AskFlexiChatProps {
  onBack?: () => void;
  context?: {
    mode: string;
    project?: string;
    feature?: string;
  };
}

export const AskFlexiChat = ({ onBack, context }: AskFlexiChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hi! I'm Flexi, your AI assistant. I can help you with:

• Writing and debugging code
• Designing user interfaces  
• Planning project architecture
• Learning new technologies

What would you like to build today?`,
      timestamp: '2:30 PM',
    },
    {
      id: '2',
      type: 'user',
      content: 'I need help creating a responsive navigation menu for my website',
      timestamp: '2:31 PM',
    },
    {
      id: '3',
      type: 'bot',
      content: `I'll help you create a responsive navigation menu! Here are a few options to consider:`,
      timestamp: '2:31 PM',
      options: [
        { label: 'Hamburger Menu', action: () => {} },
        { label: 'Bottom Navigation', action: () => {} },
        { label: 'Sidebar Navigation', action: () => {} },
      ],
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'I understand you want to build that. Let me help you get started...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {onBack && (
              <button 
                onClick={onBack}
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg md:hidden min-h-touch touch-manipulation"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Ask Flexi</h2>
              <p className="text-sm text-green-600">Always here to help</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg min-h-touch touch-manipulation">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Context Pills */}
        {context && (
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {context.mode.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </span>
            {context.project && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {context.project}
              </span>
            )}
            {context.feature && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {context.feature}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex",
              message.type === 'user' ? "justify-end" : "justify-start"
            )}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
            )}
            
            <div className={cn(
              "max-w-[70%] message-bubble animate-fade-in",
              message.type === 'user' 
                ? "bg-green-500 text-white rounded-[18px_18px_4px_18px]" 
                : "bg-gray-100 text-gray-900 rounded-[18px_18px_18px_4px]"
            )}>
              <p className="p-3 whitespace-pre-wrap">{message.content}</p>

              {message.options && (
                <div className="px-3 pb-3 space-y-2">
                  {message.options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className={cn(
                        "w-full justify-start min-h-touch touch-manipulation",
                        message.type === 'user' 
                          ? "border-white/20 text-white hover:bg-white/10" 
                          : "bg-white"
                      )}
                      onClick={option.action}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              )}

              <span className={cn(
                "text-xs px-3 pb-2 block",
                message.type === 'user' ? "text-green-100" : "text-gray-500"
              )}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg min-h-touch touch-manipulation">
            <Paperclip className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full resize-none bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-200 min-h-touch max-h-[120px] touch-manipulation"
              rows={1}
            />
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg min-h-touch touch-manipulation">
            <Smile className="w-6 h-6 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg min-h-touch touch-manipulation">
            <Mic className="w-6 h-6 text-gray-600" />
          </button>
          
          <Button 
            onClick={handleSend}
            className="bg-green-500 hover:bg-green-600 text-white p-3 min-h-touch touch-manipulation"
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};