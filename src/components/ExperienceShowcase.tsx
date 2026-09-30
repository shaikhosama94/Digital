import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, ChevronRight, BarChart3, Radio, Globe, Layers, X } from 'lucide-react';

export const ExperienceShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const [activeModalExp, setActiveModalExp] = useState<ExperienceItem | null>(null);

  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 md:py-28 relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Track Record & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Enterprise Experience from Agency Frontlines to Corporate Command Centers.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Hands-on execution spanning Digital Gravity's technical agency rigor, high-growth celebrity e-commerce at SL Creative, and real-time social listening defense at K-Electric.
          </p>
        </div>

        {/* Interactive Layout: Left Company List / Selector + Right Detailed Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector / Timeline */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp, index) => {
              const isSelected = exp.id === selectedId;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`group relative p-5 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-neutral-900/90 border-amber-400/50 shadow-xl shadow-amber-500/5'
                      : 'bg-neutral-950/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40'
                  }`}
                >
                  {/* Subtle active left bar indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-amber-400 rounded-r" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Company Logo Thumbnail */}
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full rounded bg-[#004B87] flex flex-col items-center justify-center font-bold text-white text-[10px]">
                            <span className="text-amber-300">KE</span>
                          </div>
                        )}
                      </div>

                      <div>
                        {/* Quiet Unboxed Metadata */}
                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
                          <span className="text-amber-400 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.period}</span>
                        </div>

                        <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-neutral-300">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isSelected ? 'text-amber-400 translate-x-1' : 'text-neutral-600 group-hover:text-neutral-400'
                      }`}
                    />
                  </div>

                  <p className="text-xs text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {exp.highlight}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dossier for Selected Experience */}
          <div className="lg:col-span-7 bg-[#0d0f17] border border-neutral-800 rounded-2xl p-6 sm:p-8 relative">
            
            {/* Top Bar for Selected Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-700/80 p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
                  {activeExp.logo ? (
                    <img
                      src={activeExp.logo}
                      alt={`${activeExp.company} logo`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded bg-[#004B87] flex flex-col items-center justify-center font-bold text-white text-xs">
                      <span className="text-amber-300">KE</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                    <span>{activeExp.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">{activeExp.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeExp.company}
                  </h3>
                  <p className="text-sm font-medium text-amber-300 mt-0.5">
                    {activeExp.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalExp(activeExp)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700/80 rounded-lg hover:border-neutral-500 transition-all self-start sm:self-center"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

            {/* Strategic Overview & Image (if available) */}
            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {activeExp.description}
              </p>

              {activeExp.featuredImage && (
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 max-h-48 group">
                  <img
                    src={activeExp.featuredImage}
                    alt={`${activeExp.company} operational environment`}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-neutral-200">
                      {activeExp.company} — Operational Focus & Strategy
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quantified Business Outcomes (Strictly Adjacent to Claims) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5 border-y border-neutral-800/80 font-mono">
              {activeExp.metrics.map((metric, i) => (
                <div key={i} className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/60">
                  <span className="text-[11px] text-neutral-400 block">{metric.label}</span>
                  <span className="text-xl font-bold text-amber-400 tracking-tight block mt-1 tabular-nums">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Responsibilities */}
            <div className="pt-6 space-y-3">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Direct Responsibilities & Execution
              </h4>
              <ul className="space-y-2.5">
                {activeExp.keyResponsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Applied */}
            <div className="pt-6 mt-6 border-t border-neutral-800/60">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                Specialized Software & Protocols
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {activeExp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 bg-neutral-900 text-neutral-300 rounded border border-neutral-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalExp(null)}
        >
          <div
            className="bg-[#0e1017] border border-neutral-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-amber-400">{activeModalExp.period}</span>
                <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                  {activeModalExp.company}
                </h3>
                <p className="text-xs text-neutral-400">{activeModalExp.role} · {activeModalExp.location}</p>
              </div>
              <button
                onClick={() => setActiveModalExp(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Role Objective & Scope
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {activeModalExp.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Key Metrics Delivered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                  {activeModalExp.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                      <span className="text-xs text-neutral-400 block">{m.label}</span>
                      <span className="text-lg font-bold text-amber-400 mt-1 block">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Detailed Operational Workflows
                </h4>
                <div className="space-y-2.5">
                  {activeModalExp.keyResponsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <span className="text-amber-400 font-mono text-xs mt-0.5">0{i + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Verified Resume Experience Record</span>
                <button
                  onClick={() => setActiveModalExp(null)}
                  className="px-4 py-2 bg-amber-400 text-black font-semibold rounded hover:bg-amber-300"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
