/**
 * Testimonials Data
 * Client testimonials. Add new entries here to add them to the site.
 */

import type { Testimonial } from '@/types';

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      "Sitakarn transformed how our cooperative manages its finances. After years of struggling to produce compliant year-end accounts under Nepal's cooperative regulations, their team set us up with a proper system and trained our accountant thoroughly. Our last audit passed without a single material finding — the first time in eight years.",
    authorName: 'Ramesh Shrestha',
    authorTitle: 'Chairman',
    organization: 'Lalitpur Savings & Credit Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-2',
    quote:
      "The tax consulting team's knowledge of cooperative-specific regulations under Nepal's IRD framework saved us significantly in our annual tax planning. They identified exemptions we had been overlooking for years. The engagement paid for itself many times over.",
    authorName: 'Sunita Tamang',
    authorTitle: 'General Manager',
    organization: 'Kaski Agricultural Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-3',
    quote:
      "We engaged Sitakarn when our NGO was expanding and needed to meet donor reporting requirements. Their team understood non-profit accounting under Nepal's standards deeply and had our financial statements meeting requirements within three months. The transition was seamless.",
    authorName: 'Dr. Anita Karmacharya',
    authorTitle: 'Executive Director',
    organization: 'Community Health Foundation Nepal',
    organizationType: 'ngo',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-4',
    quote:
      'The board training program Sitakarn delivered for our committee members was exceptional. Our board members now ask better questions, understand the financial reports, and are genuinely engaged in financial oversight. This has strengthened our cooperative significantly.',
    authorName: 'Bikash Adhikari',
    authorTitle: 'Secretary',
    organization: 'Chitwan Multipurpose Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: false,
  },
  {
    id: 'test-5',
    quote:
      "When selling our family property in Kathmandu, we were worried about the complexity of the title transfer process. Sitakarn's team guided us through every step — from KYC to the final government registration. Their \"No Clear Title \u2013 No Transaction\" principle gave us complete confidence.",
    authorName: 'Pratima Gurung',
    authorTitle: 'Property Owner',
    organization: 'Kathmandu',
    organizationType: 'sme',
    rating: 5,
    featured: false,
  },
  {
    id: 'test-6',
    quote:
      "Sitakarn guided us through the entire process of forming our farmer cooperative — from drafting the bylaws to the first AGM. What could have been a confusing and stressful process was made straightforward by their expertise and patient guidance under Nepal's Cooperative Act 2074.",
    authorName: 'Nabin Poudel',
    authorTitle: 'Founding Chairman',
    organization: 'Rupandehi Agro Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: false,
  },
];
