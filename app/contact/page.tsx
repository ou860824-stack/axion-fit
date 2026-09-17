import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們｜Axion Fit",
  description: "有問題、合作邀約或內容勘誤,歡迎與 Axion Fit 聯繫。",
};

const CONTACT_EMAIL = "ai.resource.center@outlook.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
        Contact
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">
        聯絡我們
      </h1>

      <div className="mt-10 space-y-8 leading-relaxed text-text">
        <section>
          <p>
            不管是文章內容有疑問、發現錯誤需要勘誤,或是有合作、業配邀約,都歡迎直接寫信給我們,我們會盡快回覆。
          </p>
        </section>

        <section className="rounded-sm border border-line bg-surface p-6">
          <h2 className="font-display text-lg font-bold mb-3">Email</h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-data text-signal underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">社群</h2>
          <p>
            也可以在 Threads 上追蹤我們最新的巨量營養素小知識:{" "}
            <a
              href="https://www.threads.net/@axionfit_tw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              @axionfit_tw
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}