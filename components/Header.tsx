"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 whitespace-nowrap"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-display whitespace-nowrap text-xl font-black tracking-tight">
            AXION<span className="text-signal">FIT</span>
          </span>
        </Link>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-sm border border-line text-text transition-colors hover:border-signal md:hidden"
          aria-label={isMenuOpen ? "關閉導覽選單" : "開啟導覽選單"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav
          id="primary-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-0 border-b border-line/80 bg-bg/95 px-5 py-3 font-data text-sm uppercase tracking-wide text-text-dim shadow-lg md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
        >
          <Link
            href="/blog"
            className="whitespace-nowrap py-3 transition-colors hover:text-text md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            文章
          </Link>
          <Link
            href="/calculator"
            className="whitespace-nowrap py-3 transition-colors hover:text-text md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            計算機
          </Link>
          <Link
            href="/products"
            className="whitespace-nowrap py-3 transition-colors hover:text-text md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            工具
          </Link>
          <Link
            href="/about"
            className="whitespace-nowrap py-3 transition-colors hover:text-text md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            關於
          </Link>
          <Link
            href="/products/macro-tracker"
            className="mt-2 inline-flex w-full justify-center whitespace-nowrap rounded-sm bg-signal px-3 py-2 text-bg normal-case tracking-normal transition-opacity hover:opacity-90 md:mt-0 md:w-auto md:py-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            立即取得
          </Link>
        </nav>
      </div>
    </header>
  );
}
