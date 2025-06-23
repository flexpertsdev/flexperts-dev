# Self-Executing Build Plan: Authenticated App Pages

## Overview
This document provides a step-by-step, executable plan to build the core authenticated pages for Flexperts, implementing both mobile and desktop viewports based on the design system and mockups.

## Prerequisites Check
- [ ] React 18 with TypeScript
- [ ] Tailwind CSS with mobile-first config
- [ ] React Router v6
- [ ] shadcn/ui components
- [ ] Design system implemented
- [ ] Authentication system ready

## Phase 1: Core Layout Components (Day 1)

### 1.1 Create Mobile Layout Component
```bash
# Create mobile layout component
touch src/layouts/MobileAuthLayout.tsx
```

```typescript
// src/layouts/MobileAuthLayout.tsx
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
```

### 1.2 Create Desktop Layout Component
```bash
# Create desktop layout component
touch src/layouts/DesktopAuthLayout.tsx
```

```typescript
// src/layouts/DesktopAuthLayout.tsx
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
```

### 1.3 Create Responsive Auth Layout Wrapper
```bash
# Create responsive wrapper
touch src/layouts/ResponsiveAuthLayout.tsx
```

```typescript
// src/layouts/ResponsiveAuthLayout.tsx
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
```

## Phase 2: Navigation Components (Day 1)

### 2.1 Mobile Bottom Navigation
```bash
touch src/components/app/MobileBottomNav.tsx
```

```typescript
// src/components/app/MobileBottomNav.tsx
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
```

### 2.2 Mobile Header
```bash
touch src/components/app/MobileHeader.tsx
```

```typescript
// src/components/app/MobileHeader.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { HubSwitcher } from './HubSwitcher';

export const MobileHeader = () => {
  const [showHubSwitcher, setShowHubSwitcher] = useState(false);
  
  return (
    <>
      <header className="bg-white border-b border-gray-200 safe-top">
        <div className="flex items-center justify-between p-4">
          {/* Hub Selector */}
          <Button
            variant="ghost"
            className="flex items-center space-x-3 p-2 h-auto"
            onClick={() => setShowHubSwitcher(true)}
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">ACME Corp</div>
              <div className="text-xs text-gray-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                You Build
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </Button>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="w-6 h-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hub Switcher Modal */}
      <HubSwitcher 
        isOpen={showHubSwitcher} 
        onClose={() => setShowHubSwitcher(false)} 
      />
    </>
  );
};
```

### 2.3 Desktop Sidebar
```bash
touch src/components/app/DesktopSidebar.tsx
```

```typescript
// src/components/app/DesktopSidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, Archive, Lightbulb, User, Plus, Search,
  MessageSquare, Settings, ChevronDown 
} from 'lucide-react';

export const DesktopSidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Hub Selector */}
      <div className="p-4 border-b border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-between h-auto p-3 hover:bg-gray-50"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-left">
              <div className="font-semibold">ACME Corp</div>
              <div className="text-xs text-gray-500">You Build</div>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      {/* Ask Flexi Button */}
      <div className="p-4">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white justify-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>Ask Flexi</span>
        </Button>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search spaces..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <NavItem href="/app/home" icon={Home} label="Home" />
        <NavItem href="/app/spaces" icon={Archive} label="Spaces" />
        <NavItem href="/app/learn" icon={Lightbulb} label="Learn" />
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <NavItem href="/app/settings" icon={Settings} label="Settings" />
        <NavItem href="/app/profile" icon={User} label="Profile" />
      </div>
    </aside>
  );
};

const NavItem = ({ href, icon: Icon, label }: any) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-1",
        isActive 
          ? "bg-green-50 text-green-600" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};
```

## Phase 3: Core Pages (Day 2)

### 3.1 Home Page
```bash
touch src/pages/app/HomePage.tsx
```

