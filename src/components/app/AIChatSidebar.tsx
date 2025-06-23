import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronLeft,
  Paperclip,
  Send,
  Info,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
  contextActions?: Array<{
    label: string;
    action: () => void;
  }>;
}

interface AIChatSidebarProps {
  onClose?: () => void;
  context?: {
    mode: string;
    project?: string;
    feature?: string;
    currentFile?: string;
  };
  isCollapsed?: boolean;
}

export const AIChatSidebar = ({ onClose, context, isCollapsed = false }: AIChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `I see you're working on the authentication flow. I've analyzed your current setup and have some suggestions:`,
      timestamp: '2:15 PM',
      contextActions: [
        { label: 'Add OAuth Flow', action: () => {} },
        { label: 'Show Examples', action: () => {} },
      ],
    },
    {
      id: '2',
      type: 'user',
      content: 'Can you help me add a two-factor authentication step?',
      timestamp: '2:20 PM',
    },
    {
      id: '3',
      type: 'bot',
      content: `Absolutely! I'll help you add 2FA to your authentication flow. Here's how we can structure it:

After Password Verification:
1. Check if user has 2FA enabled
2. If yes → Send to 2FA verification screen
3. Support SMS, Authenticator App, or Email
4. Verify code (with rate limiting)
5. Generate session token on success

I can add these nodes to your flow diagram. Would you like me to do that?`,
      timestamp: '2:21 PM',
      contextActions: [
        { label: 'Add 2FA Nodes', action: () => {} },
        { label: 'Show Code Example', action: () => {} },
        { label: 'View Best Practices', action: () => {} },
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
        content: 'I understand. Let me help you with that...',
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

  if (isCollapsed) {
    return (
      <aside className="w-12 bg-white border-l border-gray-200 flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="mt-4"
        >
          <Sparkles className="w-5 h-5 text-green-600" />
        </Button>
      </aside>
    );
  }

  return (
    <aside className="w-96 bg-white border-l border-gray-200 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {onClose && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="mr-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-semibold">Ask Flexi - {context?.feature || 'Assistant'}</h2>
                <p className="text-sm text-gray-500">Helping with: {context?.project || 'Your Project'}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Context Pills */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            {context?.mode?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Visual Planning Mode'}
          </span>
          {context?.project && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {context.project}
            </span>
          )}
          {context?.currentFile && (
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
              {context.currentFile}
            </span>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex items-start",
              message.type === 'user' && "justify-end"
            )}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
            )}
            
            <div className={cn(
              "max-w-[85%]",
              message.type === 'user' 
                ? "bg-green-500 text-white rounded-[18px_18px_4px_18px]" 
                : ""
            )}>
              {message.type === 'bot' ? (
                <div>
                  <p className="text-gray-900 whitespace-pre-wrap">{message.content}</p>
                  {message.contextActions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.contextActions.map((action, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          className="text-xs bg-gray-100 hover:bg-gray-200 border-0"
                          onClick={action.action}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-gray-500 mt-2 block">
                    {message.timestamp}
                  </span>
                </div>
              ) : (
                <div className="p-3">
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs text-green-100 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
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

        {/* Context Card */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-900">Related Context:</p>
              <p className="text-blue-700">Your API already has a <code className="bg-blue-100 px-1 rounded">POST /auth/2fa/send</code> endpoint ready. I can help you connect it.</p>
            </div>
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 pt-2">
        <div className="flex gap-2">
          <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
            Generate API calls
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
            Add error handling
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
            Test flow
          </button>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              placeholder="Ask about this flow..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full resize-none bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-200 min-h-[36px] max-h-[120px] text-sm py-2"
              rows={1}
            />
          </div>

          <Button 
            onClick={handleSend}
            className="bg-green-500 hover:bg-green-600 text-white p-2"
            disabled={!input.trim()}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
};