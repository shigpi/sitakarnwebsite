/**
 * Theme Context
 */

import { createContext, useContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: 'light',
  toggleMode: () => {},
  setMode: () => {},
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
