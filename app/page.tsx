import Link from "next/link";
import MacroBar from "@/components/MacroBar";
import PostCard from "@/components/PostCard";
import AdSlot from "@/components/AdSlot";
import { posts, products } from "@/lib/content";

export default function Home() {
  const featured = posts.slice(-3).reverse();
  const product = products[0];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:pt-24">
        <div className="grid gap-12 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
          <div>
            <p className="font-data text-xs uppercase tracking-widest text-signal mb-4">
              巨量營養素 · 不是猜測
            </p>
            <h1 className="font-display text-4xl font-black leading-[1.1] sm:text-5xl">
              用數據吃出身材,
              <br />
              而不是靠意志力硬撐。
            </h1>
            <p className="mt-6 max-w-md text-text-dim leading-relaxed">
              Axion Fit 提供巨量營養素追蹤工具與實證健身知識,把「今天該吃多少」
              從感覺變成一個明確數字。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products/macro-tracker"
                className="rounded-sm bg-signal px-5 py-2.5 font-medium text-bg hover:opacity-90 transition-opacity"
              >
                取得追蹤表 · {product.price}
              </Link>
              <Link
                href="/blog"
                className="rounded-sm border border-line px-5 py-2.5 font-medium hover:border-signal/60 transition-colors"
              >
                先看免費文章
              </Link>
            </div>
          </div>

          {/* Signature visual: a "today's macros" readout card */}
          <div className="rounded-sm border border-line bg-surface p-6">
            <div className="flex items-center justify-between font-data text-xs uppercase tracking-wide text-text-dim">
              <span>今日目標</span>
              <span>2,180 KCAL</span>
            </div>
            <MacroBar macro={{ p: 40, c: 35, f: 25 }} labeled className="mt-4" />
            <dl className="mt-6 grid grid-cols-3 gap-4 font-data text-center">
              <div>
                <dt className="text-xs text-text-dim">蛋白質</dt>
                <dd className="mt-1 text-2xl font-medium text-protein">168g</dd>
              </div>
              <div>
                <dt className="text-xs text-text-dim">碳水</dt>
                <dd className="mt-1 text-2xl font-medium text-carb">191g</dd>
              </div>
              <div>
                <dt className="text-xs text-text-dim">脂肪</dt>
                <dd className="mt-1 text-2xl font-medium text-fat">61g</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-line pt-4 text-xs text-text-dim">
              輸入體重與活動量,追蹤表自動算出這組數字——這就是 Axion Fit 巨量營養素追蹤表在做的事。
            </p>
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold">最新文章</h2>
          <Link href="/blog" className="font-data text-xs uppercase tracking-wide text-text-dim hover:text-signal transition-colors">
            看全部 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5">
        <AdSlot label="首頁下方" />
      </div>

      {/* Product teaser */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="rounded-sm border border-line bg-surface p-8 sm:p-10">
          <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
            工具
          </p>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {product.name}
          </h2>
          <p className="mt-3 max-w-xl text-text-dim leading-relaxed">
            {product.tagline}
          </p>
          <Link
            href="/products/macro-tracker"
            className="mt-6 inline-block rounded-sm bg-signal px-5 py-2.5 font-medium text-bg hover:opacity-90 transition-opacity"
          >
            查看詳情 · {product.price}
          </Link>
        </div>
      </section>
    </div>
  );
}
