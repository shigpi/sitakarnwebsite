/**
 * Divider Component
 * Reusable double rule divider.
 */

import React from 'react';
import { cn } from '@/utils/cn';

interface DividerProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export function Divider({ theme = 'light', className }: DividerProps) {
  return (
    <div 
      className={cn(
        'double-rule', 
        theme === 'dark' ? 'text-white/60' : 'text-gold-600',
        className
      )} 
      aria-hidden="true" 
    />
  );
}
