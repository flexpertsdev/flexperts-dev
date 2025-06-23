# Flexperts Development Build Plan

## 🎯 Project Architecture Overview

This document outlines the comprehensive build plan for transforming Flexperts into a production-ready application with proper state management, authentication, and a scalable architecture.

## 📦 Tech Stack Implementation Plan

### Core Technologies
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Local Storage**: Dexie.js (IndexedDB wrapper)
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **Form Management**: React Hook Form + Zod
- **Routing**: React Router v6

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── sections/              # Reusable page sections
│   ├── layout/                # Layout components
│   ├── forms/                 # Form components
│   └── feedback/              # Toasts, modals, sheets
├── features/
│   ├── auth/                  # Authentication feature
│   ├── dashboard/             # Dashboard feature
│   ├── projects/              # Projects feature
│   └── billing/               # Billing feature
├── hooks/                     # Custom React hooks
├── lib/
│   ├── api/                   # API service layer
│   ├── db/                    # Dexie/IndexedDB setup
│   ├── firebase/              # Firebase configuration
│   ├── queries/               # React Query queries
│   └── utils/                 # Utility functions
├── stores/                    # Zustand stores
├── types/                     # TypeScript type definitions
├── styles/                    # Global styles
└── config/                    # App configuration
```

## 📋 Implementation Phases

### Phase 1: Foundation Setup (Week 1)

#### 1.1 Install Core Dependencies
```json
{
  "dependencies": {
    "zustand": "^4.5.0",
    "dexie": "^4.0.0",
    "dexie-react-hooks": "^1.1.7",
    "firebase": "^10.8.0",
    "@tanstack/react-query": "^5.56.2",
    "@tanstack/react-query-devtools": "^5.56.2",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0"
  }
}
```

#### 1.2 Setup Type Definitions
```typescript
// src/types/index.ts
export * from './user.types';
export * from './project.types';
export * from './api.types';
export * from './db.types';

// src/types/user.types.ts
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'user' | 'admin' | 'flexfluencer';
  subscription?: Subscription;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'canceled' | 'past_due';
  expiresAt?: Date;
}

// src/types/project.types.ts
export interface Project {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: 'ai-tool' | 'website' | 'custom';
  status: 'draft' | 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}
```

#### 1.3 Setup Firebase Configuration
```typescript
// src/lib/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  // Your config
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
```

#### 1.4 Setup Dexie Database
```typescript
// src/lib/db/database.ts
import Dexie, { type Table } from 'dexie';
import { User, Project } from '@/types';

export class FlexpertsDB extends Dexie {
  users!: Table<User>;
  projects!: Table<Project>;
  cache!: Table<{ key: string; value: any; expiresAt?: Date }>;

  constructor() {
    super('FlexpertsDB');
    this.version(1).stores({
      users: 'id, email',
      projects: 'id, userId, status, createdAt',
      cache: 'key, expiresAt'
    });
  }
}

export const db = new FlexpertsDB();
```

### Phase 2: State Management Architecture (Week 1-2)

#### 2.1 Setup Zustand Stores
```typescript
// src/stores/authStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLoading: false,
        error: null,
        setUser: (user) => set({ user }),
        setLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        reset: () => set({ user: null, isLoading: false, error: null }),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({ user: state.user }),
      }
    )
  )
);

// src/stores/uiStore.ts
interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: 'system',
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'ui-storage',
    }
  )
);
```

#### 2.2 Setup API Service Layer
```typescript
// src/lib/api/base.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  meta?: {
    timestamp: number;
    cached?: boolean;
  };
}

// src/lib/api/services/auth.service.ts
import { auth } from '@/lib/firebase/config';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const authService = {
  async signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  },
  
  async signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  },
  
  async signOut() {
    return signOut(auth);
  },
  
  onAuthStateChanged(callback: (user: any) => void) {
    return onAuthStateChanged(auth, callback);
  }
};

