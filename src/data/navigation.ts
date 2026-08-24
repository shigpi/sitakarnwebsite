/**
 * Navigation Data
 * Centralized navigation structure. Edit here to update the navbar and sitemap.
 */

import type { NavConfig } from '@/types';

export const navigationData: NavConfig = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Real Estate Brokerage & Realtor Services', href: '/services#real-estate' },
        { label: 'Professional Advisory Services', href: '/services#advisory' },
      ],
    },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Book Consultation',
    href: '/contact',
  },
};
