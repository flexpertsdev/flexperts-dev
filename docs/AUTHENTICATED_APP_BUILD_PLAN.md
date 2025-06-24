# Flexperts Authenticated App - Comprehensive Build Plan

## Overview
This document outlines the comprehensive build plan for implementing the authenticated user experience across mobile and desktop platforms for Flexperts.dev. The application supports three distinct modes: **You Build** (AI-powered solo development), **We Build** (expert marketplace), and **Build Together** (team collaboration).

## 🎯 Core Features & Modes

### Mode System with Icons
- **You Build** 🤖 - AI-powered individual development workspace
- **We Build** 👤 - Expert marketplace for hiring professionals
- **Build Together** 👥 - Team collaboration environment

## 📱 Mobile Architecture

### Core Mobile Components

#### 1. **Bottom Navigation** (`/components/app/MobileBottomNav.tsx`)
```tsx
interface NavItem {
  id: 'home' | 'spaces' | 'learn' | 'profile';
  icon: React.ComponentType;
  label: string;
}
```
- Persistent bottom navigation with 4 main sections
- Active state indicators
- Safe area handling for iOS devices

#### 2. **Hub Switcher Modal** (`/components/app/HubSwitcher.tsx`)
```tsx
interface Hub {
  id: string;
  name: string;
  avatar: string;
  memberCount: number;
  activeSpaces: number;
  mode: 'you-build' | 'we-build' | 'build-together';
  isPersonal?: boolean;
}
```
- Bottom sheet modal with drag-to-dismiss
- Hub categorization (Current, Recent, All)
- Integrated mode switcher
- Create new project option

#### 3. **Space List View** (`/pages/app/SpacesPage.tsx`)
```tsx
interface Space {
  id: string;
  name: string;
  lastMessage: string;
  lastActivity: Date;
  messageCount: number;
  attachmentCount?: number;
  status: 'active' | 'review' | 'completed' | 'archived';
  isPinned?: boolean;
  mode?: 'you-build' | 'we-build' | 'build-together';
  collaborators?: User[];
}
```
- Search and filter functionality
- Pinned spaces section
- Activity indicators
- Swipe actions for quick operations

#### 4. **Chat Interface** (`/pages/app/ChatSpacePage.tsx`)
```tsx
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai' | 'expert';
  timestamp: Date;
  attachments?: Attachment[];
  status: 'sending' | 'sent' | 'delivered' | 'read';
}
```
- Real-time messaging
- File attachments support
- Code snippet rendering
- Quick action suggestions
- Typing indicators

## 🖥️ Desktop Architecture

### Core Desktop Components

#### 1. **Sidebar Navigation** (`/components/app/DesktopSidebar.tsx`)
```tsx
interface SidebarConfig {
  isCollapsed: boolean;
  width: number;
  sections: {
    hub: HubSection;
    spaces: SpaceSection;
    apps: AppSection;
    user: UserSection;
  };
}
```
- Collapsible sidebar (80px collapsed, 320px expanded)
- Hub selector with search
- Space list with real-time updates
- Integrated mode switcher
- User profile section

#### 2. **Split Panel Layout** (`/layouts/SplitViewLayout.tsx`)
- Resizable panels
- Responsive breakpoints
- Focus mode support
- Multi-pane layouts for different modes

#### 3. **Mode-Specific Dashboards**
- **You Build**: AI tools, code generation, visual planning
- **We Build**: Expert profiles, project proposals, hiring workflow
- **Build Together**: Team spaces, shared resources, real-time collaboration

## 🔄 State Management

### Context Providers

#### 1. **AuthContext** (`/contexts/AuthContext.tsx`)
```tsx
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
}
```

#### 2. **HubContext** (`/contexts/HubContext.tsx`)
```tsx
interface HubState {
  currentHub: Hub | null;
  hubs: Hub[];
  switchHub: (hubId: string) => Promise<void>;
  createHub: (hub: Partial<Hub>) => Promise<Hub>;
  updateHub: (hubId: string, updates: Partial<Hub>) => Promise<void>;
}
```

