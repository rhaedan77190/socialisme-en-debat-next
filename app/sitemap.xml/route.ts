import { allPosts } from 'contentlayer/generated';

export async function GET() {
  const pages = ['', '/posts', '/about', '/contact', '/categories'];
  const posts = allPosts.map((post) => `/posts/${post.slug}`);
  const urls = [...pages, ...posts];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (url) =>
          `  <url>\n    <loc>https://socialisme.vercel.app${url}</loc>\n  </url>`,
      )
      .join('\n') +
    '\n</urlset>';
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}