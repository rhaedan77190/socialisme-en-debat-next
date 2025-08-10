export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Socialisme en débat.',
};

export default function TermsPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="font-display text-3xl mb-6">Mentions légales</h1>
      <p>
        Ce site est édité par l’équipe de <strong>Socialisme en débat</strong>. Tous les contenus
        publiés sur ce site sont fournis à titre informatif. Les informations légales
        complètes seront ajoutées ici selon les exigences locales.
      </p>
    </section>
  );
}