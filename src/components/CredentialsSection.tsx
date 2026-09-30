import React from 'react';
import { CERTIFICATIONS, EDUCATION, ACHIEVEMENTS, SKILL_GROUPS } from '../data/portfolioData';
import { Award, GraduationCap, Trophy, CheckCircle, ExternalLink, Code2, ShieldCheck } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-20 md:py-28 relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Verified Credentials & Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Technical Education, Industry Certifications & Leadership.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Combining academic software foundations in web design and development with accredited certifications from Semrush, HubSpot, and LinkedIn.
          </p>
        </div>

        {/* 3-Column Bento of Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Certifications (Semrush, HubSpot, Lynda) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d0f16] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-amber-400 block">
                        {cert.issuer}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">
                        {cert.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Formal Education */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Academic Background
              </h3>
            </div>

            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d0f16] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {edu.degree}
                    </h4>
                    {edu.grade && (
                      <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 whitespace-nowrap ml-2">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 block mt-1">
                    {edu.institution}
                  </span>
                  {edu.detail && (
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {edu.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Achievements & Leadership */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Leadership & Volunteering
              </h3>
            </div>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d0f16] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {ach.title}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap ml-2">
                      {ach.period}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-amber-400/90 block mt-0.5">
                    {ach.organization}
                  </span>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Skill Matrix Breakdown */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0c0e15] border border-neutral-800">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Technical Taxonomy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Comprehensive Skill Matrix
              </h3>
            </div>
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-mono font-semibold text-neutral-300 uppercase tracking-wider">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
