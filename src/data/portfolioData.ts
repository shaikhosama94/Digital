import osamaPortrait from '@/src/assets/images/shaikh_osama_real_1790759622808.jpg';
import agencyWorkspace from '@/src/assets/images/agency_workspace_1790752096309.jpg';
import seoAnalyticsFlow from '@/src/assets/images/seo_analytics_flow_1790752111659.jpg';
import sentimentMonitoring from '@/src/assets/images/sentiment_monitoring_1790752125568.jpg';

// Authentic Assets from Shaikh Osama's Google Drive Portfolio
import digitalGravityLogo from '@/src/assets/drive_assets/digital_gravity.jpg';
import jinnahBuildersLogo from '@/src/assets/drive_assets/jinnah_builders.png';
import capitalHealthLogo from '@/src/assets/drive_assets/capital_health.jpg';
import denimCraftsLogo from '@/src/assets/drive_assets/denim_crafts.jpg';
import rtsTechLogo from '@/src/assets/drive_assets/rts_tech.png';
import digitalExpressLogo from '@/src/assets/drive_assets/digital_express.png';
import slaCampaignImg from '@/src/assets/drive_assets/sla_campaign.png';
import nakooshBlackImg from '@/src/assets/drive_assets/nakoosh_black_collection.png';
import hubspotCertImg from '@/src/assets/drive_assets/hubspot_cert.png';
import metaSuiteImg from '@/src/assets/drive_assets/meta_suite.png';

export {
  osamaPortrait,
  agencyWorkspace,
  seoAnalyticsFlow,
  sentimentMonitoring,
  digitalGravityLogo,
  jinnahBuildersLogo,
  capitalHealthLogo,
  denimCraftsLogo,
  rtsTechLogo,
  digitalExpressLogo,
  slaCampaignImg,
  nakooshBlackImg,
  hubspotCertImg,
  metaSuiteImg
};

export interface CompanyLogoItem {
  id: string;
  name: string;
  role: string;
  category: string;
  logo: string;
  website?: string;
  highlight: string;
}

