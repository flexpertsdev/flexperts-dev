import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CleanAppSidebar } from "@/components/app/CleanAppSidebar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const CleanAuthenticatedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Extract current mode from URL
  const pathParts = location.pathname.split('/');
  const currentMode = pathParts[2] || 'you-build';

  const handleModeSwitch = (mode: string) => {
    navigate(`/app/${mode}`);
    // Close sidebar on mobile after switching
    setIsSidebarOpen(false);
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
      
      {/* Sidebar - CSS-driven responsive behavior */}
      <div className={cn(
        "fixed md:relative h-full z-50 transition-transform md:transition-none md:translate-x-0 w-64 flex-shrink-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <CleanAppSidebar 
          currentMode={currentMode}
          onModeSwitch={handleModeSwitch}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header - Clean and simple */}
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 pt-[calc(0.75rem+env(safe-area-inset-top))] flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
            className="hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <h1 className="font-semibold">
            {currentMode.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            className={cn(
              "hover:bg-gray-100",
              !isSidebarOpen && "invisible"
            )}
          >
            <X className="w-6 h-6" />
          </Button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          <Outlet context={{ currentMode }} />
        </div>
      </main>
    </div>
  );
};