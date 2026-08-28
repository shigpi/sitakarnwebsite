/**
 * Blog / Insights Data
 * Articles for the Latest Insights section.
 * Replace with real CMS or API integration when content is ready.
 */

import type { BlogPost } from '@/types';
import { images } from '@/assets/images';

export const blogData: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'cooperative-annual-audit-preparation-guide',
    title: "The Complete Guide to Cooperative Annual Audit Preparation in Nepal",
    excerpt:
      "Most audit findings in cooperatives are preventable. Learn the systematic preparation steps that consistently result in clean audit opinions — from reconciliation schedules to documentation standards under Nepal's cooperative regulations.",
    category: 'audit',
    categoryLabel: 'Audit',
    author: 'Sitakarn Advisory Team',
    publishedAt: '2024-11-15',
    readingTime: 8,
    imageUrl: images.blog.post1,
    featured: true,
    tags: ['audit', 'cooperative', 'compliance', 'annual-audit'],
  },
  {
    id: 'blog-2',
    slug: 'cooperative-tax-exemptions-nepal-2024',
    title: "Tax Exemptions Available to Nepalese Cooperatives: 2024 Update",
    excerpt:
      "Registered cooperatives in Nepal enjoy several significant tax advantages under the Income Tax Act 2058 that many organizations fail to fully utilize. This article explains the exemptions, the qualifying conditions, and how to properly document claims with the IRD.",
    category: 'tax-update',
    categoryLabel: 'Tax',
    author: 'Sitakarn Tax Team',
    publishedAt: '2024-10-22',
    readingTime: 11,
    imageUrl: images.blog.post2,
    featured: true,
    tags: ['tax', 'exemption', 'cooperative', 'inland-revenue'],
  },
  {
    id: 'blog-3',
    slug: 'nfrs-for-smes-cooperatives-nepal',
    title: "NFRS for SMEs & Cooperatives: What Nepalese Organizations Need to Know",
    excerpt:
      "Nepal's updated Nepal Financial Reporting Standards (NFRS) and Nepal Accounting Standards (NAS) bring important changes for cooperatives and SMEs. We break down the key requirements and what they mean for your annual accounts.",
    category: 'accounting',
    categoryLabel: 'Accounting',
    author: 'Sitakarn Advisory Team',
    publishedAt: '2024-09-08',
    readingTime: 9,
    imageUrl: images.blog.post3,
    featured: false,
    tags: ['NFRS', 'NAS', 'accounting-standards', 'financial-reporting'],
  },
  {
    id: 'blog-4',
    slug: 'strengthening-cooperative-governance-nepal',
    title: "Five Governance Reforms That Strengthen Cooperative Financial Oversight",
    excerpt:
      "Sound governance is the foundation of cooperative financial health under Nepal's Cooperative Act 2074. We examine five structural changes that cooperatives of all sizes can implement to improve board oversight and reduce financial risk.",
    category: 'cooperative-finance',
    categoryLabel: 'Cooperative Finance',
    author: 'Sitakarn Advisory Team',
    publishedAt: '2024-08-19',
    readingTime: 7,
    imageUrl: images.blog.post4,
    featured: false,
    tags: ['governance', 'cooperative', 'board', 'oversight'],
  },
  {
    id: 'blog-5',
    slug: 'real-estate-due-diligence-nepal',
    title: "Real Estate Due Diligence in Nepal: A Complete Buyer's Guide",
    excerpt:
      "Buying property in Nepal involves complex title verification, AML/CFT compliance, and government registration requirements. This guide walks buyers through Sitakarn's structured due diligence framework — including our Category A/B/C property classification system.",
    category: 'accounting',
    categoryLabel: 'Real Estate',
    author: 'Sitakarn Brokerage Team',
    publishedAt: '2024-07-30',
    readingTime: 10,
    imageUrl: images.blog.post5,
    featured: false,
    tags: ['real-estate', 'due-diligence', 'property', 'Nepal'],
  },
  {
    id: 'blog-6',
    slug: 'sacco-loan-portfolio-management-nepal',
    title: "Managing Loan Portfolio Risk in Nepalese SACCOs",
    excerpt:
      "Savings & Credit Cooperatives in Nepal face growing loan portfolio risks tied to economic cycles. We examine the financial tools and planning approaches that successful SACCOs use to maintain healthy portfolios without compromising member services.",
    category: 'cooperative-finance',
    categoryLabel: 'Cooperative Finance',
    author: 'Sitakarn Advisory Team',
    publishedAt: '2024-06-14',
    readingTime: 6,
    imageUrl: images.blog.post6,
    featured: false,
    tags: ['SACCO', 'loan-portfolio', 'risk-management', 'cooperative'],
  },
];
