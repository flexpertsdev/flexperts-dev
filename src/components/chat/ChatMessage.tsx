import React from 'react';
import { cn } from '@/lib/utils';
import { Check, CheckCheck, AlertCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Reply, Copy, Trash, Edit } from 'lucide-react';

export interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read' | 'error';
  type: 'text' | 'image' | 'file' | 'code' | 'system';
  attachments?: Attachment[];
  replyTo?: Message;
  isEdited?: boolean;
  editedAt?: Date;
  isAI?: boolean;
  codeLanguage?: string;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'file' | 'video' | 'audio';
  size: number;
  mimeType: string;
}

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
  showAvatar?: boolean;
  onReply?: (message: Message) => void;
  onEdit?: (message: Message) => void;
  onDelete?: (message: Message) => void;
  onCopy?: (content: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isCurrentUser,
  showAvatar = true,
  onReply,
  onEdit,
  onDelete,
  onCopy,
}) => {
  const handleCopy = () => {
    if (onCopy) {
      onCopy(message.content);
    } else {
      navigator.clipboard.writeText(message.content);
    }
  };

  const StatusIcon = () => {
    if (!isCurrentUser) return null;
    
    switch (message.status) {
      case 'sending':
        return <Clock className="w-3 h-3 text-gray-400" />;
      case 'sent':
        return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      case 'error':
        return <AlertCircle className="w-3 h-3 text-red-500" />;
      default:
        return null;
    }
  };

  const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
  };

  const renderContent = () => {
    if (message.type === 'code') {
      return (
        <div className="relative">
          <div className="absolute top-2 right-2 text-xs text-gray-400">
            {message.codeLanguage || 'code'}
          </div>
          <pre className={cn(
            "p-3 rounded-lg overflow-x-auto text-sm",
            isCurrentUser ? "bg-green-600" : "bg-gray-100"
          )}>
            <code className={isCurrentUser ? "text-white" : "text-gray-900"}>
              {message.content}
            </code>
          </pre>
        </div>
      );
    }

    if (message.type === 'system') {
      return (
        <div className="text-center text-sm text-gray-500 py-2">
          {message.content}
        </div>
      );
    }

    return (
      <p className={cn(
        "whitespace-pre-wrap break-words",
        isCurrentUser ? "text-white" : "text-gray-900"
      )}>
        {message.content}
      </p>
    );
  };

  if (message.type === 'system') {
    return renderContent();
  }

  return (
    <div className={cn(
      "flex items-end gap-2 mb-4 group",
      isCurrentUser && "flex-row-reverse"
    )}>
      {showAvatar && !isCurrentUser && (
        <Avatar className="w-8 h-8 mb-5">
          <AvatarImage src={message.senderAvatar} />
          <AvatarFallback className={cn(
            "text-xs",
            message.isAI ? "bg-blue-500 text-white" : "bg-gray-200"
          )}>
            {message.isAI ? '🤖' : message.senderName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={cn(
        "flex flex-col max-w-[70%]",
        isCurrentUser && "items-end"
      )}>
        {/* Reply To */}
        {message.replyTo && (
          <div className={cn(
            "mb-1 px-3 py-2 rounded-lg border text-xs",
            isCurrentUser 
              ? "bg-green-500/20 border-green-400/30 text-green-100"
              : "bg-gray-50 border-gray-200"
          )}>
            <div className="font-medium mb-1">{message.replyTo.senderName}</div>
            <div className="opacity-75 line-clamp-2">{message.replyTo.content}</div>
          </div>
        )}

        {/* Message Bubble */}
        <div className={cn(
          "relative rounded-2xl px-4 py-2",
          isCurrentUser 
            ? "bg-green-500 text-white rounded-br-sm" 
            : message.isAI
            ? "bg-blue-50 text-gray-900 rounded-bl-sm border border-blue-100"
            : "bg-gray-100 text-gray-900 rounded-bl-sm"
        )}>
          {/* Sender Name (for group chats) */}
          {!isCurrentUser && showAvatar && (
            <div className={cn(
              "text-xs font-medium mb-1",
              message.isAI ? "text-blue-600" : "text-gray-600"
            )}>
              {message.senderName}
            </div>
          )}

          {renderContent()}

          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-1">
              {message.attachments.map(attachment => (
                <AttachmentPreview 
                  key={attachment.id} 
                  attachment={attachment} 
                  isCurrentUser={isCurrentUser}
                />
              ))}
            </div>
          )}

          {/* Message Footer */}
          <div className={cn(
            "flex items-center gap-2 mt-1",
            isCurrentUser ? "justify-end" : "justify-start"
          )}>
            <span className={cn(
              "text-xs",
              isCurrentUser ? "text-green-100" : "text-gray-500"
            )}>
              {formatTime(message.timestamp)}
            </span>
            {message.isEdited && (
              <span className={cn(
                "text-xs",
                isCurrentUser ? "text-green-100" : "text-gray-500"
              )}>
                (edited)
              </span>
            )}
            <StatusIcon />
          </div>

          {/* Message Actions */}
          <div className={cn(
            "absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity",
            isCurrentUser ? "left-0 -translate-x-full pr-2" : "right-0 translate-x-full pl-2"
          )}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isCurrentUser ? "end" : "start"}>
                {onReply && (
                  <DropdownMenuItem onClick={() => onReply(message)}>
                    <Reply className="w-4 h-4 mr-2" />
                    Reply
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </DropdownMenuItem>
                {isCurrentUser && onEdit && (
                  <DropdownMenuItem onClick={() => onEdit(message)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                )}
                {isCurrentUser && onDelete && (
                  <DropdownMenuItem 
                    onClick={() => onDelete(message)}
                    className="text-red-600"
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

const AttachmentPreview: React.FC<{ 
  attachment: Attachment; 
  isCurrentUser: boolean;
}> = ({ attachment, isCurrentUser }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (attachment.type === 'image') {
    return (
      <img 
        src={attachment.url} 
        alt={attachment.name}
        className="rounded-lg max-w-full max-h-64 object-cover"
      />
    );
  }

  return (
    <a
      href={attachment.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 p-2 rounded-lg",
        isCurrentUser 
          ? "bg-green-600 hover:bg-green-700" 
          : "bg-gray-200 hover:bg-gray-300"
      )}
    >
      <div className="flex-1 min-w-0">
        <div className={cn(
          "text-sm font-medium truncate",
          isCurrentUser ? "text-white" : "text-gray-900"
        )}>
          {attachment.name}
        </div>
        <div className={cn(
          "text-xs",
          isCurrentUser ? "text-green-100" : "text-gray-500"
        )}>
          {formatFileSize(attachment.size)}
        </div>
      </div>
    </a>
  );
};