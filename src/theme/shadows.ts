/**
 * Shadow Design Tokens
 * Intentionally restrained — corporate design avoids excessive depth.
 */

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(27, 43, 75, 0.05)',
  sm: '0 1px 3px 0 rgba(27, 43, 75, 0.08), 0 1px 2px -1px rgba(27, 43, 75, 0.04)',
  base: '0 4px 6px -1px rgba(27, 43, 75, 0.07), 0 2px 4px -2px rgba(27, 43, 75, 0.04)',
  md: '0 8px 16px -4px rgba(27, 43, 75, 0.10), 0 4px 6px -2px rgba(27, 43, 75, 0.04)',
  lg: '0 16px 32px -8px rgba(27, 43, 75, 0.12), 0 8px 16px -4px rgba(27, 43, 75, 0.06)',
  xl: '0 24px 48px -12px rgba(27, 43, 75, 0.16)',
  inner: 'inset 0 2px 4px 0 rgba(27, 43, 75, 0.06)',

  // Special: gold glow for CTA elements
  gold: '0 4px 16px -2px rgba(184, 150, 46, 0.25)',
  navy: '0 8px 24px -4px rgba(27, 43, 75, 0.30)',
} as const;

export type Shadows = typeof shadows;
