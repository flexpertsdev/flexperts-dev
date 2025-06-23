import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { HubSwitcher } from './HubSwitcher';

export const MobileHeader = () => {
  const [showHubSwitcher, setShowHubSwitcher] = useState(false);
  
  return (
    <>
      <header className="bg-white border-b border-gray-200 safe-top">
        <div className="flex items-center justify-between p-4">
          {/* Hub Selector */}
          <Button
            variant="ghost"
            className="flex items-center space-x-3 p-2 h-auto"
            onClick={() => setShowHubSwitcher(true)}
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">ACME Corp</div>
              <div className="text-xs text-gray-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                You Build
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </Button>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="w-6 h-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hub Switcher Modal */}
      <HubSwitcher 
        isOpen={showHubSwitcher} 
        onClose={() => setShowHubSwitcher(false)} 
      />
    </>
  );
};