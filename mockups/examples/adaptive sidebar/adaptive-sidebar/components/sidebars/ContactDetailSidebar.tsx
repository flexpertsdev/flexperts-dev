
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ViewType } from '../../types';

interface ContactDetailSidebarProps {
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const ContactDetailSidebar: React.FC<ContactDetailSidebarProps> = ({ setView }) => (
  <div className="p-4">
    <button 
      onClick={() => setView('contacts')}
      className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Contacts
    </button>
  </div>
);
