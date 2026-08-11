/**
 * Timeline Component
 * Renders a vertical list of ProcessStep components.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/theme/animations';
import { ProcessStep } from '@/components/ProcessStep/ProcessStep';
import type { ProcessStep as ProcessStepType } from '@/types';

interface TimelineProps {
  steps: ProcessStepType[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className={cn('flex flex-col', className)}
    >
      {steps.map((step, index) => (
        <ProcessStep
          key={step.step}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </motion.div>
  );
}
