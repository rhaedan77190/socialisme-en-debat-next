import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    category: { type: 'string', required: false },
    cover: { type: 'string', required: false },
    author: { type: 'string', required: false },
    readingTime: { type: 'string', required: false },
    status: { type: 'string', required: false },
  },
  computedFields: {
    slugAsParams: {
      type: 'string',
      resolve: (doc: any) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    url: {
      type: 'string',
      resolve: (doc: any) => `/posts/${doc.slug}`,
    },
  },
}));

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/**/*.md`,
  contentType: 'data',
  fields: {
    name: { type: 'string', required: true },
    bio: { type: 'string', required: false },
    avatar: { type: 'string', required: false },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Author],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkFootnotes, { inlineNotes: true }]],
    rehypePlugins: [rehypePrettyCode],
  },
});