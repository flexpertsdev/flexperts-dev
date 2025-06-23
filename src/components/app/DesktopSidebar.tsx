import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, Archive, Lightbulb, User, Plus, Search,
  MessageSquare, Settings, ChevronDown 
} from 'lucide-react';

export const DesktopSidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Hub Selector */}
      <div className="p-4 border-b border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-between h-auto p-3 hover:bg-gray-50"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-left">
              <div className="font-semibold">ACME Corp</div>
              <div className="text-xs text-gray-500">You Build</div>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      {/* Ask Flexi Button */}
      <div className="p-4">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white justify-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>Ask Flexi</span>
        </Button>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search spaces..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <NavItem href="/app/home" icon={Home} label="Home" />
        <NavItem href="/app/spaces" icon={Archive} label="Spaces" />
        <NavItem href="/app/learn" icon={Lightbulb} label="Learn" />
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <NavItem href="/app/settings" icon={Settings} label="Settings" />
        <NavItem href="/app/profile" icon={User} label="Profile" />
      </div>
    </aside>
  );
};

const NavItem = ({ href, icon: Icon, label }: any) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-1",
        isActive 
          ? "bg-green-50 text-green-600" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};