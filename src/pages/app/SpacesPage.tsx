import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SpaceCard } from '@/components/app/SpaceCard';
import { Search, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SpacesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const spaces = [
    {
      id: '1',
      name: 'Authentication System',
      lastMessage: 'Implemented OAuth2 with Google and GitHub providers. Added 2FA support...',
      timestamp: '2h ago',
      messageCount: 24,
      status: 'active' as const
    },
    {
      id: '2',
      name: 'Landing Page Redesign',
      lastMessage: 'Created new hero section with glassmorphism effects. Updated color scheme to match brand...',
      timestamp: '1d ago',
      messageCount: 18,
      status: 'completed' as const
    },
    {
      id: '3',
      name: 'API Documentation',
      lastMessage: 'Generated OpenAPI spec for all endpoints. Added authentication examples...',
      timestamp: '3d ago',
      messageCount: 45,
      status: 'archived' as const
    }
  ];

  const filteredSpaces = spaces.filter(space => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return space.status === 'active';
    if (activeTab === 'archived') return space.status === 'archived';
    return true;
  });
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="p-4 md:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Spaces</h1>
          <p className="text-gray-600 text-sm">Your AI-powered workspaces</p>
        </div>
        
        {/* Search Bar */}
        <div className="px-4 md:px-6 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search spaces..."
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-6 px-4 md:px-6 border-b border-gray-200">
          {['all', 'active', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-3 px-1 border-b-2 font-medium capitalize",
                activeTab === tab
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Spaces List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
          {filteredSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>

      {/* Mobile FAB */}
      <div className="fixed bottom-20 right-4 md:hidden">
        <Button 
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};