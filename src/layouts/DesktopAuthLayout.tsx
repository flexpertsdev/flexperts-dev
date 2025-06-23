import { Outlet } from 'react-router-dom';
import { DesktopSidebar } from '@/components/app/DesktopSidebar';

export const DesktopAuthLayout = () => {
  return (
    <div className="hidden md:flex h-dvh bg-gray-50">
      <DesktopSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};