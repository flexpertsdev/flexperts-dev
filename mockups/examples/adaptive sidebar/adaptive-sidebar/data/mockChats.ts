
import { Chat } from '../types';

export const mockChats: Chat[] = [
  { id: '1', name: 'Alice Johnson', lastMessage: 'Hey! How are you?', time: '2:30 PM', unread: 2, online: true },
  { id: '2', name: 'Bob Smith', lastMessage: 'Can we meet tomorrow?', time: '1:45 PM', unread: 0, online: false },
  { id: '3', name: 'Carol Davis', lastMessage: 'Thanks for your help!', time: '12:15 PM', unread: 0, online: true },
  { id: '4', name: 'David Wilson', lastMessage: 'See you later!', time: 'Yesterday', unread: 0, online: false },
];
