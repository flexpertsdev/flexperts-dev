import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoreVertical, Users, Pin, Archive, Settings } from 'lucide-react';
import { ChatMessage, Message } from '@/components/chat/ChatMessage';
import { ChatInput } from '@/components/chat/ChatInput';
import { TypingIndicator } from '@/components/chat/TypingIndicator';
import { useSpace } from '@/contexts/SpaceContext';
import { useAuth } from '@/contexts/AuthContext';
import { useMode } from '@/contexts/ModeContext';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

export const ChatSpacePage = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentMode } = useMode();
  const { 
    spaces, 
    messages, 
    sendMessage, 
    updateMessageStatus,
    toggleSpacePin,
    archiveSpace,
    typingUsers
  } = useSpace();
  
  const [replyTo, setReplyTo] = useState<Message | undefined>();
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const currentSpace = spaces.find(s => s.id === spaceId);
  const spaceMessages = useMemo(() => messages[spaceId || ''] || [], [messages, spaceId]);
  const spaceTypingUsers = typingUsers[spaceId || ''] || [];
  
  useEffect(() => {
    if (!currentSpace) {
      navigate('/app/spaces');
    }
  }, [currentSpace, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [spaceMessages]);

  useEffect(() => {
    // Mark messages as read when viewing the space
    spaceMessages
      .filter(m => m.status !== 'read' && m.senderId !== user?.id)
      .forEach(m => {
        updateMessageStatus(spaceId!, m.id, 'read');
      });
  }, [spaceMessages, spaceId, user?.id, updateMessageStatus]);

  const handleSendMessage = async (content: string, attachments?: File[]) => {
    if (!spaceId || !user) return;

    const message: Message = {
      id: Date.now().toString(),
      content,
      senderId: user.id,
      senderName: user.name || 'You',
      senderAvatar: user.avatar,
      timestamp: new Date(),
      status: 'sending',
      type: 'text',
      replyTo,
      isAI: false,
    };

    sendMessage(spaceId, message);
    setReplyTo(undefined);

    // Simulate AI response if in You Build mode
    if (currentMode === 'you-build' && currentSpace?.type === 'ai') {
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateAIResponse(content),
          senderId: 'ai-assistant',
          senderName: 'Flexi AI',
          timestamp: new Date(),
          status: 'sent',
          type: 'text',
          isAI: true,
        };
        sendMessage(spaceId, aiResponse);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleTyping = (typing: boolean) => {
    setIsTyping(typing);
    // In real app, emit typing status via WebSocket
  };

  const handleDeleteMessage = (message: Message) => {
    // Implement delete logic
    console.log('Delete message:', message.id);
  };

  const handleEditMessage = (message: Message) => {
    // Implement edit logic
    console.log('Edit message:', message.id);
  };

  if (!currentSpace) return null;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
      {/* Chat Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/app/spaces" className="md:hidden">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="font-semibold text-gray-900">{currentSpace.name}</h1>
              <p className="text-xs text-gray-500">
                {currentSpace.type === 'ai' && '🤖 AI Assistant • '}
                {currentSpace.memberCount} members • {currentSpace.lastMessage?.timestamp 
                  ? `Active ${new Date(currentSpace.lastMessage.timestamp).toLocaleDateString()}`
                  : 'New space'
                }
              </p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleSpacePin(spaceId!)}>
                <Pin className={cn(
                  "w-4 h-4 mr-2",
                  currentSpace.isPinned && "text-yellow-500"
                )} />
                {currentSpace.isPinned ? 'Unpin' : 'Pin'} Space
              </DropdownMenuItem>
              {currentSpace.type === 'team' && (
                <DropdownMenuItem>
                  <Users className="w-4 h-4 mr-2" />
                  Manage Members
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Space Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-red-600"
                onClick={() => {
                  archiveSpace(spaceId!);
                  navigate('/app/spaces');
                }}
              >
                <Archive className="w-4 h-4 mr-2" />
                Archive Space
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      {/* Messages */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-1">
          {spaceMessages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No messages yet. Start a conversation!</p>
            </div>
          ) : (
            spaceMessages.map((message, index) => (
              <ChatMessage
                key={message.id}
                message={message}
                isCurrentUser={message.senderId === user?.id}
                showAvatar={
                  index === 0 || 
                  spaceMessages[index - 1]?.senderId !== message.senderId
                }
                onReply={setReplyTo}
                onEdit={message.senderId === user?.id ? handleEditMessage : undefined}
                onDelete={message.senderId === user?.id ? handleDeleteMessage : undefined}
              />
            ))
          )}
          {spaceTypingUsers.length > 0 && (
            <TypingIndicator users={spaceTypingUsers} />
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        onTyping={handleTyping}
        replyTo={replyTo}
        onCancelReply={() => setReplyTo(undefined)}
        placeholder={
          currentSpace.type === 'ai' 
            ? "Ask Flexi anything..."
            : "Type a message..."
        }
      />
    </div>
  );
};

function generateAIResponse(input: string): string {
  const responses = [
    "I understand you're asking about {topic}. Let me help you with that...",
    "That's a great question! Here's what I think...",
    "Based on what you're describing, I'd recommend...",
    "I can definitely help with that. Let's break it down...",
    "Interesting! Here are my thoughts on {topic}..."
  ];
  
  const response = responses[Math.floor(Math.random() * responses.length)];
  const topic = input.split(' ').slice(0, 3).join(' ');
  
  return response.replace('{topic}', topic) + 
    "\n\nThis is a mock response. In a real implementation, this would connect to an AI service.";
}