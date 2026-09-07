import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  BookOpen, 
  Smartphone, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  ShieldCheck, 
  Terminal,
  Play
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const project = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0];
  const { caseStudy } = project;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      {/* Back button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors light:text-gray-600 light:hover:text-teal-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Project Laboratory</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <header className="space-y-6 border-b border-[#242830] pb-12 light:border-gray-200">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700 font-bold">
            CASE STUDY
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 light:text-gray-600">{project.categoryLabel}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 light:text-gray-600">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed light:text-gray-600 font-sans max-w-3xl">
          {project.subtitle} — {project.description}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-[#242830] bg-[#101216] font-mono text-xs light:bg-gray-50 light:border-gray-200">
          <div>
            <span className="text-gray-500 uppercase block text-[10px]">ROLE</span>
            <span className="font-semibold text-white light:text-black">{project.role}</span>
          </div>
          <div>
            <span className="text-gray-500 uppercase block text-[10px]">TIMELINE</span>
            <span className="font-semibold text-white light:text-black">{project.year}</span>
          </div>
          <div>
            <span className="text-gray-500 uppercase block text-[10px]">CATEGORY</span>
            <span className="font-semibold text-cyan-400 light:text-teal-700">{project.categoryLabel}</span>
          </div>
          <div>
            <span className="text-gray-500 uppercase block text-[10px]">CORE TECH</span>
            <span className="font-semibold text-white light:text-black">{project.technologies[0]}</span>
          </div>
        </div>
      </header>

      {/* 01 — OVERVIEW */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>01 — OVERVIEW</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Context & Origin</h2>
        <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          {caseStudy.overview}
        </p>
      </section>

      {/* 02 — PROBLEM */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>02 — PROBLEM</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">The Friction Points</h2>
        <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 text-gray-300 light:text-gray-800 light:bg-red-50/50 light:border-red-200">
          <p className="text-base leading-relaxed font-sans">
            {caseStudy.problem}
          </p>
        </div>
      </section>

      {/* 03 — APPROACH */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>03 — APPROACH</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Architectural Philosophy</h2>
        <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          {caseStudy.approach}
        </p>
      </section>

      {/* 04 — DESIGN */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>04 — DESIGN</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Interface & Ergonomics</h2>
        <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          {caseStudy.design}
        </p>
      </section>

      {/* 05 — DEVELOPMENT */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>05 — DEVELOPMENT</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Implementation & Engineering</h2>
        <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          {caseStudy.development}
        </p>
      </section>

      {/* 06 — CHALLENGES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>06 — CHALLENGES</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Obstacles & Technical Solutions</h2>
        <div className="p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-gray-300 light:text-gray-800 light:bg-yellow-50/50 light:border-yellow-200">
          <p className="text-base leading-relaxed font-sans">
            {caseStudy.challenges}
          </p>
        </div>
      </section>

      {/* 07 — RESULT */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>07 — RESULT</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Measurable Impact & Output</h2>
        <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          {caseStudy.result}
        </p>
      </section>

      {/* 08 — TECHNOLOGY */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>08 — TECHNOLOGY</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Technical Stack Breakdown</h2>
        <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg bg-[#15181D] border border-[#242830] text-cyan-300 light:bg-white light:border-gray-200 light:text-teal-700 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 09 — GALLERY & MOCKUPS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>09 — GALLERY</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Interactive Screen Exhibits</h2>

        <div className="rounded-2xl border border-[#242830] bg-[#101216] p-6 lg:p-8 space-y-6 light:bg-white light:border-[#E2E5E9]">
          {/* Tabs for screens */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[#242830] font-mono text-xs light:border-gray-200">
            {caseStudy.gallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeGalleryIndex === idx
                    ? 'bg-cyan-500 text-black font-bold light:bg-teal-600 light:text-white'
                    : 'text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>

          {/* Active Screen Exhibit Details */}
          {caseStudy.gallery[activeGalleryIndex] && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
              <div className="md:col-span-6 space-y-3">
                <span className="font-mono text-xs text-cyan-400 light:text-teal-700">
                  EXHIBIT 0{activeGalleryIndex + 1}
                </span>
                <h3 className="text-xl font-bold text-white light:text-gray-900">
                  {caseStudy.gallery[activeGalleryIndex].title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                  {caseStudy.gallery[activeGalleryIndex].caption}
                </p>
              </div>

              {/* Smartphone Frame Simulation */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-60 rounded-3xl border-4 border-[#242830] bg-[#08090B] p-4 shadow-xl font-mono text-xs text-gray-300 light:bg-white light:border-gray-300 light:text-gray-800">
                  <div className="w-12 h-1 rounded-full bg-gray-700 mx-auto mb-3"></div>
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>StudyMate</span>
                      <span className="text-cyan-400">09:41 AM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#15181D] border border-[#242830] space-y-1 light:bg-gray-50 light:border-gray-200">
                      <div className="text-[10px] text-cyan-400 uppercase font-bold">
                        {caseStudy.gallery[activeGalleryIndex].tag}
                      </div>
                      <div className="text-xs font-bold text-white light:text-black">
                        {caseStudy.gallery[activeGalleryIndex].title}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 text-center font-bold light:bg-teal-50 light:text-teal-800">
                      Local SQLite Powered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 10 — LINKS */}
      <section className="space-y-4 pt-4 border-t border-[#242830] light:border-gray-200">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>10 — LINKS</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h2 className="text-2xl font-bold text-[#F5F7FA] light:text-[#111318]">Source & Artifacts</h2>

        <div className="flex flex-wrap gap-4 pt-2">
          {caseStudy.links.github && (
            <a
              href={caseStudy.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242830] bg-[#101216] text-[#F5F7FA] text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-colors light:bg-white light:border-gray-300 light:text-gray-800 light:hover:text-teal-700"
            >
              <Github className="w-4 h-4" />
              <span>Repository Source</span>
            </a>
          )}

          {caseStudy.links.demo && (
            <a
              href={caseStudy.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-black text-xs font-mono font-semibold hover:bg-cyan-400 transition-colors light:bg-teal-600 light:text-white"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}

          {caseStudy.links.documentation && (
            <a
              href={caseStudy.links.documentation}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242830] bg-[#101216] text-gray-300 text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-colors light:bg-white light:border-gray-300 light:text-gray-800"
            >
              <BookOpen className="w-4 h-4" />
              <span>Technical Documentation</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
};
