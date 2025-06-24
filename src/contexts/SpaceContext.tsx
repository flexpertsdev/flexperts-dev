import React, { createContext, useContext, useState, useEffect } from 'react';
import { Space } from '@/types/space';
import { Message } from '@/components/chat/ChatMessage';
import { useHub } from './HubContext';
import { useMode } from './ModeContext';

interface SpaceContextType {
  spaces: Space[];
  currentSpace: Space | null;
  pinnedSpaces: Space[];
  messages: Record<string, Message[]>;
  typingUsers: Record<string, string[]>;
  createSpace: (name: string, description?: string, type?: 'personal' | 'team' | 'ai') => Promise<Space>;
  switchSpace: (spaceId: string) => void;
  toggleSpacePin: (spaceId: string) => void;
  archiveSpace: (spaceId: string) => void;
  sendMessage: (spaceId: string, message: Message) => void;
  updateMessageStatus: (spaceId: string, messageId: string, status: Message['status']) => void;
  searchSpaces: (query: string) => Space[];
}

const SpaceContext = createContext<SpaceContextType | null>(null);

export const useSpace = () => {
  const context = useContext(SpaceContext);
  if (!context) throw new Error('useSpace must be used within SpaceProvider');
  return context;
};

export const SpaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentHub } = useHub();
  const { currentMode } = useMode();
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [currentSpace, setCurrentSpace] = useState<Space | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [typingUsers, setTypingUsers] = useState<Record<string, string[]>>({});

  useEffect(() => {
    // Load spaces from localStorage or API based on current hub
    if (currentHub) {
      const savedSpaces = localStorage.getItem(`spaces_${currentHub.id}`);
      if (savedSpaces) {
        const parsedSpaces = JSON.parse(savedSpaces).map((space: Space) => ({
          ...space,
          createdAt: new Date(space.createdAt),
          lastMessage: space.lastMessage ? {
            ...space.lastMessage,
            timestamp: new Date(space.lastMessage.timestamp)
          } : undefined
        }));
        setSpaces(parsedSpaces);
      } else {
        // Create default spaces for new hub
        const defaultSpaces: Space[] = [
          {
            id: 'ask-flexi',
            name: 'Ask Flexi',
            description: 'AI-powered assistant for all your coding needs',
            type: 'ai',
            lastMessage: {
              content: 'Hello! I\'m Flexi, your AI coding assistant. How can I help you today?',
              timestamp: new Date(),
              senderId: 'ai-assistant'
            },
            memberCount: 2,
            unreadCount: 0,
            isPinned: true,
            createdAt: new Date()
          },
          {
            id: '1',
            name: 'Current Sprint',
            description: 'Sprint 23 - Authentication System',
            type: 'team',
            lastMessage: {
              content: 'Working on user authentication flow. Need to implement OAuth callbacks...',
              timestamp: new Date(),
              senderId: 'user-1'
            },
            memberCount: 5,
            unreadCount: 3,
            isPinned: true,
            createdAt: new Date()
          },
          {
            id: '2',
            name: 'Landing Page Redesign',
            description: 'New marketing site design',
            type: 'personal',
            lastMessage: {
              content: 'Updated hero section with new animations. Added testimonials carousel...',
              timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
              senderId: 'user-1'
            },
            memberCount: 1,
            unreadCount: 0,
            isPinned: false,
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        ];
        setSpaces(defaultSpaces);
        localStorage.setItem(`spaces_${currentHub.id}`, JSON.stringify(defaultSpaces));
      }
    }
  }, [currentHub, currentMode]);

  useEffect(() => {
    // Load messages for all spaces
    if (currentHub) {
      const newMessages: Record<string, Message[]> = {};
      
      // Load Ask Flexi default messages
      newMessages['ask-flexi'] = [
        {
          id: '1',
          content: "Hello! I'm Flexi, your AI coding assistant. How can I help you today?",
          senderId: 'ai-assistant',
          senderName: 'Flexi AI',
          timestamp: new Date(Date.now() - 60 * 60 * 1000),
          status: 'read',
          type: 'text',
          isAI: true
        }
      ];
      
      // Load other space messages from localStorage
      spaces.forEach(space => {
        if (space.id !== 'ask-flexi') {
          const savedMessages = localStorage.getItem(`messages_${space.id}`);
          if (savedMessages) {
            newMessages[space.id] = JSON.parse(savedMessages).map((msg: Message) => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            }));
          } else {
            newMessages[space.id] = [];
          }
        }
      });
      
      setMessages(newMessages);
    }
  }, [currentHub, spaces]);

  const pinnedSpaces = spaces.filter(s => s.isPinned);

  const createSpace = async (name: string, description?: string, type: 'personal' | 'team' | 'ai' = 'personal'): Promise<Space> => {
    if (!currentHub) throw new Error('No hub selected');
    
    const newSpace: Space = {
      id: Date.now().toString(),
      name,
      description,
      type,
      memberCount: type === 'personal' ? 1 : 2,
      unreadCount: 0,
      isPinned: false,
      createdAt: new Date()
    };
    
    const updatedSpaces = [...spaces, newSpace];
    setSpaces(updatedSpaces);
    localStorage.setItem(`spaces_${currentHub.id}`, JSON.stringify(updatedSpaces));
    
    // Initialize empty messages for new space
    setMessages(prev => ({ ...prev, [newSpace.id]: [] }));
    
    return newSpace;
  };

  const switchSpace = (spaceId: string) => {
    const space = spaces.find(s => s.id === spaceId);
    if (space) {
      setCurrentSpace(space);
      // Mark messages as read
      if (space.unreadCount > 0) {
        const updatedSpaces = spaces.map(s => 
          s.id === spaceId ? { ...s, unreadCount: 0 } : s
        );
        setSpaces(updatedSpaces);
        localStorage.setItem(`spaces_${currentHub?.id}`, JSON.stringify(updatedSpaces));
      }
    }
  };

  const toggleSpacePin = (spaceId: string) => {
    const updatedSpaces = spaces.map(s => 
      s.id === spaceId ? { ...s, isPinned: !s.isPinned } : s
    );
    setSpaces(updatedSpaces);
    localStorage.setItem(`spaces_${currentHub?.id}`, JSON.stringify(updatedSpaces));
  };

  const archiveSpace = (spaceId: string) => {
    const updatedSpaces = spaces.filter(s => s.id !== spaceId);
    setSpaces(updatedSpaces);
    localStorage.setItem(`spaces_${currentHub?.id}`, JSON.stringify(updatedSpaces));
    
    // Remove messages for archived space
    const newMessages = { ...messages };
    delete newMessages[spaceId];
    setMessages(newMessages);
  };

  const sendMessage = (spaceId: string, message: Message) => {
    const spaceMessages = messages[spaceId] || [];
    const updatedMessages = [...spaceMessages, message];
    
    setMessages(prev => ({
      ...prev,
      [spaceId]: updatedMessages
    }));
    
    // Save to localStorage
    localStorage.setItem(`messages_${spaceId}`, JSON.stringify(updatedMessages));
    
    // Update space last message
    const updatedSpaces = spaces.map(s => 
      s.id === spaceId 
        ? { 
            ...s, 
            lastMessage: {
              content: message.content,
              timestamp: message.timestamp,
              senderId: message.senderId
            }
          } 
        : s
    );
    setSpaces(updatedSpaces);
    localStorage.setItem(`spaces_${currentHub?.id}`, JSON.stringify(updatedSpaces));
    
    // Simulate message status update
    setTimeout(() => {
      updateMessageStatus(spaceId, message.id, 'sent');
      setTimeout(() => {
        updateMessageStatus(spaceId, message.id, 'delivered');
      }, 500);
    }, 300);
  };

  const updateMessageStatus = (spaceId: string, messageId: string, status: Message['status']) => {
    setMessages(prev => ({
      ...prev,
      [spaceId]: (prev[spaceId] || []).map(msg =>
        msg.id === messageId ? { ...msg, status } : msg
      )
    }));
  };

  const searchSpaces = (query: string): Space[] => {
    const lowerQuery = query.toLowerCase();
    return spaces.filter(space => 
      space.name.toLowerCase().includes(lowerQuery) ||
      space.description?.toLowerCase().includes(lowerQuery) ||
      space.lastMessage?.content?.toLowerCase().includes(lowerQuery)
    );
  };

  return (
    <SpaceContext.Provider value={{
      spaces,
      currentSpace,
      pinnedSpaces,
      messages,
      typingUsers,
      createSpace,
      switchSpace,
      toggleSpacePin,
      archiveSpace,
      sendMessage,
      updateMessageStatus,
      searchSpaces
    }}>
      {children}
    </SpaceContext.Provider>
  );
};