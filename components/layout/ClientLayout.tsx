"use client";

import { useLenis } from '@/hooks/useLenis';
import { useGSAP } from '@/lib/gsap';
import { CursorProvider } from '@/components/cursor/CursorProvider';
import { Cursor } from '@/components/cursor/Cursor';
import { PageTransition } from '@/components/ui/PageTransition';
import { Navbar } from '@/components/layout/Navbar';
import { ReactNode } from 'react';

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  useGSAP();
  useLenis();

  return (
    <CursorProvider>
      <Cursor />
      <div className="film-grain" />
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
    </CursorProvider>
  );
};
