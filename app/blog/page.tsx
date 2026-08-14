import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "文章｜Axion Fit",
  description: "巨量營養素、飲食迷思與訓練知識，用實際可執行的方式寫給你看。",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
        Blog
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">文章</h1>
      <p className="mt-3 max-w-lg text-text-dim">
        飲食清單、迷思破解、算數教學——每篇都附上巨量營養素比例參考。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {sorted.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
