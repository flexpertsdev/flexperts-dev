
export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  online: boolean;
  favorite: boolean;
}

export interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

export interface SettingsSection {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type ViewType = 'chat' | 'contacts' | 'contact-detail' | 'add-contact' | 'edit-contact' | 'settings';
