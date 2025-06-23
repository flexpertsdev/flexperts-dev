import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoreVertical, Send, Paperclip } from 'lucide-react';

export const ChatSpacePage = () => {
  const { spaceId } = useParams();
  const [message, setMessage] = useState('');
  
  const messages = [
    {
      id: '1',
      type: 'user' as const,
      content: 'Can you help me build an authentication system?',
      timestamp: '10:32 AM'
    },
    {
      id: '2',
      type: 'assistant' as const,
      content: 'I\'d be happy to help you build an authentication system! Let me understand your requirements first:\n\n1. What type of authentication do you need?\n2. Which framework are you using?\n3. Do you need social login support?',
      timestamp: '10:33 AM'
    }
  ];
  
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
              <h1 className="font-semibold text-gray-900">Authentication System</h1>
              <p className="text-xs text-gray-500">Space #{spaceId}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </header>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] md:max-w-[60%] rounded-2xl px-4 py-3 ${
                msg.type === 'user'
                  ? 'bg-green-500 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.type === 'user' ? 'text-green-100' : 'text-gray-400'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </Button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button size="icon" className="bg-green-500 hover:bg-green-600">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};