export interface PortfolioWorkItem {
  id: string;
  title: string;
  client: string;
  category: 'ecommerce' | 'branding' | 'healthcare' | 'realestate' | 'social';
  categoryLabel: string;
  period: string;
  image?: string;
  secondaryImage?: string;
  overview: string;
  deliverables: string[];
  keyResults: { metric: string; label: string }[];
  tools: string[];
  driveCategory: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlight: string;
  description: string;
  keyResponsibilities: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  category: 'listening' | 'seo' | 'growth' | 'ecommerce';
  featuredImage?: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  focus: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  grade?: string;
  detail?: string;
  period?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export const PERSONAL_INFO = {
  name: "Shaikh Osama",
  title: "Digital Marketer | SEO Expert | Customer Experience Specialist",
  tagline: "Bridging technical search engine precision with enterprise brand listening and customer retention.",
  bio: "Digital Marketer with extensive experience across SEO strategy, enterprise social media listening, technical website management, and customer experience operations. Formerly at Digital Gravity, Dr. Shaista Lodhi (SL Creative), Jinnah Builders, and currently driving brand intelligence at K-Electric.",
  email: "shaikh.osaama@gmail.com",
  phone: "03402042125",
  formattedPhone: "+92 340 2042125",
  location: "Gulshan-E-Iqbal, Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/shaikhosama94/",
  experienceYears: "3+",
  websitesManaged: "45+",
  keywordsRanked: "1,200+",
  brandSentimentScore: "98.4%",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "k-electric",
    company: "K-Electric",
    role: "Social Media Listening & Brand Specialist",
    period: "Oct 2025 – Present",
    location: "Karachi, Pakistan",
    highlight: "Enterprise brand health & real-time sentiment defense",
    description: "Leading consumer sentiment surveillance, crisis mitigation, and corporate brand reputation tracking across regional digital touchpoints for Pakistan's premier utility enterprise.",
    keyResponsibilities: [
      "Used Meltwater to track consumer sentiment, monitor conversational spikes, and extract actionable brand insights.",
      "Addressed public queries and escalations across platforms to protect corporate brand reputation and minimize friction.",
      "Managed case-tracking workflows in SAP S/4HANA to support technical operations and cross-department resolution dispatch.",
      "Monitored social channels actively to safeguard corporate brand health during operational surges and power grid announcements."
    ],
    metrics: [
      { label: "Meltwater Sentiment Monitored", value: "250K+ Monthly" },
      { label: "Critical Escalation Resolution", value: "<15 Mins" },
      { label: "SAP S/4HANA Ticket Accuracy", value: "99.2%" }
    ],
    tools: ["Meltwater", "SAP S/4HANA", "Brand Monitoring", "Crisis Mitigation", "Social Analytics"],
    category: "listening",
    featuredImage: sentimentMonitoring
  },
  {
    id: "sl-creative",
    company: "Dr. Shaista Lodhi (SL Creative)",
    role: "SEO & Social Media Marketing Manager",
    period: "Jan 2023 – Sep 2025",
    location: "Karachi, Pakistan",
    highlight: "Multi-channel e-commerce growth & celebrity brand authority",
    description: "Directed end-to-end digital marketing and organic search presence for the aesthetic and cosmetic wellness brand founded by Dr. Shaista Lodhi.",
    keyResponsibilities: [
      "Orchestrated comprehensive On-Page & Off-Page SEO frameworks, lifting primary commercial queries into top 3 SERP rankings.",
      "Managed Shopify store merchandising, site speed performance, product metadata architecture, and checkout funnel optimization.",
      "Produced viral story and post creative narratives, aligning aesthetic treatments with audience interest.",
      "Executed long-form content writing, scientific ingredient blogs, and high-converting campaign copy.",
      "Supervised community interactions and social media marketing to establish authoritative thought leadership."
    ],
    metrics: [
      { label: "Organic Search Revenue Growth", value: "+164%" },
      { label: "Shopify Conversion Rate", value: "+38%" },
      { label: "Top-10 Ranking Keywords", value: "320+" }
    ],
    tools: ["Shopify", "On-Page SEO", "Off-Page SEO", "Semrush", "Content Strategy", "Meta Ads"],
    category: "ecommerce",
    featuredImage: slaCampaignImg,
    logo: slaCampaignImg
  },
  {
    id: "jinnah-builders",
    company: "Jinnah Builders (Bahria Town)",
    role: "Digital Marketer",
    period: "Jan 2022 – Dec 2022",
    location: "Karachi, Pakistan",
    highlight: "High-ticket real estate lead acquisition & portal SEO",
    description: "Drove high-ticket property lead generation campaigns, real estate portal SEO, and web development for prominent developments in Bahria Town.",
    keyResponsibilities: [
      "Engineered On-Page & Off-Page real estate keyword clusters targeting high-net-worth investors and overseas Pakistani buyers.",
      "Designed and developed responsive, conversion-focused landing pages and corporate website layouts.",
      "Launched and scaled Facebook Lead Ads with precise demographic targeting, yielding qualified real estate inquiries.",
      "Maintained tracking pixels, CRM lead pass-through, and digital property showcase assets."
    ],
    metrics: [
      { label: "Qualified Real Estate Leads", value: "1,850+" },
      { label: "Facebook Lead CPA Reduction", value: "-42%" },
      { label: "Organic Search Visibility", value: "+210%" }
    ],
    tools: ["Facebook Lead Ads", "Web Design", "Web Development", "Local SEO", "Google Search Console"],
    category: "growth",
    logo: jinnahBuildersLogo
  },
  {
    id: "digital-gravity",
    company: "Digital Gravity",
    role: "SEO Expert",
    period: "Jan 2021 – April 2021",
    location: "Karachi & Dubai Regional Operations",
    highlight: "Agency-scale technical search audits & authority backlinking",
    description: "Formulated data-backed marketing strategies and executed technical SEO architectures at Digital Gravity, the premier Middle East digital agency.",
    keyResponsibilities: [
      "Created structured marketing strategies tailored for multi-industry regional clients spanning GCC and South Asia.",
      "Executed rigorous On-Page SEO (title schemas, semantic header hierarchies, internal link modeling) and Off-Page link equity plans.",
      "Conducted comprehensive technical SEO audits uncovering indexation bottlenecks, crawl depth anomalies, and core web vitals deficits.",
      "Sourced authoritative guest posting opportunities and high-domain-authority backlink acquisitions.",
      "Structured editorial content management calendars and keyword mapping blueprints."
    ],
    metrics: [
      { label: "Deep SEO Audits Executed", value: "30+" },
      { label: "High DA Backlinks Earned", value: "240+" },
      { label: "Client Indexation Uplift", value: "95%" }
    ],
    tools: ["Semrush", "Ahrefs", "Google Analytics", "Screaming Frog", "Technical SEO", "Link Outreach"],
    category: "seo",
    featuredImage: agencyWorkspace,
    logo: digitalGravityLogo
  },
  {
    id: "nakoosh",
    company: "Nakoosh (Clothing Brand)",
    role: "SMM & SEO Specialist",
    period: "June 2021 – Dec 2021",
    location: "Karachi, Pakistan",
    highlight: "Apparel e-commerce SEO & lifestyle engagement campaigns",
    description: "Enhanced organic footprint and digital visual storytelling for a high-frequency fashion apparel brand.",
    keyResponsibilities: [
      "Executed targeted SEO and social media marketing to boost collection releases and seasonal discount events.",
      "Conducted digital content editing, image optimization, and product catalogue description enhancements.",
      "Maintained website category structure, navigation taxonomy, and on-site user journey."
    ],
    metrics: [
      { label: "Catalog Traffic Increase", value: "+85%" },
      { label: "Social Engagement Uplift", value: "+44%" },
      { label: "Average Session Duration", value: "+1m 20s" }
    ],
    tools: ["E-Commerce SEO", "Social Media", "Photoshop", "Website Taxonomy", "Content Editing"],
    category: "ecommerce",
    featuredImage: nakooshBlackImg,
    logo: nakooshBlackImg
  }
];

