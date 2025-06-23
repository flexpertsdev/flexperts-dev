
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAdaptiveSidebar } from './hooks/useAdaptiveSidebar';
import { MobileNavigation } from './components/layout/MobileNavigation';
import { DesktopSidebar } from './components/layout/DesktopSidebar';
import { ChatView } from './components/views/ChatView';
import { ContactsView } from './components/views/ContactsView';
import { ContactDetailView } from './components/views/ContactDetailView';
import { AddContactView } from './components/views/AddContactView';
import { EditContactView } from './components/views/EditContactView';
import { SettingsView } from './components/views/SettingsView';
import { ConfirmDialog } from './components/modals/ConfirmDialog';

const AdaptiveSidebarDemo: React.FC = () => {
  const sidebarProps = useAdaptiveSidebar();
  const { currentView } = sidebarProps;

  const renderMainContent = () => {
    switch (currentView) {
      case 'chat':
        return <ChatView {...sidebarProps} />;
      case 'contacts':
        return <ContactsView {...sidebarProps} />;
      case 'contact-detail':
        return <ContactDetailView {...sidebarProps} />;
      case 'add-contact':
        return <AddContactView {...sidebarProps} />;
      case 'edit-contact':
        return <EditContactView {...sidebarProps} />;
      case 'settings':
        return <SettingsView {...sidebarProps} />;
      default:
        return <ChatView {...sidebarProps} />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <MobileNavigation {...sidebarProps} />
      <DesktopSidebar {...sidebarProps} />
      
      <main className="flex-1 flex flex-col">
        {renderMainContent()}
      </main>

      <ConfirmDialog {...sidebarProps} />
    </div>
  );
};

export default AdaptiveSidebarDemo;
