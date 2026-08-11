/**
 * Container Component
 * Consistent max-width container with horizontal padding.
 */

import React from 'react';
import { cn } from '@/utils/cn';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: React.ElementType;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
};

export function Container({ children, size = '2xl', className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
