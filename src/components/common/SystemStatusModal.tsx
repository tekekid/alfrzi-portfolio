import React from 'react';
import { Activity, CheckCircle2, Cpu, HardDrive, ShieldCheck, X, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SystemStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemStatusModal: React.FC<SystemStatusModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-xl border border-[#242830] bg-[#101216] shadow-2xl p-6 text-[#F5F7FA] light:bg-white light:border-[#E2E5E9] light:text-[#111318]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#242830] light:border-[#E2E5E9]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold light:text-emerald-600">
              System Online · Operational
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close status panel"
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-[#15181D] light:hover:text-gray-900 light:hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* System Specs List */}
        <div className="py-4 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#15181D] border border-[#242830]/60 light:bg-gray-50 light:border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
              <span>SYSTEM</span>
            </div>
            <span className="font-semibold text-[#F5F7FA] light:text-[#111318]">Portfolio Workspace v1.0</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#15181D] border border-[#242830]/60 light:bg-gray-50 light:border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>BUILD STACK</span>
            </div>
            <span className="font-semibold text-cyan-400 light:text-teal-600">React 19 + Vite + TypeScript</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#15181D] border border-[#242830]/60 light:bg-gray-50 light:border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600">
              <HardDrive className="w-3.5 h-3.5 text-purple-400" />
              <span>ACTIVE THEME</span>
            </div>
            <span className="font-semibold uppercase tracking-wider text-[#F5F7FA] light:text-[#111318]">{theme} Mode</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#15181D] border border-[#242830]/60 light:bg-gray-50 light:border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>STATUS</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 light:text-emerald-600 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Operational</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#15181D] border border-[#242830]/60 light:bg-gray-50 light:border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
              <span>ENVIRONMENT</span>
            </div>
            <span className="text-gray-300 light:text-gray-700">Client Sandbox · Zero Tracking</span>
          </div>
        </div>

        {/* Note */}
        <div className="pt-2 text-[11px] text-gray-500 light:text-gray-600 border-t border-[#242830] light:border-[#E2E5E9] font-sans">
          This digital workspace operates with local-first telemetry and modular components built for maximum responsiveness.
        </div>
      </div>
    </div>
  );
};
