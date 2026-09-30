import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Search, Radio, MessageSquare, ShoppingBag, ArrowUpRight, Check } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  'seo-strategy': <Search className="w-5 h-5 text-amber-400" />,
  'social-listening': <Radio className="w-5 h-5 text-cyan-400" />,
  'customer-experience': <MessageSquare className="w-5 h-5 text-emerald-400" />,
  'ecommerce-web': <ShoppingBag className="w-5 h-5 text-amber-400" />
};

export const ServicesBento: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 md:py-28 relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Precision Marketing Capabilities Engineered for Real Commercial Scale.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Eliminating guesswork through data-backed search mechanics, enterprise crisis listening, and conversion-optimized web properties.
          </p>
        </div>

        {/* Bento Grid: Asymmetric 2-column or wide featured layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const isMarquee = index === 0 || index === 1;
            return (
              <div
                key={service.id}
                className="relative bg-[#0d0f16] border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-7 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Editorial Index & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800/60 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        {serviceIcons[service.id]}
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                        {service.number}. CAPABILITY
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                      <span>Verified Practice</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-400/90 mt-1">
                    {service.tagline}
                  </p>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-neutral-300 mt-3.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-5 border-t border-neutral-800/60 space-y-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tool Badges */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[11px] font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
