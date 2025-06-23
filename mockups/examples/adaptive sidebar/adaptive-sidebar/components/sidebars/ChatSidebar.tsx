
import React from 'react';
import { Search, UserPlus, Settings } from 'lucide-react';
import { mockChats } from '../../data/mockChats';
import { ContactAvatar } from '../common/ContactAvatar';
import { ViewType } from '../../types';

interface ChatSidebarProps {
  selectedChat: string;
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ selectedChat, setView }) => (
  <>
    <div className="p-4 border-b border-gray-200">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto">
      {mockChats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setView('chat', { chat: chat.id })}
          className={`p-4 cursor-pointer transition-colors border-b border-gray-100 hover:bg-gray-50 ${
            selectedChat === chat.id ? 'bg-green-50 border-r-2 border-r-green-500' : ''
          }`}
        >
          <div className="flex items-center space-x-3">
            <ContactAvatar name={chat.name} online={chat.online} size="lg" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full min-w-[20px] text-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="p-4 border-t border-gray-200">
      <div className="flex space-x-2">
        <button 
          onClick={() => setView('contacts')}
          className="flex-1 flex items-center justify-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          View Contacts
        </button>
        <button 
          onClick={() => setView('settings')}
          className="flex items-center justify-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  </>
);
