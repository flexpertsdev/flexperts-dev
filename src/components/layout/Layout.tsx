
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="h-dvh flex flex-col bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <Navigation />
      <main className="flex-1 overflow-y-auto pt-20">
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;
