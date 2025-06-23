import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Hash,
  Lock,
  MessageSquare,
  Plus,
  Search,
  Settings,
  LogOut,
  User,
} from "lucide-react";

interface Space {
  id: string;
  name: string;
  type: "channel" | "private" | "dm";
  unread?: number;
  lastMessage?: string;
  lastTime?: string;
  isActive?: boolean;
}

interface Hub {
  id: string;
  name: string;
  members: number;
  initial: string;
  color: string;
}

interface AppSidebarProps {
  onModeSwitch: (mode: string) => void;
  currentMode: string;
}

export const AppSidebar = ({ onModeSwitch, currentMode }: AppSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const currentHub: Hub = {
    id: "1",
    name: "Tech Innovators",
    members: 12,
    initial: "T",
    color: "bg-green-500",
  };

  const spaces: Space[] = [
    {
      id: "1",
      name: "general",
      type: "channel",
      unread: 3,
      lastMessage: "Sarah: Thanks for the help!",
      lastTime: "2:34 PM",
      isActive: true,
    },
    {
      id: "2",
      name: "dev-team",
      type: "channel",
      lastMessage: "John: Pushed the latest changes",
      lastTime: "1:15 PM",
    },
    {
      id: "3",
      name: "private-discussion",
      type: "private",
      lastMessage: "You: Let's schedule a call",
      lastTime: "Yesterday",
    },
    {
      id: "4",
      name: "design-feedback",
      type: "channel",
      lastMessage: "Emma: Love the new mockups!",
      lastTime: "Monday",
    },
  ];

  const filteredSpaces = spaces.filter(space => 
    space.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        {/* Hub Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full p-3 hover:bg-gray-50 h-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-3",
                    currentHub.color
                  )}>
                    {currentHub.initial}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{currentHub.name}</div>
                    <div className="text-sm text-gray-500">{currentHub.members} members</div>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72">
            <DropdownMenuItem>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  T
                </div>
                <span>Tech Innovators</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <span>Personal Workspace</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus className="w-4 h-4 mr-2" />
              Create New Hub
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Ask Flexi Button */}
        <Button 
          onClick={() => navigate(`/app/${currentMode}/ask-flexi`)}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 mt-4"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Ask Flexi
        </Button>

        {/* Search */}
        <div className="mt-3 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          <Input
            type="text"
            placeholder="Search spaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-green-200"
          />
        </div>
      </div>

      {/* Spaces List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredSpaces.map((space) => (
            <div
              key={space.id}
              className={cn(
                "mb-1 p-3 rounded-lg cursor-pointer transition-colors",
                space.isActive ? "bg-green-50" : "hover:bg-gray-50"
              )}
              onClick={() => navigate(`/app/${currentMode}/space/${space.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  {space.type === "channel" ? (
                    <Hash className={cn(
                      "w-4 h-4 mr-2",
                      space.isActive ? "text-green-600" : "text-gray-400"
                    )} />
                  ) : space.type === "private" ? (
                    <Lock className={cn(
                      "w-4 h-4 mr-2",
                      space.isActive ? "text-green-600" : "text-gray-400"
                    )} />
                  ) : (
                    <User className={cn(
                      "w-4 h-4 mr-2",
                      space.isActive ? "text-green-600" : "text-gray-400"
                    )} />
                  )}
                  <div className="flex-1">
                    <div className={cn(
                      "font-medium",
                      space.isActive && "text-green-700"
                    )}>
                      {space.name}
                    </div>
                    {space.lastMessage && (
                      <div className="text-sm text-gray-600 truncate">
                        {space.lastMessage}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {space.lastTime && (
                    <div className="text-xs text-gray-500">{space.lastTime}</div>
                  )}
                  {space.unread && (
                    <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-1 ml-auto">
                      {space.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Space Button */}
          <button className="w-full mt-2 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors">
            <div className="flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Create New Space
            </div>
          </button>
        </div>
      </ScrollArea>

      {/* User Menu */}
      <div className="border-t border-gray-200 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-between hover:bg-gray-50 p-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div className="text-left">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500">john@example.com</div>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600"
              onClick={() => navigate("/login")}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mode Switcher */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button 
            onClick={() => onModeSwitch('you-build')}
            className={cn(
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all",
              currentMode === 'you-build' 
                ? "bg-white text-green-600 shadow-sm" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            You Build
          </button>
          <button 
            onClick={() => onModeSwitch('we-build')}
            className={cn(
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all",
              currentMode === 'we-build' 
                ? "bg-white text-green-600 shadow-sm" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            We Build
          </button>
          <button 
            onClick={() => onModeSwitch('build-together')}
            className={cn(
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all",
              currentMode === 'build-together' 
                ? "bg-white text-green-600 shadow-sm" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Build Together
          </button>
        </div>
      </div>
    </aside>
  );
};