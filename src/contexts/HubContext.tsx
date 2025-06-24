import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppMode } from './ModeContext';

export interface Hub {
  id: string;
  name: string;
  avatar: string;
  avatarColor: string;
  memberCount: number;
  activeSpaces: number;
  mode: AppMode;
  isPersonal?: boolean;
  createdAt: Date;
}

interface HubContextType {
  currentHub: Hub | null;
  hubs: Hub[];
  recentHubs: Hub[];
  switchHub: (hubId: string) => void;
  createHub: (name: string, mode: AppMode) => Promise<Hub>;
  updateHub: (hubId: string, updates: Partial<Hub>) => void;
}

const HubContext = createContext<HubContextType | null>(null);

export const useHub = () => {
  const context = useContext(HubContext);
  if (!context) throw new Error('useHub must be used within HubProvider');
  return context;
};

const avatarColors = [
  'bg-green-500',
  'bg-blue-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-red-500'
];

export const HubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentHub, setCurrentHub] = useState<Hub | null>(null);
  const [hubs, setHubs] = useState<Hub[]>([]);

  useEffect(() => {
    // Load hubs from localStorage or API
    const savedHubs = localStorage.getItem('hubs');
    const savedCurrentHubId = localStorage.getItem('current_hub');
    
    if (savedHubs) {
      const parsedHubs = JSON.parse(savedHubs).map((hub: Hub) => ({
        ...hub,
        createdAt: new Date(hub.createdAt)
      }));
      setHubs(parsedHubs);
      
      if (savedCurrentHubId) {
        const savedHub = parsedHubs.find((h: Hub) => h.id === savedCurrentHubId);
        if (savedHub) setCurrentHub(savedHub);
      }
    } else {
      // Create default hubs
      const defaultHubs: Hub[] = [
        {
          id: '1',
          name: 'ACME Corp',
          avatar: 'A',
          avatarColor: 'bg-green-500',
          memberCount: 12,
          activeSpaces: 8,
          mode: 'you-build',
          createdAt: new Date()
        },
        {
          id: '2',
          name: 'TechStartup Inc',
          avatar: 'T',
          avatarColor: 'bg-blue-500',
          memberCount: 8,
          activeSpaces: 5,
          mode: 'we-build',
          isPersonal: true,
          createdAt: new Date()
        },
        {
          id: '3',
          name: 'Side Project',
          avatar: 'S',
          avatarColor: 'bg-purple-500',
          memberCount: 3,
          activeSpaces: 3,
          mode: 'you-build',
          isPersonal: true,
          createdAt: new Date()
        }
      ];
      setHubs(defaultHubs);
      setCurrentHub(defaultHubs[0]);
      localStorage.setItem('hubs', JSON.stringify(defaultHubs));
      localStorage.setItem('current_hub', defaultHubs[0].id);
    }
  }, []);

  const recentHubs = hubs
    .filter(h => h.id !== currentHub?.id)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  const switchHub = (hubId: string) => {
    const hub = hubs.find(h => h.id === hubId);
    if (hub) {
      setCurrentHub(hub);
      localStorage.setItem('current_hub', hubId);
    }
  };

  const createHub = async (name: string, mode: AppMode): Promise<Hub> => {
    const newHub: Hub = {
      id: Date.now().toString(),
      name,
      avatar: name.charAt(0).toUpperCase(),
      avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
      memberCount: 1,
      activeSpaces: 0,
      mode,
      isPersonal: true,
      createdAt: new Date()
    };
    
    const updatedHubs = [...hubs, newHub];
    setHubs(updatedHubs);
    setCurrentHub(newHub);
    
    localStorage.setItem('hubs', JSON.stringify(updatedHubs));
    localStorage.setItem('current_hub', newHub.id);
    
    return newHub;
  };

  const updateHub = (hubId: string, updates: Partial<Hub>) => {
    const updatedHubs = hubs.map(hub => 
      hub.id === hubId ? { ...hub, ...updates } : hub
    );
    setHubs(updatedHubs);
    localStorage.setItem('hubs', JSON.stringify(updatedHubs));
    
    if (currentHub?.id === hubId) {
      setCurrentHub({ ...currentHub, ...updates });
    }
  };

  return (
    <HubContext.Provider value={{
      currentHub,
      hubs,
      recentHubs,
      switchHub,
      createHub,
      updateHub
    }}>
      {children}
    </HubContext.Provider>
  );
};