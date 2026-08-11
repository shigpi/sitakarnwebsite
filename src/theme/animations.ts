/**
 * Animation Design Tokens — Framer Motion variants
 * Keep animations subtle. This is a financial consulting site, not a SaaS startup.
 */

import type { Variants, Transition } from 'framer-motion';

// Durations (seconds)
export const durations = {
  instant: 0,
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  slower: 0.6,
} as const;

// Easings
export const easings = {
  easeOut: [0.0, 0.0, 0.2, 1] as const,
  easeIn: [0.4, 0.0, 1, 1] as const,
  easeInOut: [0.4, 0.0, 0.2, 1] as const,
  spring: { type: 'spring', stiffness: 200, damping: 30 } as const,
} as const;

// Base transition
export const baseTransition: Transition = {
  duration: durations.normal,
  ease: easings.easeOut,
};

// Fade in from bottom — primary reveal
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.easeOut },
  },
};

// Fade in — for images and backgrounds
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.slower, ease: easings.easeOut },
  },
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.easeOut },
  },
};

// Slide in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.easeOut },
  },
};

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.easeOut },
  },
};

// Scale up — for cards on hover
export const scaleUp: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: durations.fast, ease: easings.easeOut } },
};

export const animations = {
  durations,
  easings,
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  scaleUp,
} as const;
