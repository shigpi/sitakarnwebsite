/**
 * App Root Component
 * Composes global providers and the router.
 */

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { router } from '@/routes';

export default function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  );
}
