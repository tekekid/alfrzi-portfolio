import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Authenticated session: root@digital-lab',
    'Access granted. Welcome to the lab.',
    'Type "help" for a list of laboratory diagnostic routines.'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, `root@digital-lab:~$ ${inputVal}`];

    switch (cmd) {
      case 'help':
        newHistory.push(
          'Available routines:',
          '  whoami       - Display current operator profile',
          '  focus        - Query current technical research vector',
          '  philosophy   - Print engineering manifesto',
          '  projects     - List compiled project artifacts',
          '  inspect      - Trigger simulated APK bytecode probe',
          '  clear        - Flush terminal buffer',
          '  exit         - Terminate root session'
        );
        break;
      case 'whoami':
        newHistory.push(
          'OPERATOR: Developer & Systems Researcher',
          'FOCUS: App Development · Web Engineering · UI/UX · Reverse Engineering',
          'LOCATION: Indonesia'
        );
        break;
      case 'focus':
        newHistory.push(
          'CURRENT VECTOR: Exploring software analysis, offline-first architectures, and high-performance frontend interfaces.'
        );
        break;
      case 'philosophy':
        newHistory.push(
          '════════════════════════════════════════════════',
          'BUILD. ANALYZE. IMPROVE.',
          'Understanding how software functions under the hood elevates',
          'how we architect and design every user-facing layer.',
          '════════════════════════════════════════════════'
        );
        break;
      case 'projects':
        newHistory.push(
          '[01] StudyMate - Student Productivity Platform (Flutter/SQLite)',
          '[02] Aether Design System - High-Contrast UI Tokens & Components',
          '[03] Bytecode & APK Dissector - WebAssembly Static Analysis Tool',
          '[04] Nexus Workstation Core - Modular High-Throughput Web Engine'
        );
        break;
      case 'inspect':
        newHistory.push(
          '[+] Inspecting StudyMate.apk bytecode signature...',
          '[+] Verified SHA256 integrity: 8f3c7a...d24e',
          '[+] AndroidManifest.xml: 3 permissions, zero telemetry trackers.',
          '[+] Result: Pure local-first architecture verified.'
        );
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
      case 'quit':
        onClose();
        return;
      default:
        newHistory.push(`command not found: ${cmd}. Type "help" for available routines.`);
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl rounded-xl border border-cyan-500/30 bg-[#08090B] shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden text-cyan-400 font-mono text-xs flex flex-col h-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#101216] border-b border-[#242830]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-gray-400 font-mono text-xs flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              digital-lab-terminal — root@workspace
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close terminal"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-1.5 select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div 
              key={i} 
              className={
                line.startsWith('root@digital-lab')
                  ? 'text-white' 
                  : line.startsWith('[+]') 
                  ? 'text-emerald-400'
                  : line.startsWith('command not found')
                  ? 'text-red-400'
                  : 'text-gray-300'
              }
            >
              {line}
            </div>
          ))}

          {/* Interactive prompt */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-cyan-400 font-bold shrink-0">root@digital-lab:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Status footer */}
        <div className="px-4 py-2 bg-[#101216] border-t border-[#242830] flex items-center justify-between text-[10px] text-gray-500">
          <span>Session: SECURE_LOCAL_SHELL</span>
          <span>Type <span className="text-cyan-400">exit</span> to close</span>
        </div>
      </div>
    </div>
  );
};
