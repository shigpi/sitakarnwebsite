/**
 * Company Configuration
 * Change this file to update all company information across the entire website.
 * No company data should ever be hardcoded inside components.
 */

export const company = {
  name: 'Sitakarn',
  fullName: 'SITAKARN MORTGAGE Pvt. Ltd.',
  tagline: 'FINANCIAL ADVISORY & TRANSFORMATION SERVICES',
  description:
    'Sitakarn’s financial Intermediaries Advisory & Transformation Services is a Nepal-based professional consulting firm dedicated exclusively to strengthening the financial health, governance, operational efficiency, and long-term sustainability of financial intermediaries and Savings and Credit Cooperatives (SACCOs) across Nepal.',

  // Contact
  email: 'info@sitakarn.com',
  emailSupport: 'support@sitakarn.com',
  phone: '+977-985-109-3898',
  phoneAlt: '+977-985-109-3898',
  fax: '',

  // Address
  address: {
    street: 'Old Baneshwor, KMC-31',
    city: 'Kathmandu',
    province: 'Bagmati',
    postalCode: '',
    country: 'Nepal',
    full: 'Old Baneshwor, KMC-31, Kathmandu, Nepal',
  },

  // Google Maps
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.908!2d100.5197!3d13.7244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzI3LjgiTiAxMDDCsDMxJzEwLjkiRQ!5e0!3m2!1sen!2sth!4v1234567890',
    directionsUrl: 'https://goo.gl/maps/example',
  },

  // Office Hours
  officeHours: [
    { days: 'Monday – Friday', hours: '8:30 AM – 5:30 PM' },
    { days: 'Saturday', hours: '9:00 AM – 12:00 PM' },
    { days: 'Sunday & Public Holidays', hours: 'Closed' },
  ],

  // Social Media
  social: {
    facebook: 'https://facebook.com/sitakarnfinancial',
    linkedin: 'https://linkedin.com/company/sitakarn',
    instagram: 'https://instagram.com/sitakarnfinancial',
    youtube: 'https://youtube.com/@sitakarnfinancial',
    x: 'https://x.com/sitakarnfin',
  },

  // Legal
  taxId: '301629579',
  registrationNumber: '26095/060/061',
  established: 2003,

  // Copyright
  copyright: `© ${new Date().getFullYear()} SITAKARN MORTGAGE Pvt. Ltd. All rights reserved.`,
} as const;

export type Company = typeof company;
