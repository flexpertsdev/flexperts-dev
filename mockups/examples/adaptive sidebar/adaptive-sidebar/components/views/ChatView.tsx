
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Video, MoreVertical, MessageCircle } from 'lucide-react';
import { mockChats } from '../../data/mockChats';
import { mockMessages } from '../../data/mockMessages';
import { ContactAvatar } from '../common/ContactAvatar';
import { MobileContactInfo } from '../modals/MobileContactInfo';
import { MobileChatMenu } from '../modals/MobileChatMenu';

interface ChatViewProps {
  selectedChat: string;
  showMobileContactInfo: boolean;
  setShowMobileContactInfo: (show: boolean) => void;
  showMobileChatMenu: boolean;
  setShowMobileChatMenu: (show: boolean) => void;
}

export const ChatView: React.FC<ChatViewProps> = ({
  selectedChat,
  showMobileContactInfo,
  setShowMobileContactInfo,
  showMobileChatMenu,
  setShowMobileChatMenu,
}) => {
  const currentContact = mockChats.find(chat => chat.id === selectedChat);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/demos" className="p-2 -ml-2 mr-2 rounded-full hover:bg-green-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <button 
            onClick={() => setShowMobileContactInfo(true)}
            className="flex items-center hover:bg-green-700 rounded-lg p-1 -ml-1"
          >
            <h1 className="text-lg font-semibold">{currentContact?.name || 'Chat'}</h1>
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-green-700">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-green-700">
            <Video className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowMobileChatMenu(true)}
            className="p-2 rounded-full hover:bg-green-700"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:flex bg-white border-b border-gray-200 px-6 py-4 items-center justify-between">
        <div className="flex items-center space-x-3">
          <ContactAvatar name="Alice Johnson" online={true} />
          <div>
            <h2 className="font-semibold text-gray-900">Alice Johnson</h2>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ paddingBottom: selectedChat ? '100px' : '90px' }}>
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'me'
                  ? 'bg-green-500 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'me' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4 fixed bottom-0 left-0 right-0 md:relative z-30">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
            Send
          </button>
        </div>
      </div>

      <MobileContactInfo 
        show={showMobileContactInfo}
        onClose={() => setShowMobileContactInfo(false)}
        contact={currentContact}
      />

      <MobileChatMenu 
        show={showMobileChatMenu}
        onClose={() => setShowMobileChatMenu(false)}
      />
    </>
  );
};
