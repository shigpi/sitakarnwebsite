/**
 * Main Layout
 * Wraps all pages with the Navbar and Footer.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function MainLayout() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
