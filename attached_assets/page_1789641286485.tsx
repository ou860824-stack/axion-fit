import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於我們｜Axion Fit",
  description:
    "Axion Fit 致力於用數據與實證,幫助你把巨量營養素管理變成可執行的日常習慣,而不是靠意志力硬撐。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
        About
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">
        關於 Axion Fit
      </h1>

      <div className="mt-10 space-y-8 leading-relaxed text-text">
        <section>
          <h2 className="font-display text-xl font-bold mb-3">我們在做什麼</h2>
          <p>
            Axion Fit 是一個專注於巨量營養素（Macros）管理的內容與工具品牌。我們相信,身材管理不該靠模糊的「感覺吃」,而是可以透過清楚的數字——蛋白質、碳水、脂肪的攝取量——變成一件每天都能執行、能追蹤、能檢討的事。
          </p>
          <p className="mt-3">
            我們的內容鎖定台灣讀者的日常情境:超商飲食怎麼選、外食如何抓熱量、訓練日與休息日的營養差異,並搭配一套簡單的巨量營養素追蹤表,把知識直接變成可以動手做的行動。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">我們的原則</h2>
          <p>
            所有文章都以實證營養學與訓練原則為基礎,避免誇大或速成式的說法。我們也持續修正內容,確保資訊符合最新的認知,而不是一次寫完就不再更新。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">聯絡我們</h2>
          <p>
            有任何問題、合作邀約或內容勘誤,歡迎透過{" "}
            <Link href="/contact" className="text-signal underline underline-offset-2">
              聯絡頁面
            </Link>{" "}
            與我們聯繫。
          </p>
        </section>
      </div>
    </div>
  );
}
