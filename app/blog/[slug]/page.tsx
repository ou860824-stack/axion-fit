import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MacroBar from "@/components/MacroBar";
import AdSlot from "@/components/AdSlot";
import { posts, products, getPost } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title}｜Axion Fit`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const product = products[0];

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <Link
        href="/blog"
        className="font-data text-xs uppercase tracking-wide text-text-dim hover:text-signal transition-colors"
      >
        ← 回文章列表
      </Link>

      <div className="mt-6 flex items-center gap-3 font-data text-xs uppercase tracking-wide text-text-dim">
        <span className="text-signal">{post.category}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readMins} 分鐘閱讀</span>
      </div>

      <h1 className="font-display mt-4 text-3xl font-black leading-tight sm:text-4xl">
        {post.title}
      </h1>

      <MacroBar macro={post.macro} labeled className="mt-6" />

      <div className="mt-10 space-y-5 leading-relaxed text-text">
        {post.body.map((paragraph, i) => (
          <Fragment key={i}>
            <p>{paragraph}</p>
            {i === 1 && <AdSlot label="文中" />}
          </Fragment>
        ))}
      </div>

      {/* Soft product CTA — no hard sell, matches Threads-tested approach */}
      <div className="mt-14 rounded-sm border border-line bg-surface p-6">
        <p className="font-data text-xs uppercase tracking-widest text-signal mb-2">
          相關工具
        </p>
        <h3 className="font-display text-lg font-bold">{product.name}</h3>
        <p className="mt-2 text-sm text-text-dim">{product.tagline}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-block rounded-sm bg-signal px-4 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
        >
          查看詳情 · {product.price}
        </Link>
      </div>
    </article>
  );
}
