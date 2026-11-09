import type { Metadata } from "next";
import MacroCalculator from "@/components/MacroCalculator";

export const metadata: Metadata = {
  title: "巨量營養素計算機｜Axion Fit",
  description:
    "輸入年齡、身高、體重與活動量，估算每日熱量、蛋白質、碳水與脂肪目標。",
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="mb-3 font-data text-xs uppercase tracking-widest text-signal">
        Macro Calculator
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">
        巨量營養素計算機
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-text-dim">
        根據你的基本資料與目標，估算每日熱量和蛋白質、碳水、脂肪攝取量。結果僅供參考，可依數週的實際變化調整。
      </p>
      <div className="mt-8">
        <MacroCalculator />
      </div>
    </div>
  );
}
