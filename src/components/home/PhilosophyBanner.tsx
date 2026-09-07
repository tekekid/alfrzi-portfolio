import React from 'react';
import { Hammer, Search, TrendingUp } from 'lucide-react';

export const PhilosophyBanner: React.FC = () => {
  return (
    <section className="py-24 border-t border-[#242830] bg-[#0A0C0E] transition-colors light:bg-[#F0F2F5] light:border-[#E2E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-8 light:text-teal-700">
          <span>02 — PHILOSOPHY</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>

        {/* Large Typography Statement */}
        <div className="space-y-2 mb-12">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#F5F7FA] light:text-[#111318] uppercase leading-[0.95]">
            Build.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 light:from-teal-600 light:to-blue-600">
              Analyze.
            </span><br />
            Improve.
          </h2>
        </div>

        {/* 3 Pillars description cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#242830] light:border-gray-200">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#15181D] border border-[#242830] flex items-center justify-center text-cyan-400 light:bg-white light:border-gray-200 light:text-teal-600">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7FA] light:text-[#111318]">01. Build</h3>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Membangun aplikasi dan website yang memiliki fungsi nyata, arsitektur offline-first yang kokoh, dan pengalaman pengguna yang halus tanpa distraksi.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#15181D] border border-[#242830] flex items-center justify-center text-blue-400 light:bg-white light:border-gray-200 light:text-blue-600">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7FA] light:text-[#111318]">02. Analyze</h3>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Memahami bagaimana software bekerja melalui inspeksi bytecode, dekompilasi biner APK, audit keamanan sistem, dan analisis konsumsi memori.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#15181D] border border-[#242830] flex items-center justify-center text-purple-400 light:bg-white light:border-gray-200 light:text-purple-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7FA] light:text-[#111318]">03. Improve</h3>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Menghilangkan hambatan performa, memperketat aksesibilitas WCAG, dan memangkas latency untuk menciptakan produk digital yang tahan uji waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
