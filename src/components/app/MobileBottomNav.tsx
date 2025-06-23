import { Link, useLocation } from 'react-router-dom';
import { Home, Archive, Lightbulb, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const MobileBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/app/home', icon: Home, label: 'Home' },
    { path: '/app/spaces', icon: Archive, label: 'Spaces' },
    { path: '/app/learn', icon: Lightbulb, label: 'Learn' },
    { path: '/app/profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="bg-white border-t border-gray-200 safe-bottom">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 min-h-touch touch-manipulation",
                isActive ? "text-green-600" : "text-gray-400"
              )}
            >
              <Icon className="w-6 h-6" fill={isActive ? "currentColor" : "none"} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};