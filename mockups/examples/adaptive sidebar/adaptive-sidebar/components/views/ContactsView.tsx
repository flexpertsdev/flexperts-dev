
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserPlus, Search, Users } from 'lucide-react';
import { mockContacts } from '../../data/mockContacts';
import { ContactAvatar } from '../common/ContactAvatar';
import { ViewType } from '../../types';

interface ContactsViewProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const ContactsView: React.FC<ContactsViewProps> = ({
  searchQuery,
  setSearchQuery,
  setView,
}) => {
  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/demos" className="p-2 -ml-2 mr-2 rounded-full hover:bg-green-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-semibold">Contacts</h1>
        </div>
        <button 
          onClick={() => setView('add-contact')}
          className="p-2 rounded-full hover:bg-green-700"
        >
          <UserPlus className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Content */}
      <div className="md:hidden flex-1 overflow-y-auto p-4 pb-20">
        <div className="mb-4">
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
        </div>
        
        <div className="space-y-3">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setView('contact-detail', { contact: contact.id })}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <ContactAvatar name={contact.name} online={contact.online} size="lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div className="text-center text-gray-500">
          <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">Select a contact</h3>
          <p>Choose a contact from the sidebar to view details</p>
        </div>
      </div>
    </div>
  );
};
