/**
 * Color Design Tokens
 * Brand palette: Brick Red · Deep Navy · Warm Gold
 *
 * Usage rules:
 *   brick-*   → primary (CTAs, active states, borders on light bg)
 *   navy-*    → dark backgrounds, headings, secondary elements
 *   gold-*    → accent ONLY on light/white backgrounds and on crimson/brick bg
 *              — never use gold ON navy backgrounds (off-putting contrast)
 *   slate-*   → neutral text, borders, muted content
 */

export const colors = {
  // Primary — Logo Crimson Red (exact sRGB from Digital Color Meter)
  brick: {
    50:  '#FFF0F1',
    100: '#FFD0D4',
    200: '#FFA3AB',
    300: '#FF6373',
    400: '#F03045',
    500: '#CC1A2C',
    600: '#A90415', // Main primary — exact logo red
    700: '#850010',
    800: '#60000C',
    900: '#3D0008',
  },

  // Secondary — Deep Navy
  navy: {
    50:  '#ECEEF6',
    100: '#CED3E9',
    200: '#A8B2D8',
    300: '#8391C6',
    400: '#5E71B4',
    500: '#3D549E',
    600: '#2A3D87',
    700: '#0D1B5E', // Main secondary — dark navy bg
    800: '#091450',
    900: '#050D3A',
  },

  // Accent — Warm Gold (USE ON LIGHT BG ONLY — never on navy)
  gold: {
    50:  '#FFFBE8',
    100: '#FFF3C4',
    200: '#FFE680',
    300: '#FFD700',
    400: '#F5C518',
    500: '#C9960C', // Main gold
    600: '#A37A08',
    700: '#7D5D05',
    800: '#574102',
    900: '#302400',
  },

  // Neutrals — Warm-tinted (not cool gray)
  white:     '#FFFFFF',
  offwhite:  '#FBF9F7', // warm cream, blends with brick palette
  lightgray: '#EEE9E6', // warm-tinted light gray
  midgray:   '#B0A8A4', // warm mid-gray
  slate: {
    100: '#F2EFEC',
    200: '#E4DDD9',
    300: '#CCC5C0',
    400: '#9E9490',
    500: '#716660',
    600: '#524943',
    700: '#2D2521', // Main text — very slightly warm
    800: '#1A1410',
    900: '#100C09',
  },
} as const;

export type Colors = typeof colors;
