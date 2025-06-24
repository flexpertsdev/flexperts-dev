import { useMode, AppMode } from '@/contexts/ModeContext';
import { Bot, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModeSwitcherProps {
  className?: string;
  variant?: 'desktop' | 'mobile';
  collapsed?: boolean;
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ 
  className, 
  variant = 'desktop',
  collapsed = false
}) => {
  const { currentMode, switchMode, allModeConfigs } = useMode();

  const modes = [
    { id: 'you-build' as AppMode, icon: Bot, label: 'You Build' },
    { id: 'we-build' as AppMode, icon: User, label: 'We Build' },
    { id: 'build-together' as AppMode, icon: Users, label: 'Build Together' }
  ];

  if (variant === 'mobile') {
    return (
      <div className={cn("grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg", className)}>
        {modes.map((mode) => {
          const config = allModeConfigs[mode.id];
          return (
            <button
              key={mode.id}
              onClick={() => switchMode(mode.id)}
              className={cn(
                "flex items-center justify-center py-2 px-3 rounded-md font-medium transition-all",
                currentMode === mode.id
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <mode.icon className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{mode.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  if (collapsed) {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {modes.map((mode) => {
          const config = allModeConfigs[mode.id];
          const Icon = mode.icon;
          return (
            <button
              key={mode.id}
              onClick={() => switchMode(mode.id)}
              className={cn(
                "p-3 rounded-lg transition-all relative group",
                currentMode === mode.id
                  ? cn("bg-green-100 text-green-600", config.borderColor, "border-2")
                  : "hover:bg-gray-100 text-gray-600"
              )}
              title={mode.label}
            >
              <Icon className="w-5 h-5" />
              <div className="absolute left-full ml-2 hidden group-hover:block z-50">
                <div className="bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  {mode.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("bg-gray-100 rounded-lg p-1 flex", className)}>
      {modes.map((mode) => {
        const config = allModeConfigs[mode.id];
        return (
          <button
            key={mode.id}
            onClick={() => switchMode(mode.id)}
            className={cn(
              "flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all",
              currentMode === mode.id
                ? "bg-white text-green-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <mode.icon className="w-4 h-4 mr-2" />
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};