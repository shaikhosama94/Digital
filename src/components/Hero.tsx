import React from 'react';
import { ArrowRight, Search, Sparkles, MapPin, Mail, Linkedin, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, osamaPortrait } from '../data/portfolioData';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient glow effects reminiscent of Digital Gravity agency styling */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Meta indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-300">Available for Strategic SEO & Digital Roles</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400 inline" />
                Karachi & Remote
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Organic Growth</span> & Enterprise Brand Resilience.
            </h1>

            {/* Concrete Value Statement */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Digital Marketer and SEO Expert formerly at{' '}
              <span className="text-amber-300 font-medium">Digital Gravity</span> and{' '}
              <span className="text-neutral-200 font-medium">Dr. Shaista Lodhi (SL Creative)</span>, now spearheading social listening & brand health intelligence at{' '}
              <span className="text-white font-medium">K-Electric</span>.
            </p>

            {/* Quick Experience Pills */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-400">
              <span className="text-neutral-200">K-Electric</span>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-200">Digital Gravity</span>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-200">SL Creative</span>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-200">Jinnah Builders</span>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-200">Nakoosh</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run Interactive SEO Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-600 rounded-lg transition-all cursor-pointer"
              >
                <span>Read Full Resume / CV</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-2 flex items-center gap-6 text-xs text-neutral-400">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>linkedin.com/in/shaikhosama94</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Proof Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Card Container with subtle luxury gradient border */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 shadow-2xl">
                <div className="relative rounded-2xl bg-[#0d0f15] p-5 sm:p-6 overflow-hidden">
                  
                  {/* Photo & Identity Lockup */}
                  <div className="flex items-center gap-5 pb-5 border-b border-neutral-800/80">
                    <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-2xl overflow-hidden border-2 border-amber-400/40 shrink-0 bg-neutral-900 shadow-xl shadow-amber-400/10 group">
                      <img
                        src={osamaPortrait}
                        alt="Shaikh Osama"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                        {PERSONAL_INFO.name}
                      </h2>
                      <p className="text-xs text-amber-400 font-mono tracking-wide mt-0.5">
                        SEO EXPERT · DIGITAL MARKETER
                      </p>
                      <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Semrush & HubSpot Certified
                      </p>
                    </div>
                  </div>

                  {/* Quantitative Proof Grid */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-b border-neutral-800/80 font-mono">
                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                      <span className="text-xs text-neutral-400 block">Experience</span>
                      <span className="text-2xl font-bold text-white tracking-tight tabular-nums">3+ Years</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Agency & Enterprise</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                      <span className="text-xs text-neutral-400 block">Keywords Ranked</span>
                      <span className="text-2xl font-bold text-amber-400 tracking-tight tabular-nums">1,200+</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Top 10 Google SERP</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                      <span className="text-xs text-neutral-400 block">Brand Intelligence</span>
                      <span className="text-2xl font-bold text-cyan-400 tracking-tight tabular-nums">250K+</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Monthly Mentions</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                      <span className="text-xs text-neutral-400 block">Sentiment CSAT</span>
                      <span className="text-2xl font-bold text-emerald-400 tracking-tight tabular-nums">98.4%</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Resolution Fidelity</span>
                    </div>
                  </div>

                  {/* Active Toolset Micro-Badges */}
                  <div className="pt-4">
                    <span className="text-[11px] font-mono text-neutral-400 block mb-2">
                      CORE TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-neutral-300 font-mono">
                      {['Meltwater', 'SAP S/4HANA', 'Semrush', 'Shopify', 'WordPress', 'Google Search Console', 'Ahrefs'].map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[11px] text-neutral-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#12141c] border border-amber-400/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Digital Gravity Alum</span>
                  <span className="text-[11px] text-neutral-400 block">High-Tier Agency SEO Methods</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Marquee Text Ribbon */}
      <div className="mt-16 sm:mt-24 border-y border-neutral-800/80 bg-neutral-950/60 py-3.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
          {[1, 2].map((iter) => (
            <React.Fragment key={iter}>
              <span className="text-amber-400 font-semibold">SEARCH ENGINE OPTIMIZATION</span>
              <span>·</span>
              <span className="text-neutral-200">MELTWATER SOCIAL LISTENING</span>
              <span>·</span>
              <span className="text-cyan-400">SAP S/4HANA ESCALATION PROTOCOLS</span>
              <span>·</span>
              <span className="text-neutral-200">TECHNICAL SEO AUDITS</span>
              <span>·</span>
              <span className="text-amber-400">SHOPIFY & WORDPRESS OPTIMIZATION</span>
              <span>·</span>
              <span className="text-neutral-200">COMPETITOR SERP INTEL</span>
              <span>·</span>
              <span className="text-emerald-400">ENTERPRISE BRAND DEFENSE</span>
              <span>·</span>
              <span className="text-neutral-200">SEMRUSH CERTIFIED</span>
              <span>·</span>
              <span className="text-neutral-300">DIGITAL GRAVITY ALUMNI</span>
              <span>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
