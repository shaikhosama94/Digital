import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Companies', href: '#companies' },
    { label: 'Portfolio', href: '#portfolio-work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Audit Tool', href: '#audit-tool' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
          <span className="font-display tracking-tight text-base sm:text-lg">{PERSONAL_INFO.name}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 rounded-lg hover:border-neutral-500 hover:bg-neutral-800/60 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>View CV</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-amber-400 rounded-lg hover:bg-amber-300 shadow-md shadow-amber-400/10 hover:shadow-amber-400/25 transition-all whitespace-nowrap"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-medium text-neutral-300 border border-neutral-800 rounded bg-neutral-900"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-neutral-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-300 hover:text-amber-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full text-left py-2 text-xs font-medium text-amber-400"
            >
              Launch SEO Audit Simulator →
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-black bg-amber-400 rounded"
            >
              Contact Shaikh Osama
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
