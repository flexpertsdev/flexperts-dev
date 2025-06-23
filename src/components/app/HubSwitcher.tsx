import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Hub {
  id: string;
  name: string;
  color: string;
  initial: string;
  type: 'personal' | 'team';
  buildMode: 'you-build' | 'we-build' | 'build-together';
  spaceCount: number;
}

export const HubSwitcher = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const currentHub = { id: '1', name: 'ACME Corp', initial: 'A', color: 'bg-green-500' };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Switch Hub</h2>
            <p className="text-sm text-gray-600">Select a project or create a new one</p>
          </div>

          {/* Hub List */}
          <div className="space-y-2">
            <HubItem hub={currentHub} isActive={true} />
            {/* Add more hubs */}
          </div>

          {/* Create New Hub */}
          <Button variant="outline" className="w-full border-dashed">
            <Plus className="w-5 h-5 mr-2" />
            Create New Project
          </Button>

          {/* Mode Switcher */}
          <div className="border-t pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Build Mode</p>
            <div className="grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg">
              <Button size="sm" className="bg-white">You Build</Button>
              <Button size="sm" variant="ghost">We Build</Button>
              <Button size="sm" variant="ghost">Build Together</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const HubItem = ({ hub, isActive }: { hub: Hub; isActive: boolean }) => (
  <Button
    variant={isActive ? "secondary" : "ghost"}
    className="w-full justify-start h-auto p-3"
  >
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mr-3", hub.color)}>
      {hub.initial}
    </div>
    <div className="flex-1 text-left">
      <div className="font-semibold">{hub.name}</div>
      <div className="text-sm text-gray-600">{hub.spaceCount} active spaces</div>
    </div>
    {isActive && <Check className="w-5 h-5 text-green-500" />}
  </Button>
);