/**
 * Statistics Data
 * Company-wide statistics. Update values here to reflect in StatisticCard components.
 */

import type { Statistic } from '@/types';

export const statisticsData: Statistic[] = [
  {
    id: 'stat-1',
    value: '30+',
    label: 'Years of Experience',
    description: 'More than three decades of leadership and advisory experience',
    icon: 'Calendar',
  },
  {
    id: 'stat-2',
    value: '400+',
    label: 'Cooperatives Served',
    description: 'Across savings & credit, agricultural, and multipurpose cooperatives',
    icon: 'Building2',
  },
  {
    id: 'stat-3',
    value: '98%',
    label: 'Client Retention Rate',
    description: 'Our clients stay because they trust our results',
    icon: 'TrendingUp',
  },
  {
    id: 'stat-4',
    value: '35',
    label: 'Expert Consultants',
    description: 'CPAs, CFAs, and certified cooperative advisors',
    icon: 'Users',
  },
];
