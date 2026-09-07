import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Home, 
  User, 
  FolderKanban, 
  Cpu, 
  Mail, 
  Moon, 
  Sun, 
  Github, 
  Terminal, 
  ArrowRight, 
  X, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO } from '../../data/socials';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerEasterEgg: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Theme' | 'Actions' | 'Experimental';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onTriggerEasterEgg
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      label: 'Go to Home',
      category: 'Navigation',
      icon: Home,
      action: () => { navigate('/'); onClose(); },
      shortcut: 'H'
    },
    {
      id: 'nav-about',
      label: 'Go to About',
      category: 'Navigation',
      icon: User,
      action: () => { navigate('/about'); onClose(); },
      shortcut: 'A'
    },
    {
      id: 'nav-projects',
      label: 'View Projects (Laboratory)',
      category: 'Navigation',
      icon: FolderKanban,
      action: () => { navigate('/projects'); onClose(); },
      shortcut: 'P'
    },
    {
      id: 'nav-skills',
      label: 'View Skills (Technical Lab)',
      category: 'Navigation',
      icon: Cpu,
      action: () => { navigate('/skills'); onClose(); },
      shortcut: 'S'
    },
    {
      id: 'nav-contact',
      label: 'Open Contact Channel',
      category: 'Navigation',
      icon: Mail,
      action: () => { navigate('/contact'); onClose(); },
      shortcut: 'C'
    },
    {
      id: 'theme-dark',
      label: 'Switch to Dark Mode',
      category: 'Theme',
      icon: Moon,
      action: () => { setTheme('dark'); onClose(); }
    },
    {
      id: 'theme-light',
      label: 'Switch to Light Mode',
      category: 'Theme',
      icon: Sun,
      action: () => { setTheme('light'); onClose(); }
    },
    {
      id: 'action-github',
      label: 'View GitHub Profile',
      category: 'Actions',
      icon: Github,
      action: () => { window.open(PERSONAL_INFO.github, '_blank'); onClose(); }
    },
    {
      id: 'action-email',
      label: 'Send Email (Direct Message)',
      category: 'Actions',
      icon: Mail,
      action: () => { window.location.href = `mailto:${PERSONAL_INFO.email}`; onClose(); }
    },
    {
      id: 'action-easter-egg',
      label: 'sudo (Access Digital Lab Terminal)',
      category: 'Experimental',
      icon: Terminal,
      action: () => { onClose(); onTriggerEasterEgg(); },
      shortcut: 'sudo'
    }
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchTarget = `${cmd.label} ${cmd.category} ${cmd.shortcut || ''}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase());
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim().toLowerCase() === 'sudo') {
        onClose();
        onTriggerEasterEgg();
        return;
      }
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl rounded-xl border border-[#242830] bg-[#101216] shadow-2xl overflow-hidden text-[#F5F7FA] light:bg-white light:border-[#E2E5E9] light:text-[#111318]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#242830] light:border-[#E2E5E9]">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0 light:text-teal-600" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search... (type 'sudo' for terminal)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-gray-500 font-sans"
          />
          <button 
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-[#15181D] light:hover:text-gray-900 light:hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#15181D] light:divide-gray-100">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No matching commands. Try searching for <span className="text-cyan-400 font-mono">projects</span> or <span className="text-cyan-400 font-mono">sudo</span>.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const Icon = cmd.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                    isSelected 
                      ? 'bg-cyan-500/10 text-cyan-300 light:bg-teal-500/10 light:text-teal-700' 
                      : 'text-gray-300 hover:bg-[#15181D] light:text-gray-700 light:hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-400 light:bg-teal-500/20 light:text-teal-700' : 'bg-[#15181D] text-gray-400 light:bg-gray-100'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">{cmd.label}</span>
                      <span className="ml-2 text-[11px] text-gray-500 uppercase tracking-wider">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-[#242830] bg-[#15181D] text-gray-400 light:border-gray-200 light:bg-gray-100">
                        {cmd.shortcut}
                      </span>
                    )}
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'opacity-100 translate-x-0.5' : 'opacity-0'} transition-all`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#08090B] border-t border-[#242830] text-[11px] text-gray-500 flex items-center justify-between font-mono light:bg-gray-50 light:border-[#E2E5E9]">
          <div className="flex items-center gap-2">
            <span>Navigation: <kbd className="text-gray-400 font-sans">↑↓</kbd></span>
            <span>Select: <kbd className="text-gray-400 font-sans">↵</kbd></span>
            <span>Close: <kbd className="text-gray-400 font-sans">esc</kbd></span>
          </div>
          <div className="flex items-center gap-1 text-cyan-400/80 light:text-teal-600">
            <Sparkles className="w-3 h-3" />
            <span>Developer Workspace v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
