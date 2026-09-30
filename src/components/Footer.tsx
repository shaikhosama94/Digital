import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050609] border-t border-neutral-800/80 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          {/* Brand & Title */}
          <div className="space-y-1">
            <a href="#" className="text-base font-bold text-white font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs text-neutral-400">
              Digital Marketer · SEO Expert · Customer Experience Specialist
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 font-medium text-neutral-300">
            <a href="#experience" className="hover:text-amber-400 transition-colors">Work</a>
            <a href="#capabilities" className="hover:text-amber-400 transition-colors">Capabilities</a>
            <a href="#audit-tool" className="hover:text-amber-400 transition-colors">SEO Audit Tool</a>
            <a href="#serp-lab" className="hover:text-amber-400 transition-colors">SERP Lab</a>
            <a href="#credentials" className="hover:text-amber-400 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors self-start md:self-center"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal, Social & Attribution */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
