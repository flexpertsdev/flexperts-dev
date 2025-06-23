
import React from 'react';
import { X, Search, Settings, Trash2 } from 'lucide-react';

interface MobileChatMenuProps {
  show: boolean;
  onClose: () => void;
}

export const MobileChatMenu: React.FC<MobileChatMenuProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Chat Options</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-4 space-y-3">
          <button className="w-full flex items-center py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Search className="w-5 h-5 mr-3" />
            Search in Chat
          </button>
          <button className="w-full flex items-center py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings className="w-5 h-5 mr-3" />
            Chat Settings
          </button>
          <button className="w-full flex items-center py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg">
            <Trash2 className="w-5 h-5 mr-3" />
            Delete Chat
          </button>
        </div>
      </div>
    </div>
  );
};