```typescript
// src/pages/app/HomePage.tsx
import { Button } from '@/components/ui/button';
import { SpaceCard } from '@/components/app/SpaceCard';
import { Plus, MessageSquare } from 'lucide-react';

export const HomePage = () => {
  const recentSpaces = [
    {
      id: '1',
      name: 'Authentication System',
      lastMessage: 'Implemented OAuth2 with Google and GitHub providers. Added 2FA support...',
      timestamp: '2h ago',
      messageCount: 24,
      status: 'active'
    },
    {
      id: '2',
      name: 'Landing Page Redesign',
      lastMessage: 'Created new hero section with glassmorphism effects. Updated color scheme to match brand...',
      timestamp: '1d ago',
      messageCount: 18,
      status: 'completed'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      {/* Welcome Section */}
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Welcome back, Sarah!
        </h1>
        <p className="text-gray-600">Let's build something amazing today</p>
      </div>

      {/* Quick Actions - Mobile */}
      <div className="p-4 pt-0 md:hidden">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl space-x-3">
          <MessageSquare className="w-6 h-6" />
          <span className="text-lg">Ask Flexi</span>
        </Button>
      </div>

      {/* Recent Spaces */}
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Spaces</h2>
          <Button variant="link" className="text-green-600">
            View all
          </Button>
        </div>
        
        <div className="space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
          {recentSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
          
          {/* Create New Space */}
          <Button
            variant="outline"
            className="w-full h-full min-h-[120px] border-2 border-dashed hover:bg-gray-50"
          >
            <div className="flex flex-col items-center space-y-2">
              <Plus className="w-8 h-8 text-gray-400" />
              <span className="font-medium text-gray-600">Create New Space</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Projects Built" value="12" />
          <StatCard label="Time Saved" value="48h" />
          <StatCard label="Spaces Created" value="156" />
          <StatCard label="AI Interactions" value="1.2k" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100">
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);
```

### 3.2 Spaces List Page
```bash
touch src/pages/app/SpacesPage.tsx
```

```typescript
// src/pages/app/SpacesPage.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SpaceListItem } from '@/components/app/SpaceListItem';
import { Search, Plus } from 'lucide-react';

export const SpacesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="p-4 md:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Spaces</h1>
          <p className="text-gray-600 text-sm">Your AI-powered workspaces</p>
        </div>
        
        {/* Search Bar */}
        <div className="px-4 md:px-6 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search spaces..."
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-6 px-4 md:px-6 border-b border-gray-200">
          {['all', 'active', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-3 px-1 border-b-2 font-medium capitalize",
                activeTab === tab
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Spaces List */}
      <div className="flex-1 overflow-y-auto">
        <SpacesList filter={activeTab} />
      </div>

      {/* Mobile FAB */}
      <div className="fixed bottom-20 right-4 md:hidden">
        <Button 
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
```

### 3.3 Chat Space Page
```bash
touch src/pages/app/ChatSpacePage.tsx
```

```typescript
// src/pages/app/ChatSpacePage.tsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatHeader } from '@/components/app/ChatHeader';
import { ChatMessages } from '@/components/app/ChatMessages';
import { ChatInput } from '@/components/app/ChatInput';

export const ChatSpacePage = () => {
  const { spaceId } = useParams();
  const [messages, setMessages] = useState([]);
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
      <ChatHeader spaceId={spaceId} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={(message) => setMessages([...messages, message])} />
    </div>
  );
};
```

## Phase 4: Shared Components (Day 3)

### 4.1 Space Card Component
```bash
touch src/components/app/SpaceCard.tsx
```

```typescript
// src/components/app/SpaceCard.tsx
import { Link } from 'react-router-dom';
import { MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SpaceCardProps {
  space: {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
    messageCount: number;
    status: 'active' | 'completed' | 'archived';
  };
}

export const SpaceCard = ({ space }: SpaceCardProps) => {
  const statusColors = {
    active: 'bg-green-100 text-green-700',
    completed: 'bg-blue-100 text-blue-700',
    archived: 'bg-gray-100 text-gray-700'
  };

  return (
    <Link 
      to={`/app/spaces/${space.id}`}
      className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 flex-1 line-clamp-1">
          {space.name}
        </h3>
        <span className="text-xs text-gray-500">{space.timestamp}</span>
      </div>
      
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {space.lastMessage}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xs text-gray-500 flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            {space.messageCount} messages
          </span>
        </div>
        <Badge className={cn('text-xs', statusColors[space.status])}>
          {space.status}
        </Badge>
      </div>
    </Link>
  );
};
```

### 4.2 Hub Switcher Modal
```bash
touch src/components/app/HubSwitcher.tsx
```

