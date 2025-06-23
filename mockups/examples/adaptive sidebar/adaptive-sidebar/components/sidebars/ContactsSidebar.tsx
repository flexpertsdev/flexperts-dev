
import React from 'react';
import { Search, Filter, Trash2, UserPlus, Edit } from 'lucide-react';
import { mockContacts } from '../../data/mockContacts';
import { ContactAvatar } from '../common/ContactAvatar';
import { ViewType } from '../../types';

interface ContactsSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedContacts: string[];
  setShowConfirmDialog: (show: boolean) => void;
  setView: (view: ViewType, params?: Record<string, string>) => void;
  handleContactSelect: (contactId: string) => void;
}

export const ContactsSidebar: React.FC<ContactsSidebarProps> = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  selectedContacts,
  setShowConfirmDialog,
  setView,
  handleContactSelect,
}) => {
  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="p-4 border-b border-gray-200 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center py-1 px-3 text-sm rounded-lg transition-colors ${
              showFilters ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Filter className="w-4 h-4 mr-1" />
            Filters
          </button>
          {selectedContacts.length > 0 && (
            <button
              onClick={() => setShowConfirmDialog(true)}
              className="flex items-center py-1 px-3 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete ({selectedContacts.length})
            </button>
          )}
        </div>
        {showFilters && (
          <div className="bg-gray-50 p-3 rounded-lg space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Online only</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Favorites</span>
            </label>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedContacts.includes(contact.id)}
                onChange={() => handleContactSelect(contact.id)}
                className="w-4 h-4 text-green-600"
              />
              <ContactAvatar name={contact.name} online={contact.online} />
              <div 
                className="flex-1 min-w-0 cursor-pointer"
                onClick={() => setView('contact-detail', { contact: contact.id })}
              >
                <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                <p className="text-sm text-gray-600 truncate">{contact.email}</p>
              </div>
              <button
                onClick={() => setView('edit-contact', { contact: contact.id })}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={() => setView('add-contact')}
          className="w-full flex items-center justify-center py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Add New Contact
        </button>
      </div>
    </>
  );
};
