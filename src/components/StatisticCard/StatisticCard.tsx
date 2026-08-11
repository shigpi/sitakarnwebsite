/**
 * StatisticCard Component
 * Displays a key statistic with value, label, and optional icon.
 *
 * Dark theme: white accents — gold is NOT used on navy (off-putting)
 * Light theme: gold accents on white bg — appropriate
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/theme/animations';
import type { Statistic } from '@/types';

interface StatisticCardProps {
  stat: Statistic;
  theme?: 'light' | 'dark';
  className?: string;
}

export function StatisticCard({ stat, theme = 'light', className }: StatisticCardProps) {
  const isDark = theme === 'dark';
  const IconComponent = stat.icon
    ? (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; 'aria-hidden'?: string }>>)[stat.icon]
    : null;

  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'flex flex-col gap-2 p-6',
        'border-t-2',
        isDark
          ? 'border-brick-400 text-white'       // brick accent on navy — stays in brand
          : 'border-gold-500 text-navy-700',     // gold on white — appropriate
        className
      )}
    >
      {IconComponent && (
        <div
          className={cn(
            'w-8 h-8 flex items-center justify-center rounded',
            isDark
              ? 'bg-white/10 text-white/80'     // subtle white on navy (NOT gold)
              : 'bg-gold-50 text-gold-600'       // gold on white card — fine
          )}
        >
          <IconComponent size={16} aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-col gap-1">
        <span
          className={cn(
            'font-display font-bold leading-none tracking-tight',
            'text-4xl',
            isDark ? 'text-white' : 'text-navy-700'
          )}
          aria-label={`${stat.value} ${stat.label}`}
        >
          {stat.value}
        </span>
        <span
          className={cn(
            'text-sm font-semibold uppercase tracking-wide font-mono',
            isDark ? 'text-white/60' : 'text-gold-600'   // white on navy, gold on white
          )}
        >
          {stat.label}
        </span>
        {stat.description && (
          <p className={cn('text-xs mt-1 leading-relaxed', isDark ? 'text-white/50' : 'text-slate-500')}>
            {stat.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