#### 3. **ModeContext** (`/contexts/ModeContext.tsx`)
```tsx
interface ModeState {
  currentMode: AppMode;
  switchMode: (mode: AppMode) => void;
  modeFeatures: ModeFeatures;
}
```

#### 4. **SpaceContext** (`/contexts/SpaceContext.tsx`)
```tsx
interface SpaceState {
  currentSpace: Space | null;
  spaces: Space[];
  messages: Message[];
  sendMessage: (content: string, attachments?: File[]) => Promise<void>;
  switchSpace: (spaceId: string) => Promise<void>;
}
```

## 🛣️ Routing Structure

### Authenticated Routes (`/src/routes/authenticated.tsx`)
```
/app
├── /home                    # Mode-specific dashboard
├── /spaces                  # Space list view
├── /spaces/:id             # Individual space/chat
├── /learn                  # Learning resources
├── /profile                # User profile
├── /settings               # App settings
└── /hub/:id               # Hub management
```

### Mode-Specific Routes
```
/app/you-build
├── /assistant              # AI chat interface
├── /projects               # Project management
├── /tools                  # Development tools
└── /playground             # Code playground

/app/we-build
├── /experts                # Expert directory
├── /proposals              # Project proposals
├── /contracts              # Active contracts
└── /payments               # Payment management

/app/build-together
├── /team                   # Team management
├── /shared                 # Shared resources
├── /meetings               # Video/voice calls
└── /activity               # Team activity feed
```

## 🎨 UI/UX Specifications

### Design Tokens
```css
/* Colors */
--primary: #22C55E;
--primary-hover: #16A34A;
--mode-you-build: #3B82F6;
--mode-we-build: #8B5CF6;
--mode-build-together: #F59E0B;

/* Spacing */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;

/* Typography */
--font-primary: 'Quicksand', sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

### Responsive Breakpoints
```tsx
const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
};
```

## 📦 Component Library Structure

```
/src/components
├── /app                    # App-specific components
│   ├── /mobile            # Mobile-only components
│   ├── /desktop           # Desktop-only components
│   └── /shared            # Shared components
├── /chat                  # Chat-related components
├── /spaces                # Space management components
├── /hub                   # Hub-related components
└── /mode                  # Mode-specific components
    ├── /you-build
    ├── /we-build
    └── /build-together
```

## 🚀 Implementation Phases

### Phase 1: Core Infrastructure (Week 1-2)
- [ ] Authentication system
- [ ] Context providers setup
- [ ] Routing configuration
- [ ] Base layouts (mobile/desktop)

### Phase 2: Navigation & Mode Switching (Week 3)
- [ ] Bottom navigation (mobile)
- [ ] Sidebar navigation (desktop)
- [ ] Hub switcher component
- [ ] Mode switcher with icons

### Phase 3: Space Management (Week 4)
- [ ] Space list views
- [ ] Space creation flow
- [ ] Search and filtering
- [ ] Space settings

### Phase 4: Chat Interface (Week 5)
- [ ] Message components
- [ ] Real-time updates
- [ ] File attachments
- [ ] Code snippet rendering

### Phase 5: Mode-Specific Features (Week 6-7)
- [ ] You Build dashboard
- [ ] We Build marketplace
- [ ] Build Together collaboration
- [ ] Mode-specific tools

### Phase 6: Polish & Optimization (Week 8)
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Error handling
- [ ] Testing & QA

## 🔧 Technical Requirements

### Dependencies
- React 18+
- TypeScript
- Tailwind CSS
- Tanstack Query
- React Router v6
- Socket.io (real-time)
- Zustand (state management)

### API Integration
- RESTful API for CRUD operations
- WebSocket for real-time features
- File upload/download support
- Authentication tokens

### Performance Targets
- Initial load: < 3s
- Route transitions: < 100ms
- Chat message send: < 500ms
- Search results: < 1s

## 📝 Next Steps

1. **Review and approve build plan**
2. **Set up development environment**
3. **Create component library**
4. **Implement Phase 1 infrastructure**
5. **Begin iterative development**

This build plan provides a comprehensive roadmap for implementing the authenticated Flexperts application with full support for mobile and desktop experiences across all three modes.