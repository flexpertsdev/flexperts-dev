import { Outlet } from 'react-router-dom';
import { MobileBottomNav } from '@/components/app/MobileBottomNav';
import { MobileHeader } from '@/components/app/MobileHeader';

export const MobileAuthLayout = () => {
  return (
    <div className="h-dvh flex flex-col bg-gray-50 md:hidden">
      <MobileHeader />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
};