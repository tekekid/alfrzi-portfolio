import React from 'react';
import { Hammer, Search, TrendingUp, Compass, Calendar, ArrowRight, Code2, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TIMELINE_DATA } from '../data/timeline';
import { PERSONAL_INFO } from '../data/socials';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-20">
      {/* SECTION HEADER */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>01 // PROFILE & PHILOSOPHY</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318] leading-tight">
          More Than Just Writing Code.
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          Bagi seorang software engineer, membuat kode berhasil dikompilasi hanyalah langkah awal. Kualitas sejati terletak pada bagaimana kode tersebut berinteraksi dengan memori, menghormati baterai pengguna, dan menyuguhkan antarmuka yang bebas friksi.
        </p>
      </div>

      {/* THREE APPROACHES: BUILD · DESIGN · ANALYZE */}
      <section className="space-y-8">
        <div className="border-b border-[#242830] pb-4 flex items-center justify-between light:border-gray-200">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest light:text-gray-500">
            ENGINEERING TRIAD
          </span>
          <span className="font-mono text-xs text-cyan-400 light:text-teal-700">METHODOLOGY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BUILD */}
          <div className="p-8 rounded-xl border border-[#242830] bg-[#101216] space-y-4 light:bg-white light:border-[#E2E5E9]">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 light:bg-teal-50 light:text-teal-700">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider light:text-teal-700">
              PILLAR 01
            </div>
            <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">
              BUILD
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Membangun aplikasi dan website yang memiliki fungsi nyata. Mengutamakan performa native, arsitektur offline-first, dan ekosistem database lokal yang andal tanpa ketergantungan jaringan yang rapuh.
            </p>
          </div>

          {/* DESIGN */}
          <div className="p-8 rounded-xl border border-[#242830] bg-[#101216] space-y-4 light:bg-white light:border-[#E2E5E9]">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 light:bg-blue-50 light:text-blue-700">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-blue-400 uppercase tracking-wider light:text-blue-700">
              PILLAR 02
            </div>
            <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">
              DESIGN
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Menciptakan interface dan pengalaman pengguna yang sederhana, intuitif, dan tenang. Menerapkan skala modular matematis, rasio kontras WCAG AA/AAA, dan micro-interaction yang bermakna.
            </p>
          </div>

          {/* ANALYZE */}
          <div className="p-8 rounded-xl border border-[#242830] bg-[#101216] space-y-4 light:bg-white light:border-[#E2E5E9]">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 light:bg-purple-50 light:text-purple-700">
              <Search className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-purple-400 uppercase tracking-wider light:text-purple-700">
              PILLAR 03
            </div>
            <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">
              ANALYZE
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Memahami bagaimana software bekerja melalui debugging, system telemetry analysis, dekompilasi bytecode DEX/AOT, dan audit keamanan integritas sistem.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: PERSONAL PHILOSOPHY */}
      <section className="p-10 lg:p-14 rounded-2xl border border-[#242830] bg-[#0A0C0E] space-y-8 light:bg-gray-50 light:border-gray-200">
        <div className="font-mono text-xs text-cyan-400 light:text-teal-700">
          PHILOSOPHY MANIFESTO
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-[#F5F7FA] light:text-[#111318] leading-none">
          Build. Analyze. Improve.
        </div>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans max-w-3xl">
          Tiga kata ini bukan sekadar slogan, melainkan siklus berulang dari setiap proyek yang saya garap: kami mengonstruksi solusi secara presisi, membedah struktur internalnya untuk menemukan inefisiensi, dan memolesnya hingga mencapai tingkat keandalan tertinggi.
        </p>
      </section>

      {/* SECTION: DEVELOPER JOURNEY (MINIMALIST TIMELINE) */}
      <section className="space-y-10">
        <div className="border-b border-[#242830] pb-4 flex items-center justify-between light:border-gray-200">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest light:text-gray-500">
            02 // DEVELOPER JOURNEY
          </span>
          <span className="font-mono text-xs text-cyan-400 light:text-teal-700">CHRONOLOGY</span>
        </div>

        <div className="relative border-l border-[#242830] pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12 light:border-gray-300">
          {TIMELINE_DATA.map((milestone, index) => (
            <div key={milestone.year} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#101216] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors light:bg-white light:border-teal-600" />

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400 light:text-teal-700">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">/ Milestone 0{index + 1}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">
                  {milestone.title}
                </h3>

                <div className="font-mono text-xs text-gray-400 light:text-gray-500">
                  {milestone.subtitle}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans max-w-2xl pt-1">
                  {milestone.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                  {milestone.highlights.map((h, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 light:bg-white light:border-gray-200 light:text-gray-700"
                    >
                      • {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTNOTE */}
      <div className="p-8 rounded-xl border border-[#242830] bg-[#101216] flex flex-col sm:flex-row items-center justify-between gap-6 light:bg-white light:border-gray-200">
        <div>
          <h4 className="text-lg font-bold text-white light:text-gray-900">
            Ingin mendiskusikan sistem atau proyek software?
          </h4>
          <p className="text-xs text-gray-400 light:text-gray-600 font-sans mt-1">
            Terbuka untuk kolaborasi teknikal, desain interface, atau diskusi reverse engineering.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shrink-0 light:bg-teal-600 light:text-white"
        >
          Open a Channel →
        </Link>
      </div>
    </div>
  );
};
