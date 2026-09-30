import React, { useRef } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, osamaPortrait } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0f1118] border border-neutral-700/80 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#121520] rounded-t-2xl shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Shaikh Osama — Official Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div
          ref={resumeRef}
          className="p-6 sm:p-10 overflow-y-auto text-neutral-200 space-y-8 bg-[#0b0c12]"
        >
          {/* Header Block matching the original PDF layout */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-neutral-800">
            <div className="flex items-start gap-5">
              <div className="w-24 h-28 rounded-xl overflow-hidden border border-neutral-700 shrink-0 bg-neutral-800">
                <img
                  src={osamaPortrait}
                  alt="Shaikh Osama"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                  SHAIKH OSAMA
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-amber-400 font-mono tracking-wide">
                  Digital Marketer | SEO Expert | Customer Experience Specialist
                </p>
                <p className="text-xs text-neutral-300 max-w-xl pt-2 leading-relaxed">
                  Digital Marketer with three years of experience in SEO, social media marketing, social media listening, customer chat support, and website management. Skilled in managing brand presence, responding to customer queries, monitoring online conversations, and supporting digital marketing initiatives across multiple platforms.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="text-xs font-mono space-y-1.5 shrink-0 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-400">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-neutral-300"
                >
                  linkedin.com/in/shaikhosama94
                </a>
              </div>
            </div>
          </div>

          {/* 2-Column Split: Left Side Expertise & Education | Right Side Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Sidebar (4 cols) */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Expertise */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Core Expertise
                </h4>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-white block">Digital Marketing</span>
                    <ul className="text-neutral-400 list-disc list-inside mt-1 space-y-0.5">
                      <li>SEO (On-Page, Off-Page)</li>
                      <li>Social Media Marketing</li>
                      <li>Social Media Listening</li>
                      <li>Content Marketing</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="font-semibold text-white block">Customer Experience</span>
                    <ul className="text-neutral-400 list-disc list-inside mt-1 space-y-0.5">
                      <li>Customer Chat Support</li>
                      <li>Brand Reputation Management</li>
                      <li>SAP S/4HANA Workflows</li>
                      <li>Meltwater Intelligence</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="font-semibold text-white block">Technical Toolset</span>
                    <ul className="text-neutral-400 list-disc list-inside mt-1 space-y-0.5">
                      <li>Shopify CMS</li>
                      <li>WordPress</li>
                      <li>Adobe Photoshop</li>
                      <li>LinkedIn Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Education
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-white block">Associate Degree in Web Design & Development</span>
                    <span className="text-amber-400 font-mono text-[11px] block">Virtual University of Pakistan ("3.08" CGPA)</span>
                    <span className="text-neutral-400 text-[11px] block mt-0.5">FYP: Electrical Vehicle Web App Information System</span>
                  </div>

                  <div>
                    <span className="font-bold text-white block">Diploma, Advanced DIT</span>
                    <span className="text-neutral-400 text-[11px]">Computer Collegiate, Karachi</span>
                  </div>

                  <div>
                    <span className="font-bold text-white block">HSC, Intermediate</span>
                    <span className="text-neutral-400 text-[11px]">Karachi</span>
                  </div>

                  <div>
                    <span className="font-bold text-white block">SSC</span>
                    <span className="text-neutral-400 text-[11px]">Hamdard Public School, Karachi ("A" Grade)</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Certifications
                </h4>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white">SEO</span>
                    <span className="text-neutral-400 font-mono text-[11px]">LYNDA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Keyword Research</span>
                    <span className="text-neutral-400 font-mono text-[11px]">SEMRUSH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Learning Instagram</span>
                    <span className="text-neutral-400 font-mono text-[11px]">LYNDA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Content Marketing</span>
                    <span className="text-neutral-400 font-mono text-[11px]">LYNDA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Social Media Certified</span>
                    <span className="text-neutral-400 font-mono text-[11px]">HUBSPOT</span>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Hobbies
                </h4>
                <div className="text-xs text-neutral-300 font-mono flex flex-wrap gap-2">
                  <span>Cycling</span> · <span>Volley Ball</span> · <span>Social Media</span> · <span>Blog Reading</span>
                </div>
              </div>

            </div>

            {/* Right Main Body: Work Experience & Achievements (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Work Experience
                </h4>

                {/* 1. K-Electric */}
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">K-ELECTRIC</h5>
                      <span className="text-xs font-medium text-amber-400 block">
                        SocialMedia Listening & Brand Specialist
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Oct 2025 – PRESENT</span>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                    <li>Used Meltwater to track consumer sentiment and extract brand insights.</li>
                    <li>Addressed public queries and escalations across platforms to protect brand image.</li>
                    <li>Managed case-tracking workflows in SAP S/4HANA to support technical operations.</li>
                    <li>Monitored social channels actively to protect and maintain corporate brand health.</li>
                  </ul>
                </div>

                {/* 2. Dr. Shaista Lodhi */}
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">Dr. Shaista Lodhi (SL Creative)</h5>
                      <span className="text-xs font-medium text-amber-400 block">
                        SEO & SOCIAL MEDIA MARKETING MANAGER
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Jan 2023 – Sep 2025</span>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                    <li>ON Page SEO, OFF Page SEO execution for brand authority.</li>
                    <li>Shopify Website Management and conversion optimization.</li>
                    <li>Story, Post Creation, and high-impact visual narratives.</li>
                    <li>Content Writing and scientific cosmetic article writing.</li>
                    <li>Social Media Marketing across digital channels.</li>
                  </ul>
                </div>

                {/* 3. Jinnah Builders */}
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">Jinnah Builders (Bahria Town)</h5>
                      <span className="text-xs font-medium text-amber-400 block">
                        Digital Marketer
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Jan 2022 – Dec 2022</span>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                    <li>ON Page SEO & OFF Page SEO for prime real estate projects.</li>
                    <li>Web Designing & Web Development of property portals.</li>
                    <li>Social Media Marketing & Facebook Lead ADS with high ROI.</li>
                  </ul>
                </div>

                {/* 4. Nakoosh */}
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">Nakoosh (Clothing Brand)</h5>
                      <span className="text-xs font-medium text-amber-400 block">
                        SMM - SEO
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">June 2021 – Dec 2021</span>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                    <li>SEO & Social Media Marketing for seasonal apparel lines.</li>
                    <li>Digital Content Editing and catalog imagery optimization.</li>
                    <li>Website Management and category layout enhancements.</li>
                  </ul>
                </div>

                {/* 5. DIGITAL GRAVITY, KARACHI */}
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">DIGITAL GRAVITY, KARACHI</h5>
                      <span className="text-xs font-medium text-amber-400 block">
                        SEO EXPERT
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Jan 2021 – April 2021</span>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                    <li>Created Marketing Strategy for diversified international and regional clients.</li>
                    <li>On Page SEO & Off Page SEO architecture.</li>
                    <li>Guest Posting Backlinking and outreach campaigns.</li>
                    <li>Content Management & comprehensive technical SEO Audits.</li>
                  </ul>
                </div>
              </div>

              {/* Achievements & Volunteering */}
              <div className="space-y-3 pt-3">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider pb-1 border-b border-neutral-800">
                  Achievements, Volunteering & Internships
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">Karachi University</span>
                    <span className="text-neutral-400 text-[11px]">Invigilator, Entry Test 2021 - 2022</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">Hamdard University</span>
                    <span className="text-neutral-400 text-[11px]">Logo Creation (Pakistan Day)</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">PARHLO</span>
                    <span className="text-neutral-400 text-[11px]">Website Audit & Video Creation</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">Anchor Owais Rabbani</span>
                    <span className="text-neutral-400 text-[11px]">YouTube Channel Admin</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">3D Educators, Karachi</span>
                    <span className="text-neutral-400 text-[11px]">Internship: Facebook Paid Ads, Freehand Ads</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80">
                    <span className="font-semibold text-white block">Tehzeeb NGO, Karachi</span>
                    <span className="text-neutral-400 text-[11px]">Digital Marketing Admin & Event Marketing</span>
                  </div>
                </div>
              </div>

              {/* References statement */}
              <div className="pt-2 text-xs font-mono text-neutral-400">
                References available upon request.
              </div>

            </div>

          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 border-t border-neutral-800 bg-[#121520] rounded-b-2xl flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-neutral-400">
            Shaikh Osama — Verified Resume & Portfolio Asset
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
