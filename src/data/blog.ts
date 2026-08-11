/**
 * Blog / Insights Data
 * Placeholder articles for the Latest Insights section.
 * Replace with real CMS or API integration when content is ready.
 */

import type { BlogPost } from '@/types';
import { images } from '@/assets/images';

export const blogData: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'cooperative-annual-audit-preparation-guide',
    title: 'The Complete Guide to Cooperative Annual Audit Preparation',
    excerpt:
      'Most audit findings in cooperatives are preventable. Learn the systematic preparation steps that consistently result in clean audit opinions — from reconciliation schedules to documentation standards.',
    category: 'audit',
    categoryLabel: 'Audit',
    author: 'Siriporn Ratanamanee',
    publishedAt: '2024-11-15',
    readingTime: 8,
    imageUrl: images.blog.post1,
    featured: true,
    tags: ['audit', 'cooperative', 'compliance', 'annual-audit'],
  },
  {
    id: 'blog-2',
    slug: 'cooperative-tax-exemptions-thailand-2024',
    title: 'Tax Exemptions Available to Thai Cooperatives: 2024 Update',
    excerpt:
      'Registered cooperatives in Thailand enjoy several significant tax advantages that many organizations fail to fully utilize. This article explains the exemptions, the qualifying conditions, and how to properly document claims.',
    category: 'tax-update',
    categoryLabel: 'Tax',
    author: 'Nattapong Chaiwat',
    publishedAt: '2024-10-22',
    readingTime: 11,
    imageUrl: images.blog.post2,
    featured: true,
    tags: ['tax', 'exemption', 'cooperative', 'revenue-department'],
  },
  {
    id: 'blog-3',
    slug: 'tfrs-for-smes-cooperatives',
    title: 'TFRS for NPAEs: What Cooperatives Need to Know for 2025',
    excerpt:
      'The FAP\'s updated financial reporting standards for Non-Publicly Accountable Entities come into effect for most cooperatives in 2025. We break down the key changes and what they mean for your annual accounts.',
    category: 'accounting',
    categoryLabel: 'Accounting',
    author: 'Wilawan Srisuk',
    publishedAt: '2024-09-08',
    readingTime: 9,
    imageUrl: images.blog.post3,
    featured: false,
    tags: ['TFRS', 'NPAE', 'accounting-standards', 'financial-reporting'],
  },
  {
    id: 'blog-4',
    slug: 'strengthening-cooperative-governance',
    title: 'Five Governance Reforms That Strengthen Cooperative Financial Oversight',
    excerpt:
      'Sound governance is the foundation of cooperative financial health. We examine five structural changes that cooperatives of all sizes can implement to improve board oversight and reduce financial risk.',
    category: 'cooperative-finance',
    categoryLabel: 'Cooperative Finance',
    author: 'Kulthida Wimonphan',
    publishedAt: '2024-08-19',
    readingTime: 7,
    imageUrl: images.blog.post4,
    featured: false,
    tags: ['governance', 'cooperative', 'board', 'oversight'],
  },
  {
    id: 'blog-5',
    slug: 'ngo-donor-reporting-standards',
    title: 'Meeting International Donor Reporting Standards: A Practical Guide for Thai NGOs',
    excerpt:
      'International donors increasingly require financial reports that meet IPSAS or IFRS standards. This guide explains what that means in practice and the steps Thai NGOs can take to comply without restructuring their entire accounting system.',
    category: 'accounting',
    categoryLabel: 'Accounting',
    author: 'Siriporn Ratanamanee',
    publishedAt: '2024-07-30',
    readingTime: 10,
    imageUrl: images.blog.post5,
    featured: false,
    tags: ['NGO', 'donor-reporting', 'IPSAS', 'international-standards'],
  },
  {
    id: 'blog-6',
    slug: 'agricultural-cooperative-seasonal-cash-flow',
    title: 'Managing Seasonal Cash Flow in Agricultural Cooperatives',
    excerpt:
      'Agricultural cooperatives face extreme cash flow seasonality tied to harvest cycles. We examine the financial tools and planning approaches that successful agri-cooperatives use to bridge lean periods without compromising member services.',
    category: 'cooperative-finance',
    categoryLabel: 'Cooperative Finance',
    author: 'Somchai Tanakorn',
    publishedAt: '2024-06-14',
    readingTime: 6,
    imageUrl: images.blog.post6,
    featured: false,
    tags: ['agricultural', 'cash-flow', 'seasonal', 'cooperative'],
  },
];
