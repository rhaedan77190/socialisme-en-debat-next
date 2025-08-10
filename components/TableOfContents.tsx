"use client";

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    if (!content) return;
    const regex = /^(#{2,6})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(regex));
    const list = matches.map((m) => {
      const level = m[1].length;
      const text = m[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      return { id, text, level } as Heading;
    });
    setHeadings(list);
  }, [content]);
  if (headings.length === 0) return null;
  return (
    <aside className="hidden lg:block lg:col-span-1 text-sm pl-4 border-l border-muted sticky top-24 self-start">
      <h2 className="font-display text-base mb-2">Sommaire</h2>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ marginLeft: `${(h.level - 2) * 16}px` }}>
            <a href={`#${h.id}`} className="hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}