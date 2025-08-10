import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'Articles',
  description: 'Tous les articles publiés sur Socialisme en débat.',
};

export default function PostsPage() {
  const posts = allPosts
    .filter((post) => post.status !== 'draft')
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl mb-8">Tous les articles</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}