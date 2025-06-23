
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockSettingsSections } from '../../data/mockSettings';

interface SettingsViewProps {
  searchParams: URLSearchParams;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ searchParams }) => {
  const currentSection = searchParams.get('section') || 'profile';

  return (
    <div className="flex-1 flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 text-white px-4 py-3 flex items-center">
        <Link to="/demos" className="p-2 -ml-2 mr-2 rounded-full hover:bg-green-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Settings</h1>
      </header>

      {/* Mobile Settings List */}
      <div className="md:hidden flex-1 overflow-y-auto p-4 pb-20">
        <div className="space-y-3">
          {mockSettingsSections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <section.icon className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">{section.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Settings Content */}
      <div className="hidden md:block flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto">
          {currentSection === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status Message</label>
                    <input
                      type="text"
                      defaultValue="Available"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentSection === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Notification Settings</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Push Notifications</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Email Notifications</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Sound</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentSection === 'privacy' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Privacy & Security</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Show Online Status</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Read Receipts</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">Two-Factor Authentication</span>
                    <input type="checkbox" className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentSection === 'appearance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
