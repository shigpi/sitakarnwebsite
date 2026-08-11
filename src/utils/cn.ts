/**
 * Utility: Class Name Merger
 * Combines clsx and tailwind-merge for safe Tailwind class composition.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-navy', 'px-6') // => 'py-2 bg-navy px-6'
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
