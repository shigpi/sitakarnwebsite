/**
 * FeatureCard Component
 * Displays a feature or 'Why Choose Us' item.
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/theme/animations';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: string }>>)[icon] ?? LucideIcons.CheckCircle;

  return (
    <motion.div
      variants={staggerItem}
      className={cn('flex flex-col gap-4', className)}
    >
      <div className="w-12 h-12 rounded bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0">
        <IconComponent size={24} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg text-navy-700 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
