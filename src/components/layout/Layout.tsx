
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
