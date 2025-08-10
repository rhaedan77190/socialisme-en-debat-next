import Link from 'next/link';
import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';

type PostCardProps = {
  post: (typeof allPosts)[number];
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-muted/50 bg-muted/10 hover:shadow-lg transition-shadow">
      {post.cover && (
        <Link href={post.url} className="block relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={post.url}>
          <h3 className="font-display text-lg mb-2 group-hover:underline">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3">
          {post.description}
        </p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          {post.readingTime && <span className="ml-2">• {post.readingTime}</span>}
        </div>
      </div>
    </article>
  );
}