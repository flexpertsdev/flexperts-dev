
import { MessageCircle, Settings, Users } from 'lucide-react';
import { SettingsSection } from '../types';

export const mockSettingsSections: SettingsSection[] = [
  { id: 'profile', name: 'Profile', icon: Users },
  { id: 'notifications', name: 'Notifications', icon: MessageCircle },
  { id: 'privacy', name: 'Privacy & Security', icon: Settings },
  { id: 'appearance', name: 'Appearance', icon: Settings },
];