export const COMPANIES_WORKED_WITH: CompanyLogoItem[] = [
  {
    id: "k-electric",
    name: "K-Electric",
    role: "Social Media Listening & Brand Specialist",
    category: "Enterprise Utility",
    logo: "",
    highlight: "Meltwater surveillance, brand health defense & SAP S/4HANA resolution dispatch"
  },
  {
    id: "digital-gravity",
    name: "Digital Gravity",
    role: "SEO Expert",
    category: "Leading Digital Agency",
    logo: digitalGravityLogo,
    highlight: "Agency-scale technical search audits, link equity & GCC keyword architectures"
  },
  {
    id: "sl-creative",
    name: "Dr. Shaista Lodhi (SL Creative)",
    role: "SEO & SMM Manager",
    category: "Aesthetics & Healthcare",
    logo: slaCampaignImg,
    highlight: "Shopify e-commerce revenue scaling (+164%) & celebrity physician brand authority"
  },
  {
    id: "nakoosh",
    name: "Nakoosh",
    role: "SMM & SEO Specialist",
    category: "Fashion Apparel",
    logo: nakooshBlackImg,
    highlight: "Apparel e-commerce SEO, Meta Business Suite ad scaling & seasonal campaign drops"
  },
  {
    id: "jinnah-builders",
    name: "Jinnah Builders & Real Estate",
    role: "Digital Marketer",
    category: "Real Estate & Development",
    logo: jinnahBuildersLogo,
    highlight: "Bahria Town real estate lead gen, 1,850+ NRI investor leads & video tours"
  },
  {
    id: "capital-health",
    name: "Capital Health (CHSC)",
    role: "SEO & Digital Strategy",
    category: "Healthcare & Clinical",
    logo: capitalHealthLogo,
    highlight: "Medical search presence, doctor profile optimization & clinical patient trust"
  },
  {
    id: "denim-crafts",
    name: "Denim Crafts",
    role: "Digital Marketing & Creative",
    category: "Apparel Export & Manufacturing",
    logo: denimCraftsLogo,
    highlight: "Global apparel trade storytelling, voiceover campaigns & industrial B2B presence"
  },
  {
    id: "rts-tech",
    name: "Reliable Technical Services (RTS)",
    role: "Brand & Digital Presence",
    category: "Industrial Engineering",
    logo: rtsTechLogo,
    highlight: "Engineering service positioning, technical taxonomy & industrial client acquisition"
  },
  {
    id: "digital-express",
    name: "Digital Express",
    role: "Web Design & Marketing",
    category: "Digital Solutions",
    logo: digitalExpressLogo,
    highlight: "Responsive web architectures, speed optimization & user journey structuring"
  }
];

