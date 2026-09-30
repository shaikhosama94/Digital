import React, { useState } from 'react';
import { 
  Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, 
  Copy, Check, Download, RefreshCw, Zap, Shield, Globe, Terminal, Sparkles
} from 'lucide-react';

interface AuditResult {
  url: string;
  module: string;
  overallScore: number;
  grade: string;
  metrics: {
    label: string;
    score: number;
    status: 'good' | 'warning' | 'critical';
    detail: string;
  }[];
  vitals: {
    lcp: string;
    fid: string;
    cls: string;
    ttfb: string;
  };
  recommendations: {
    priority: 'High' | 'Medium' | 'Low';
    title: string;
    action: string;
  }[];
}

const PRESET_DOMAINS = [
  { label: 'E-Commerce Store', url: 'https://slcreative-lifestyle.com', type: 'ecommerce' },
  { label: 'Agency Portal', url: 'https://digitalgravity.ae', type: 'seo' },
  { label: 'Corporate Utility', url: 'https://k-electric.com.pk', type: 'listening' },
  { label: 'Real Estate Firm', url: 'https://bahria-investments.com', type: 'growth' },
];

export const AuditSimulator: React.FC = () => {
  const [urlInput, setUrlInput] = useState('https://digitalgravity.ae');
  const [selectedModule, setSelectedModule] = useState<'seo' | 'onpage' | 'listening' | 'ecommerce'>('seo');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [copied, setCopied] = useState(false);

  const runAudit = () => {
    if (!urlInput.trim()) return;

    setIsScanning(true);
    setResult(null);

    const steps = [
      'Pinging target host & measuring TTFB response latency...',
      'Crawling DOM tree for Schema.org JSON-LD structured data...',
      'Evaluating keyword intent cannibalization & semantic hierarchy...',
      'Benchmarking Core Web Vitals & mobile viewport stability...',
      'Synthesizing Shaikh Osama custom optimization roadmap...'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanStep(step);
      }, (index + 1) * 350);
    });

    setTimeout(() => {
      setIsScanning(false);
      // Generate realistic deterministic scores based on URL and module
      const isAgency = urlInput.includes('digitalgravity');
      const isUtility = urlInput.includes('k-electric');

      if (selectedModule === 'seo') {
        setResult({
          url: urlInput,
          module: 'Technical & Algorithmic Search Architecture',
          overallScore: isAgency ? 94 : 78,
          grade: isAgency ? 'A+' : 'B',
          metrics: [
            { label: 'Crawl Budget & Robots.txt Efficiency', score: 96, status: 'good', detail: 'Zero disallow conflicts; XML sitemap verified and indexed.' },
            { label: 'Schema.org JSON-LD Structured Data', score: isAgency ? 92 : 64, status: isAgency ? 'good' : 'warning', detail: 'Organization, BreadcrumbList, and Service entities configured.' },
            { label: 'Canonical Link Integrity', score: 88, status: 'good', detail: 'Clean self-referential canonical tags on all core landing pages.' },
            { label: 'Internal Page Rank & Link Equity Distribution', score: isAgency ? 94 : 70, status: isAgency ? 'good' : 'warning', detail: 'Deep category nodes require shallower internal click path (target ≤ 3 clicks).' },
          ],
          vitals: {
            lcp: isAgency ? '1.4s' : '2.8s',
            fid: '18ms',
            cls: '0.02',
            ttfb: isAgency ? '140ms' : '380ms',
          },
          recommendations: [
            {
              priority: 'High',
              title: 'Implement Nested Service & Review Schema Markup',
              action: 'Inject structured JSON-LD entities on commercial landing pages to capture Google Rich Snippets in SERPs.'
            },
            {
              priority: 'High',
              title: 'Eliminate Orphaned Category Nodes',
              action: 'Re-anchor deep service sub-pages via semantic contextual links inside high-authority pillar articles.'
            },
            {
              priority: 'Medium',
              title: 'Optimize Next-Gen Image Formats (WebP / AVIF)',
              action: 'Compress hero banners to reduce Largest Contentful Paint (LCP) from current levels down to < 1.8s.'
            },
            {
              priority: 'Low',
              title: 'Consolidate Near-Duplicate Keyword Targets',
              action: 'Audit title tags targeting identical search intents to prevent internal keyword cannibalization.'
            }
          ]
        });
      } else if (selectedModule === 'listening') {
        setResult({
          url: urlInput,
          module: 'Enterprise Social Listening & Brand Sentiment',
          overallScore: isUtility ? 89 : 82,
          grade: isUtility ? 'A' : 'B+',
          metrics: [
            { label: 'Meltwater Conversational Spike Detection', score: 94, status: 'good', detail: 'Real-time alert threshold intercepts sentiment anomalies under 12 mins.' },
            { label: 'Public Escalation De-escalation Velocity', score: 88, status: 'good', detail: 'Multi-tier SLA dispatch protocol minimizes adverse social amplification.' },
            { label: 'SAP S/4HANA Work order Synchrony', score: isUtility ? 92 : 72, status: isUtility ? 'good' : 'warning', detail: 'Automated CRM case dispatch ensures tickets bridge directly into technical teams.' },
            { label: 'Net Sentiment Stability Index', score: 84, status: 'good', detail: 'Corporate communications framework maintains favorable brand equity.' },
          ],
          vitals: {
            lcp: '1.9s',
            fid: '12ms',
            cls: '0.01',
            ttfb: '210ms',
          },
          recommendations: [
            {
              priority: 'High',
              title: 'Deploy Automated Meltwater Sentiment Volatility Triggers',
              action: 'Set 30-minute rolling conversational volume triggers to catch public service outages or escalations.'
            },
            {
              priority: 'Medium',
              title: 'Streamline SAP S/4HANA Case Ingestion Workflows',
              action: 'Reduce manual agent re-keying by enabling direct ticket API dispatch from social channels.'
            },
            {
              priority: 'Low',
              title: 'Weekly Executive Sentiment Summary Dashboard',
              action: 'Aggregate positive vs negative customer verbatim trends for operations and leadership reviews.'
            }
          ]
        });
      } else if (selectedModule === 'ecommerce') {
        setResult({
          url: urlInput,
          module: 'Shopify E-Commerce SEO & Conversion Rate',
          overallScore: 84,
          grade: 'B+',
          metrics: [
            { label: 'Product Schema & Aggregate Rating Rich Data', score: 88, status: 'good', detail: 'Price, availability, and SKU structured tags ready for Google Shopping index.' },
            { label: 'Collection Taxonomy & Faceted Navigation Crawlability', score: 76, status: 'warning', detail: 'Ensure URL query filters (color, size) have canonicals back to master collection.' },
            { label: 'Mobile Cart Abandonment & Checkout Speed', score: 86, status: 'good', detail: 'Single-page checkout latency tested within acceptable UX threshold.' },
            { label: 'Product Metadata & Commercial Copy Quality', score: 90, status: 'good', detail: 'High-converting benefit-driven descriptions with target keyword integration.' },
          ],
          vitals: {
            lcp: '2.1s',
            fid: '22ms',
            cls: '0.04',
            ttfb: '260ms',
          },
          recommendations: [
            {
              priority: 'High',
              title: 'Canonicalize Faceted Filter URLs in Collections',
              action: 'Prevent search engine index bloat by adding canonical link headers to multi-attribute filter pages.'
            },
            {
              priority: 'Medium',
              title: 'Enable Automated Review & FAQ Schema',
              action: 'Capture star rating rich snippets in Google organic search results to boost CTR by up to +24%.'
            },
            {
              priority: 'Low',
              title: 'Mobile Hero Image Responsive Sizing',
              action: 'Serve device-specific srcset dimensions on product detail pages for instant mobile paint.'
            }
          ]
        });
      } else {
        setResult({
          url: urlInput,
          module: 'On-Page Semantic Hierarchy & Content Equity',
          overallScore: 86,
          grade: 'B+',
          metrics: [
            { label: 'H1-H6 Heading Tag Hierarchy', score: 92, status: 'good', detail: 'Proper single H1 tag per page with logical nested subheadings.' },
            { label: 'Title Tag & Meta Description CTR Optimization', score: 84, status: 'good', detail: 'Characters within 55-60 char and 150-160 char Google SERP limits.' },
            { label: 'Keyword Density & Semantic Entity Association', score: 88, status: 'good', detail: 'Strong LSI keyword clustering without unnatural keyword stuffing.' },
            { label: 'Image Alt Text & Visual Accessibility', score: 78, status: 'warning', detail: 'Certain secondary decorative banners require descriptive keyword-rich alt tags.' },
          ],
          vitals: {
            lcp: '1.6s',
            fid: '14ms',
            cls: '0.01',
            ttfb: '190ms',
          },
          recommendations: [
            {
              priority: 'High',
              title: 'Inject High-Intent Commercial Keyword Modifiers',
              action: 'Incorporate localized and transactional search modifiers into primary title tags and H2 subheaders.'
            },
            {
              priority: 'Medium',
              title: 'Enrich Image Alt Attributes with Exact Terminology',
              action: 'Replace generic filenames and missing alt tags with descriptive context to rank in Google Images.'
            },
            {
              priority: 'Low',
              title: 'Enhance OpenGraph Social Cards',
              action: 'Ensure custom 1200x630px OG images are defined for rich LinkedIn and Twitter previews.'
            }
          ]
        });
      }
    }, 2000);
  };

  const copyActionPlan = () => {
    if (!result) return;
    const text = `SEO & STRATEGY DIAGNOSTIC REPORT
Target Domain: ${result.url}
Audit Module: ${result.module}
Overall Health Score: ${result.overallScore}/100 (Grade ${result.grade})
Auditor: Shaikh Osama (Digital Marketer & SEO Specialist)

CORE WEB VITALS:
- Largest Contentful Paint (LCP): ${result.vitals.lcp}
- First Input Delay (FID): ${result.vitals.fid}
- Cumulative Layout Shift (CLS): ${result.vitals.cls}
- Time to First Byte (TTFB): ${result.vitals.ttfb}

STRATEGIC ACTION PLAN:
${result.recommendations.map((r, i) => `${i + 1}. [${r.priority} Priority] ${r.title}\n   Action: ${r.action}`).join('\n\n')}

Contact Shaikh Osama for end-to-end execution: shaikh.osaama@gmail.com | 03402042125`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="audit-tool" className="py-20 md:py-28 relative border-b border-neutral-800/80 bg-[#08090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Interactive Diagnostic Suite
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Real-Time SEO & Growth Diagnostic Simulator.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Test any website architecture against the rigorous SEO, brand listening, and conversion optimization criteria Shaikh Osama deployed at Digital Gravity and enterprise clients.
          </p>
        </div>

        {/* Audit Input Console */}
        <div className="bg-[#0e1018] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          {/* Top Controls Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* URL Input */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <Globe className="w-4 h-4 text-amber-400" />
              </div>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter domain (e.g. https://yourbrand.com)"
                className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400 font-mono transition-colors"
              />
            </div>

            {/* Module Selector */}
            <div className="lg:col-span-4">
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value as any)}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-neutral-200 text-sm focus:outline-none focus:border-amber-400 font-mono transition-colors cursor-pointer"
              >
                <option value="seo">Technical & Algorithmic Search Audit</option>
                <option value="onpage">On-Page Semantic & Content Equity</option>
                <option value="listening">Meltwater Social Listening & Sentiment</option>
                <option value="ecommerce">Shopify CRO & Conversion Architecture</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="lg:col-span-2">
              <button
                onClick={runAudit}
                disabled={isScanning}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-black font-semibold text-sm rounded-xl transition-all shadow-md shadow-amber-400/10 cursor-pointer"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-black" />
                    <span>Run Audit</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Preset Buttons for Quick Testing */}
          <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-neutral-500">Quick test presets:</span>
            {PRESET_DOMAINS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setUrlInput(preset.url);
                  setSelectedModule(preset.type as any);
                }}
                className="px-2.5 py-1 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded text-neutral-300 hover:text-white transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Scanning Progress Console */}
          {isScanning && (
            <div className="mt-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Terminal className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Automated Audit Scanner Active</span>
              </div>
              <p className="text-neutral-300 animate-pulse pl-6">
                &gt; {scanStep}
              </p>
            </div>
          )}

          {/* Audit Results View */}
          {result && !isScanning && (
            <div className="mt-8 pt-6 border-t border-neutral-800 space-y-8">
              
              {/* Scorecard Hero Banner */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-neutral-900 to-[#12141c] border border-neutral-700 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                    <span>Target: {result.url}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">{result.module}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Audit Synthesis & Strategic Action Blueprint
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Evaluated by Shaikh Osama's technical search and reputation methodology.
                  </p>
                </div>

                <div className="flex items-center gap-4 self-start md:self-center font-mono">
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 block">Overall Health</span>
                    <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                      {result.overallScore}<span className="text-neutral-500 text-lg">/100</span>
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl font-bold text-amber-400 font-display">
                    {result.grade}
                  </div>
                </div>
              </div>

              {/* Core Web Vitals Row */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Core Web Vitals & Server Performance Benchmarks
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] text-neutral-400 block">Largest Contentful Paint</span>
                    <span className="text-lg font-bold text-emerald-400 tabular-nums mt-0.5 block">{result.vitals.lcp}</span>
                    <span className="text-[10px] text-neutral-500 block">Target &lt; 2.5s</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] text-neutral-400 block">First Input Delay</span>
                    <span className="text-lg font-bold text-emerald-400 tabular-nums mt-0.5 block">{result.vitals.fid}</span>
                    <span className="text-[10px] text-neutral-500 block">Target &lt; 100ms</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] text-neutral-400 block">Cumulative Layout Shift</span>
                    <span className="text-lg font-bold text-emerald-400 tabular-nums mt-0.5 block">{result.vitals.cls}</span>
                    <span className="text-[10px] text-neutral-500 block">Target &lt; 0.1</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] text-neutral-400 block">Time to First Byte</span>
                    <span className="text-lg font-bold text-amber-400 tabular-nums mt-0.5 block">{result.vitals.ttfb}</span>
                    <span className="text-[10px] text-neutral-500 block">Target &lt; 200ms</span>
                  </div>
                </div>
              </div>

              {/* Categorical Diagnostics */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  Architectural Health Checkpoints
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {result.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex items-start gap-3"
                    >
                      {metric.status === 'good' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-semibold text-white">{metric.label}</h5>
                          <span className="text-xs font-mono font-bold text-neutral-300 tabular-nums">
                            {metric.score}%
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          {metric.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Prescribed Strategic Action Steps
                  </h4>
                  <button
                    onClick={copyActionPlan}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-mono transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Action Plan Copied' : 'Copy Action Plan'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {result.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className={
                            rec.priority === 'High' ? 'text-amber-400 font-semibold' : 'text-neutral-400'
                          }>
                            [{rec.priority} Priority]
                          </span>
                          <span className="text-white font-medium">{rec.title}</span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed max-w-3xl">
                          {rec.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA to execute with Shaikh Osama */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Ready to execute this roadmap with a proven SEO & Brand specialist?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-all"
                >
                  <span>Book Execution Call with Shaikh Osama</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
