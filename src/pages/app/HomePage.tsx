import { Button } from '@/components/ui/button';
import { SpaceCard } from '@/components/app/SpaceCard';
import { Plus, MessageSquare } from 'lucide-react';

export const HomePage = () => {
  const recentSpaces = [
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
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      {/* Welcome Section */}
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Welcome back, Sarah!
        </h1>
        <p className="text-gray-600">Let's build something amazing today</p>
      </div>

      {/* Quick Actions - Mobile */}
      <div className="p-4 pt-0 md:hidden">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl space-x-3">
          <MessageSquare className="w-6 h-6" />
          <span className="text-lg">Ask Flexi</span>
        </Button>
      </div>

      {/* Recent Spaces */}
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Spaces</h2>
          <Button variant="link" className="text-green-600">
            View all
          </Button>
        </div>
        
        <div className="space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
          {recentSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
          
          {/* Create New Space */}
          <Button
            variant="outline"
            className="w-full h-full min-h-[120px] border-2 border-dashed hover:bg-gray-50"
          >
            <div className="flex flex-col items-center space-y-2">
              <Plus className="w-8 h-8 text-gray-400" />
              <span className="font-medium text-gray-600">Create New Space</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Projects Built" value="12" />
          <StatCard label="Time Saved" value="48h" />
          <StatCard label="Spaces Created" value="156" />
          <StatCard label="AI Interactions" value="1.2k" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100">
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);