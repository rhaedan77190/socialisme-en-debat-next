import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export const metadata = {
  title: 'Accueil',
  description:
    'Socialisme en débat propose des articles et analyses matérialistes pour comprendre et transformer le monde.',
};

export default function HomePage() {
  const posts = allPosts
    .filter((post) => post.status !== 'draft')
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Socialisme en débat
        </h1>
        <p className="text-lg md:text-xl">
          Un lieu pour partager des analyses matérialistes et des perspectives révolutionnaires contemporaines.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/posts"
          className="inline-block px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
        >
          Voir tous les articles
        </Link>
      </div>
    </section>
  );
}