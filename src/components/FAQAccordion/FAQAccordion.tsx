/**
 * FAQAccordion Component
 * Accessible accordion for FAQ items with smooth animation.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { FAQItem } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItemComponent({ item, isOpen, onToggle, index }: FAQItemProps) {
  const id = `faq-answer-${item.id}`;
  const triggerId = `faq-trigger-${item.id}`;

  return (
    <div
      className={cn(
        'border-b border-slate-200 last:border-b-0',
        'transition-colors duration-150',
        isOpen && 'bg-slate-50/50'
      )}
    >
      <button
        id={triggerId}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 px-0 text-left"
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className={cn('font-medium text-sm leading-relaxed', isOpen ? 'text-navy-700' : 'text-slate-700')}>
          <span className="text-gold-600 font-mono text-xs mr-3" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          {item.question}
        </span>
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded',
            'transition-colors duration-150',
            isOpen
              ? 'text-brick-600 bg-brick-50'
              : 'text-slate-400 bg-slate-100'
          )}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-500 leading-relaxed pb-5 pl-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('divide-y divide-slate-200 border-t border-slate-200', className)} role="list">
      {items.map((item, index) => (
        <FAQItemComponent
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
          index={index}
        />
      ))}
    </div>
  );
}
