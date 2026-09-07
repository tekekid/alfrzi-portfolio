import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/socials';

interface FooterProps {
  onOpenSystemStatus: () => void;
  onOpenEasterEgg: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSystemStatus, onOpenEasterEgg }) => {
  return (
    <footer className="w-full border-t border-[#242830] bg-[#08090B] text-[#9CA3AF] py-14 px-4 sm:px-6 lg:px-8 transition-colors light:bg-[#F7F8FA] light:border-[#E2E5E9] light:text-[#6B7280]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#F5F7FA] tracking-tight light:text-[#111318]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700">
                PROD // LAB
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 light:text-gray-600 font-sans">
              Building digital experiences through code, design and curiosity.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenSystemStatus}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 light:text-emerald-600 light:hover:text-emerald-700 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>SYSTEM ONLINE · 100% OPERATIONAL</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-2.5">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block light:text-gray-500">
                EXPLORE
              </span>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-cyan-400 transition-colors light:hover:text-teal-600">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-cyan-400 transition-colors light:hover:text-teal-600">About</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-cyan-400 transition-colors light:hover:text-teal-600">Projects</Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-cyan-400 transition-colors light:hover:text-teal-600">Skills</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-cyan-400 transition-colors light:hover:text-teal-600">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block light:text-gray-500">
                CONNECT
              </span>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors light:hover:text-teal-600"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors light:hover:text-teal-600"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors light:hover:text-teal-600"
                  >
                    Email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block light:text-gray-500">
                LAB TERMINAL
              </span>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                Developer workstation with isolated local runtime.
              </p>
              <button
                onClick={onOpenEasterEgg}
                className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all light:bg-white light:border-gray-200 light:text-gray-700"
              >
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>$ sudo terminal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#242830]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 light:border-gray-200">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Designed & built from scratch.</span>
            <span className="text-gray-600 light:text-gray-300">•</span>
            <span>React 19 + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
