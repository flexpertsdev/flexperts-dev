import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Check, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useHub, Hub } from '@/contexts/HubContext';
import { useMode } from '@/contexts/ModeContext';
import { ModeSwitcher } from './ModeSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';

interface HubSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HubSwitcher: React.FC<HubSwitcherProps> = ({ isOpen, onClose }) => {
  const { currentHub, hubs, recentHubs, switchHub, createHub } = useHub();
  const { currentMode } = useMode();
  const isMobile = useIsMobile();

  const handleHubSelect = (hub: Hub) => {
    switchHub(hub.id);
    onClose();
  };

  const handleCreateHub = async () => {
    const name = prompt('Enter hub name:');
    if (name) {
      await createHub(name, currentMode);
      onClose();
    }
  };

  const categorizedHubs = {
    current: currentHub ? [currentHub] : [],
    recent: recentHubs,
    all: hubs.filter(h => h.id !== currentHub?.id && !recentHubs.find(r => r.id === h.id))
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        className={cn(
          isMobile && "h-[85vh] rounded-t-2xl",
          "overflow-y-auto"
        )}
      >
        {isMobile && (
          <div className="flex justify-center pt-1 pb-4">
            <div className="w-12 h-1 bg-gray-300 rounded-full" />
          </div>
        )}
        
        <SheetHeader className="pb-6">
          <SheetTitle>Switch Hub</SheetTitle>
          <SheetDescription>
            Select a project or create a new one
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6">
          {/* Current Hub */}
          {categorizedHubs.current.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Current</p>
              {categorizedHubs.current.map(hub => (
                <HubItem
                  key={hub.id}
                  hub={hub}
                  isSelected={true}
                  onClick={() => {}}
                />
              ))}
            </div>
          )}

          {/* Recent Hubs */}
          {categorizedHubs.recent.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Recent</p>
              <div className="space-y-2">
                {categorizedHubs.recent.map(hub => (
                  <HubItem
                    key={hub.id}
                    hub={hub}
                    isSelected={false}
                    onClick={() => handleHubSelect(hub)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* All Hubs */}
          {categorizedHubs.all.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">All Projects</p>
              <div className="space-y-2">
                {categorizedHubs.all.map(hub => (
                  <HubItem
                    key={hub.id}
                    hub={hub}
                    isSelected={false}
                    onClick={() => handleHubSelect(hub)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Create New Hub */}
          <Button
            variant="outline"
            className="w-full border-dashed justify-center"
            onClick={handleCreateHub}
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Project
          </Button>

          {/* Mode Switcher */}
          <div className="border-t pt-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Build Mode</p>
            <ModeSwitcher variant={isMobile ? "mobile" : "desktop"} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface HubItemProps {
  hub: Hub;
  isSelected: boolean;
  onClick: () => void;
}

const HubItem: React.FC<HubItemProps> = ({ hub, isSelected, onClick }) => {
  const { allModeConfigs } = useMode();
  const modeConfig = allModeConfigs[hub.mode];

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl transition-all flex items-center",
        isSelected
          ? "bg-green-50 border-2 border-green-500"
          : "bg-white hover:bg-gray-50 border border-gray-200"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-3",
        hub.avatarColor
      )}>
        {hub.avatar}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-gray-900">{hub.name}</h3>
        <p className="text-sm text-gray-600">{hub.activeSpaces} active spaces</p>
      </div>
      <div className="flex items-center space-x-2">
        {hub.isPersonal && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            Personal
          </span>
        )}
        <span className={cn(
          "text-xs px-2 py-1 rounded-full",
          modeConfig.bgColor,
          modeConfig.color
        )}>
          {modeConfig.label}
        </span>
        {isSelected && (
          <Check className="w-5 h-5 text-green-500" />
        )}
      </div>
    </button>
  );
};