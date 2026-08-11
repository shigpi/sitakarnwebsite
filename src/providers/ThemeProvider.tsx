/**
 * Theme Provider
 * Manages light/dark mode. Persists to localStorage.
 * Sets data-theme attribute on <html> for CSS variable switching.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ThemeContext, type ThemeMode } from '@/contexts/ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({ children, defaultMode = 'light' }: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    const stored = localStorage.getItem('sitakarn-theme') as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') return stored;
    // Respect system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);
    localStorage.setItem('sitakarn-theme', mode);
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
