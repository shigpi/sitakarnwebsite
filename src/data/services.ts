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
];
