export type MessageType = 'bot' | 'user';

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  options?: string[];
}

export interface OnboardingData {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  projectType?: string;
  experience?: string;
  goals?: string[];
  timeline?: string;
  budget?: string;
}

export type OnboardingStep = 
  | 'welcome'
  | 'name'
  | 'email'
  | 'company'
  | 'role'
  | 'project-type'
  | 'experience'
  | 'goals'
  | 'timeline'
  | 'budget'
  | 'summary'
  | 'complete';