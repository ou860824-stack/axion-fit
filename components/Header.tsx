import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-black tracking-tight">
            AXION<span className="text-signal">FIT</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-data text-sm uppercase tracking-wide text-text-dim">
          <Link href="/blog" className="hover:text-text transition-colors">
            文章
          </Link>
          <Link href="/products" className="hover:text-text transition-colors">
            工具
          </Link>
          <Link
            href="/products/macro-tracker"
            className="rounded-sm bg-signal px-3 py-1.5 text-bg normal-case tracking-normal hover:opacity-90 transition-opacity"
          >
            立即取得
          </Link>
        </nav>
      </div>
    </header>
  );
}
