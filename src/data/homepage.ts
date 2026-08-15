/**
 * Homepage Data
 * All content for the Home page sections.
 */

import type { HeroContent, ProcessStep, WhoWeHelp, WhyChooseUs } from '@/types';

export const heroData: HeroContent = {
  eyebrow: 'FINANCIAL ADVISORY · REAL ESTATE BROKERAGE · MORTGAGE SERVICES',
  headline: 'Nepal\'s Trusted Property & Financial Services Partner',
  subheadline:
    'Sitakarn Mortgage Pvt. Ltd. is Nepal\'s pioneering professional firm — combining structured real estate brokerage with expert financial advisory for cooperatives and organizations. Transparent, technology-enabled, and legally compliant services from listing to title transfer.',
  primaryCTA: { label: 'Explore Our Services', href: '/services' },
  secondaryCTA: { label: 'Book a Consultation', href: '/contact' },
};

export const whoWeHelpData: WhoWeHelp[] = [
  {
    id: 'wwh-1',
    title: 'Property Buyers & Sellers',
    description:
      'Individual homeowners, landowners, families, and NRNs looking to buy or sell residential and commercial real estate through a transparent, professionally managed brokerage process.',
    icon: 'Home',
  },
  {
    id: 'wwh-2',
    title: 'Investors & NRN Clients',
    description:
      'Domestic and Non-Resident Nepali (NRN) investors seeking verified property listings, buyer–property matching, market intelligence, and end-to-end transaction support.',
    icon: 'TrendingUp',
  },
  {
    id: 'wwh-3',
    title: 'Savings & Credit Cooperatives',
    description:
      'Member-owned financial institutions requiring rigorous governance, regulatory compliance, financial health improvement, and institutional capacity building.',
    icon: 'PiggyBank',
  },
  {
    id: 'wwh-4',
    title: 'Banks & Financial Institutions',
    description:
      'Commercial banks, development banks, and financial institutions requiring property due diligence support, mortgage referral coordination, and disposal of legally saleable assets.',
    icon: 'Landmark',
  },
  {
    id: 'wwh-5',
    title: 'SMEs & Growing Businesses',
    description:
      'Small and medium enterprises seeking commercial property acquisition support, financial advisory, and sound financial practices to optimize growth.',
    icon: 'Briefcase',
  },
  {
    id: 'wwh-6',
    title: 'NGOs & Foundations',
    description:
      'Non-profit organizations requiring donor fund accountability, financial reporting for grants, compliance support, and property management advisory.',
    icon: 'Heart',
  },
];

export const whyChooseUsData: WhyChooseUs[] = [
  {
    id: 'wcu-1',
    title: 'Pioneer Since 2003',
    description:
      "Nepal's first registered real estate brokerage and mortgage service provider, recognized for introducing online property services and transparent professional solutions.",
    icon: 'Award',
  },
  {
    id: 'wcu-2',
    title: 'Compliance-Driven Integrity',
    description:
      'Every transaction follows a structured KYC, AML/CFT, and due diligence framework — with a firm "No Clear Title – No Transaction Recommendation" principle.',
    icon: 'ShieldCheck',
  },
  {
    id: 'wcu-3',
    title: 'Technology-Enabled Platform',
    description:
      'AI-powered buyer–property matching engine, centralized verified property database, and digital transaction management for fast, accurate, and transparent service.',
    icon: 'Settings',
  },
  {
    id: 'wcu-4',
    title: 'International & Local Expertise',
    description:
      'International banking and financial expertise combined with deep knowledge of Nepal\'s cooperative sector, property market, and regulatory environment.',
    icon: 'Globe',
  },
];

export const processStepsData: ProcessStep[] = [
  {
    step: 1,
    title: 'Assess',
    description:
      'Evaluate financial health, governance, operations, risks, and institutional capacity.',
    icon: 'ClipboardList',
  },
  {
    step: 2,
    title: 'Analyze',
    description:
      'Independent and objective financial assessments tailored to each cooperative.',
    icon: 'FileText',
  },
  {
    step: 3,
    title: 'Advise',
    description:
      'Develop customized solutions and tailored strategies based on your financial condition and strategic objectives.',
    icon: 'Settings',
  },
  {
    step: 4,
    title: 'Implement',
    description:
      'We work alongside cooperative boards and management teams to implement practical solutions.',
    icon: 'CheckCircle',
  },
  {
    step: 5,
    title: 'Monitor & Sustain',
    description:
      'Ongoing advisory support, performance monitoring, and continuous improvement to help cooperatives sustain long-term success.',
    icon: 'HeadphonesIcon',
  },
];
