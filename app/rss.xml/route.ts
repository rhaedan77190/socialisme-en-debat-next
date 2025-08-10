import { allPosts } from 'contentlayer/generated';

export async function GET() {
  const items = allPosts
    .map((post) => {
      return `    <item>\n` +
        `      <title><![CDATA[${post.title}]]></title>\n` +
        `      <link>https://socialisme.vercel.app/posts/${post.slug}</link>\n` +
        `      <description><![CDATA[${post.description}]]></description>\n` +
        `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n` +
        `    </item>`;
    })
    .join('\n');
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0">\n` +
    `  <channel>\n` +
    `    <title>Socialisme en débat</title>\n` +
    `    <link>https://socialisme.vercel.app</link>\n` +
    `    <description><![CDATA[Analyses matérialistes et révolutionnaires]]></description>\n` +
    `${items}\n` +
    `  </channel>\n` +
    `</rss>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}