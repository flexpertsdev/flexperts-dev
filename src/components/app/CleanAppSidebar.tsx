import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";

interface Space {
  id: string;
  name: string;
  type: "channel" | "private";
  lastMessage?: string;
  lastTime?: string;
  unread?: number;
  isActive?: boolean;
}

interface Hub {
  id: string;
  name: string;
  subtitle: string;
  initial: string;
  color: string;
}

interface CleanAppSidebarProps {
  onModeSwitch: (mode: string) => void;
  currentMode: string;
}

export const CleanAppSidebar = ({ onModeSwitch, currentMode }: CleanAppSidebarProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const currentHub: Hub = {
    id: "1",
    name: "Tech Innovators",
    subtitle: "12 members",
    initial: "T",
    color: "bg-green-500",
  };

  const spaces: Space[] = [
    {
      id: "1",
      name: "general",
      type: "channel",
      lastMessage: "Sarah: Thanks for the help!",
      lastTime: "2:34 PM",
      unread: 3,
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
      {/* Hub Selector - Big and prominent */}
      <div className="p-4 border-b border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full p-3 bg-gray-50 hover:bg-gray-100 h-auto rounded-lg min-h-touch touch-manipulation"
            >
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
                    <div className="text-sm text-gray-500">{currentHub.subtitle}</div>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[296px]">
            <DropdownMenuItem className="p-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  T
                </div>
                <div>
                  <div className="font-medium">Tech Innovators</div>
                  <div className="text-sm text-gray-500">We Build • Client Project</div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <div className="font-medium">Personal Workspace</div>
                  <div className="text-sm text-gray-500">You Build • Personal</div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-3">
              <Plus className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-gray-700">Create New Hub</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Ask Flexi Button - Big and visually standout */}
        <Button 
          onClick={() => navigate(`/app/${currentMode}/ask-flexi`)}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg mt-4 transition-all min-h-touch touch-manipulation"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Ask Flexi
        </Button>

        {/* Search - Simple and clean */}
        <div className="mt-3 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search spaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-green-200 transition-all h-touch touch-manipulation"
          />
        </div>
      </div>

      {/* Spaces List - WhatsApp style */}
      <ScrollArea className="flex-1 hide-scrollbar">
        <div className="p-2">
          {filteredSpaces.map((space) => (
            <div
              key={space.id}
              className={cn(
                "mb-1 p-3 rounded-lg cursor-pointer transition-colors touch-manipulation",
                space.isActive ? "bg-green-50" : "hover:bg-gray-50"
              )}
              onClick={() => navigate(`/app/${currentMode}/space/${space.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1 min-w-0">
                  <span className={cn(
                    "mr-2 flex-shrink-0",
                    space.isActive ? "text-green-600" : "text-gray-400"
                  )}>
                    {space.type === "private" ? <Lock className="w-4 h-4" /> : "#"}
                  </span>
                  <div className="flex-1 min-w-0">
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
                <div className="flex flex-col items-end ml-2">
                  {space.lastTime && (
                    <div className="text-xs text-gray-500">{space.lastTime}</div>
                  )}
                  {space.unread && (
                    <div className="bg-green-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 mt-1">
                      {space.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Space Button - Inline and simple */}
          <button className="w-full mt-2 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors min-h-touch touch-manipulation">
            <div className="flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Create New Space
            </div>
          </button>
        </div>
      </ScrollArea>

      {/* Mode Switcher - Clean at bottom */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button 
            onClick={() => onModeSwitch('you-build')}
            className={cn(
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all min-h-touch touch-manipulation",
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
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all min-h-touch touch-manipulation",
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
              "flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all min-h-touch touch-manipulation",
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