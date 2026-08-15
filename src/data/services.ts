/**
 * Services Data
 * All service categories and individual services.
 * To add a service: add an entry to the appropriate category's services array.
 * To add a category: add a new ServiceCategory object.
 */

import type { ServiceCategory } from '@/types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'advisory',
    title: 'Professional Advisory Services',
    description:
      'Comprehensive Solutions for Cooperative Transformation. Sitakarn provides integrated advisory services designed to strengthen every aspect of cooperative performance.',
    services: [
      {
        id: 'adv-1',
        slug: 'institutional-diagnostic',
        categoryId: 'advisory',
        title: 'Institutional Diagnostic Assessment',
        shortDescription:
          'Evaluate financial health, governance, operations, risks, and institutional capacity.',
        fullDescription:
          'Evaluate financial health, governance, operations, risks, and institutional capacity. Identify problems early, implement corrective measures, and improve long-term sustainability.',
        icon: 'ClipboardList',
        features: [
          'Financial health evaluation',
          'Governance assessment',
          'Operations and risk review',
          'Institutional capacity check',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-2',
        slug: 'financial-health-improvement',
        categoryId: 'advisory',
        title: 'Financial Health Improvement',
        shortDescription:
          'Strengthen liquidity, cash flow, budgeting, financial planning, and institutional sustainability.',
        fullDescription:
          'Strengthen liquidity, cash flow, budgeting, financial planning, and institutional sustainability. Build resilient cooperatives that create lasting value for future generations.',
        icon: 'Activity',
        features: [
          'Liquidity management',
          'Cash flow strengthening',
          'Budgeting and financial planning',
          'Institutional sustainability planning',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-3',
        slug: 'deposit-growth',
        categoryId: 'advisory',
        title: 'Deposit Growth & Member Confidence',
        shortDescription:
          'Develop strategies to increase deposits, enhance member engagement, and rebuild public trust.',
        fullDescription:
          'Develop strategies to increase deposits, enhance member engagement, and rebuild public trust. We place the interests and long-term well-being of cooperative members at the center of our work.',
        icon: 'TrendingUp',
        features: [
          'Deposit growth strategies',
          'Member engagement enhancement',
          'Public trust rebuilding',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-4',
        slug: 'credit-risk-management',
        categoryId: 'advisory',
        title: 'Credit Risk Management',
        shortDescription:
          'Improve lending policies, borrower assessment, portfolio monitoring, and credit quality.',
        fullDescription:
          'Improve lending policies, borrower assessment, portfolio monitoring, and credit quality. Mitigate rising non-performing loans (NPLs) and address weak credit risk management.',
        icon: 'ShieldAlert',
        features: [
          'Lending policy improvement',
          'Borrower assessment',
          'Portfolio monitoring',
          'Credit quality enhancement',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-5',
        slug: 'loan-recovery',
        categoryId: 'advisory',
        title: 'Loan Recovery & Portfolio Quality',
        shortDescription:
          'Strengthen recovery strategies, reduce NPLs, and improve portfolio performance.',
        fullDescription:
          'Strengthen recovery strategies, reduce NPLs, and improve portfolio performance. Address ineffective loan recovery to safeguard members\' savings.',
        icon: 'Briefcase',
        features: [
          'Recovery strategy strengthening',
          'NPL reduction',
          'Portfolio performance improvement',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-6',
        slug: 'governance',
        categoryId: 'advisory',
        title: 'Governance & Leadership Development',
        shortDescription:
          'Enhance board effectiveness, strategic planning, policies, and leadership capability.',
        fullDescription:
          'Enhance board effectiveness, strategic planning, policies, and leadership capability. Address governance and leadership gaps for ethical leadership and responsible decision-making.',
        icon: 'Users',
        features: [
          'Board effectiveness enhancement',
          'Strategic planning',
          'Policy development',
          'Leadership capability building',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-7',
        slug: 'operational-excellence',
        categoryId: 'advisory',
        title: 'Operational Excellence',
        shortDescription:
          'Improve organizational structure, business processes, service delivery, and operational efficiency.',
        fullDescription:
          'Improve organizational structure, business processes, service delivery, and operational efficiency. Mitigate operational inefficiencies through continuous performance improvement.',
        icon: 'Settings',
        features: [
          'Organizational structure improvement',
          'Business process streamlining',
          'Service delivery enhancement',
          'Operational efficiency boosting',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-8',
        slug: 'internal-control',
        categoryId: 'advisory',
        title: 'Internal Control & Risk Management',
        shortDescription:
          'Strengthen internal controls, risk management systems, fraud prevention, and internal audit functions.',
        fullDescription:
          'Strengthen internal controls, risk management systems, fraud prevention, and internal audit functions. Address weak internal controls for accountable and transparent institutions.',
        icon: 'ShieldCheck',
        features: [
          'Internal controls strengthening',
          'Risk management systems',
          'Fraud prevention',
          'Internal audit functions',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-9',
        slug: 'regulatory-compliance',
        categoryId: 'advisory',
        title: 'Regulatory Compliance',
        shortDescription:
          'Improve regulatory compliance, reporting, documentation, and institutional readiness.',
        fullDescription:
          'Improve regulatory compliance, reporting, documentation, and institutional readiness. Ensure fully compliant institutions that protect members\' savings and meet regulatory expectations.',
        icon: 'FileCheck',
        features: [
          'Regulatory compliance improvement',
          'Reporting and documentation',
          'Institutional readiness',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
      {
        id: 'adv-10',
        slug: 'capacity-building',
        categoryId: 'advisory',
        title: 'Capacity Building',
        shortDescription:
          'Deliver specialized training and coaching for directors, CEOs, managers, accountants, auditors, and staff.',
        fullDescription:
          'Deliver specialized training and coaching for directors, CEOs, managers, accountants, auditors, and staff. Overcome limited institutional capacity through professional expertise and continuous learning.',
        icon: 'GraduationCap',
        features: [
          'Specialized training',
          'Coaching for leadership',
          'Staff capacity development',
        ],
        targetAudience: ['Savings and Credit Cooperatives (SACCOs)', 'Financial Intermediaries'],
      },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Brokerage & Realtor Services',
    description:
      "Nepal's pioneering professionally managed real estate brokerage. Sitakarn Mortgage Pvt. Ltd. connects genuine property buyers and sellers through transparent, technology-enabled, and legally compliant brokerage services — from property listing to title transfer.",
    services: [
      {
        id: 're-1',
        slug: 'property-listing-brokerage',
        categoryId: 'real-estate',
        title: 'Property Listing & Seller-Side Brokerage',
        shortDescription:
          'List and market residential land, homes, apartments, and commercial properties with professional due diligence and a unique Sitakarn Property Identification Number (SPIN).',
        fullDescription:
          'Every property listed through Sitakarn Mortgage is assigned a unique Sitakarn Property Identification Number (SPIN). We conduct structured due diligence, categorize listings (Verified / Verification Pending / Restricted), and market properties via website, social media, digital advertising, video tours, and our professional broker network.',
        icon: 'Home',
        features: [
          'Unique SPIN for every property',
          'Seller KYC & registration',
          'Preliminary ownership & document review',
          'Market valuation & listing agreement',
          'Multi-channel property marketing',
          'Buyer identification & property showing',
          'Offer & negotiation management',
        ],
        targetAudience: ['Individual homeowners', 'Landowners', 'NRN/overseas property owners', 'Investors', 'Estate executors/heirs'],
      },
      {
        id: 're-2',
        slug: 'buyer-registration-matching',
        categoryId: 'real-estate',
        title: 'Buyer Registration & Property Matching',
        shortDescription:
          "Register qualified buyers and match them with verified properties using Sitakarn's AI-enabled buyer–property matching engine.",
        fullDescription:
          'Sitakarn maintains a structured Buyer Database and classifies buyers as Ready, Finance-Ready, Qualified, or Prospective. Our matching engine automatically pairs buyer requirements with available verified properties, enabling efficient property discovery and professional buyer-side brokerage.',
        icon: 'Users',
        features: [
          'Buyer KYC & requirement registration',
          'AI-enabled buyer–property matching',
          'Property search & comparison',
          'Site visits & market information',
          'Negotiation & financing coordination',
          'Registration coordination support',
        ],
        targetAudience: ['First-time home buyers', 'Land buyers', 'Families', 'NRNs/eligible buyers', 'Corporate & institutional investors'],
      },
      {
        id: 're-3',
        slug: 'property-due-diligence',
        categoryId: 'real-estate',
        title: 'Property Due Diligence & Verification',
        shortDescription:
          'Structured ownership, legal, land, and municipal verification before any property is recommended to a buyer.',
        fullDescription:
          'Sitakarn applies a formal Property Due Diligence System before listing or promoting any property. We verify ownership certificates, kitta numbers, land classification, four boundaries, court/Rokka status, building permissions, road access, and transaction eligibility. Our "No Clear Title – No Transaction Recommendation" principle protects buyers from fraudulent or legally encumbered properties.',
        icon: 'ShieldCheck',
        features: [
          'Ownership & lalpurja verification',
          'Land information & boundary check',
          'Rokka / mortgage / encumbrance status',
          'Municipal & physical condition check',
          'Transaction eligibility assessment',
          'Classification: Verified / Pending / Restricted',
        ],
        targetAudience: ['Property buyers', 'Banks & financial institutions', 'Investors', 'Legal professionals'],
      },
      {
        id: 're-4',
        slug: 'transaction-coordination',
        categoryId: 'real-estate',
        title: 'End-to-End Transaction Coordination',
        shortDescription:
          'Full transaction management from seller registration through government title transfer — 20 structured steps.',
        fullDescription:
          'Sitakarn coordinates every stage of the property transaction: seller onboarding, KYC, documentation, due diligence, market assessment, listing, buyer matching, property visits, offer, negotiation, legal review, AML/CFT check, agreement execution, financing, registration preparation, and government title transfer confirmation.',
        icon: 'ClipboardList',
        features: [
          'Seller & buyer onboarding',
          'Legal due diligence coordination',
          'AML/CFT & financial compliance review',
          'Agreement & documentation support',
          'Bank financing coordination',
          'Government registration & title transfer',
          'Commission settlement & file archiving',
        ],
        targetAudience: ['Property sellers', 'Property buyers', 'Investors', 'Corporate property owners'],
      },
      {
        id: 're-5',
        slug: 'aml-cft-compliance',
        categoryId: 'real-estate',
        title: 'AML/CFT Compliance & KYC',
        shortDescription:
          "Formal Anti-Money Laundering and Countering the Financing of Terrorism program for all real estate transactions.",
        fullDescription:
          "As a designated non-financial business and profession (DNFBP) under Nepal's AML/CFT framework, Sitakarn Mortgage maintains a comprehensive AML/CFT program including customer identification, KYC, beneficial ownership verification, source-of-funds review, transaction monitoring, suspicious transaction reporting, and a Banking Channel First policy.",
        icon: 'FileCheck',
        features: [
          'Buyer & seller KYC/identity verification',
          'Beneficial ownership verification',
          'Source-of-funds review',
          'Enhanced due diligence for high-risk clients',
          'Suspicious transaction monitoring & reporting',
          'Five-year record retention',
          'Banking Channel First policy',
        ],
        targetAudience: ['All transaction parties', 'Banks & financial institutions', 'Legal professionals'],
      },
      {
        id: 're-6',
        slug: 'property-marketing',
        categoryId: 'real-estate',
        title: 'Professional Property Marketing',
        shortDescription:
          'Premium multi-channel property marketing including website listings, social media, video tours, drone imagery, and buyer alert networks.',
        fullDescription:
          'Sitakarn operates a professional digital property marketplace with mobile-responsive portal, SEO, social media advertising, property photography, video tours, drone imagery (where permissible), location maps, buyer alert emails, and a professional broker/referral network. Every listing clearly displays SPIN, location, property type, size, price, verification status, and contact channels.',
        icon: 'TrendingUp',
        features: [
          'Company website & mobile property portal',
          'Social media & digital advertising',
          'Professional photography & video tours',
          'Drone imagery & location maps',
          'Buyer alert email campaigns',
          'Broker & referral network',
          'No misleading advertisements policy',
        ],
        targetAudience: ['Property sellers', 'Developers', 'Corporate property owners', 'NRN/overseas owners'],
      },
      {
        id: 're-7',
        slug: 'mortgage-referral',
        categoryId: 'real-estate',
        title: 'Mortgage & Financing Referral',
        shortDescription:
          'Facilitate connections between qualified property buyers and licensed banks and financial institutions for home loan coordination.',
        fullDescription:
          'Where legally permissible, Sitakarn Mortgage facilitates referrals and coordination between qualified buyers and licensed commercial banks, development banks, financial institutions, and cooperatives for property financing. Sitakarn does not represent itself as a bank or conduct regulated lending.',
        icon: 'Briefcase',
        features: [
          'Buyer financing assessment',
          'Bank & financial institution referral',
          'Loan process coordination support',
          'Finance-Ready Buyer classification',
          'Financing documentation assistance',
        ],
        targetAudience: ['First-time home buyers', 'Property investors', 'NRN buyers', 'Families needing financing'],
      },
      {
        id: 're-8',
        slug: 'corporate-institutional-advisory',
        categoryId: 'real-estate',
        title: 'Corporate & Institutional Property Advisory',
        shortDescription:
          'Specialized real estate advisory and transaction services for companies, institutions, banks, and investors.',
        fullDescription:
          'Sitakarn provides corporate and institutional clients with professional property advisory including portfolio assessment, acquisition coordination, disposal of legally saleable assets, market intelligence, and property investment advisory services.',
        icon: 'Building2',
        features: [
          'Corporate property acquisition support',
          'Institutional portfolio advisory',
          'Market intelligence & valuation',
          'Asset disposal coordination',
          'Investment property matching',
        ],
        targetAudience: ['Companies', 'Banks & financial institutions', 'Institutional investors', 'Government-linked entities'],
      },
      {
        id: 're-9',
        slug: 'technology-platform',
        categoryId: 'real-estate',
        title: 'Digital Property Management Platform',
        shortDescription:
          'AI-powered property database and management platform for property listing, buyer matching, compliance, and transaction management.',
        fullDescription:
          'Sitakarn is building a technology-enabled property management platform with AI-powered matching, centralized verified property database, seller/buyer KYC management, transaction tracking, compliance module with AML risk rating and audit trail, and a customer service center for non-digital clients.',
        icon: 'Settings',
        features: [
          'Centralized verified property database',
          'AI-powered buyer–property matching engine',
          'Seller & buyer management modules',
          'Transaction & compliance tracking',
          'AML risk rating & audit trail',
          'Customer service center for non-digital clients',
        ],
        targetAudience: ['All clients', 'Internal operations'],
      },
      {
        id: 're-10',
        slug: 'real-estate-market-advisory',
        categoryId: 'real-estate',
        title: 'Property Valuation & Market Advisory',
        shortDescription:
          'Independent market assessment, property valuation coordination, and real estate market intelligence services.',
        fullDescription:
          "Sitakarn provides market range assessments and, where required, coordinates with qualified valuers, surveyors, architects, engineers, and tax professionals to support property transactions. The Company maintains market intelligence to support transparent, well-informed pricing.",
        icon: 'Activity',
        features: [
          'Indicative market range assessment',
          'Valuation expert coordination',
          'Surveyor & architect referrals',
          'Market intelligence reporting',
          'Realistic pricing support',
        ],
        targetAudience: ['Sellers', 'Buyers', 'Banks', 'Investors'],
      },
    ],
  },
];
