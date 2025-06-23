import { Link } from 'react-router-dom';
import { MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SpaceCardProps {
  space: {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
    messageCount: number;
    status: 'active' | 'completed' | 'archived';
  };
}

export const SpaceCard = ({ space }: SpaceCardProps) => {
  const statusColors = {
    active: 'bg-green-100 text-green-700',
    completed: 'bg-blue-100 text-blue-700',
    archived: 'bg-gray-100 text-gray-700'
  };

  return (
    <Link 
      to={`/app/spaces/${space.id}`}
      className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 flex-1 line-clamp-1">
          {space.name}
        </h3>
        <span className="text-xs text-gray-500">{space.timestamp}</span>
      </div>
      
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {space.lastMessage}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xs text-gray-500 flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            {space.messageCount} messages
          </span>
        </div>
        <Badge className={cn('text-xs', statusColors[space.status])}>
          {space.status}
        </Badge>
      </div>
    </Link>
  );
};