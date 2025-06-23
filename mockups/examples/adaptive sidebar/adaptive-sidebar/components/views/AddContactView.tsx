
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ViewType } from '../../types';

interface AddContactViewProps {
  setView: (view: ViewType, params?: Record<string, string>) => void;
}

export const AddContactView: React.FC<AddContactViewProps> = ({ setView }) => (
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
        <h1 className="text-lg font-semibold">Add Contact</h1>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="favorite"
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="favorite" className="ml-2 text-sm text-gray-700">
              Add to favorites
            </label>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={() => setView('contacts')}
              className="flex-1 py-2 px-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
