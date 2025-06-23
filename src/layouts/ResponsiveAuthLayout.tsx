import { Outlet } from 'react-router-dom';
import { MobileAuthLayout } from './MobileAuthLayout';
import { DesktopAuthLayout } from './DesktopAuthLayout';

export const ResponsiveAuthLayout = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileAuthLayout />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <DesktopAuthLayout />
      </div>
    </>
  );
};