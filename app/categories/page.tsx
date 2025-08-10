export const metadata = {
  title: 'Catégories',
  description: 'Explorer les catégories d’articles sur Socialisme en débat.',
};

export default function CategoriesPage() {
  // Catégories statiques pour démonstration
  const categories = [
    { name: 'Théorie', slug: 'theorie' },
    { name: 'Histoire', slug: 'histoire' },
    { name: 'Économie', slug: 'economie' },
    { name: 'International', slug: 'international' },
  ];
  return (
    <section className="container mx-auto px-4 py-12 max-w-xl">
      <h1 className="font-display text-3xl mb-6">Catégories</h1>
      <ul className="space-y-4">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <a href={`/#`} className="text-lg hover:underline">
              {cat.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}