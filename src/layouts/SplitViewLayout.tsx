import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CleanAppSidebar } from "@/components/app/CleanAppSidebar";
import { AIChatSidebar } from "@/components/app/AIChatSidebar";
import { Button } from "@/components/ui/button";
import { Menu, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface SplitViewLayoutProps {
  showAIChat?: boolean;
}

export const SplitViewLayout = ({ showAIChat = true }: SplitViewLayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(showAIChat);
  
  // Extract current mode from URL
  const pathParts = location.pathname.split('/');
  const currentMode = pathParts[2] || 'you-build';

  const handleModeSwitch = (mode: string) => {
    window.location.href = `/app/${mode}`;
  };

  return (
    <div className="flex h-dvh overflow-hidden bg-gray-50">
      {/* Mobile sidebar overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Left Sidebar - Spaces - CSS-driven responsive */}
      <div className={cn(
        "fixed md:relative h-full z-50 transition-transform md:transition-none md:translate-x-0 w-64 flex-shrink-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <CleanAppSidebar 
          currentMode={currentMode}
          onModeSwitch={handleModeSwitch}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Visual Flow Designer</h1>
              <p className="text-sm text-gray-500">Authentication Flow • ACME Corp</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {!isAIChatOpen && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAIChatOpen(true)}
                className="hidden md:flex"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Ask Flexi
              </Button>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <Outlet context={{ 
            currentMode,
            isAIChatOpen,
            setIsAIChatOpen
          }} />
        </div>
      </main>

      {/* Right Sidebar - AI Chat (Desktop only) - CSS-driven responsive */}
      {isAIChatOpen && (
        <div className="hidden md:block w-96 flex-shrink-0">
          <AIChatSidebar 
            onClose={() => setIsAIChatOpen(false)}
            context={{
              mode: currentMode,
              project: 'ACME Corp',
              feature: 'Authentication Flow',
              currentFile: 'login-flow.json'
            }}
          />
        </div>
      )}
    </div>
  );
};