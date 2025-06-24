import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, MessageSquare, Lightbulb, User, Plus, Search,
  Settings, ChevronDown, ChevronLeft, LogOut, Hash, Star
} from 'lucide-react';
import { HubSwitcher } from './HubSwitcher';
import { ModeSwitcher } from './ModeSwitcher';
import { useHub } from '@/contexts/HubContext';
import { useMode } from '@/contexts/ModeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useSpace } from '@/contexts/SpaceContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Space } from '@/types/space';

interface DesktopSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ collapsed = false, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentHub } = useHub();
  const { modeConfig } = useMode();
  const { user, logout } = useAuth();
  const { spaces, pinnedSpaces } = useSpace();
  const [showHubSwitcher, setShowHubSwitcher] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpaces = spaces.filter(space => 
    space.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = async () => {
    await logout();
  };
  
  return (
    <>
      <aside className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-80"
      )}>
        {/* Hub Selector */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              className={cn(
                "h-auto p-2 hover:bg-gray-50",
                collapsed ? "w-full justify-center" : "flex-1 justify-start"
              )}
              onClick={() => setShowHubSwitcher(true)}
            >
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "rounded-lg flex items-center justify-center text-white font-bold",
                  collapsed ? "w-10 h-10" : "w-10 h-10",
                  currentHub?.avatarColor || 'bg-green-500'
                )}>
                  {currentHub?.avatar || 'A'}
                </div>
                {!collapsed && (
                  <div className="text-left">
                    <div className="font-semibold">{currentHub?.name || 'Select Hub'}</div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span className={cn("w-2 h-2 rounded-full mr-1", modeConfig.bgColor)} />
                      {modeConfig.label}
                    </div>
                  </div>
                )}
              </div>
              {!collapsed && <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />}
            </Button>
            
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className={cn(
                  "transition-all",
                  collapsed && "rotate-180"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Ask Flexi Button */}
        <div className="p-4">
          <Button 
            className={cn(
              "bg-green-500 hover:bg-green-600 text-white",
              collapsed ? "w-full justify-center" : "w-full justify-center space-x-2"
            )}
            onClick={() => navigate('/app/spaces/ask-flexi')}
          >
            <MessageSquare className="w-5 h-5" />
            {!collapsed && <span>Ask Flexi</span>}
          </Button>
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search spaces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4">
            <NavItem to="/app/home" icon={Home} label="Home" collapsed={collapsed} />
            <NavItem to="/app/spaces" icon={MessageSquare} label="Spaces" collapsed={collapsed} />
            <NavItem to="/app/learn" icon={Lightbulb} label="Learn" collapsed={collapsed} />
          </div>

          {/* Spaces List */}
          <ScrollArea className="flex-1 px-4 mt-4">
            {!collapsed && (
              <>
                {/* Pinned Spaces */}
                {pinnedSpaces.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Pinned</div>
                    {pinnedSpaces.map(space => (
                      <SpaceItem key={space.id} space={space} />
                    ))}
                  </div>
                )}

                {/* All Spaces */}
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Spaces</div>
                  {filteredSpaces.map(space => (
                    <SpaceItem key={space.id} space={space} />
                  ))}
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-start mt-2 text-gray-600 hover:text-gray-900"
                    onClick={() => navigate('/app/spaces/new')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Space
                  </Button>
                </div>
              </>
            )}
          </ScrollArea>
        </nav>

        {/* Mode Switcher */}
        <div className="p-4 border-t border-gray-200">
          <ModeSwitcher collapsed={collapsed} />
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <NavItem to="/app/settings" icon={Settings} label="Settings" collapsed={collapsed} />
          <div className={cn(
            "flex items-center mt-4",
            collapsed ? "justify-center" : "justify-between"
          )}>
            <div className={cn(
              "flex items-center",
              collapsed && "flex-col"
            )}>
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              {!collapsed && (
                <div className="ml-3">
                  <div className="font-medium text-sm">{user?.name || 'User'}</div>
                  <div className="text-xs text-gray-500">{user?.email}</div>
                </div>
              )}
            </div>
            {!collapsed && (
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </aside>
      
      <HubSwitcher 
        isOpen={showHubSwitcher} 
        onClose={() => setShowHubSwitcher(false)} 
      />
    </>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  collapsed?: boolean;
}

const NavItem = ({ to, icon: Icon, label, collapsed = false }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-2 rounded-lg transition-colors mb-1 relative group",
        isActive 
          ? "bg-green-50 text-green-600" 
          : "text-gray-700 hover:bg-gray-100",
        collapsed && "justify-center"
      )}
    >
      <Icon className={cn("w-5 h-5", !collapsed && "mr-3")} />
      {!collapsed && <span className="font-medium">{label}</span>}
      
      {collapsed && (
        <div className="absolute left-full ml-2 hidden group-hover:block z-50">
          <div className="bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
            {label}
          </div>
        </div>
      )}
    </Link>
  );
};

const SpaceItem = ({ space }: { space: Space }) => {
  const location = useLocation();
  const isActive = location.pathname === `/app/spaces/${space.id}`;
  const Icon = space.isPinned ? Star : Hash;
  
  return (
    <Link
      to={`/app/spaces/${space.id}`}
      className={cn(
        "flex items-center px-3 py-2 rounded-lg transition-colors mb-1",
        isActive 
          ? "bg-green-50 text-green-600" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon className={cn(
        "w-4 h-4 mr-2 flex-shrink-0",
        space.isPinned && "text-yellow-500"
      )} />
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{space.name}</div>
      </div>
      {space.unreadCount > 0 && (
        <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">
          {space.unreadCount}
        </span>
      )}
    </Link>
  );
};