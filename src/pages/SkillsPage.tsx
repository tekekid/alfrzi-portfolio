import React, { useState } from 'react';
import { 
  Smartphone, 
  Layout, 
  Palette, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Info,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { SKILL_MODULES, SKILL_INTERACTION_LABELS } from '../data/skills';
import { ReverseEngLab } from '../components/skills/ReverseEngLab';
import { AppMockup, WebMockup, UiDesignMockup, ReverseMockup } from '../components/skills/SkillMockups';

export const SkillsPage: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const getModuleMockup = (type: string) => {
    switch (type) {
      case 'app': return <AppMockup />;
      case 'web': return <WebMockup />;
      case 'uiux': return <UiDesignMockup />;
      case 'reverse': return <ReverseMockup />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-20">
      {/* HEADER */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>03 // MY TECHNICAL LABORATORY</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318]">
          Technical Laboratory
        </h1>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          Bukan daftar persentase artifisial, melainkan empat modul laboratorium modular tempat teknologi diuji, diterapkan, dan dievaluasi secara mendalam.
        </p>

        {/* Hover Interaction Indicator Bar */}
        <div className="h-10 px-4 rounded-lg bg-[#101216] border border-[#242830] flex items-center justify-between font-mono text-xs text-gray-400 light:bg-white light:border-gray-200">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 light:text-teal-700" />
            <span>Interactive Tooltip:</span>
          </div>
          <span className="text-cyan-400 font-medium light:text-teal-700">
            {hoveredSkill ? (
              <span>{hoveredSkill} → {SKILL_INTERACTION_LABELS[hoveredSkill] || 'Specialized Engineering Capability'}</span>
            ) : (
              <span className="text-gray-500">Hover over any skill tag below to inspect context</span>
            )}
          </span>
        </div>
      </div>

      {/* FOUR LABORATORY MODULES */}
      <div className="space-y-16">
        {SKILL_MODULES.map((mod) => (
          <div
            key={mod.id}
            className="rounded-2xl border border-[#242830] bg-[#101216] overflow-hidden shadow-xl transition-all light:bg-white light:border-[#E2E5E9]"
          >
            {/* Module Title Header */}
            <div className="px-6 sm:px-8 py-4 bg-[#0A0C0E] border-b border-[#242830] flex items-center justify-between light:bg-gray-50 light:border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 light:bg-teal-50 light:text-teal-700">
                  {getModuleIcon(mod.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400 light:text-teal-700 font-bold">
                      MODULE {mod.moduleNumber}
                    </span>
                    <span className="text-gray-500 font-mono text-xs">/ LAB</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white light:text-gray-900">
                    {mod.title}
                  </h2>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-gray-500">
                LABORATORY SPECIFICATION
              </span>
            </div>

            {/* Module Body Split */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Descriptions, Technologies & Focus */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed light:text-gray-600 font-sans">
                  {mod.description}
                </p>

                {/* Technology Pills with Hover micro-interactions */}
                <div className="space-y-2">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block">
                    TECHNOLOGY & STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {mod.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setHoveredSkill(tech.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group relative cursor-pointer px-3 py-1.5 rounded-lg bg-[#15181D] border border-[#242830] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-xs font-mono light:bg-gray-100 light:border-gray-200"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-gray-200 group-hover:text-cyan-400 light:text-gray-800 light:group-hover:text-teal-700">
                            {tech.name}
                          </span>
                          {tech.badge && (
                            <span className="text-[9px] px-1 rounded bg-cyan-500/10 text-cyan-400 light:bg-teal-100 light:text-teal-800">
                              {tech.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Focus areas */}
                <div className="space-y-2 pt-2 border-t border-[#242830] light:border-gray-200">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block">
                    CORE ENGINEERING FOCUS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 light:text-gray-700">
                    {mod.focusAreas.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Custom Mini Visual Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center">
                {getModuleMockup(mod.previewType)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION: INSIDE THE LAB (REVERSE ENGINEERING LAB WORKBENCH) */}
      <section className="space-y-6 pt-6 border-t border-[#242830] light:border-gray-200">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
            <span>REVERSE ENGINEERING LAB // TELEMETRY BENCH</span>
            <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#F5F7FA] light:text-[#111318]">
            Inside the Lab
          </h2>
          <p className="text-sm text-gray-400 light:text-gray-600 font-sans">
            Inspeksi terstruktur terhadap paket aplikasi, integritas Dalvik bytecode, dan keamanan bridge native.
          </p>
        </div>

        {/* Reverse Engineering Lab Interactive Component */}
        <ReverseEngLab />
      </section>
    </div>
  );
};
