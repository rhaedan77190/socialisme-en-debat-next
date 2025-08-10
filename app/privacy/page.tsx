export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Socialisme en débat.',
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="font-display text-3xl mb-6">Politique de confidentialité</h1>
      <p>
        Socialisme en débat respecte votre vie privée. Nous n’utilisons aucun cookie tiers pour
        suivre les utilisateurs. Les éventuelles données collectées via le formulaire de contact
        sont utilisées uniquement pour répondre à votre demande et ne sont jamais partagées.
      </p>
    </section>
  );
}