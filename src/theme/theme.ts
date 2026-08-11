/**
 * Unified Theme Export
 * Import from this file to access the entire design system.
 *
 * @example
 * import { theme } from '@/theme/theme';
 * const navyColor = theme.colors.navy[700];
 */

export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';
export { animations, durations, easings } from './animations';
export { breakpoints } from './breakpoints';

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { animations } from './animations';
import { breakpoints } from './breakpoints';

export const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  animations,
  breakpoints,
} as const;

export type Theme = typeof theme;
