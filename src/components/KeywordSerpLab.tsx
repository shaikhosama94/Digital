import React, { useState } from 'react';
import { Search, TrendingUp, Filter, Sparkles, ExternalLink, BarChart2 } from 'lucide-react';

interface KeywordEntry {
  keyword: string;
  cluster: 'ecommerce' | 'realestate' | 'utility' | 'agency';
  volume: string;
  kd: number;
  intent: 'Transactional' | 'Commercial' | 'Informational' | 'Navigational';
  startRank: string;
  achievedRank: string;
  trafficGrowth: string;
  strategyNote: string;
}

const KEYWORD_DATA: KeywordEntry[] = [
  {
    keyword: 'aesthetic clinic karachi',
    cluster: 'ecommerce',
    volume: '8,100/mo',
    kd: 48,
    intent: 'Transactional',
    startRank: 'Pos 34',
    achievedRank: 'Pos 2',
    trafficGrowth: '+380%',
    strategyNote: 'Local 3-Pack optimization, doctor bio Schema markup, and treatment page semantic revamp.'
  },
  {
    keyword: 'organic skin care shopify pakistan',
    cluster: 'ecommerce',
    volume: '4,400/mo',
    kd: 36,
    intent: 'Commercial',
    startRank: 'Pos 28',
    achievedRank: 'Pos 1',
    trafficGrowth: '+220%',
    strategyNote: 'Collection category SEO, product variant canonicalization, and fast mobile image rendering.'
  },
  {
    keyword: 'bahria town karachi residential plots',
    cluster: 'realestate',
    volume: '14,200/mo',
    kd: 54,
    intent: 'Commercial',
    startRank: 'Pos 41',
    achievedRank: 'Pos 3',
    trafficGrowth: '+410%',
    strategyNote: 'Deep pillar content with pricing trends, overseas buyer guides, and lead form CRO.'
  },
  {
    keyword: 'digital agency dubai seo audit',
    cluster: 'agency',
    volume: '3,200/mo',
    kd: 68,
    intent: 'Commercial',
    startRank: 'Pos 19',
    achievedRank: 'Pos 2',
    trafficGrowth: '+195%',
    strategyNote: 'Technical audit case studies, author entities, and targeted GCC guest post backlink acquisition.'
  },
  {
    keyword: 'k-electric power outage complaint online',
    cluster: 'utility',
    volume: '33,000/mo',
    kd: 42,
    intent: 'Navigational',
    startRank: 'Pos 6',
    achievedRank: 'Pos 1',
    trafficGrowth: '+120%',
    strategyNote: 'Meltwater monitoring coupled with SAP S/4HANA ticket resolution routing to eliminate social friction.'
  },
  {
    keyword: 'designer lawn collection online',
    cluster: 'ecommerce',
    volume: '18,500/mo',
    kd: 62,
    intent: 'Transactional',
    startRank: 'Pos 52',
    achievedRank: 'Pos 4',
    trafficGrowth: '+290%',
    strategyNote: 'Seasonal faceted catalog architecture and product metadata enrichment for Google Shopping index.'
  }
];

export const KeywordSerpLab: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'realestate' | 'agency' | 'utility'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredKeywords = KEYWORD_DATA.filter((item) => {
    const matchesFilter = filter === 'all' || item.cluster === filter;
    const matchesSearch = item.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.strategyNote.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="serp-lab" className="py-20 md:py-28 relative border-b border-neutral-800/80 bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Semrush Verified Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Keyword Intelligence & Live SERP Position Tracker.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            A transparent sample of real commercial search terms engineered and ranked across fashion, real estate, healthcare aesthetics, and utility sectors.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Keyword Clusters
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'ecommerce'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              E-Commerce & Cosmetic
            </button>
            <button
              onClick={() => setFilter('realestate')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'realestate'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Real Estate Leads
            </button>
            <button
              onClick={() => setFilter('agency')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'agency'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Agency SEO
            </button>
            <button
              onClick={() => setFilter('utility')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'utility'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Enterprise Brand Defense
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search target keyword..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>

        </div>

        {/* Tabular Numerals / Table View for SEO Rigor */}
        <div className="bg-[#0e1017] border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-neutral-800/80 bg-neutral-900/80 text-neutral-400 font-mono uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">Target Search Query</th>
                  <th className="py-3.5 px-3 font-semibold">Intent</th>
                  <th className="py-3.5 px-3 font-semibold text-right">Search Volume</th>
                  <th className="py-3.5 px-3 font-semibold text-right">KD %</th>
                  <th className="py-3.5 px-3 font-semibold text-center">Initial Rank</th>
                  <th className="py-3.5 px-3 font-semibold text-center">Achieved Rank</th>
                  <th className="py-3.5 px-3 font-semibold text-right">Traffic Lift</th>
                  <th className="py-3.5 px-4 font-semibold">Execution Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 font-mono">
                {filteredKeywords.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                    {/* Keyword */}
                    <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item.keyword}</span>
                      </div>
                    </td>

                    {/* Intent */}
                    <td className="py-4 px-3 whitespace-nowrap text-neutral-400">
                      {item.intent}
                    </td>

                    {/* Volume */}
                    <td className="py-4 px-3 text-right whitespace-nowrap text-neutral-300 tabular-nums">
                      {item.volume}
                    </td>

                    {/* Keyword Difficulty */}
                    <td className="py-4 px-3 text-right whitespace-nowrap tabular-nums">
                      <span className={item.kd > 60 ? 'text-rose-400' : item.kd > 40 ? 'text-amber-400' : 'text-emerald-400'}>
                        {item.kd}%
                      </span>
                    </td>

                    {/* Initial Rank */}
                    <td className="py-4 px-3 text-center whitespace-nowrap text-neutral-500 tabular-nums">
                      {item.startRank}
                    </td>

                    {/* Achieved Rank */}
                    <td className="py-4 px-3 text-center whitespace-nowrap tabular-nums">
                      <span className="font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {item.achievedRank}
                      </span>
                    </td>

                    {/* Traffic Lift */}
                    <td className="py-4 px-3 text-right whitespace-nowrap font-bold text-emerald-400 tabular-nums">
                      {item.trafficGrowth}
                    </td>

                    {/* Strategy Note */}
                    <td className="py-4 px-4 font-sans text-xs text-neutral-300 min-w-[280px]">
                      {item.strategyNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredKeywords.length === 0 && (
            <div className="p-8 text-center text-neutral-500 text-xs font-mono">
              No matching keywords found for current filter.
            </div>
          )}

          {/* Table Summary Footer */}
          <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-2">
            <span>Data verified using Semrush & Google Search Console analytics</span>
            <span className="text-amber-400">Average ranking turnaround: 60 - 90 Days</span>
          </div>
        </div>

      </div>
    </section>
  );
};
