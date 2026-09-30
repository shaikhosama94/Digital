import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'seo-audit',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-b border-neutral-800/80 bg-[#08090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Let's Scale Your Organic Footprint & Brand Equity.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Whether you need an enterprise technical SEO overhaul, real-time Meltwater social listening setup, or are seeking a full-time digital strategist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Credentials & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0d0f17] border border-neutral-800 space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-400/40 hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-400/40 hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block">Direct Line</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block">Primary Location</span>
                    <span className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:border-[#0A66C2] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block">Professional Network</span>
                      <span className="text-sm font-semibold text-white group-hover:text-[#70b5f9] transition-colors">
                        linkedin.com/in/shaikhosama94
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#70b5f9]" />
                </a>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
              <span className="font-mono text-white font-semibold block">Response Guarantee</span>
              <p className="leading-relaxed">
                All client proposals and recruitment inquiries receive a personalized audit response or meeting confirmation within 12 business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Proposal Form */}
          <div className="lg:col-span-7 bg-[#0d0f17] border border-neutral-800 rounded-2xl p-6 sm:p-8 relative shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-amber-400 font-semibold">{formState.name}</span>. Shaikh Osama has received your request regarding <span className="text-white font-semibold">{formState.service}</span> and will review your specifications shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        service: 'seo-audit',
                        budget: '$1,000 - $3,000',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Direct Strategy Inquiry
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Submit project parameters for an immediate technical scope.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    Open for Contracts
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. tariq@company.com"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company / Brand */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Company / Website Domain
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. yourcompany.com"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Service Scope */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Service Scope
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-neutral-200 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="seo-audit">Technical SEO & Algorithmic Audit</option>
                      <option value="social-listening">Meltwater Enterprise Social Listening</option>
                      <option value="ecommerce-cro">Shopify SEO & Conversion Rate Optimization</option>
                      <option value="full-time">Full-Time Strategist Employment</option>
                      <option value="general-consultation">General Marketing Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                    Project Brief & Key Challenges
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your current organic rankings, brand listening needs, or technical issues..."
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-black font-semibold text-sm rounded-lg transition-all shadow-lg shadow-amber-400/10 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending Specifications...</span>
                    ) : (
                      <>
                        <span>Submit Strategy Request to Shaikh Osama</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2">
                  <span>Confidentiality & Non-Disclosure respected</span>
                  <span>Direct inbox dispatch</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
