import React, { useState } from 'react';
import { PORTFOLIO_WORKS, PortfolioWorkItem } from '../data/portfolioData';
import { FolderGit2, Sparkles, ArrowUpRight, CheckCircle2, Layers, Tag, ExternalLink, X, Image as ImageIcon } from 'lucide-react';

export const PortfolioWorksSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedWork, setSelectedWork] = useState<PortfolioWorkItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Portfolio Work' },
    { id: 'ecommerce', label: 'E-Commerce & Meta Ads' },
    { id: 'branding', label: 'Brand & Corporate Identity' },
    { id: 'realestate', label: 'Real Estate Lead Gen' },
    { id: 'healthcare', label: 'Healthcare & Clinical' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio-work" className="py-20 md:py-28 relative border-b border-neutral-800/80 bg-[#090b10]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Verified Deliverables & Campaigns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
              Featured Client Work & Campaigns.
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              Curated case studies extracted directly from commercial campaign archives, featuring high-growth e-commerce ad scaling, executive brand profile redesigns, and enterprise lead pipelines.
            </p>
          </div>

          {/* Source indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-3.5 py-2 rounded-lg shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Archive: Google Drive Portfolio Work</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0e111a] border border-neutral-800/80 hover:border-amber-400/50 hover:bg-[#121520] transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden border-b border-neutral-800/80">
                {work.image ? (
                  <img
                    src={work.image}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 to-[#0e111a] text-center">
                    <Layers className="w-8 h-8 text-amber-400/60 mb-2" />
                    <span className="text-xs font-mono text-neutral-400">{work.driveCategory}</span>
                    <span className="text-sm font-semibold text-white mt-1">{work.client}</span>
                  </div>
                )}

                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-amber-300">
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{work.categoryLabel}</span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                    <span className="text-neutral-300 font-semibold">{work.client}</span>
                    <span>{work.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {work.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {work.overview}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <div className="grid grid-cols-3 gap-2">
                    {work.keyResults.map((res, i) => (
                      <div key={i} className="text-center p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 font-mono">
                        <span className="text-xs font-bold text-amber-400 block tracking-tight">
                          {res.metric}
                        </span>
                        <span className="text-[10px] text-neutral-400 block truncate mt-0.5">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Strip */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {work.tools.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800/60 text-neutral-300 border border-neutral-700/50"
                      >
                        {t}
                      </span>
                    ))}
                    {work.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400">
                        +{work.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e111a] border border-neutral-700 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1.5">
                <span>{selectedWork.categoryLabel}</span>
                <span>·</span>
                <span className="text-neutral-400">{selectedWork.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {selectedWork.title}
              </h3>
              <p className="text-sm font-semibold text-neutral-300 mt-1">
                Client / Brand: <span className="text-amber-300">{selectedWork.client}</span>
              </p>
            </div>

            {/* Images inside modal */}
            {selectedWork.image && (
              <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 max-h-72 flex items-center justify-center">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-72"
                />
              </div>
            )}

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                Executive Campaign Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedWork.overview}
              </p>
            </div>

            {/* Metrics */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                Key Performance Outcomes
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedWork.keyResults.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-center">
                    <span className="text-xl font-bold text-amber-400 block">{res.metric}</span>
                    <span className="text-xs text-neutral-400 block mt-1">{res.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2.5">
                Campaign Deliverables & Architecture
              </h4>
              <ul className="space-y-2">
                {selectedWork.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used & Archive Category */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-neutral-400">Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedWork.tools.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-neutral-400">
                Folder: <span className="text-amber-400">{selectedWork.driveCategory}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
