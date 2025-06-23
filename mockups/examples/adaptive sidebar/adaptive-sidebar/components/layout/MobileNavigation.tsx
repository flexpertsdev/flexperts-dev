
import React from 'react';
import { MessageCircle, UserPlus, Settings } from 'lucide-react';
import { ViewType } from '../../types';

interface MobileNavigationProps {
  currentView: ViewType;
  selectedChat: string;
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  currentView, 
  selectedChat, 
  setView 
}) => (
  <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-20 ${currentView === 'chat' && selectedChat ? 'hidden' : ''}`}>
    <div className="flex justify-around">
      <button
        onClick={() => setView('chat')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg ${
          currentView === 'chat' ? 'text-green-600 bg-green-50' : 'text-gray-500'
        }`}
      >
        <MessageCircle className="w-6 h-6 mb-1" />
        <span className="text-xs font-medium">Chats</span>
      </button>
      <button
        onClick={() => setView('contacts')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg ${
          currentView === 'contacts' ? 'text-green-600 bg-green-50' : 'text-gray-500'
        }`}
      >
        <UserPlus className="w-6 h-6 mb-1" />
        <span className="text-xs font-medium">Contacts</span>
      </button>
      <button
        onClick={() => setView('settings')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg ${
          currentView === 'settings' ? 'text-green-600 bg-green-50' : 'text-gray-500'
        }`}
      >
        <Settings className="w-6 h-6 mb-1" />
        <span className="text-xs font-medium">Settings</span>
      </button>
    </div>
  </nav>
);
