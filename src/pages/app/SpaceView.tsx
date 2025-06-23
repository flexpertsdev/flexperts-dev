import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Paperclip, 
  Code2, 
  FileText, 
  Image,
  Link2,
  MoreVertical,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SpaceMessage {
  id: string;
  type: 'user' | 'bot' | 'context';
  content: string;
  timestamp: string;
  attachments?: Array<{
    type: 'code' | 'file' | 'image' | 'link';
    name: string;
    preview?: string;
  }>;
}

export const SpaceView = () => {
  const { spaceId } = useParams();
  const [input, setInput] = useState("");
  
  // Mock messages showing space as chat + context
  const [messages] = useState<SpaceMessage[]>([
    {
      id: '1',
      type: 'context',
      content: 'Space created for: Authentication System Implementation',
      timestamp: 'Yesterday at 3:45 PM',
    },
    {
      id: '2',
      type: 'user',
      content: 'I need to implement a login system with email/password and social auth',
      timestamp: 'Yesterday at 3:46 PM',
    },
    {
      id: '3',
      type: 'bot',
      content: `I'll help you create a comprehensive authentication system. Let's start by understanding your requirements:

1. **Email/Password Auth**: Traditional login with secure password storage
2. **Social Auth**: Which providers? (Google, GitHub, Facebook?)
3. **Additional Features**: 2FA, Remember me, Password reset?

I can generate the complete implementation for you.`,
      timestamp: 'Yesterday at 3:46 PM',
    },
    {
      id: '4',
      type: 'user',
      content: 'Google and GitHub for social auth. Also need 2FA and password reset.',
      timestamp: 'Yesterday at 3:48 PM',
      attachments: [
        {
          type: 'file',
          name: 'auth-requirements.md',
          preview: '# Authentication Requirements\n- OAuth2 with Google & GitHub\n- 2FA via authenticator apps\n- Email-based password reset'
        }
      ]
    },
    {
      id: '5',
      type: 'bot',
      content: 'Perfect! I\'ve generated a complete authentication system for you. Here are the components:',
      timestamp: 'Yesterday at 3:49 PM',
      attachments: [
        {
          type: 'code',
          name: 'AuthContext.tsx',
          preview: 'React Context for authentication state management'
        },
        {
          type: 'code',
          name: 'LoginForm.tsx',
          preview: 'Login component with email/password and social buttons'
        },
        {
          type: 'code',
          name: 'auth.service.ts',
          preview: 'Authentication service with JWT handling'
        },
        {
          type: 'code',
          name: 'oauth.config.ts',
          preview: 'OAuth configuration for Google and GitHub'
        }
      ]
    },
    {
      id: '6',
      type: 'context',
      content: 'Files generated and added to project',
      timestamp: 'Yesterday at 3:50 PM',
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    // Handle sending message
    setInput("");
  };

  const getAttachmentIcon = (type: string) => {
    switch (type) {
      case 'code': return <Code2 className="w-4 h-4" />;
      case 'file': return <FileText className="w-4 h-4" />;
      case 'image': return <Image className="w-4 h-4" />;
      case 'link': return <Link2 className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Space Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">#general</h1>
            <p className="text-sm text-gray-500">
              Space for general discussion • Created 2 days ago
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              AI Enhanced
            </Badge>
            <Button variant="ghost" size="icon" className="min-h-touch touch-manipulation">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((message) => (
          <div key={message.id}>
            {message.type === 'context' ? (
              // Context message - centered
              <div className="flex justify-center animate-fade-in">
                <div className="bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-600">
                  {message.content}
                </div>
              </div>
            ) : (
              // Regular message
              <div className={cn(
                "flex gap-3 animate-fade-in",
                message.type === 'user' && "flex-row-reverse"
              )}>
                {message.type === 'bot' && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                
                <div className={cn(
                  "max-w-[70%]",
                  message.type === 'user' && "items-end"
                )}>
                  <div className={cn(
                    "message-bubble",
                    message.type === 'user' 
                      ? "bg-green-500 text-white" 
                      : "bg-gray-100 text-gray-900"
                  )}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    
                    {/* Attachments */}
                    {message.attachments && (
                      <div className="mt-3 space-y-2">
                        {message.attachments.map((attachment, idx) => (
                          <div 
                            key={idx}
                            className={cn(
                              "flex items-center gap-2 p-2 rounded-mobile touch-manipulation",
                              message.type === 'user' 
                                ? "bg-green-600/20" 
                                : "bg-white"
                            )}
                          >
                            {getAttachmentIcon(attachment.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {attachment.name}
                              </p>
                              {attachment.preview && (
                                <p className={cn(
                                  "text-xs truncate",
                                  message.type === 'user' 
                                    ? "text-green-100" 
                                    : "text-gray-500"
                                )}>
                                  {attachment.preview}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <p className={cn(
                    "text-xs text-gray-500 mt-1 px-1",
                    message.type === 'user' && "text-right"
                  )}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="icon" className="mb-1 min-h-touch touch-manipulation">
            <Paperclip className="w-5 h-5" />
          </Button>
          
          <div className="flex-1">
            <Textarea
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="min-h-touch max-h-[120px] resize-none rounded-mobile touch-manipulation"
              rows={1}
            />
          </div>
          
          <Button 
            onClick={handleSend}
            disabled={!input.trim()}
            size="icon"
            className="mb-1 min-h-touch touch-manipulation"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};