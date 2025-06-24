import React from 'react';
import { cn } from '@/lib/utils';

interface TypingIndicatorProps {
  users: string[];
  className?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ 
  users, 
  className 
}) => {
  if (users.length === 0) return null;

  const displayText = getTypingText(users);

  return (
    <div className={cn("flex items-center gap-2 px-4 py-2 text-sm text-gray-500", className)}>
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span>{displayText}</span>
    </div>
  );
};

function getTypingText(users: string[]): string {
  if (users.length === 1) {
    return `${users[0]} is typing...`;
  } else if (users.length === 2) {
    return `${users[0]} and ${users[1]} are typing...`;
  } else if (users.length === 3) {
    return `${users[0]}, ${users[1]}, and ${users[2]} are typing...`;
  } else {
    return `${users[0]}, ${users[1]}, and ${users.length - 2} others are typing...`;
  }
}