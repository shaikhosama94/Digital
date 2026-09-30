import osamaPortrait from '@/src/assets/images/osama_portrait_1790752077095.jpg';
import agencyWorkspace from '@/src/assets/images/agency_workspace_1790752096309.jpg';
import seoAnalyticsFlow from '@/src/assets/images/seo_analytics_flow_1790752111659.jpg';
import sentimentMonitoring from '@/src/assets/images/sentiment_monitoring_1790752125568.jpg';

export { osamaPortrait, agencyWorkspace, seoAnalyticsFlow, sentimentMonitoring };

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
    featuredImage: seoAnalyticsFlow
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
    category: "growth"
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
    featuredImage: agencyWorkspace
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
    category: "ecommerce"
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
    name: "Keyword Research Certification",
    issuer: "SEMRUSH",
    year: "Certified",
    focus: "Competitor gap analysis, keyword intent clustering & SERP analysis"
  },
  {
    name: "Social Media Certified",
    issuer: "HUBSPOT ACADEMY",
    year: "Certified",
    focus: "Social listening, inbound audience engagement & brand strategy"
  },
  {
    name: "SEO Foundations",
    issuer: "LYNDA / LINKEDIN LEARNING",
    year: "Certified",
    focus: "Algorithmic search mechanics, on-page factors & crawler architecture"
  },
  {
    name: "Content Marketing Foundations",
    issuer: "LYNDA / LINKEDIN LEARNING",
    year: "Certified",
    focus: "Audience personas, storytelling pipelines & content ROI"
  },
  {
    name: "Learning Instagram for Business",
    issuer: "LYNDA / LINKEDIN LEARNING",
    year: "Certified",
    focus: "Algorithm optimization, visual story engagement & conversions"
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
