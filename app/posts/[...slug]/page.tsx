import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Mdx } from '@/components/Mdx';
import ProgressBar from '@/components/ProgressBar';
import TableOfContents from '@/components/TableOfContents';

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export function generateMetadata({ params }: PageProps) {
  const slug = params.slug.join('/');
  const post = allPosts.find((p) => p.slugAsParams === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://socialisme.vercel.app/posts/${post.slug}`,
    },
  };
}

export default function PostPage({ params }: PageProps) {
  const slug = params.slug.join('/');
  const post = allPosts.find((p) => p.slugAsParams === slug);
  if (!post) notFound();
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:grid lg:grid-cols-4 gap-8">
      <ProgressBar />
      <article className="lg:col-span-3 max-w-full">
        <h1 className="font-display text-3xl md:text-4xl mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-4">
          {new Date(post.date).toLocaleDateString('fr-FR')} {post.readingTime && `· ${post.readingTime}`}
        </p>
        {post.cover && (
          <div className="relative w-full h-64 mb-8">
            <Image src={post.cover} alt={post.title} fill className="object-cover rounded-md" />
          </div>
        )}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <Mdx code={post.body.code} />
        </div>
      </article>
      <TableOfContents content={post.body.raw} />
    </div>
  );
}