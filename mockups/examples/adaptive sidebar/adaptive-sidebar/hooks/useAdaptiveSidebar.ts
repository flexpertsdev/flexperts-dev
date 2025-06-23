
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ViewType } from '../types';

export const useAdaptiveSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = (searchParams.get('view') as ViewType) || 'chat';
  const selectedChat = searchParams.get('chat') || '1';
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showMobileContactInfo, setShowMobileContactInfo] = useState(false);
  const [showMobileChatMenu, setShowMobileChatMenu] = useState(false);

  const setView = (view: ViewType, params: Record<string, string> = {}) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('view', view);
    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, value);
    });
    setSearchParams(newParams);
  };

  const navigateBack = () => {
    switch (currentView) {
      case 'contact-detail':
        setView('contacts');
        break;
      case 'add-contact':
        setView('contacts');
        break;
      case 'edit-contact':
        setView('contact-detail', { contact: searchParams.get('contact') || '1' });
        break;
      default:
        setView('chat');
        break;
    }
  };

  const handleContactSelect = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  return {
    currentView,
    selectedChat,
    searchQuery,
    setSearchQuery,
    showFilters,
    setShowFilters,
    selectedContacts,
    setSelectedContacts,
    showConfirmDialog,
    setShowConfirmDialog,
    showMobileContactInfo,
    setShowMobileContactInfo,
    showMobileChatMenu,
    setShowMobileChatMenu,
    setView,
    navigateBack,
    handleContactSelect,
    searchParams,
  };
};
