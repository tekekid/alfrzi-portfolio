import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Layers, 
  Smartphone, 
  Globe, 
  Palette, 
  Binary,
  FolderKanban,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCategory, Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterOptions: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL' },
    { id: 'app', label: 'APP' },
    { id: 'web', label: 'WEB' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'research', label: 'RESEARCH' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#242830] pb-8 light:border-gray-200">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
            <span>PROJECT LABORATORY // REPOSITORY</span>
            <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318]">
            Curated Systems & Case Studies
          </h1>
          <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
            Setiap proyek diperlakukan sebagai eksperimen rekayasa mendalam: mulai dari arsitektur penyimpanan lokal hingga audit bytecode biner.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg border border-[#242830] bg-[#101216] overflow-x-auto text-xs font-mono light:bg-white light:border-gray-200">
          {filterOptions.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                  isSelected
                    ? 'bg-cyan-500 text-black font-semibold shadow-sm light:bg-teal-600 light:text-white'
                    : 'text-gray-400 hover:text-white light:text-gray-600 light:hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PROJECT SHOWCASE LIST (Varied Layouts: Asymmetric, Split Left/Right, Full-Width) */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => {
          // Layout variation based on index
          const isEven = index % 2 === 0;
          const isFeaturedFull = project.id === 'studymate';

          return (
            <div
              key={project.id}
              className="rounded-2xl border border-[#242830] bg-[#101216] overflow-hidden shadow-2xl transition-all light:bg-white light:border-[#E2E5E9]"
            >
              {isFeaturedFull ? (
                /* Layout 01: Featured Full Showcase (StudyMate) */
                <div className="p-8 sm:p-12 space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242830] pb-4 light:border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 light:bg-teal-50 light:text-teal-700 font-bold">
                        CASE STUDY 01 // FEATURED
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        {project.year} · {project.categoryLabel}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-400 light:text-gray-500">
                      ROLE: {project.role}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-6">
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] light:text-[#111318]">
                        {project.title}
                      </h2>
                      <div className="text-sm font-mono text-cyan-400 light:text-teal-700">
                        {project.subtitle}
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                        "{project.description}"
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 light:bg-gray-100 light:border-gray-200 light:text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Feature Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 light:text-gray-700 pt-2">
                        {project.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          to={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold text-xs font-mono hover:bg-cyan-400 transition-all light:bg-teal-600 light:text-white"
                        >
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Visual: Mobile App Preview Frame */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-64 rounded-3xl border-4 border-[#242830] bg-[#0A0C0E] p-4 shadow-2xl light:bg-white light:border-gray-300">
                        <div className="w-16 h-1.5 rounded-full bg-gray-700 mx-auto mb-3"></div>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-[#15181D] border border-[#242830] space-y-2 light:bg-gray-50 light:border-gray-200">
                            <span className="text-[10px] text-cyan-400 block font-bold">STUDYMATE LOCAL VAULT</span>
                            <div className="text-xs font-bold text-white light:text-black">SQLite Indexed Tables</div>
                            <div className="text-[10px] text-gray-400 font-sans">0 Network Latency · Doze Resilient</div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-[11px] light:bg-teal-50">
                            <span className="text-cyan-300 font-bold light:text-teal-800">Deep Work Pomodoro</span>
                            <span className="font-mono text-cyan-400 font-bold light:text-teal-700">25:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : isEven ? (
                /* Layout 02: Image/Visual Left, Information Right */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
                  <div className="lg:col-span-5 p-6 rounded-xl bg-[#0A0C0E] border border-[#242830] font-mono text-xs space-y-3 light:bg-gray-50 light:border-gray-200">
                    <div className="flex items-center justify-between text-gray-500 text-[10px] pb-2 border-b border-[#242830] light:border-gray-200">
                      <span>INSPECTION PREVIEW</span>
                      <span className="text-cyan-400 light:text-teal-700">ACTIVE ARTIFACT</span>
                    </div>
                    <div className="space-y-1.5 text-gray-300 light:text-gray-700">
                      <div className="text-cyan-400 font-bold text-sm light:text-teal-700">{project.title}</div>
                      <div className="text-[11px] text-gray-400">{project.subtitle}</div>
                      <div className="p-2.5 rounded bg-[#15181D] border border-[#242830] text-[10px] light:bg-white light:border-gray-200">
                        {project.technologies.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                      <span className="text-cyan-400 light:text-teal-700 font-bold">0{index + 1}</span>
                      <span>/ {project.categoryLabel.toUpperCase()}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] light:text-[#111318]">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 light:bg-gray-100 light:border-gray-200 light:text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242830] bg-[#15181D] text-cyan-400 hover:border-cyan-500/50 transition-colors text-xs font-mono light:bg-gray-100 light:border-gray-200 light:text-teal-700"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* Layout 03: Information Left, Visual Right */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                      <span className="text-blue-400 font-bold">0{index + 1}</span>
                      <span>/ {project.categoryLabel.toUpperCase()}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] light:text-[#111318]">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242830] text-gray-300 light:bg-gray-100 light:border-gray-200 light:text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242830] bg-[#15181D] text-cyan-400 hover:border-cyan-500/50 transition-colors text-xs font-mono light:bg-gray-100 light:border-gray-200 light:text-teal-700"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-xl bg-[#0A0C0E] border border-[#242830] font-mono text-xs space-y-3 light:bg-gray-50 light:border-gray-200">
                    <div className="flex items-center justify-between text-gray-500 text-[10px] pb-2 border-b border-[#242830] light:border-gray-200">
                      <span>TELEMETRY METRICS</span>
                      <span className="text-emerald-400">OPTIMIZED</span>
                    </div>
                    <div className="space-y-2">
                      {project.metrics?.map((m) => (
                        <div key={m.label} className="flex justify-between p-2 rounded bg-[#15181D] border border-[#242830] light:bg-white light:border-gray-200">
                          <span className="text-gray-400">{m.label}</span>
                          <span className="font-bold text-cyan-400 light:text-teal-700">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
