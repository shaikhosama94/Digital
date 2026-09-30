/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyLogosBar } from './components/CompanyLogosBar';
import { PortfolioWorksSection } from './components/PortfolioWorksSection';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { ServicesBento } from './components/ServicesBento';
import { AuditSimulator } from './components/AuditSimulator';
import { KeywordSerpLab } from './components/KeywordSerpLab';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToAudit = () => {
    const el = document.getElementById('audit-tool');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-200 selection:bg-amber-400 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAudit={scrollToAudit}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenAudit={scrollToAudit}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Verified Company Logos & Brands Worked With */}
        <CompanyLogosBar />

        {/* Featured Client Work & Campaigns (Google Drive Portfolio Showcase) */}
        <PortfolioWorksSection />

        {/* Professional Experience Dossier */}
        <ExperienceShowcase />

        {/* Core Capabilities & Bento Grid */}
        <ServicesBento />

        {/* Real-Time Interactive SEO Diagnostic Simulator */}
        <AuditSimulator />

        {/* Keyword Intelligence & SERP Position Lab */}
        <KeywordSerpLab />

        {/* Verified Credentials, Education & Leadership */}
        <CredentialsSection />

        {/* Direct Contact & Collaboration Proposal */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Curriculum Vitae Full Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
