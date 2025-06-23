
import React from 'react';
import { ArrowLeft, Edit, Mail, Phone, Video, Calendar, MessageCircle } from 'lucide-react';
import { mockContacts } from '../../data/mockContacts';
import { ContactAvatar } from '../common/ContactAvatar';
import { ViewType } from '../../types';

interface ContactDetailViewProps {
  searchParams: URLSearchParams;
  setView: (view: ViewType, params?: Record<string, string>) => void;
  setShowConfirmDialog: (show: boolean) => void;
}

export const ContactDetailView: React.FC<ContactDetailViewProps> = ({
  searchParams,
  setView,
  setShowConfirmDialog,
}) => {
  const contactId = searchParams.get('contact');
  const contact = mockContacts.find(c => c.id === contactId);
  
  if (!contact) return <div>Contact not found</div>;

  return (
    <div className="flex-1 flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => setView('contacts')}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-green-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">{contact.name}</h1>
        </div>
        <button 
          onClick={() => setView('edit-contact', { contact: contact.id })}
          className="p-2 rounded-full hover:bg-green-700"
        >
          <Edit className="w-5 h-5" />
        </button>
      </header>

      {/* Contact Details */}
      <div className="flex-1 overflow-y-auto p-6 pb-20 md:pb-6">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <ContactAvatar name={contact.name} online={contact.online} size="xl" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-4">{contact.name}</h2>
            <p className="text-green-500">{contact.online ? 'Online' : 'Offline'}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Contact Information</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <p className="text-gray-900">{contact.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900">{contact.email}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button className="flex items-center justify-center py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              <Video className="w-5 h-5 mr-2" />
              Video Call
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => setView('edit-contact', { contact: contact.id })}
              className="flex items-center py-2 px-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Contact
            </button>
            <button 
              onClick={() => setShowConfirmDialog(true)}
              className="flex items-center py-2 px-4 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Delete Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
