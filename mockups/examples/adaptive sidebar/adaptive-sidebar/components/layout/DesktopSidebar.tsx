
import React from 'react';
import { ChatSidebar } from '../sidebars/ChatSidebar';
import { ContactsSidebar } from '../sidebars/ContactsSidebar';
import { SettingsSidebar } from '../sidebars/SettingsSidebar';
import { ContactDetailSidebar } from '../sidebars/ContactDetailSidebar';
import { ViewType } from '../../types';

interface DesktopSidebarProps {
  currentView: ViewType;
  selectedChat: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedContacts: string[];
  setSelectedContacts: (contacts: string[]) => void;
  showConfirmDialog: boolean;
  setShowConfirmDialog: (show: boolean) => void;
  setView: (view: ViewType, params?: Record<string, string>) => void;
  handleContactSelect: (contactId: string) => void;
  searchParams: URLSearchParams;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = (props) => {
  const { currentView } = props;

  const getSidebarTitle = () => {
    switch (currentView) {
      case 'chat': return 'Messages';
      case 'contacts': return 'Contacts';
      case 'settings': return 'Settings';
      case 'contact-detail': return 'Contact Details';
      case 'add-contact': return 'Add Contact';
      case 'edit-contact': return 'Edit Contact';
      default: return 'Messages';
    }
  };

  return (
    <aside className="hidden md:flex md:w-80 bg-white border-r border-gray-200 flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">{getSidebarTitle()}</h1>
      </div>
      
      {currentView === 'chat' && <ChatSidebar {...props} />}
      {currentView === 'contacts' && <ContactsSidebar {...props} />}
      {currentView === 'settings' && <SettingsSidebar {...props} />}
      {(currentView === 'contact-detail' || currentView === 'add-contact' || currentView === 'edit-contact') && 
        <ContactDetailSidebar {...props} />}
    </aside>
  );
};
