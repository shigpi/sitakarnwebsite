/**
 * Testimonials Data
 * Client testimonials. Add new entries here to add them to the site.
 */

import type { Testimonial } from '@/types';

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Sitakarn transformed how our cooperative manages its finances. After years of struggling to produce compliant year-end accounts, their team set us up with a proper system and trained our accountant properly. Our last audit passed without a single material finding — the first time in eight years.',
    authorName: 'Prasert Wongsawat',
    authorTitle: 'Chairman',
    organization: 'Nakhon Ratchasima Savings & Credit Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-2',
    quote:
      'The tax consulting team\'s knowledge of cooperative-specific regulations saved us significantly in our annual tax planning. Khun Nattapong identified exemptions we had been overlooking for years. The engagement paid for itself many times over.',
    authorName: 'Malinee Thongchai',
    authorTitle: 'General Manager',
    organization: 'Chiang Rai Agricultural Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-3',
    quote:
      'We engaged Sitakarn when our NGO was expanding and needed to meet donor reporting requirements. Their team understood non-profit accounting deeply and had our financial statements meeting international standards within three months. The transition was seamless.',
    authorName: 'Dr. Piyamas Suchatraswat',
    authorTitle: 'Executive Director',
    organization: 'Community Health Foundation Thailand',
    organizationType: 'ngo',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-4',
    quote:
      'The board training program Sitakarn delivered for our committee members was exceptional. Our board members now ask better questions, understand the financial reports, and are genuinely engaged in financial oversight. This has strengthened our cooperative significantly.',
    authorName: 'Somsak Rattanawong',
    authorTitle: 'Secretary',
    organization: 'Pathum Thani Multipurpose Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: false,
  },
  {
    id: 'test-5',
    quote:
      'As a growing SME, we needed a consulting firm that could grow with us. Sitakarn has been our financial partner for six years now — handling everything from monthly bookkeeping to our annual audit preparation. Responsive, professional, and genuinely invested in our success.',
    authorName: 'Apinya Kamolrat',
    authorTitle: 'Managing Director',
    organization: 'APK Manufacturing Co., Ltd.',
    organizationType: 'sme',
    rating: 5,
    featured: false,
  },
  {
    id: 'test-6',
    quote:
      'Sitakarn guided us through the entire process of forming our farmer cooperative — from drafting the bylaws to the first AGM. What could have been a confusing and stressful process was made straightforward by their expertise and patient guidance.',
    authorName: 'Khanchai Puttisombat',
    authorTitle: 'Founding Chairman',
    organization: 'Surin Jasmine Rice Cooperative',
    organizationType: 'cooperative',
    rating: 5,
    featured: false,
  },
];
