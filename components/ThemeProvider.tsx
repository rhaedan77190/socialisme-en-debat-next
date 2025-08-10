"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="light" disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}