export const PORTFOLIO_WORKS: PortfolioWorkItem[] = [
  {
    id: "nakoosh-ecommerce",
    title: "Nakoosh Apparel E-Commerce & Meta Ads Scale",
    client: "Nakoosh (Women Clothing Brand)",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Meta Ads",
    period: "Apparel Drops & Paid Scale",
    image: nakooshBlackImg,
    secondaryImage: metaSuiteImg,
    overview: "Spearheaded full-funnel digital strategy for Nakoosh's seasonal pret collections, including the high-demand Black Collection and Maisori Festive drops. Integrated Shopify product catalog SEO with high-conversion Meta Business Suite advertising.",
    deliverables: [
      "Meta Business Suite custom conversion ad sets targeting women fashion shoppers in Pakistan and GCC",
      "Shopify on-page SEO optimization for category landing pages and product schemas",
      "Dynamic product ads (DPA) and retargeting workflows for abandoned checkout recovery",
      "Promotional video creative direction ('Baby Pink Maisori Stitched Frock' & 'Black Collection')"
    ],
    keyResults: [
      { metric: "+85%", label: "Catalog Traffic Increase" },
      { metric: "3.4x", label: "Average ROAS on Meta Ads" },
      { metric: "12,000+", label: "Monthly Store Sessions" }
    ],
    tools: ["Shopify", "Meta Business Suite", "Facebook Ads Manager", "E-Commerce SEO", "Photoshop"],
    driveCategory: "FB Ads & Website Content"
  },
  {
    id: "sla-aesthetics",
    title: "Dr. Shaista Lodhi Aesthetics Brand Authority & Clinic Funnels",
    client: "Dr. Shaista Lodhi (SL Creative / SLA)",
    category: "branding",
    categoryLabel: "Celebrity Brand & Clinic Growth",
    period: "Jan 2023 – Sep 2025",
    image: slaCampaignImg,
    overview: "Orchestrated end-to-end digital positioning and organic revenue capture for celebrity physician Dr. Shaista Lodhi's aesthetic medicine clinics. Directed viral treatment launches, patient educational storytelling, and organic Google visibility.",
    deliverables: [
      "Major treatment announcements & clinical campaign rollouts ('BIG NEWS! SLA')",
      "High-intent local and aesthetic treatment keyword targeting (HydraFacial, Laser, PRP, Skin Rejuvenation)",
      "Shopify skincare e-commerce merchandising, metadata taxonomy, and speed audit",
      "Physician trust architecture, patient before/after compliance, and social reputation monitoring"
    ],
    keyResults: [
      { metric: "+164%", label: "Organic Search Revenue Growth" },
      { metric: "+38%", label: "Shopify Checkout Conversion" },
      { metric: "320+", label: "Ranked Google Keywords" }
    ],
    tools: ["Shopify", "On-Page & Off-Page SEO", "Semrush", "Meta Campaigns", "Content Strategy"],
    driveCategory: "Presentations & Social Media"
  },
  {
    id: "brand-profile-redesign",
    title: "Executive Corporate Brand Profile & Capability Architecture",
    client: "Corporate & Agency Client Showcase",
    category: "branding",
    categoryLabel: "Brand Identity & Strategy",
    period: "Brand Profile 2023 Release",
    overview: "Engineered a comprehensive 26MB executive corporate profile document and brand identity redesign. Structured company capability narratives, service matrices, typography, and investor-ready commercial presentations.",
    deliverables: [
      "26-page master brand identity & executive capability pitch deck (PDF Edition)",
      "Visual hierarchy redesign, typography standards, and color psychology mapping",
      "Service taxonomy & client case study layout frameworks",
      "Digital distribution PDF with interactive table of contents and commercial pricing grids"
    ],
    keyResults: [
      { metric: "26.1 MB", label: "Master Brand Profile Deck" },
      { metric: "100%", label: "Custom Visual Identity" },
      { metric: "Multi-Use", label: "Pitch & Investor Ready" }
    ],
    tools: ["Adobe Photoshop", "Illustrator", "Brand Strategy", "Typography", "Presentation Design"],
    driveCategory: "Brand Profile Redesign"
  },
  {
    id: "jinnah-builders-realestate",
    title: "Bahria Town High-Ticket Property Acquisition & Lead Gen",
    client: "Jinnah Builders & Real Estate",
    category: "realestate",
    categoryLabel: "Real Estate & Lead Generation",
    period: "Jan 2022 – Dec 2022",
    image: jinnahBuildersLogo,
    overview: "Built an authoritative digital acquisition engine for premier residential and commercial developments in Bahria Town Karachi. Engineered high-converting Meta Lead generation ads, local search visibility, and cinematic walkthroughs.",
    deliverables: [
      "Targeted Facebook Lead Ad funnels capturing verified overseas Pakistani and domestic investors",
      "Bahria Town local real estate keyword clusters on Google Search ('Bahria Town Best Real Estate')",
      "Custom responsive landing pages designed for high-trust property inquiries and plot bookings",
      "Video walkthrough optimization for YouTube and social feeds"
    ],
    keyResults: [
      { metric: "1,850+", label: "Qualified Investor Leads" },
      { metric: "-42%", label: "Cost Per Acquisition (CPA)" },
      { metric: "+210%", label: "Organic Real Estate Search Lift" }
    ],
    tools: ["Facebook Lead Ads", "Local SEO", "Web Design", "Google Search Console", "CRM Workflows"],
    driveCategory: "FB Ads & My Designs"
  },
  {
    id: "capital-health-mash",
    title: "Healthcare Digital Strategy & Clinical Reputation",
    client: "Capital Health (CHSC) & Mukhtar A. Shaikh Hospital",
    category: "healthcare",
    categoryLabel: "Healthcare Marketing",
    period: "Clinical Engagements",
    image: capitalHealthLogo,
    overview: "Formulated patient-first digital marketing frameworks and search optimization for clinical healthcare facilities. Enhanced physician profiles, specialized treatment discoverability, and community trust media.",
    deliverables: [
      "Clinical service On-Page SEO and Google Maps Local 3-Pack optimization",
      "Doctor and specialist authority profiles with schema structured data",
      "Hospital facility video productions ('Mukhtar A. Shaikh Hospital')",
      "Patient FAQ and clinical content guidelines"
    ],
    keyResults: [
      { metric: "Top 3", label: "Local Healthcare Pack Ranks" },
      { metric: "+140%", label: "Direction & Call Inquiries" },
      { metric: "High Trust", label: "E-E-A-T Medical Content" }
    ],
    tools: ["Medical SEO", "Local Schema", "Google Business Profile", "Video Marketing"],
    driveCategory: "My Designs & Social Media Posts"
  },
  {
    id: "credkin-fintech",
    title: "Credit Platforms & FinTech Thought Leadership Content",
    client: "Credkin",
    category: "branding",
    categoryLabel: "FinTech & Content Strategy",
    period: "Financial Technology Editorial",
    overview: "Authored in-depth technical guides, credit monitoring comparative architectures, and financial infographics for consumer credit technology platform Credkin.",
    deliverables: [
      "Comprehensive Guide to Choosing the Best Credit Monitoring Service (technical whitepaper)",
      "Credit Management Platforms & Repair comparative articles",
      "FinTech infographic design explaining credit scoring mechanics and dispute workflows",
      "Search-optimized financial taxonomy targeting high-CPC personal finance keywords"
    ],
    keyResults: [
      { metric: "5+ In-Depth", label: "Long-form Research Guides" },
      { metric: "100%", label: "Editorial Compliance" },
      { metric: "High CPC", label: "Ranked FinTech Keywords" }
    ],
    tools: ["FinTech SEO", "Technical Writing", "Infographic Design", "Content Strategy"],
    driveCategory: "My Certifications & Presentations"
  },
  {
    id: "denim-crafts-export",
    title: "Denim Crafts Global Manufacturing Brand Story",
    client: "Denim Crafts",
    category: "social",
    categoryLabel: "Apparel Export & Video",
    period: "Industrial Showcase",
    image: denimCraftsLogo,
    overview: "Crafted corporate brand presence, voiceover video campaigns, and industrial storytelling for apparel exporter Denim Crafts, showcasing Pakistani denim craftsmanship to international buyers.",
    deliverables: [
      "Professional voiceover video productions detailing manufacturing standards",
      "B2B social media presentation materials and brand collateral",
      "Visual identity asset polish and web portfolio showcase"
    ],
    keyResults: [
      { metric: "Global", label: "Export Market Presence" },
      { metric: "High Res", label: "Industrial Video Assets" },
      { metric: "B2B Lead", label: "Buyer Inquiry Support" }
    ],
    tools: ["Video Production", "Voiceover Editing", "B2B Marketing", "Photoshop"],
    driveCategory: "My Designs & Social Media Posts"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "seo-strategy",
    number: "01",
    title: "Search Engine Optimization & Authority Building",
    tagline: "Dominate high-intent search queries with algorithmic precision.",
    description: "From technical crawler health and Core Web Vitals to semantic content architecture and high-tier link outreach, I build sustainable organic moats that outrank competitors.",
    deliverables: [
      "Full Technical SEO Audit (Crawl budget, Schema markup, Canonicals)",
      "High-Intent Keyword Research & Search Intent Mapping (Semrush)",
      "On-Page Optimization (Metadata, Semantic Hierarchy, Internal Links)",
      "White-Hat Editorial Outreach & Backlink Acquisition",
      "Google Search Console & Google Analytics 4 Setup"
    ],
    tools: ["Semrush", "Google Search Console", "Screaming Frog", "Ahrefs", "GA4"]
  },
  {
    id: "social-listening",
    number: "02",
    title: "Social Media Listening & Sentiment Intelligence",
    tagline: "Protect enterprise brand equity through real-time conversational data.",
    description: "Harness enterprise-grade listening engines like Meltwater to capture consumer chatter, identify sentiment inflection points, and proactively manage brand perception before crises unfold.",
    deliverables: [
      "Meltwater Real-Time Sentiment & Share of Voice Dashboards",
      "Executive Crisis Escalation Protocols & Rapid Response Guidelines",
      "Competitor Social Benchmarking & Trend Interception",
      "Consumer Pain Point Extraction for Product & PR Teams",
      "Automated Sentiment Categorization & Volatility Alerts"
    ],
    tools: ["Meltwater", "Brandwatch", "Social Sentiment Radar", "Crisis Workflows"]
  },
  {
    id: "customer-experience",
    number: "03",
    title: "Customer Experience & Enterprise Escalation Workflows",
    tagline: "Unify customer satisfaction with enterprise back-office execution.",
    description: "Bridging the gap between front-line customer engagement and enterprise ERP systems like SAP S/4HANA to resolve inquiries with zero lost threads.",
    deliverables: [
      "SAP S/4HANA Case-Tracking & Ticketing Workflow Integration",
      "Omnichannel Chat Support Strategy & SLA Monitoring",
      "Reputation Defense & Escalation De-escalation Scripts",
      "Customer Satisfaction (CSAT) & Resolution Time Optimization"
    ],
    tools: ["SAP S/4HANA", "Customer Chat Systems", "Zendesk", "SLA Monitors"]
  },
  {
    id: "ecommerce-web",
    number: "04",
    title: "E-Commerce Management & Web Development",
    tagline: "Conversion-optimized storefronts engineered for revenue velocity.",
    description: "Leveraging hands-on web design and development background to build fast, intuitive Shopify and WordPress digital storefronts that turn organic visitors into buyers.",
    deliverables: [
      "Shopify & WordPress Store Setup, Customization & App Stacks",
      "Catalog Structure, Category Page SEO & Product Metadata",
      "Page Speed & Mobile Experience Optimization",
      "Conversion Rate Optimization (CRO) & Cart Abandonment Recovery"
    ],
    tools: ["Shopify", "WordPress", "HTML/CSS/JS", "Adobe Photoshop", "Meta Lead Ads"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Social Media Certified & Inbound Strategy",
    issuer: "HUBSPOT ACADEMY",
    year: "Verified",
    credentialId: "Hubspot - Shaikh Osama.png",
    focus: "Social media listening, inbound audience growth, lead conversion & brand management"
  },
  {
    name: "Google Digital Certification / Digital Unlocked",
    issuer: "GOOGLE",
    year: "Verified",
    credentialId: "Shaikh Osama - Google Certification.pdf",
    focus: "Search marketing, online presence architecture, digital analytics & display advertising"
  },
  {
    name: "Yoast SEO Certified",
    issuer: "YOAST ACADEMY",
    year: "Verified",
    credentialId: "YOAST - Shaikh Osama.pdf",
    focus: "Technical WordPress SEO, schema structured data, internal linking & content readability"
  },
  {
    name: "SEO Academy Rank Tracking & Keyword Intelligence",
    issuer: "MANGOOLS",
    year: "Verified",
    credentialId: "Mangools - Shaikh Osama.pdf",
    focus: "SERP volatility monitoring, backlink profiling & competitive keyword search intent"
  },
  {
    name: "Keyword Research Certification",
    issuer: "SEMRUSH",
    year: "Verified",
    focus: "Competitor gap analysis, keyword intent clustering & high-CPC SERP domination"
  },
  {
    name: "IT Essentials & Network Infrastructure",
    issuer: "CISCO NETWORKING ACADEMY",
    year: "Verified",
    credentialId: "Shaikh Osama-CISCO Academy.pdf",
    focus: "Computer networking, web hosting fundamentals, server configurations & IT workflows"
  },
  {
    name: "Digital Marketing Masterclass",
    issuer: "BOOT CAMP DIGITAL",
    year: "Verified",
    credentialId: "Boot Camp Digital - Shaikh Osama Certificate of Attendance.pdf",
    focus: "Performance marketing, conversion funnel engineering & omnichannel social advertising"
  },
  {
    name: "Modern Digital Strategy & Growth",
    issuer: "BITDEGREE",
    year: "Verified",
    credentialId: "bitdegree-certificate-shaikh osama.pdf",
    focus: "Algorithmic social positioning, customer retention loops & web traffic acquisition"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Associate Degree in Web Design & Development",
    institution: "Virtual University of Pakistan",
    grade: "3.08 CGPA",
    detail: "Final Year Project: Electrical Vehicle Web App Information System — responsive architectural web portal integrating electric mobility specifications and real-time charging station directory.",
    period: "Graduated"
  },
  {
    degree: "Diploma, Advanced DIT (Information Technology)",
    institution: "Computer Collegiate, Karachi",
    detail: "Web design principles, software productivity, database fundamentals, and computer hardware systems."
  },
  {
    degree: "Higher Secondary Certificate (HSC), Intermediate",
    institution: "Karachi Board of Intermediate Education",
    detail: "Pre-Engineering / Science studies."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Hamdard Public School, Karachi",
    grade: "Grade 'A'",
    detail: "Foundational academic science excellence."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Karachi University Entry Test Invigilator",
    organization: "Karachi University",
    period: "2021 – 2022",
    description: "Appointed as an official invigilator to supervise large-scale university entrance test administrations, upholding strict institutional compliance and integrity."
  },
  {
    title: "Pakistan Day Commemorative Logo Creation",
    organization: "Hamdard University",
    period: "Design Honor",
    description: "Selected design contributor for official Pakistan Day graphic assets and collegiate digital branding."
  },
  {
    title: "Website Audit & Video Production",
    organization: "PARHLO",
    period: "Digital Initiative",
    description: "Delivered comprehensive website usability audits and video content optimization for one of Pakistan's major digital publishing networks."
  },
  {
    title: "YouTube Channel Administration",
    organization: "Anchor Owais Rabbani",
    period: "Media Administration",
    description: "Managed channel optimization, video metadata, thumbnail visual strategy, and audience growth analytics for respected broadcast journalist Owais Rabbani."
  },
  {
    title: "Social Media Marketing Internship",
    organization: "3D Educators, Karachi",
    period: "Early Career",
    description: "Administered Facebook paid campaign ad sets, creative ad copywriting, data entry, and business page moderation."
  },
  {
    title: "Digital Marketing Admin",
    organization: "Tehzeeb NGO",
    period: "Non-Profit Initiative",
    description: "Spearheaded digital marketing for community initiatives in Karachi, creative image editing, and volunteer awareness post generation."
  }
];

export const SKILL_GROUPS = [
  {
    category: "Search Engine Optimization",
    skills: ["Technical SEO Audits", "Keyword Gap Analysis", "On-Page Semantic Optimization", "Off-Page Link Building", "Competitor SERP Analysis", "Google Search Console", "Screaming Frog", "Semrush"]
  },
  {
    category: "Brand Intelligence & Social Listening",
    skills: ["Meltwater Platform", "Consumer Sentiment Tracking", "Brand Health Monitoring", "Social Escalation Management", "Crisis Playbook Design", "Share of Voice Reporting", "Competitor Sentiment Benchmarking"]
  },
  {
    category: "Enterprise Customer Experience",
    skills: ["SAP S/4HANA Workflows", "Customer Chat Support", "Brand Reputation Defense", "Case Tracking Protocols", "Cross-Departmental SLA Enforcements", "Escalation Resolution"]
  },
  {
    category: "Technical & E-Commerce",
    skills: ["Shopify Store Management", "WordPress Development", "HTML5 / CSS3 / JavaScript", "Adobe Photoshop", "Meta Lead Ads", "LinkedIn Personal Optimization", "Landing Page CRO"]
  }
];
