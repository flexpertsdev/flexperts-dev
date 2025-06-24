import { AppMode } from '@/contexts/ModeContext';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai' | 'expert';
  senderInfo?: {
    name: string;
    avatar?: string;
  };
  timestamp: Date;
  attachments?: Attachment[];
  status: 'sending' | 'sent' | 'delivered' | 'read';
  spaceId: string;
}

export interface Space {
  id: string;
  name: string;
  description?: string;
  type: 'personal' | 'team' | 'ai';
  lastMessage?: {
    content: string;
    timestamp: Date;
    senderId: string;
  };
  memberCount: number;
  unreadCount: number;
  isPinned: boolean;
  createdAt: Date;
}