/**
 * SectionTitle Component
 * Eyebrow + heading + description composition with the "double rule" signature.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUp } from '@/theme/animations';

type SectionTitleAlign = 'left' | 'center' | 'right';
type SectionTitleTheme = 'light' | 'dark';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionTitleAlign;
  theme?: SectionTitleTheme;
  maxWidth?: string;
  className?: string;
  showRule?: boolean;
}

const alignClasses: Record<SectionTitleAlign, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  maxWidth = 'max-w-2xl',
  className,
  showRule = true,
}: SectionTitleProps) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className={cn('flex flex-col gap-4', alignClasses[align], maxWidth, className)}
    >
      {/* Eyebrow with double rule */}
      {(eyebrow || showRule) && (
        <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
          {showRule && align === 'left' && (
            <div className={cn('double-rule', isDark ? 'text-white/60' : 'text-gold-600')} aria-hidden="true" />
          )}
          {eyebrow && (
            <span className={cn('eyebrow', isDark ? 'text-white/70' : 'text-gold-600')}>
              {eyebrow}
            </span>
          )}
          {showRule && align === 'right' && (
            <div className={cn('double-rule', isDark ? 'text-white/60' : 'text-gold-600')} aria-hidden="true" />
          )}
        </div>
      )}

      {/* Heading */}
      <h2 className={cn('font-display font-bold', isDark ? 'text-white' : 'text-navy-700')}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={cn('text-base leading-relaxed', isDark ? 'text-white/60' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
