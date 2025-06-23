
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { mockSettingsSections } from '../../data/mockSettings';
import { ViewType } from '../../types';

interface SettingsSidebarProps {
  setView: (view: ViewType, params?: Record<string, string>) => void;
  searchParams: URLSearchParams;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ setView, searchParams }) => (
  <>
    <div className="flex-1 overflow-y-auto">
      {mockSettingsSections.map((section) => (
        <div
          key={section.id}
          onClick={() => setView('settings', { section: section.id })}
          className={`p-4 cursor-pointer transition-colors border-b border-gray-100 hover:bg-gray-50 ${
            searchParams.get('section') === section.id ? 'bg-green-50 border-r-2 border-r-green-500' : ''
          }`}
        >
          <div className="flex items-center space-x-3">
            <section.icon className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">{section.name}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="p-4 border-t border-gray-200">
      <button 
        onClick={() => setView('chat')}
        className="w-full flex items-center justify-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Back to Messages
      </button>
    </div>
  </>
);
