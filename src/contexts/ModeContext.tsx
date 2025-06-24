import React, { createContext, useContext, useState, useEffect } from 'react';
import { Bot, User, Users } from 'lucide-react';

export type AppMode = 'you-build' | 'we-build' | 'build-together';

interface ModeConfig {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

interface ModeContextType {
  currentMode: AppMode;
  switchMode: (mode: AppMode) => void;
  modeConfig: ModeConfig;
  allModeConfigs: Record<AppMode, ModeConfig>;
}

const modeConfigs: Record<AppMode, ModeConfig> = {
  'you-build': {
    icon: Bot,
    label: 'You Build',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500',
    description: 'AI-powered solo development'
  },
  'we-build': {
    icon: User,
    label: 'We Build',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500',
    description: 'Expert marketplace'
  },
  'build-together': {
    icon: Users,
    label: 'Build Together',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-500',
    description: 'Team collaboration'
  }
};

const ModeContext = createContext<ModeContextType | null>(null);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) throw new Error('useMode must be used within ModeProvider');
  return context;
};

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentMode, setCurrentMode] = useState<AppMode>(() => {
    const savedMode = localStorage.getItem('app_mode') as AppMode;
    return savedMode || 'you-build';
  });

  useEffect(() => {
    localStorage.setItem('app_mode', currentMode);
  }, [currentMode]);

  const switchMode = (mode: AppMode) => {
    setCurrentMode(mode);
  };

  return (
    <ModeContext.Provider value={{
      currentMode,
      switchMode,
      modeConfig: modeConfigs[currentMode],
      allModeConfigs: modeConfigs
    }}>
      {children}
    </ModeContext.Provider>
  );
};