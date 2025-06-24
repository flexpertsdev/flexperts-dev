import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Lightbulb, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const MobileBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/app/home', icon: Home, label: 'Home' },
    { path: '/app/spaces', icon: MessageSquare, label: 'Spaces' },
    { path: '/app/learn', icon: Lightbulb, label: 'Learn' },
    { path: '/app/profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="bg-white border-t border-gray-200" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 min-w-[64px] transition-colors",
                isActive ? "text-green-600" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <Icon className={cn(
                "w-6 h-6 transition-all",
                isActive && "scale-110"
              )} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};