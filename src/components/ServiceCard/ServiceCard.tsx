/**
 * ServiceCard Component
 * Displays a single service with icon, title, description, and a Learn More link.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/theme/animations';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact';
  className?: string;
}

export function ServiceCard({ service, variant = 'default', className }: ServiceCardProps) {
  // Dynamically resolve Lucide icon by name
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: string }>>)[service.icon] ?? LucideIcons.FileText;

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group flex flex-col gap-4 p-6 border border-slate-200',
        'bg-white rounded',
        'hover:border-brick-200 hover:shadow-md',
        'transition-all duration-250 ease-out',
        variant === 'compact' && 'p-5 gap-3',
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'flex-shrink-0 w-10 h-10 flex items-center justify-center rounded',
          'bg-navy-50 text-navy-700',
          'group-hover:bg-brick-50 group-hover:text-brick-600',
          'transition-colors duration-200'
        )}
        aria-hidden="true"
      >
        <IconComponent size={20} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-display text-base font-semibold text-navy-700 leading-snug group-hover:text-brick-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* CTA */}
      {variant === 'default' && (
        <Link
          to={`/services#${service.categoryId}`}
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-medium',
            'text-brick-600 hover:text-brick-700',
            'transition-colors duration-150',
            'group/link'
          )}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-150"
            aria-hidden="true"
          />
        </Link>
      )}
    </motion.article>
  );
}
