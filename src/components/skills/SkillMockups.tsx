import React from 'react';
import { Smartphone, Layout, Palette, Terminal, Play, Check, Cpu } from 'lucide-react';

export const AppMockup: React.FC = () => (
  <div className="w-full max-w-[240px] mx-auto rounded-2xl border-2 border-[#242830] bg-[#0A0C0E] p-3 shadow-xl light:bg-white light:border-gray-300">
    <div className="w-10 h-1 rounded-full bg-gray-700 mx-auto mb-2.5"></div>
    <div className="space-y-2 font-mono text-[10px]">
      <div className="flex items-center justify-between text-gray-400">
        <span className="font-bold text-white light:text-gray-900">StudyMate</span>
        <span className="text-cyan-400 light:text-teal-600">OFFLINE</span>
      </div>
      <div className="p-2 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
        <div className="text-[10px] font-semibold text-cyan-300 light:text-teal-700">Jadwal Kuliah</div>
        <div className="text-[9px] text-gray-400 font-sans">08:00 — Basis Data Lanjut</div>
      </div>
      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between light:bg-teal-50 light:border-teal-200">
        <span className="text-cyan-300 font-bold light:text-teal-800">Pomodoro: 25:00</span>
        <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400 light:text-teal-700" />
      </div>
    </div>
  </div>
);

export const WebMockup: React.FC = () => (
  <div className="w-full rounded-xl border border-[#242830] bg-[#0A0C0E] overflow-hidden font-mono text-[11px] shadow-xl light:bg-white light:border-gray-300">
    <div className="px-3 py-2 bg-[#15181D] border-b border-[#242830] flex items-center gap-1.5 light:bg-gray-100 light:border-gray-200">
      <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
      <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
      <span className="ml-2 text-[9px] text-gray-400">localhost:3000 — Vite + React 19</span>
    </div>
    <div className="p-3 space-y-2">
      <div className="flex items-center justify-between text-gray-400 text-[10px]">
        <span>&lt;App /&gt; DOM TREE</span>
        <span className="text-emerald-400">0.2ms Render</span>
      </div>
      <div className="p-2 rounded bg-[#15181D] border border-[#242830] text-gray-300 text-[10px] space-y-0.5 light:bg-gray-50 light:border-gray-200 light:text-gray-800">
        <div><span className="text-cyan-400">&lt;Navbar</span> brand="DEV" /&gt;</div>
        <div><span className="text-cyan-400">&lt;WorkspaceContainer&gt;</span></div>
        <div className="pl-3 text-gray-500">// Zero Layout Shift guaranteed</div>
        <div><span className="text-cyan-400">&lt;/WorkspaceContainer&gt;</span></div>
      </div>
    </div>
  </div>
);

export const UiDesignMockup: React.FC = () => (
  <div className="w-full rounded-xl border border-[#242830] bg-[#0A0C0E] p-3 font-mono text-[10px] shadow-xl light:bg-white light:border-gray-300 space-y-2.5">
    <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-[#242830] light:border-gray-200">
      <span className="text-[9px] uppercase tracking-wider">DESIGN TOKENS & SCALE</span>
      <span className="text-cyan-400 light:text-teal-700">1.25 RATIO</span>
    </div>
    {/* Swatches */}
    <div className="grid grid-cols-4 gap-1.5">
      <div className="h-6 rounded bg-[#08090B] border border-gray-700 flex items-center justify-center text-[8px] text-gray-400">Base</div>
      <div className="h-6 rounded bg-[#101216] border border-gray-700 flex items-center justify-center text-[8px] text-gray-400">Surface</div>
      <div className="h-6 rounded bg-[#06B6D4] flex items-center justify-center text-[8px] text-black font-bold">Accent</div>
      <div className="h-6 rounded bg-[#3B82F6] flex items-center justify-center text-[8px] text-white font-bold">Blue</div>
    </div>
    {/* Type scale preview */}
    <div className="p-2 rounded bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
      <div className="text-xs font-bold text-white light:text-gray-900 font-sans">Display Heading (1.25^4)</div>
      <div className="text-[10px] text-gray-400 font-sans">Body Readability 65ch · Contrast 7.8:1</div>
    </div>
  </div>
);

export const ReverseMockup: React.FC = () => (
  <div className="w-full rounded-xl border border-[#242830] bg-[#0A0C0E] p-3 font-mono text-[10px] shadow-xl light:bg-gray-900 light:border-gray-700 text-gray-300 space-y-2">
    <div className="flex items-center justify-between text-gray-500 pb-1 border-b border-[#242830]">
      <span>DISASSEMBLER // ART RUNTIME</span>
      <span className="text-emerald-400">DEX 039</span>
    </div>
    <div className="space-y-0.5">
      <div className="text-purple-400">.method public onCreate()V</div>
      <div className="pl-2 text-yellow-300">const/4 v0, 0x1</div>
      <div className="pl-2 text-cyan-300">{"invoke-direct {p0, v0}, LApp;->init()"}</div>
      <div className="pl-2 text-emerald-400">return-void</div>
      <div className="text-purple-400">.end method</div>
    </div>
    <div className="pt-1 text-[9px] text-gray-500 flex items-center justify-between">
      <span>ARM64 ABI</span>
      <span className="text-cyan-400">Zero Vulnerabilities</span>
    </div>
  </div>
);
