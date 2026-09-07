import React, { useState } from 'react';
import { 
  Terminal, 
  Binary, 
  CheckCircle2, 
  ShieldCheck, 
  FileCode2, 
  Layers, 
  Search, 
  Activity, 
  HardDrive,
  Eye
} from 'lucide-react';
import { REVERSE_ENG_LAB_DATA } from '../../data/skills';

export const ReverseEngLab: React.FC = () => {
  const [activeInspector, setActiveInspector] = useState<'static' | 'dynamic' | 'hex'>('static');
  const [isScanning, setIsScanning] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState(100);

  const handleTriggerReScan = () => {
    setIsScanning(true);
    setSimulatedProgress(0);
    const interval = setInterval(() => {
      setSimulatedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  return (
    <div className="rounded-xl border border-[#242830] bg-[#101216] overflow-hidden shadow-2xl transition-all light:bg-white light:border-[#E2E5E9]">
      {/* Header bar */}
      <div className="px-6 py-4 bg-[#0A0C0E] border-b border-[#242830] flex flex-wrap items-center justify-between gap-4 light:bg-gray-50 light:border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 light:bg-teal-50 light:text-teal-700">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#F5F7FA] light:text-[#111318]">
                INSIDE THE LAB // TECHNICAL ANALYSIS WORKSPACE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700">
                PORTFOLIO SIMULATION
              </span>
            </div>
            <p className="text-xs text-gray-400 light:text-gray-500 font-sans">
              Structured inspection of application packaging, Dalvik bytecode, and native ARM64 bridges.
            </p>
          </div>
        </div>

        <button
          onClick={handleTriggerReScan}
          disabled={isScanning}
          className="px-3.5 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors font-mono text-xs flex items-center gap-2 light:bg-teal-50 light:text-teal-700 light:border-teal-300"
        >
          <Search className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? `Analyzing (${simulatedProgress}%)...` : 'Run Live Dissection'}</span>
        </button>
      </div>

      {/* Target specs banner */}
      <div className="p-6 border-b border-[#242830] grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#12151B] font-mono text-xs light:bg-gray-100/70 light:border-gray-200">
        <div>
          <span className="text-gray-500 uppercase block text-[10px]">APPLICATION TARGET</span>
          <span className="text-cyan-400 font-bold text-sm light:text-teal-700">{REVERSE_ENG_LAB_DATA.target}</span>
        </div>
        <div>
          <span className="text-gray-500 uppercase block text-[10px]">PACKAGE IDENTIFIER</span>
          <span className="text-gray-300 font-medium light:text-gray-800">{REVERSE_ENG_LAB_DATA.packageId}</span>
        </div>
        <div>
          <span className="text-gray-500 uppercase block text-[10px]">RUNTIME ENGINE</span>
          <span className="text-gray-300 font-medium light:text-gray-800">{REVERSE_ENG_LAB_DATA.architecture}</span>
        </div>
        <div>
          <span className="text-gray-500 uppercase block text-[10px]">AUDIT STATUS</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1 light:text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Passed 100%</span>
          </span>
        </div>
      </div>

      {/* Inspector tab selector */}
      <div className="flex border-b border-[#242830] bg-[#0A0C0E] px-6 gap-2 text-xs font-mono light:bg-gray-50 light:border-gray-200">
        <button
          onClick={() => setActiveInspector('static')}
          className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
            activeInspector === 'static'
              ? 'border-cyan-400 text-cyan-400 light:border-teal-600 light:text-teal-700'
              : 'border-transparent text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
          }`}
        >
          <FileCode2 className="w-4 h-4" />
          <span>STATIC ANALYSIS</span>
        </button>

        <button
          onClick={() => setActiveInspector('dynamic')}
          className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
            activeInspector === 'dynamic'
              ? 'border-cyan-400 text-cyan-400 light:border-teal-600 light:text-teal-700'
              : 'border-transparent text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>DYNAMIC ANALYSIS</span>
        </button>

        <button
          onClick={() => setActiveInspector('hex')}
          className={`py-3 px-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
            activeInspector === 'hex'
              ? 'border-cyan-400 text-cyan-400 light:border-teal-600 light:text-teal-700'
              : 'border-transparent text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>DEX STRINGS & BYTECODE</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-6">
        {activeInspector === 'static' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-[#242830] light:border-gray-200">
              <span>MANIFEST & COMPILATION ARTIFACTS</span>
              <span className="text-cyan-400 light:text-teal-700">STATIC AUDIT COMPLETE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REVERSE_ENG_LAB_DATA.staticItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg bg-[#15181D] border border-[#242830] space-y-2 light:bg-gray-50 light:border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white light:text-gray-900">{item.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 light:bg-emerald-50 light:text-emerald-700 font-semibold">
                      ✓ {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed light:text-gray-600 font-sans">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeInspector === 'dynamic' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-[#242830] light:border-gray-200">
              <span>SANDBOX RUNTIME & NETWORK TRACE</span>
              <span className="text-emerald-400 light:text-emerald-700">TRACE MONITOR: VERIFIED HEALTHY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REVERSE_ENG_LAB_DATA.dynamicItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg bg-[#15181D] border border-[#242830] space-y-2 light:bg-gray-50 light:border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white light:text-gray-900">{item.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700 font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed light:text-gray-600 font-sans">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeInspector === 'hex' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="text-gray-400 flex items-center justify-between pb-1 border-b border-[#242830] light:border-gray-200">
              <span>DISASSEMBLED CONSTANT POOL & STRINGS</span>
              <span className="text-gray-500">classes.dex [DEX 039 format]</span>
            </div>

            <div className="p-4 rounded-lg bg-[#0A0C0E] border border-[#242830] overflow-x-auto space-y-1.5 text-gray-300 light:bg-gray-900 light:text-gray-200">
              <div className="text-gray-500">// String table extracted during static pass</div>
              <div className="flex gap-4">
                <span className="text-purple-400">0x0000104A</span>
                <span className="text-yellow-300">"com.example.studymate.DATABASE_VAULT"</span>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400">0x00001068</span>
                <span className="text-yellow-300">"CREATE TABLE IF NOT EXISTS timetable_tasks (...)"</span>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400">0x000010C2</span>
                <span className="text-emerald-400">"PRAGMA foreign_keys = ON;"</span>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400">0x00001104</span>
                <span className="text-blue-400">{"\"Lcom/example/studymate/PomodoroService;->startTimer\""}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400">0x00001140</span>
                <span className="text-gray-400">"No dangerous reflection or dynamic classloading found."</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer disclaimer */}
      <div className="px-6 py-3 bg-[#0A0C0E] border-t border-[#242830] text-[11px] text-gray-500 font-mono flex items-center justify-between light:bg-gray-50 light:border-gray-200">
        <span>Framework: Structured reverse engineering analysis for architectural understanding.</span>
        <span className="text-cyan-400 light:text-teal-700">100% Read-Only Safety</span>
      </div>
    </div>
  );
};
