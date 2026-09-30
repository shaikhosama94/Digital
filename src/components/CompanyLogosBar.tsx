import React from 'react';
import { COMPANIES_WORKED_WITH, CompanyLogoItem } from '../data/portfolioData';
import { Briefcase, Building2, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const CompanyLogosBar: React.FC = () => {
  return (
    <section id="companies" className="relative py-12 md:py-16 border-y border-neutral-800/80 bg-neutral-950/60 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 mb-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Industry Footprint</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
              Companies & Brands I Have Spearheaded Growth For
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
            From Pakistan&apos;s largest electric utility enterprise to premier digital marketing agencies, celebrity aesthetic clinics, and apparel e-commerce brands.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {COMPANIES_WORKED_WITH.map((company: CompanyLogoItem) => {
            return (
              <div
                key={company.id}
                className="group relative flex flex-col justify-between p-4 rounded-xl bg-[#0d0f17] border border-neutral-800/80 hover:border-amber-400/50 hover:bg-neutral-900/80 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Logo & Category Top Bar */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center p-1.5 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain filter brightness-95 contrast-105"
                      />
                    ) : (
                      // Custom K-Electric badge
                      <div className="w-full h-full rounded bg-[#004B87] flex flex-col items-center justify-center font-bold text-white leading-none">
                        <span className="text-[13px] tracking-tight text-amber-300">KE</span>
                        <span className="text-[7px] text-white/80 font-mono scale-90">POWER</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800/60 px-2 py-0.5 rounded border border-neutral-700/50 text-right truncate max-w-[110px]">
                    {company.category}
                  </span>
                </div>

                {/* Company Name & Role */}
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {company.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-mono mt-0.5 line-clamp-1">
                    {company.role}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {company.highlight}
                  </p>
                </div>

                {/* Bottom Verified Pill */}
                <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">Verified Portfolio Role</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
