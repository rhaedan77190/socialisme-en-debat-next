export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://socialisme.vercel.app/sitemap.xml`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}