/**
 * SectionWrapper Component
 * Consistent vertical padding for page sections.
 */

import React from 'react';
import { cn } from '@/utils/cn';

type SectionPadding = 'sm' | 'md' | 'lg' | 'xl' | 'none';
type SectionBackground = 'white' | 'offwhite' | 'navy' | 'teal' | 'transparent';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  padding?: SectionPadding;
  background?: SectionBackground;
  className?: string;
  as?: React.ElementType;
}

const paddingClasses: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-36',
};

const backgroundClasses: Record<SectionBackground, string> = {
  white:       'bg-white',
  offwhite:    'bg-[#FBF9F7]',
  navy:        'bg-navy-700',
  teal:        'bg-navy-700',
  transparent: 'bg-transparent',
};

export function SectionWrapper({
  children,
  id,
  padding = 'lg',
  background = 'white',
  className,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn('relative', paddingClasses[padding], backgroundClasses[background], className)}
    >
      {children}
    </Tag>
  );
}