```typescript
// src/components/app/HubSwitcher.tsx
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Hub {
  id: string;
  name: string;
  color: string;
  initial: string;
  type: 'personal' | 'team';
  buildMode: 'you-build' | 'we-build' | 'build-together';
  spaceCount: number;
}

export const HubSwitcher = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const currentHub = { id: '1', name: 'ACME Corp', initial: 'A', color: 'bg-green-500' };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Switch Hub</h2>
            <p className="text-sm text-gray-600">Select a project or create a new one</p>
          </div>

          {/* Hub List */}
          <div className="space-y-2">
            <HubItem hub={currentHub} isActive={true} />
            {/* Add more hubs */}
          </div>

          {/* Create New Hub */}
          <Button variant="outline" className="w-full border-dashed">
            <Plus className="w-5 h-5 mr-2" />
            Create New Project
          </Button>

          {/* Mode Switcher */}
          <div className="border-t pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Build Mode</p>
            <div className="grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg">
              <Button size="sm" className="bg-white">You Build</Button>
              <Button size="sm" variant="ghost">We Build</Button>
              <Button size="sm" variant="ghost">Build Together</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const HubItem = ({ hub, isActive }: { hub: Hub; isActive: boolean }) => (
  <Button
    variant={isActive ? "secondary" : "ghost"}
    className="w-full justify-start h-auto p-3"
  >
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mr-3", hub.color)}>
      {hub.initial}
    </div>
    <div className="flex-1 text-left">
      <div className="font-semibold">{hub.name}</div>
      <div className="text-sm text-gray-600">{hub.spaceCount} active spaces</div>
    </div>
    {isActive && <Check className="w-5 h-5 text-green-500" />}
  </Button>
);
```

## Phase 5: Update Routes (Day 3)

### 5.1 Update App.tsx
```typescript
// src/App.tsx - Add these routes
import { ResponsiveAuthLayout } from './layouts/ResponsiveAuthLayout';
import { HomePage } from './pages/app/HomePage';
import { SpacesPage } from './pages/app/SpacesPage';
import { ChatSpacePage } from './pages/app/ChatSpacePage';
import { ProfilePage } from './pages/app/ProfilePage';

// In your routes
<Route path="/app" element={<ResponsiveAuthLayout />}>
  <Route index element={<Navigate to="/app/home" />} />
  <Route path="home" element={<HomePage />} />
  <Route path="spaces" element={<SpacesPage />} />
  <Route path="spaces/:spaceId" element={<ChatSpacePage />} />
  <Route path="learn" element={<LearnPage />} />
  <Route path="profile" element={<ProfilePage />} />
  <Route path="settings" element={<SettingsPage />} />
</Route>
```

## Phase 6: Mobile Optimizations (Day 4)

### 6.1 Add Touch Gestures
```bash
npm install react-swipeable
```

```typescript
// src/components/app/SwipeableSpaceItem.tsx
import { useSwipeable } from 'react-swipeable';

export const SwipeableSpaceItem = ({ space, onArchive, onDelete }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onArchive(space.id),
    onSwipedRight: () => onDelete(space.id),
    trackMouse: true
  });

  return (
    <div {...handlers} className="relative">
      <SpaceListItem space={space} />
    </div>
  );
};
```

### 6.2 Add Bottom Sheet
```typescript
// src/components/ui/bottom-sheet.tsx
import { motion, AnimatePresence } from 'framer-motion';

export const BottomSheet = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 safe-bottom"
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-2" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
```

## Phase 7: Testing & Polish (Day 5)

### 7.1 Responsive Testing Checklist
- [ ] Test on iPhone SE (375px)
- [ ] Test on iPhone 14 Pro (390px)
- [ ] Test on iPad (768px)
- [ ] Test on Desktop (1024px+)
- [ ] Test landscape orientation
- [ ] Test with keyboard open
- [ ] Test safe area padding

### 7.2 Performance Optimizations
```typescript
// Lazy load pages
const HomePage = lazy(() => import('./pages/app/HomePage'));
const SpacesPage = lazy(() => import('./pages/app/SpacesPage'));

// Add loading states
<Suspense fallback={<PageLoader />}>
  <Outlet />
</Suspense>
```

### 7.3 Accessibility Checklist
- [ ] All touch targets ≥ 44px
- [ ] Proper ARIA labels
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast passes WCAG AA

## Execution Commands

```bash
# Day 1: Setup
npm run dev
# Create all layout components
# Create navigation components

# Day 2: Core Pages
# Create all page components
# Test responsive layouts

# Day 3: Components & Routes
# Create shared components
# Update routing
# Test navigation flow

# Day 4: Mobile Features
npm install react-swipeable framer-motion
# Add touch gestures
# Add mobile-specific features

# Day 5: Testing
# Run through all checklists
# Fix any issues
# Deploy to staging
```

## Success Criteria
1. ✅ All pages render correctly on mobile and desktop
2. ✅ Navigation works seamlessly across viewports
3. ✅ Touch gestures feel native on mobile
4. ✅ Performance scores > 90 on Lighthouse
5. ✅ Accessibility audit passes
6. ✅ User can complete core flows on any device

This self-executing plan provides a systematic approach to building the authenticated app with proper responsive design for both mobile and desktop viewports.