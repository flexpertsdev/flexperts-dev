import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/app/AppSidebar";
import { AskFlexiChat } from "@/components/app/AskFlexiChat";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const AuthenticatedAppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAskFlexi, setShowAskFlexi] = useState(false);
  
  // Extract current mode from URL
  const pathParts = location.pathname.split('/');
  const currentMode = pathParts[2] || 'you-build';
  const isAskFlexiRoute = location.pathname.includes('ask-flexi');

  const handleModeSwitch = (mode: string) => {
    navigate(`/app/${mode}`);
    // Close sidebar on mobile after switching
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile sidebar overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <div className={cn(
        "fixed md:relative h-full z-50 transition-transform md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <AppSidebar 
          currentMode={currentMode}
          onModeSwitch={handleModeSwitch}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
          <h1 className="font-semibold">
            {currentMode.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </h1>
          <div className="w-10" /> {/* Spacer for balance */}
        </header>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {isAskFlexiRoute || showAskFlexi ? (
            <AskFlexiChat 
              onBack={() => {
                setShowAskFlexi(false);
                navigate(`/app/${currentMode}`);
              }}
              context={{
                mode: currentMode,
                project: 'ACME Corp',
                feature: 'Authentication',
              }}
            />
          ) : (
            <div className="flex-1 overflow-auto">
              <Outlet context={{ currentMode, setShowAskFlexi }} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};