import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-muted py-8 bg-muted/30 mt-12 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="font-display text-lg mb-1">Socialisme en débat</h2>
          <p className="text-muted-foreground">© {year} Tous droits réservés.</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6">
          <Link href="/terms" className="hover:underline">
            Mentions légales
          </Link>
          <Link href="/privacy" className="hover:underline">
            Politique de confidentialité
          </Link>
          <Link href="/rss.xml" className="hover:underline">
            Flux RSS
          </Link>
        </nav>
      </div>
    </footer>
  );
}