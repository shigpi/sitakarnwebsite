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
  // Primary — Muted Brick Red (matches logo's deep red)
  brick: {
    50:  '#FDF4F4',
    100: '#F5DADA',
    200: '#E8B0B0',
    300: '#D47575',
    400: '#C04040',
    500: '#A52020',
    600: '#8B1A1A', // Main primary — matches logo red
    700: '#6E1212',
    800: '#500D0D',
    900: '#330808',
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
