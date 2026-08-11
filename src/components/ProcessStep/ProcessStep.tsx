/**
 * ProcessStep Component
 * A single step in a process flow.
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUp } from '@/theme/animations';
import type { ProcessStep as ProcessStepType } from '@/types';

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
  className?: string;
}

export function ProcessStep({ step, isLast = false, className }: ProcessStepProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: string }>>)[step.icon] ?? LucideIcons.Circle;

  return (
    <motion.div
      variants={fadeUp}
      className={cn('relative flex gap-6 md:gap-8', className)}
    >
      {/* Timeline line */}
      {!isLast && (
        <div 
          className="absolute left-6 top-16 bottom-[-24px] w-px bg-slate-200 hidden md:block"
          aria-hidden="true"
        />
      )}

      {/* Step Number & Icon */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-navy-700 text-white flex items-center justify-center font-mono font-bold text-lg shadow-md z-10">
          {step.step}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-10 md:pb-12 pt-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gold-50 text-gold-600 rounded">
            <IconComponent size={20} aria-hidden="true" />
          </div>
          <h3 className="font-display font-semibold text-xl text-navy-700">
            {step.title}
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed md:pr-12">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
