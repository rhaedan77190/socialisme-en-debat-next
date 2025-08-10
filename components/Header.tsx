"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-muted">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-etoile.svg" alt="Logo Socialisme" width={32} height={32} />
          <span className="font-display text-xl">Socialisme&nbsp;en&nbsp;débat</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/posts" className="hover:underline">
            Articles
          </Link>
          <Link href="/categories" className="hover:underline">
            Catégories
          </Link>
          <Link href="/about" className="hover:underline">
            À propos
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md hover:bg-muted"
          aria-label="Basculer le thème"
        >
          {theme === 'dark' ? '🌞' : '🌜'}
        </button>
      </div>
    </header>
  );
}