import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Code2, 
  Cpu, 
  Smartphone, 
  Activity, 
  Layers, 
  ShieldCheck, 
  Check, 
  Play, 
  FolderGit2 
} from 'lucide-react';

export const DeveloperWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'code' | 'system' | 'ui'>('terminal');
  const [terminalStep, setTerminalStep] = useState(0);
  const [isHoveredTerminal, setIsHoveredTerminal] = useState(false);
  const [isHoveredUi, setIsHoveredUi] = useState(false);
  const [isHoveredSystem, setIsHoveredSystem] = useState(false);
  const [interactiveCmd, setInteractiveCmd] = useState('');
  const [cmdFeedback, setCmdFeedback] = useState<string | null>(null);

  // Progressive terminal typing simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = interactiveCmd.trim().toLowerCase();
    if (clean === 'clear') {
      setTerminalStep(0);
      setCmdFeedback(null);
    } else if (clean === 'status') {
      setCmdFeedback('System operational. All 4 core modules active.');
    } else if (clean === 'whoami') {
      setCmdFeedback('developer@workspace (verified engineer)');
    } else if (clean === 'ls') {
      setCmdFeedback('studymate/ aether-ui/ bytecode-lab/ nexus-web/');
    } else {
      setCmdFeedback(`executed: ${clean} [OK]`);
    }
    setInteractiveCmd('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle Glow Behind Workspace */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-transparent blur-xl opacity-60 pointer-events-none -z-10" />

      {/* Main Workspace Frame */}
      <div className="rounded-xl border border-[#242830] bg-[#101216] shadow-2xl overflow-hidden transition-all duration-300 light:bg-white light:border-[#E2E5E9] light:shadow-lg">
        {/* Workspace Top Toolbar */}
        <div className="px-4 py-2.5 bg-[#08090B] border-b border-[#242830] flex items-center justify-between light:bg-gray-50 light:border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-[11px] text-gray-400 flex items-center gap-1.5 light:text-gray-600">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
              <span>~/workspace/lab-v1.0</span>
            </span>
          </div>

          {/* Activity indicator */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[10px] text-gray-500">
              {isHoveredTerminal ? 'INTERACTIVE' : 'IDLE'}
            </span>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] light:bg-teal-50 light:text-teal-700 light:border-teal-200">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse light:bg-teal-600"></span>
              <span>60 FPS</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-[#242830] bg-[#0C0E12] px-2 pt-1.5 gap-1 overflow-x-auto text-xs font-mono light:bg-gray-100 light:border-gray-200">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t border-t border-x transition-colors ${
              activeTab === 'terminal'
                ? 'border-[#242830] bg-[#101216] text-cyan-400 light:bg-white light:border-gray-200 light:text-teal-700'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#15181D]/50 light:text-gray-600 light:hover:text-black'
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>terminal.sh</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t border-t border-x transition-colors ${
              activeTab === 'code'
                ? 'border-[#242830] bg-[#101216] text-cyan-400 light:bg-white light:border-gray-200 light:text-teal-700'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#15181D]/50 light:text-gray-600 light:hover:text-black'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>architecture.dart</span>
          </button>

          <button
            onClick={() => setActiveTab('system')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t border-t border-x transition-colors ${
              activeTab === 'system'
                ? 'border-[#242830] bg-[#101216] text-cyan-400 light:bg-white light:border-gray-200 light:text-teal-700'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#15181D]/50 light:text-gray-600 light:hover:text-black'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab('ui')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t border-t border-x transition-colors ${
              activeTab === 'ui'
                ? 'border-[#242830] bg-[#101216] text-cyan-400 light:bg-white light:border-gray-200 light:text-teal-700'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#15181D]/50 light:text-gray-600 light:hover:text-black'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>ui_preview</span>
          </button>
        </div>

        {/* Tab 1: Terminal Window (Default Hero Element) */}
        {activeTab === 'terminal' && (
          <div
            onMouseEnter={() => setIsHoveredTerminal(true)}
            onMouseLeave={() => setIsHoveredTerminal(false)}
            className="p-5 font-mono text-xs leading-relaxed space-y-3 min-h-[260px] bg-[#101216] text-gray-300 light:bg-white light:text-gray-800 select-text"
          >
            <div className="text-gray-500 light:text-gray-600 text-[11px]">
              # Digital Laboratory Workspace Environment initialized
            </div>

            {/* Step 1 */}
            <div>
              <span className="text-cyan-400 light:text-teal-700">&gt; ~/workspace</span>
            </div>

            {/* Step 2 */}
            <div className="transition-opacity duration-300">
              <span className="text-gray-400 light:text-gray-600">$ whoami</span>
              <div className="text-white font-semibold light:text-gray-900 pl-2 mt-0.5">
                developer
              </div>
            </div>

            {/* Step 3 */}
            {terminalStep >= 1 && (
              <div className="transition-opacity duration-300">
                <span className="text-gray-400 light:text-gray-600">$ current_focus</span>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 pl-2 mt-0.5 text-cyan-300/90 light:text-teal-700">
                  <span>• app-development</span>
                  <span>• web-development</span>
                  <span>• uiux-design</span>
                  <span>• reverse-engineering</span>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {terminalStep >= 2 && (
              <div className="transition-opacity duration-300">
                <span className="text-gray-400 light:text-gray-600">$ status</span>
                <div className="pl-2 mt-0.5 flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold light:text-emerald-600">building...</span>
                  <span className="text-gray-500 text-[10px]">[active compiler: OK]</span>
                </div>
              </div>
            )}

            {/* Command Feedback */}
            {cmdFeedback && (
              <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] light:bg-teal-50 light:text-teal-800">
                {cmdFeedback}
              </div>
            )}

            {/* Interactive command line */}
            <form onSubmit={handleRunCommand} className="flex items-center gap-2 pt-2 border-t border-[#242830]/50 light:border-gray-200">
              <span className="text-cyan-400 light:text-teal-700 font-bold">$</span>
              <input
                type="text"
                placeholder="type 'help', 'status', 'whoami', 'ls'..."
                value={interactiveCmd}
                onChange={(e) => setInteractiveCmd(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-gray-600 light:text-black light:placeholder:text-gray-400"
              />
              <span className={`w-2 h-4 bg-cyan-400/80 inline-block ${isHoveredTerminal ? 'cursor-blink' : 'opacity-70'} light:bg-teal-600`}></span>
            </form>
          </div>
        )}

        {/* Tab 2: Code Snippet (Dart/Flutter Architecture) */}
        {activeTab === 'code' && (
          <div className="p-5 font-mono text-xs leading-relaxed space-y-1 min-h-[260px] bg-[#0A0C0E] text-gray-300 light:bg-gray-50 light:text-gray-800">
            <div className="text-gray-500">// StudyMate Core Local-First Database Provider</div>
            <div>
              <span className="text-purple-400">class</span> <span className="text-yellow-300">StudyMateDatabase</span> <span className="text-purple-400">extends</span> <span className="text-blue-300">LocalRepository</span> {'{'}
            </div>
            <div className="pl-4">
              <span className="text-gray-500">// Zero cloud latency SQLite engine</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">Future</span>&lt;<span className="text-yellow-300">void</span>&gt; <span className="text-blue-400">initializeLocalVault</span>() <span className="text-purple-400">async</span> {'{'}
            </div>
            <div className="pl-8 text-gray-300">
              <span className="text-blue-300">_db</span> = <span className="text-purple-400">await</span> openDatabase(<span className="text-emerald-300">'studymate_local.db'</span>, version: <span className="text-orange-400">3</span>);
            </div>
            <div className="pl-8 text-gray-300">
              <span className="text-purple-400">await</span> _db.execute(<span className="text-emerald-300">'PRAGMA synchronous = NORMAL;'</span>);
            </div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4 mt-1">
              <span className="text-purple-400">Stream</span>&lt;<span className="text-yellow-300">List</span>&lt;<span className="text-blue-300">ScheduleTask</span>&gt;&gt; <span className="text-blue-400">watchActiveTasks</span>() {'{'}
            </div>
            <div className="pl-8">
              <span className="text-purple-400">return</span> _taskQuerySubject.stream;
            </div>
            <div className="pl-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        )}

        {/* Tab 3: System Telemetry Monitor */}
        {activeTab === 'system' && (
          <div 
            onMouseEnter={() => setIsHoveredSystem(true)}
            onMouseLeave={() => setIsHoveredSystem(false)}
            className="p-5 font-mono text-xs space-y-4 min-h-[260px] bg-[#101216] light:bg-white"
          >
            <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-[#242830] light:border-gray-200">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>REAL-TIME SYSTEM MONITOR</span>
              </span>
              <span className="text-emerald-400">HEALTH: 100%</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                <div className="text-[10px] text-gray-500 uppercase">Memory Footprint</div>
                <div className="text-base font-bold text-cyan-400 light:text-teal-700">48.2 MB</div>
                <div className="text-[10px] text-gray-400">SQLite In-Memory Buffer</div>
              </div>

              <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                <div className="text-[10px] text-gray-500 uppercase">Frame Latency</div>
                <div className="text-base font-bold text-emerald-400 light:text-emerald-600">16.6 ms</div>
                <div className="text-[10px] text-gray-400">Consistent 60.0 FPS</div>
              </div>

              <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                <div className="text-[10px] text-gray-500 uppercase">Bytecode Inspection</div>
                <div className="text-base font-bold text-blue-400">ARM64-v8a</div>
                <div className="text-[10px] text-gray-400">Native ELF Binaries</div>
              </div>

              <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                <div className="text-[10px] text-gray-500 uppercase">Network Outbound</div>
                <div className="text-base font-bold text-purple-400">0 KB / Idle</div>
                <div className="text-[10px] text-gray-400">100% Offline-Resilient</div>
              </div>
            </div>

            {isHoveredSystem && (
              <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] flex items-center justify-between">
                <span>Kernel Telemetry: Nominal</span>
                <span className="font-bold">No Bottlenecks Detected</span>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: UI Design Preview */}
        {activeTab === 'ui' && (
          <div 
            onMouseEnter={() => setIsHoveredUi(true)}
            onMouseLeave={() => setIsHoveredUi(false)}
            className="p-5 min-h-[260px] bg-[#101216] light:bg-white flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* UI badge */}
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 light:bg-teal-50 light:text-teal-700">
              UI/UX · Mobile & Design
            </div>

            {/* Smartphone Micro Preview */}
            <div className={`w-52 rounded-2xl border-2 border-[#242830] bg-[#0A0C0E] p-3 shadow-xl transition-all duration-300 light:bg-gray-50 light:border-gray-300 ${
              isHoveredUi ? 'scale-105 rotate-1 border-cyan-500/60' : ''
            }`}>
              {/* Notch */}
              <div className="w-12 h-1 rounded-full bg-gray-700 mx-auto mb-2"></div>
              
              {/* Screen Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[9px] font-mono text-gray-400">
                  <span>StudyMate</span>
                  <span className="text-cyan-400">09:41</span>
                </div>

                <div className="p-2 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-white light:border-gray-200">
                  <div className="text-[9px] font-semibold text-white light:text-black">Algoritma & Pemrograman</div>
                  <div className="text-[8px] text-gray-400">Lab R302 · 10:00 - 12:30</div>
                </div>

                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between light:bg-teal-50">
                  <span className="text-[8px] font-mono text-cyan-300 light:text-teal-800">Pomodoro: 25:00</span>
                  <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400 light:text-teal-700 light:fill-teal-700" />
                </div>
              </div>
            </div>

            <div className="mt-3 text-[11px] font-mono text-gray-500">
              Interactive Micro-Prototype
            </div>
          </div>
        )}

        {/* Workspace Bottom Statusbar */}
        <div className="px-4 py-2 bg-[#0C0E12] border-t border-[#242830] flex items-center justify-between text-[11px] font-mono text-gray-500 light:bg-gray-50 light:border-gray-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-cyan-400 light:text-teal-700">
              <ShieldCheck className="w-3 h-3" />
              <span>SANDBOX_ACTIVE</span>
            </span>
            <span className="hidden sm:inline text-gray-600 light:text-gray-300">|</span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 light:text-gray-600">Branch: main</span>
            <span className="text-emerald-400">● clean</span>
          </div>
        </div>
      </div>
    </div>
  );
};
