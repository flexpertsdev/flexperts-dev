import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  MessageSquare,
  Users,
  Building2,
  Settings,
  Search,
  Plus,
  LogOut,
  ChevronDown,
  Sparkles,
  Hash,
  Lock,
  Globe,
} from "lucide-react";

interface Hub {
  id: string;
  name: string;
  avatar?: string;
  spaces: Space[];
}

interface Space {
  id: string;
  name: string;
  type: "public" | "private";
  unreadCount?: number;
  lastMessage?: string;
  lastMessageTime?: string;
}

const AuthenticatedLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mock data - in real app, this would come from API
  const [currentHub, setCurrentHub] = useState<Hub>({
    id: "1",
    name: "Flexperts Hub",
    avatar: "/placeholder.svg",
    spaces: [
      {
        id: "1",
        name: "general",
        type: "public",
        unreadCount: 3,
        lastMessage: "Hey everyone! Check out the new feature...",
        lastMessageTime: "2m",
      },
      {
        id: "2",
        name: "random",
        type: "public",
        lastMessage: "Anyone up for a virtual coffee break?",
        lastMessageTime: "15m",
      },
      {
        id: "3",
        name: "project-alpha",
        type: "private",
        unreadCount: 12,
        lastMessage: "The new designs look great!",
        lastMessageTime: "1h",
      },
    ],
  });

  const [hubs] = useState<Hub[]>([
    currentHub,
    {
      id: "2",
      name: "Personal Workspace",
      avatar: "/placeholder.svg",
      spaces: [],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpace, setSelectedSpace] = useState<string | null>("1");

  // App modes
  const appModes = [
    { id: "you-build", name: "You Build", icon: Home, path: "/app/you-build" },
    { id: "we-build", name: "We Build", icon: Users, path: "/app/we-build" },
    { id: "build-together", name: "Build Together", icon: Building2, path: "/app/build-together" },
  ];

  const currentMode = location.pathname.split("/")[2] || "you-build";

  const handleSpaceClick = (spaceId: string) => {
    setSelectedSpace(spaceId);
    navigate(`/app/${currentMode}/hub/${currentHub.id}/space/${spaceId}`);
  };

  const handleHubChange = (hubId: string) => {
    const hub = hubs.find(h => h.id === hubId);
    if (hub) {
      setCurrentHub(hub);
      setSelectedSpace(hub.spaces[0]?.id || null);
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="border-b px-4 py-3">
            {/* Hub Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-2 h-auto py-2"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentHub.avatar} />
                      <AvatarFallback>{currentHub.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="text-sm font-semibold">{currentHub.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {currentHub.spaces.length} spaces
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px]">
                <DropdownMenuLabel>Switch Hub</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {hubs.map((hub) => (
                  <DropdownMenuItem
                    key={hub.id}
                    onClick={() => handleHubChange(hub.id)}
                    className="cursor-pointer"
                  >
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={hub.avatar} />
                      <AvatarFallback>{hub.name[0]}</AvatarFallback>
                    </Avatar>
                    {hub.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Hub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <div className="relative mt-3">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search spaces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-8 bg-muted/50"
              />
            </div>
          </SidebarHeader>

          <SidebarContent>
            {/* Ask Flexi - Always Available */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => navigate(`/app/${currentMode}/ask-flexi`)}
                      className="bg-primary/10 hover:bg-primary/20 text-primary"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span className="font-semibold">Ask Flexi</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Spaces */}
            <SidebarGroup>
              <SidebarGroupLabel>Spaces</SidebarGroupLabel>
              <SidebarGroupContent>
                <ScrollArea className="h-[calc(100vh-350px)]">
                  <SidebarMenu>
                    {currentHub.spaces
                      .filter((space) =>
                        space.name.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((space) => (
                        <SidebarMenuItem key={space.id}>
                          <SidebarMenuButton
                            onClick={() => handleSpaceClick(space.id)}
                            isActive={selectedSpace === space.id}
                          >
                            <div className="flex items-center gap-2 flex-1">
                              {space.type === "public" ? (
                                <Hash className="h-4 w-4 opacity-50" />
                              ) : (
                                <Lock className="h-4 w-4 opacity-50" />
                              )}
                              <span>{space.name}</span>
                            </div>
                            {space.unreadCount && (
                              <SidebarMenuBadge>
                                {space.unreadCount}
                              </SidebarMenuBadge>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </SidebarMenu>
                </ScrollArea>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t">
            {/* App Mode Switcher */}
            <SidebarGroup>
              <SidebarGroupLabel>Switch Mode</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {appModes.map((mode) => (
                    <SidebarMenuItem key={mode.id}>
                      <SidebarMenuButton
                        onClick={() => navigate(mode.path)}
                        isActive={currentMode === mode.id}
                        size="sm"
                      >
                        <mode.icon className="h-4 w-4" />
                        <span>{mode.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* User Menu */}
            <div className="p-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start px-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">John Doe</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Globe className="h-4 w-4 mr-2" />
                    Language
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          <div className="flex h-full flex-col">
            {/* Header */}
            <header className="flex h-14 items-center gap-4 border-b px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-lg font-semibold">
                  {currentMode.split("-").map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(" ")}
                </h1>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AuthenticatedLayout;