
import React from 'react';
import { X, MessageCircle, Phone, Video } from 'lucide-react';
import { ContactAvatar } from '../common/ContactAvatar';
import { Chat } from '../../types';

interface MobileContactInfoProps {
  show: boolean;
  onClose: () => void;
  contact?: Chat;
}

export const MobileContactInfo: React.FC<MobileContactInfoProps> = ({ show, onClose, contact }) => {
  if (!show || !contact) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-center mb-6">
            <ContactAvatar name={contact.name} online={contact.online} size="xl" />
            <h2 className="text-xl font-bold text-gray-900 mt-3">{contact.name}</h2>
            <p className="text-green-500">Online</p>
          </div>
          <div className="space-y-4">
            <button className="w-full flex items-center py-3 px-4 bg-green-500 text-white rounded-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center py-3 px-4 bg-blue-500 text-white rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call
              </button>
              <button className="flex items-center justify-center py-3 px-4 bg-purple-500 text-white rounded-lg">
                <Video className="w-5 h-5 mr-2" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
