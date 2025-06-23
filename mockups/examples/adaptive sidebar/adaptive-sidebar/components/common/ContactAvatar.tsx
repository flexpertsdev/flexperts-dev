
import React from 'react';

interface ContactAvatarProps {
  name: string;
  online?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ContactAvatar: React.FC<ContactAvatarProps> = ({ name, online = false, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-20 h-20 text-xl'
  };

  const indicatorSizes = {
    sm: 'w-2 h-2 -bottom-0.5 -right-0.5',
    md: 'w-3 h-3 -bottom-0.5 -right-0.5',
    lg: 'w-4 h-4 -bottom-1 -right-1',
    xl: 'w-5 h-5 -bottom-1 -right-1'
  };

  return (
    <div className="relative">
      <div className={`bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
        <span className="text-white font-semibold">{name.charAt(0)}</span>
      </div>
      {online && (
        <div className={`absolute bg-green-500 border-2 border-white rounded-full ${indicatorSizes[size]}`}></div>
      )}
    </div>
  );
};
