import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FolderKanban, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { DeveloperWorkspace } from '../components/home/DeveloperWorkspace';
import { QuickIntro } from '../components/home/QuickIntro';
import { PhilosophyBanner } from '../components/home/PhilosophyBanner';
import { PROJECTS_DATA } from '../data/projects';
import { PERSONAL_INFO } from '../data/socials';

export const HomePage: React.FC = () => {
  const featuredProject = PROJECTS_DATA.find((p) => p.id === 'studymate') || PROJECTS_DATA[0];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* HERO SECTION — DIGITAL LAB ENTRANCE */}
      <section className="pt-8 sm:pt-14 pb-16 relative overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-6 space-y-6">
              {/* Small status indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 light:bg-teal-50 light:text-teal-700 light:border-teal-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse light:bg-teal-600"></span>
                <span className="tracking-wide uppercase text-[11px] font-medium">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              {/* Big Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318] leading-[1.1]">
                Building Digital Experiences Through Code, Design & Curiosity.
              </h1>

              {/* Subtitle Roles */}
              <div className="text-sm sm:text-base font-mono text-cyan-400/90 font-medium light:text-teal-700">
                {PERSONAL_INFO.roles}
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans max-w-xl">
                {PERSONAL_INFO.bio}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] light:bg-teal-600 light:text-white light:hover:bg-teal-700"
                >
                  <FolderKanban className="w-4 h-4" />
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#242830] bg-[#101216] text-[#F5F7FA] font-medium text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all light:bg-white light:border-gray-300 light:text-gray-800 light:hover:text-teal-700"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Specs footer */}
              <div className="pt-6 border-t border-[#242830]/80 grid grid-cols-3 gap-4 font-mono text-xs text-gray-500 light:border-gray-200">
                <div>
                  <span className="block text-[10px] uppercase text-gray-400">STACK</span>
                  <span className="text-gray-300 light:text-gray-700">Flutter · React</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-gray-400">ANALYSIS</span>
                  <span className="text-gray-300 light:text-gray-700">Bytecode & APK</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-gray-400">LOCATION</span>
                  <span className="text-gray-300 light:text-gray-700">Indonesia (WIB)</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DEVELOPER WORKSPACE */}
            <div className="lg:col-span-6">
              <DeveloperWorkspace />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: QUICK INTRO */}
      <QuickIntro />

      {/* FEATURED CASE STUDY SHOWCASE (STUDYMATE) */}
      <section className="py-16 border-t border-[#242830] transition-colors light:border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
                <span>02 — FEATURED CASE STUDY</span>
                <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] light:text-[#111318]">
                StudyMate Platform
              </h2>
              <p className="text-sm text-gray-400 light:text-gray-600 font-sans">
                Student Productivity Platform · Offline-First Architecture
              </p>
            </div>

            <Link
              to="/projects/studymate"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 light:text-teal-700 transition-colors group"
            >
              <span>Explore Detailed Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Project Big Card */}
          <div className="rounded-2xl border border-[#242830] bg-[#101216] overflow-hidden shadow-2xl transition-all light:bg-white light:border-[#E2E5E9]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700">
                    FEATURED PROJECT 01
                  </span>
                  <span className="text-xs text-gray-500 font-mono">2025 · Mobile Application</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] light:text-[#111318]">
                  {featuredProject.title}
                </h3>

                <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                  {featuredProject.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 light:bg-gray-100 light:border-gray-200 light:text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#242830] light:border-gray-200 font-mono text-xs">
                  {featuredProject.metrics?.map((m) => (
                    <div key={m.label}>
                      <span className="block text-[10px] text-gray-500 uppercase">{m.label}</span>
                      <span className="font-bold text-cyan-400 light:text-teal-700">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/projects/studymate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#15181D] border border-[#242830] text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all text-xs font-mono light:bg-gray-100 light:border-gray-300 light:text-teal-700"
                  >
                    <span>View Case Study Structure (01 - 10)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visual Showcase: Smartphone Mockups */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 rounded-3xl border-4 border-[#242830] bg-[#0A0C0E] p-4 shadow-2xl light:bg-white light:border-gray-300">
                  <div className="w-16 h-1.5 rounded-full bg-gray-700 mx-auto mb-3"></div>
                  
                  {/* Smartphone UI Mockup */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pb-1 border-b border-[#242830]">
                      <span className="font-bold text-white light:text-black">StudyMate</span>
                      <span className="text-cyan-400">Offline DB</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1.5 light:bg-gray-50 light:border-gray-200">
                      <div className="text-[10px] text-gray-400 uppercase">Jadwal Kuliah Hari Ini</div>
                      <div className="text-xs font-semibold text-white light:text-black">Sistem Terdistribusi</div>
                      <div className="text-[10px] text-gray-400 font-sans">Lab Jaringan R401 · 13:00 - 15:30</div>
                    </div>

                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between light:bg-teal-50">
                      <div>
                        <div className="text-[9px] text-gray-400 uppercase">Focus Timer</div>
                        <div className="text-xs font-bold text-cyan-300 light:text-teal-800">25:00 Remaining</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[9px] bg-cyan-500/20 text-cyan-300 font-bold light:bg-teal-200 light:text-teal-900">ACTIVE</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                      <div className="text-[10px] text-gray-400 uppercase">Revision Habit</div>
                      <div className="flex gap-1">
                        <span className="w-5 h-2 rounded bg-cyan-400 inline-block"></span>
                        <span className="w-5 h-2 rounded bg-cyan-400 inline-block"></span>
                        <span className="w-5 h-2 rounded bg-cyan-400 inline-block"></span>
                        <span className="w-5 h-2 rounded bg-cyan-400/30 inline-block"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: PHILOSOPHY BANNER */}
      <PhilosophyBanner />

      {/* SECTION 04: LAB SKILLS TEASER */}
      <section className="py-16 border-t border-[#242830] transition-colors light:border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
                <span>03 — TECHNICAL LABORATORY</span>
                <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] light:text-[#111318]">
                Four Core Engineering Vectors
              </h2>
              <p className="text-sm text-gray-400 light:text-gray-600 font-sans">
                Explored systematically without artificial progress meters.
              </p>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 light:text-teal-700 transition-colors group"
            >
              <span>Explore Technical Lab Modules</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-[#242830] bg-[#101216] space-y-4 hover:border-cyan-500/40 transition-colors light:bg-white light:border-gray-200">
              <span className="font-mono text-xs text-cyan-400 light:text-teal-700">MODULE 01</span>
              <h3 className="text-lg font-bold text-white light:text-gray-900">App Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                Building functional, responsive and reliable mobile applications with Flutter, Dart & SQLite.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#242830] bg-[#101216] space-y-4 hover:border-cyan-500/40 transition-colors light:bg-white light:border-gray-200">
              <span className="font-mono text-xs text-cyan-400 light:text-teal-700">MODULE 02</span>
              <h3 className="text-lg font-bold text-white light:text-gray-900">Web Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                Creating responsive web experiences with React, TypeScript, Vite and atomic styling.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#242830] bg-[#101216] space-y-4 hover:border-cyan-500/40 transition-colors light:bg-white light:border-gray-200">
              <span className="font-mono text-xs text-cyan-400 light:text-teal-700">MODULE 03</span>
              <h3 className="text-lg font-bold text-white light:text-gray-900">UI/UX Design</h3>
              <p className="text-xs text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                Designing interfaces that balance usability, clarity and mathematical typography scales.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#242830] bg-[#101216] space-y-4 hover:border-cyan-500/40 transition-colors light:bg-white light:border-gray-200">
              <span className="font-mono text-xs text-cyan-400 light:text-teal-700">MODULE 04</span>
              <h3 className="text-lg font-bold text-white light:text-gray-900">Reverse Engineering</h3>
              <p className="text-xs text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                Exploring how software works internally through structured APK static and dynamic analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
