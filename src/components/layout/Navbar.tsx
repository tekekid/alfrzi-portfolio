import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Command, 
  Terminal, 
  Cpu, 
  FolderKanban, 
  User, 
  Mail, 
  Sparkles 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO } from '../../data/socials';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenSystemStatus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenSystemStatus
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: Sparkles },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderKanban },
    { to: '/skills', label: 'Skills', icon: Cpu },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200 backdrop-blur-md bg-[#08090B]/80 border-b border-[#242830]/80 light:bg-[#F7F8FA]/85 light:border-[#E2E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Initials */}
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="group flex items-center gap-2.5 font-mono text-sm tracking-wider font-semibold focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#15181D] border border-[#242830] flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all light:bg-white light:border-gray-200 light:text-teal-600">
              <span className="text-xs font-bold font-mono">&gt;_</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#F5F7FA] light:text-[#111318]">
                {PERSONAL_INFO.initials}
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase font-mono">
                Workstation
              </span>
            </div>
          </Link>

          {/* System status pill */}
          <button
            onClick={onOpenSystemStatus}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors light:border-emerald-600/30 light:text-emerald-700 light:bg-emerald-50"
            title="Click to view System Diagnostics"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide">ONLINE</span>
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#242830]/80 bg-[#101216]/70 backdrop-blur-md light:bg-white/80 light:border-[#E2E5E9]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-cyan-400 font-semibold light:text-teal-700'
                    : 'text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30 -z-10 light:bg-teal-500/10 light:border-teal-500/30" />
                )}
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Actions (Command Palette & Theme Toggle) */}
        <div className="flex items-center gap-2">
          {/* Quick command palette trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#242830] bg-[#101216] text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-xs font-mono light:bg-white light:border-gray-200 light:text-gray-600 light:hover:text-black"
            aria-label="Open command palette"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
            <span className="hidden lg:inline text-[11px]">Command</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#15181D] border border-[#242830] text-[10px] text-gray-400 font-sans light:bg-gray-100 light:border-gray-200">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#242830] bg-[#101216] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors light:bg-white light:border-gray-200 light:text-gray-600 light:hover:text-teal-600"
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#242830] bg-[#101216] text-gray-400 hover:text-white transition-colors light:bg-white light:border-gray-200 light:text-gray-600"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#242830] bg-[#101216] px-4 pt-3 pb-5 space-y-2 light:bg-white light:border-gray-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#242830] light:border-gray-200">
            <span className="text-xs font-mono text-gray-400">NAVIGATION</span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSystemStatus();
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              SYSTEM ONLINE
            </button>
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 font-semibold light:bg-teal-50 light:text-teal-700'
                    : 'text-gray-300 hover:bg-[#15181D] light:text-gray-700 light:hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-400 light:text-teal-600" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono bg-[#15181D] border border-[#242830] text-gray-300 light:bg-gray-100 light:border-gray-200 light:text-gray-700"
            >
              <span className="flex items-center gap-2">
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                Command Palette
              </span>
              <span className="text-gray-500">Ctrl + K</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
