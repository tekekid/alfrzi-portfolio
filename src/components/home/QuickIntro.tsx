import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MapPin, Target, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/socials';

export const QuickIntro: React.FC = () => {
  return (
    <section className="py-20 border-t border-[#242830] transition-colors light:border-[#E2E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Number */}
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-6 light:text-teal-700">
          <span>01 — ABOUT</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] light:text-[#111318] leading-[1.15]">
              I build, analyze, and improve digital systems.
            </h2>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Bagi saya, rekayasa perangkat lunak adalah konvergensi antara logika komputasi, keanggunan visual, dan rasa ingin tahu yang tak ada habisnya terhadap arsitektur sistem. Setiap baris kode disusun tidak hanya untuk membuat fitur berfungsi, tetapi untuk memastikan performa yang terprediksi, kemudahan pemeliharaan, dan kenyamanan pengguna.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
              Dari aplikasi mobile offline-first seperti StudyMate hingga dekonstruksi biner aplikasi Android, saya memperlakukan setiap proyek sebagai studi mendalam tentang bagaimana software dapat dioptimalkan hingga ke inti dasarnya.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors light:text-teal-700 light:hover:text-teal-800 group"
              >
                <span>Read Full Engineering Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Technical Metadata Board */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#242830] bg-[#101216] p-6 space-y-6 light:bg-white light:border-[#E2E5E9] shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#242830] light:border-gray-200">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest light:text-gray-500">
                  METADATA MANIFEST
                </span>
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 light:bg-teal-50 light:text-teal-700">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Location */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-500 uppercase tracking-wider flex items-center gap-1.5 light:text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
                    LOCATION
                  </span>
                  <span className="font-medium text-[#F5F7FA] light:text-[#111318] text-right">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                {/* Focus */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-500 uppercase tracking-wider flex items-center gap-1.5 light:text-gray-400">
                    <Target className="w-3.5 h-3.5 text-blue-400" />
                    FOCUS
                  </span>
                  <span className="font-medium text-[#F5F7FA] light:text-[#111318] text-right">
                    Software Development
                  </span>
                </div>

                {/* Interest */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-500 uppercase tracking-wider flex items-center gap-1.5 light:text-gray-400">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    INTEREST
                  </span>
                  <span className="font-medium text-[#F5F7FA] light:text-[#111318] text-right">
                    Technology · Design · Research
                  </span>
                </div>

                {/* Currently */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-500 uppercase tracking-wider flex items-center gap-1.5 light:text-gray-400">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    CURRENTLY
                  </span>
                  <span className="font-medium text-emerald-400 light:text-emerald-700 text-right">
                    Building & Exploring
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#242830] light:border-gray-200 text-[11px] text-gray-500 font-sans">
                Active in open source investigation, offline systems, and design ergonomics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
