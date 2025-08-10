"use client";

import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import Callout from './Callout';

const components: MDXComponents = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
      className="my-6 rounded-md"
      width={props.width || 768}
      height={props.height || 432}
    />
  ),
  a: (props: any) => <Link {...props} className="underline hover:text-primary" />,
  Callout,
};

interface Props {
  code: string;
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}