// src/lib/api/services/projects.service.ts
import { db } from '@/lib/firebase/config';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Project } from '@/types';

export const projectsService = {
  async getProjects(userId: string): Promise<Project[]> {
    const q = query(collection(db, 'projects'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
  },
  
  async getProject(id: string): Promise<Project | null> {
    const docRef = doc(db, 'projects', id);
    const snapshot = await getDoc(docRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Project : null;
  }
};
```

#### 2.3 Setup React Query Integration
```typescript
// src/lib/queries/keys.ts
export const queryKeys = {
  auth: {
    user: ['auth', 'user'] as const,
    session: ['auth', 'session'] as const,
  },
  projects: {
    all: ['projects'] as const,
    list: (filters?: any) => [...queryKeys.projects.all, 'list', filters] as const,
    detail: (id: string) => [...queryKeys.projects.all, 'detail', id] as const,
  },
} as const;

// src/lib/queries/auth.queries.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '@/lib/api/services/auth.service';
import { queryKeys } from './keys';

export const useSignIn = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.signIn(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.user });
    },
  });
};

// src/lib/queries/projects.queries.ts
export const useProjects = (userId: string) => {
  return useQuery({
    queryKey: queryKeys.projects.list({ userId }),
    queryFn: () => projectsService.getProjects(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

### Phase 3: Design System & Component Library (Week 2)

#### 3.1 Create Component Structure
```typescript
// src/components/sections/HeroSection.tsx
interface HeroSectionProps {
  title: React.ReactNode;
  titleAccent?: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

export const HeroSection = ({ 
  title, 
  titleAccent, 
  subtitle, 
  children,
  className 
}: HeroSectionProps) => {
  return (
    <section className={cn("py-24 px-4", className)}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
          {title}
          {titleAccent && (
            <span className="text-gradient block">{titleAccent}</span>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

// src/components/ui/pricing-card.tsx
interface PricingCardProps {
  title: string;
  price: string | number;
  priceLabel?: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
  highlighted?: boolean;
  className?: string;
}

export const PricingCard = ({
  title,
  price,
  priceLabel,
  features,
  buttonText,
  onButtonClick,
  highlighted = false,
  className
}: PricingCardProps) => {
  return (
    <Card className={cn(
      "glass-card border-0",
      highlighted && "ring-2 ring-primary-500",
      className
    )}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-3xl font-bold text-primary-600">
          {typeof price === 'number' ? `$${price}` : price}
        </div>
        {priceLabel && (
          <p className="text-sm text-neutral-500">{priceLabel}</p>
        )}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
        <Button 
          className="w-full bg-primary-500 hover:bg-primary-600 text-white"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
```

#### 3.2 Form System
```typescript
// src/components/forms/FormField.tsx
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField = ({ label, error, required, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

// src/components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="First Name" error={errors.firstName?.message} required>
          <Input {...register('firstName')} />
        </FormField>
        <FormField label="Last Name" error={errors.lastName?.message} required>
          <Input {...register('lastName')} />
        </FormField>
      </div>
      {/* More fields */}
    </form>
  );
};
```

### Phase 4: Navigation & Routing Architecture (Week 2-3)

#### 4.1 Dynamic Navigation System
```typescript
// src/config/navigation.ts
export interface NavItem {
  title: string;
  href?: string;
  icon?: React.ComponentType;
  badge?: string;
  children?: NavItem[];
  requiredRole?: string[];
  hideWhenAuth?: boolean;
  showWhenAuth?: boolean;
}

export const publicNavigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'You Build', href: '/you-build' },
  { title: 'We Build', href: '/we-build' },
  { title: 'Build Together', href: '/build-together' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export const authNavigation: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { title: 'Projects', href: '/projects', icon: FolderIcon },
  { title: 'AI Tools', href: '/ai-tools', icon: SparklesIcon },
  { title: 'Settings', href: '/settings', icon: SettingsIcon },
];

// src/components/layout/DynamicNavigation.tsx
export const DynamicNavigation = () => {
  const { user } = useAuthStore();
  const navigation = user ? authNavigation : publicNavigation;
  
  return (
    <nav className="flex items-center space-x-6">
      {navigation.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
};
```

#### 4.2 Protected Routes
```typescript
// src/components/auth/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string[];
  redirectTo?: string;
}

export const ProtectedRoute = ({ 
  children, 
  requiredRole,
  redirectTo = '/login' 
}: ProtectedRouteProps) => {
  const { user, isLoading } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !user) {
      navigate(redirectTo);
    }
    
    if (user && requiredRole && !requiredRole.includes(user.role)) {
      navigate('/unauthorized');
    }
  }, [user, isLoading, requiredRole, navigate, redirectTo]);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return user ? <>{children}</> : null;
};

// src/App.tsx - Updated routing
<Routes>
  {/* Public routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  
  {/* Protected routes */}
  <Route path="/dashboard" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } />
  
  {/* Admin routes */}
  <Route path="/admin/*" element={
    <ProtectedRoute requiredRole={['admin']}>
      <AdminLayout />
    </ProtectedRoute>
  } />
</Routes>
```

### Phase 5: Authentication System (Week 3)

#### 5.1 Auth Provider
```typescript
// src/providers/AuthProvider.tsx
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setLoading } = useAuthStore();
  const queryClient = useQueryClient();
  
  useEffect(() => {
    setLoading(true);
    
    const unsubscribe = authService.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch additional user data from Firestore
        const userData = await userService.getUser(firebaseUser.uid);
        setUser(userData);
        
        // Sync with IndexedDB
        await db.users.put(userData);
      } else {
        setUser(null);
        await db.users.clear();
      }
      
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [setUser, setLoading]);
  
  return <>{children}</>;
};
```

#### 5.2 Auth Components
```typescript
// src/features/auth/components/LoginForm.tsx
export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate: signIn, isPending } = useSignIn();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  
  const onSubmit = (data: LoginFormData) => {
    signIn(data, {
      onSuccess: () => navigate('/dashboard'),
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  
  return (
    <Card className="glass-card border-0 w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Form fields */}
        </form>
      </CardContent>
    </Card>
  );
};
```

### Phase 6: Bottom Sheets & Modals (Week 3-4)

#### 6.1 Bottom Sheet System
```typescript
// src/components/feedback/BottomSheet.tsx
interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const BottomSheet = ({ isOpen, onClose, title, children }: BottomSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-[10px]">
        {title && (
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
        )}
        <div className="mt-6 h-full overflow-y-auto">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};
```

## 📅 Implementation Timeline

### Week 1: Foundation
- Install dependencies
- Setup project structure
- Configure Firebase
- Setup Dexie database
- Create base types

### Week 2: State & API
- Implement Zustand stores
- Create API service layer
- Setup React Query
- Build reusable components

### Week 3: Auth & Navigation
- Implement authentication
- Create protected routes
- Build dynamic navigation
- Setup role-based access

### Week 4: Polish & Testing
- Complete design system
- Add error boundaries
- Implement loading states
- Setup monitoring

## 🚀 Next Steps

1. **Start with Phase 1**: Set up the foundation
2. **Refactor existing pages**: Use new reusable components
3. **Implement auth**: Build login/signup flows
4. **Add dashboard**: Create authenticated experience
5. **Test thoroughly**: Ensure all systems work together

## 📝 Best Practices

1. **Type Safety**: Use TypeScript strictly
2. **Error Handling**: Implement proper error boundaries
3. **Performance**: Use React.lazy for code splitting
4. **Accessibility**: Follow WCAG guidelines
5. **Testing**: Write tests for critical paths
6. **Documentation**: Keep components documented

This plan provides a solid foundation for scaling Flexperts into a full-featured application with proper architecture and best practices.