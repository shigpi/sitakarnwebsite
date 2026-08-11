/**
 * Typography Design Tokens
 * Controls fonts, sizes, weights, and line heights globally.
 */

export const typography = {
  // Font families
  fonts: {
    display: '"Playfair Display", "Georgia", serif',
    body: '"Inter", "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  // Font sizes (rem)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },

  // Font weights
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line heights
  lineHeights: {
    tight: '1.1',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.8',
  },

  // Letter spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.15em',
  },
} as const;

export type Typography = typeof typography;
