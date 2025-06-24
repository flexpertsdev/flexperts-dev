import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, Paperclip, X, Image, FileText, Film, 
  Music, Code, Smile, Mic, StopCircle 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { Message } from './ChatMessage';

interface ChatInputProps {
  onSendMessage: (content: string, attachments?: File[]) => void;
  onTyping?: (isTyping: boolean) => void;
  replyTo?: Message;
  onCancelReply?: () => void;
  isLoading?: boolean;
  placeholder?: string;
  maxLength?: number;
  allowAttachments?: boolean;
  allowVoiceRecording?: boolean;
  allowCodeBlocks?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onTyping,
  replyTo,
  onCancelReply,
  isLoading = false,
  placeholder = "Type a message...",
  maxLength = 5000,
  allowAttachments = true,
  allowVoiceRecording = true,
  allowCodeBlocks = true,
}) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setRecordingTime(0);
    }
  }, [isRecording]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setMessage(value);
      
      if (onTyping) {
        onTyping(true);
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
          onTyping(false);
        }, 1000);
      }
    }
  };

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSendMessage(message.trim(), attachments);
      setMessage('');
      setAttachments([]);
      if (onTyping) {
        onTyping(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording logic
  };

  const insertCodeBlock = () => {
    const codeBlock = '\n```\n\n```\n';
    const cursorPos = textareaRef.current?.selectionStart || message.length;
    const newMessage = 
      message.slice(0, cursorPos) + 
      codeBlock + 
      message.slice(cursorPos);
    setMessage(newMessage);
    
    // Move cursor inside code block
    setTimeout(() => {
      if (textareaRef.current) {
        const newPos = cursorPos + 4;
        textareaRef.current.setSelectionRange(newPos, newPos);
        textareaRef.current.focus();
      }
    }, 0);
  };

  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return Image;
    if (file.type.startsWith('video/')) return Film;
    if (file.type.startsWith('audio/')) return Music;
    return FileText;
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      {/* Reply Preview */}
      {replyTo && (
        <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 mb-1">
              Replying to {replyTo.senderName}
            </div>
            <div className="text-sm text-gray-600 truncate">
              {replyTo.content}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onCancelReply}
            className="ml-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Attachments Preview */}
      {attachments.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {attachments.map((file, index) => {
            const Icon = getFileIcon(file);
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
              >
                <Icon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 max-w-[150px] truncate">
                  {file.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAttachment(index)}
                  className="h-6 w-6"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-end gap-2">
        {/* Attachment Button */}
        {allowAttachments && !isRecording && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mb-1">
                <Paperclip className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                <Image className="w-4 h-4 mr-2" />
                Image
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                <FileText className="w-4 h-4 mr-2" />
                Document
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                <Film className="w-4 h-4 mr-2" />
                Video
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Text Input or Recording */}
        {isRecording ? (
          <div className="flex-1 flex items-center justify-center py-3 px-4 bg-red-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-700">
                Recording... {formatRecordingTime(recordingTime)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              className={cn(
                "min-h-[44px] max-h-[200px] resize-none pr-10",
                "focus:ring-2 focus:ring-green-500"
              )}
              rows={1}
            />
            
            {/* Character Count */}
            {message.length > maxLength * 0.8 && (
              <div className={cn(
                "absolute bottom-2 right-2 text-xs",
                message.length >= maxLength ? "text-red-500" : "text-gray-400"
              )}>
                {message.length}/{maxLength}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-1 mb-1">
          {/* Emoji Picker */}
          {!isRecording && (
            <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Smile className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent side="top" align="end" className="w-80">
                <div className="grid grid-cols-8 gap-2 p-2">
                  {['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', 
                    '😇', '🙂', '😉', '😌', '😍', '🥰', '😘', '😗',
                    '😙', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑',
                    '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑'].map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => {
                        setMessage(prev => prev + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="text-2xl hover:bg-gray-100 rounded p-1"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}

          {/* Code Block */}
          {allowCodeBlocks && !isRecording && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={insertCodeBlock}
              title="Insert code block"
            >
              <Code className="w-5 h-5" />
            </Button>
          )}

          {/* Voice Recording */}
          {allowVoiceRecording && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleRecording}
              className={cn(
                isRecording && "text-red-500 hover:text-red-600"
              )}
            >
              {isRecording ? (
                <StopCircle className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </Button>
          )}

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={isLoading || (!message.trim() && attachments.length === 0)}
            size="icon"
            className={cn(
              "bg-green-500 hover:bg-green-600",
              (message.trim() || attachments.length > 0) && "animate-in zoom-in-50"
            )}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
      />

      {/* Upload Progress */}
      {isLoading && (
        <Progress value={50} className="mt-2" />
      )}
    </div>
  );
};