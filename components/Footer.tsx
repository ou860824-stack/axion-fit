import MacroBar from "@/components/MacroBar";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <MacroBar macro={{ p: 40, c: 35, f: 25 }} className="mb-6 max-w-xs" />
        <div className="flex flex-col gap-2 font-data text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AXION FIT — 用數據吃出身材</p>
          <p>@axionfit_tw · <a href="/privacy" className="hover:text-signal transition-colors">隱私權政策</a></p>
        </div>
      </div>
    </footer>
  );
}
