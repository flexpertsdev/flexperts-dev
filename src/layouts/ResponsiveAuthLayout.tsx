import { Outlet } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/app/MobileBottomNav';
import { MobileHeader } from '@/components/app/MobileHeader';
import { DesktopSidebar } from '@/components/app/DesktopSidebar';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export const ResponsiveAuthLayout = () => {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ProtectedRoute>
      {isMobile ? (
        <div className="flex flex-col h-screen bg-gray-50">
          <MobileHeader />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
          <MobileBottomNav />
        </div>
      ) : (
        <div className="flex h-screen bg-gray-50">
          <DesktopSidebar 
            collapsed={sidebarCollapsed} 
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
          />
          <main className={cn(
            "flex-1 overflow-y-auto transition-all duration-300",
            sidebarCollapsed ? "ml-20" : "ml-80"
          )}>
            <Outlet />
          </main>
        </div>
      )}
    </ProtectedRoute>
  );
};