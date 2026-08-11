/**
 * Homepage Data
 * All content for the Home page sections.
 */

import type { HeroContent, ProcessStep, WhoWeHelp, WhyChooseUs } from '@/types';

export const heroData: HeroContent = {
  eyebrow: 'FINANCIAL ADVISORY & TRANSFORMATION SERVICES',
  headline: 'Strengthening Financial Health • Empowering Communities',
  subheadline:
    'Sitakarn is a Nepal-based professional consulting firm dedicated exclusively to strengthening the financial health, governance, operational efficiency, and long-term sustainability of financial intermediaries and Savings and Credit Cooperatives (SACCOs) across Nepal.',
  primaryCTA: { label: 'Explore Our Services', href: '/services' },
  secondaryCTA: { label: 'Book a Consultation', href: '/contact' },
};

export const whoWeHelpData: WhoWeHelp[] = [
  {
    id: 'wwh-1',
    title: 'Savings & Credit Cooperatives',
    description:
      'Member-owned financial institutions requiring rigorous accounting standards, regulatory compliance, and transparent financial reporting.',
    icon: 'PiggyBank',
  },
  {
    id: 'wwh-2',
    title: 'Agricultural Cooperatives',
    description:
      'Farmer cooperatives managing complex inventory, seasonal cash flows, and government subsidy accounting.',
    icon: 'Wheat',
  },
  {
    id: 'wwh-3',
    title: 'Multipurpose Cooperatives',
    description:
      'Diversified cooperatives with multiple revenue streams needing consolidated financial oversight and governance support.',
    icon: 'Building2',
  },
  {
    id: 'wwh-4',
    title: 'SMEs & Growing Businesses',
    description:
      'Small and medium enterprises seeking to establish sound financial practices, optimize tax positions, and prepare for growth.',
    icon: 'Briefcase',
  },
  {
    id: 'wwh-5',
    title: 'NGOs & Foundations',
    description:
      'Non-profit organizations requiring donor fund accountability, financial reporting for grants, and compliance with charitable regulations.',
    icon: 'Heart',
  },
  {
    id: 'wwh-6',
    title: 'Government Agencies',
    description:
      'Public sector bodies and government-linked entities needing independent financial assessment and capacity building.',
    icon: 'Landmark',
  },
];

export const whyChooseUsData: WhyChooseUs[] = [
  {
    id: 'wcu-1',
    title: 'Exclusive SACCO Focus',
    description:
      'Exclusive focus on Savings and Credit Cooperatives (SACCOs) to address financial and operational challenges, improve governance, and manage risks.',
    icon: 'Award',
  },
  {
    id: 'wcu-2',
    title: 'International & Local Expertise',
    description:
      'International banking expertise combined with deep knowledge of Nepal\'s cooperative environment.',
    icon: 'Globe',
  },
  {
    id: 'wcu-3',
    title: 'Practical Solutions',
    description:
      'Practical, implementation-focused advisory services. We work alongside cooperative leaders to implement practical, measurable solutions.',
    icon: 'Settings',
  },
  {
    id: 'wcu-4',
    title: 'Independent Assessment',
    description:
      'Independent and objective financial assessments tailored to each cooperative to restore financial stability and rebuild member confidence.',
    icon: 'Shield',
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
