
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { mockContacts } from '../../data/mockContacts';
import { ViewType } from '../../types';

interface EditContactViewProps {
  searchParams: URLSearchParams;
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const EditContactView: React.FC<EditContactViewProps> = ({ searchParams, setView }) => {
  const contactId = searchParams.get('contact');
  const contact = mockContacts.find(c => c.id === contactId);
  
  if (!contact) return <div>Contact not found</div>;

  return (
    <div className="flex-1 flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => setView('contact-detail', { contact: contact.id })}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-green-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Edit Contact</h1>
        </div>
        <button className="text-white font-medium">Save</button>
      </header>

      {/* Form */}
      <div className="flex-1 overflow-y-auto p-6 pb-20 md:pb-6">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={contact.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue={contact.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue={contact.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="favorite"
                defaultChecked={contact.favorite}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="favorite" className="ml-2 text-sm text-gray-700">
                Add to favorites
              </label>
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="button"
                onClick={() => setView('contact-detail', { contact: contact.id })}
                className="flex-1 py-2 px-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
