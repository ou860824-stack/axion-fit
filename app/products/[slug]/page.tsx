import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MacroBar from "@/components/MacroBar";
import { products, getProduct } from "@/lib/content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name}｜Axion Fit`,
    description: product.tagline,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <Link
        href="/products"
        className="font-data text-xs uppercase tracking-wide text-text-dim hover:text-signal transition-colors"
      >
        ← 回工具列表
      </Link>

      <p className="font-data mt-6 text-xs uppercase tracking-widest text-signal">
        {product.price}
      </p>
      <h1 className="font-display mt-2 text-3xl font-black leading-tight sm:text-4xl">
        {product.name}
      </h1>
      <p className="mt-4 text-text-dim leading-relaxed">{product.tagline}</p>

      <MacroBar macro={product.macro} labeled className="mt-6 max-w-xs" />

      <p className="mt-8 leading-relaxed text-text">{product.description}</p>

      <ul className="mt-8 space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={product.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-sm bg-signal px-6 py-3 font-medium text-bg hover:opacity-90 transition-opacity"
      >
        前往 Gumroad 購買 · {product.price}
      </a>
    </div>
  );
}
