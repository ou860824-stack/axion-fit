import type { Metadata } from "next";
import Link from "next/link";
import MacroBar from "@/components/MacroBar";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "工具｜Axion Fit",
  description: "Axion Fit 打造的巨量營養素追蹤工具，用數字取代猜測。",
};

export default function ProductsIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
        Tools
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">工具</h1>
      <p className="mt-3 max-w-lg text-text-dim">
        把每天該吃多少變成一個明確數字，而不是憑感覺。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block rounded-sm border border-line bg-surface p-6 transition-colors hover:border-signal/60"
          >
            <h2 className="font-display text-xl font-bold group-hover:text-signal transition-colors">
              {product.name}
            </h2>
            <p className="mt-2 text-sm text-text-dim">{product.tagline}</p>
            <MacroBar macro={product.macro} className="mt-5" />
            <p className="font-data mt-4 text-signal">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
