import Link from "next/link";
import MacroBar from "@/components/MacroBar";
import type { Post } from "@/lib/content";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-sm border border-line bg-surface p-6 transition-colors hover:border-signal/60"
    >
      <div className="mb-3 flex items-center gap-3 font-data text-xs uppercase tracking-wide text-text-dim">
        <span className="text-signal">{post.category}</span>
        <span>·</span>
        <span>{post.readMins} 分鐘閱讀</span>
      </div>
      <h3 className="font-display text-xl font-bold leading-snug group-hover:text-signal transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-text-dim">{post.excerpt}</p>
      <MacroBar macro={post.macro} className="mt-5" />
    </Link>
  );
}
