"use client";

import { useState, type FormEvent } from "react";
import EmailCapture from "@/components/EmailCapture";
import MacroBar from "@/components/MacroBar";
import type { MacroSplit } from "@/lib/content";

type Sex = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "high";
type Goal = "lose" | "maintain" | "gain";

type CalculationResult = {
  bmr: number;
  tdee: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  macroSplit: MacroSplit;
};

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
};

const goalMultipliers: Record<Goal, number> = {
  lose: 0.825,
  maintain: 1,
  gain: 1.075,
};

const fieldClassName =
  "mt-2 w-full rounded-sm border border-line bg-bg px-3 py-2.5 text-text focus:border-signal";

export default function MacroCalculator() {
  const [sex, setSex] = useState<Sex | "">("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel | "">("");
  const [goal, setGoal] = useState<Goal | "">("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);
    if (!sex || !activity || !goal || !ageValue || !heightValue || !weightValue) {
      return;
    }

    const bmr =
      sex === "male"
        ? 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5
        : 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
    const tdee = bmr * activityMultipliers[activity];
    const calories = Math.round(tdee * goalMultipliers[goal]);
    const protein = Math.round(weightValue * 1.8);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.max(
      0,
      Math.round((calories - protein * 4 - fat * 9) / 4)
    );
    const proteinPercent = Math.round((protein * 4 * 100) / calories);
    const fatPercent = Math.round((fat * 9 * 100) / calories);
    const carbsPercent = Math.max(0, 100 - proteinPercent - fatPercent);

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      calories,
      protein,
      carbs,
      fat,
      macroSplit: {
        p: proteinPercent,
        c: carbsPercent,
        f: fatPercent,
      },
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-sm border border-line bg-surface p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm text-text-dim">
            公式使用的生理性別
            <select
              required
              value={sex}
              onChange={(event) => setSex(event.target.value as Sex | "")}
              className={fieldClassName}
            >
              <option value="">請選擇</option>
              <option value="male">男性公式</option>
              <option value="female">女性公式</option>
            </select>
          </label>

          <label className="text-sm text-text-dim">
            年齡
            <input
              required
              type="number"
              min="18"
              max="100"
              step="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              className={fieldClassName}
              placeholder="例如 30"
            />
          </label>

          <label className="text-sm text-text-dim">
            身高（公分）
            <input
              required
              type="number"
              min="120"
              max="230"
              step="0.1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              className={fieldClassName}
              placeholder="例如 170"
            />
          </label>

          <label className="text-sm text-text-dim">
            體重（公斤）
            <input
              required
              type="number"
              min="35"
              max="250"
              step="0.1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className={fieldClassName}
              placeholder="例如 65"
            />
          </label>

          <label className="text-sm text-text-dim">
            活動量
            <select
              required
              value={activity}
              onChange={(event) =>
                setActivity(event.target.value as ActivityLevel | "")
              }
              className={fieldClassName}
            >
              <option value="">請選擇</option>
              <option value="sedentary">久坐，幾乎沒有運動</option>
              <option value="light">輕度，每週運動 1–3 次</option>
              <option value="moderate">中度，每週運動 3–5 次</option>
              <option value="high">高度，每週運動 6–7 次</option>
            </select>
          </label>

          <label className="text-sm text-text-dim">
            目標
            <select
              required
              value={goal}
              onChange={(event) => setGoal(event.target.value as Goal | "")}
              className={fieldClassName}
            >
              <option value="">請選擇</option>
              <option value="lose">減脂（TDEE 約 82.5%）</option>
              <option value="maintain">維持體重</option>
              <option value="gain">增肌（TDEE 約 107.5%）</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-sm bg-signal px-5 py-3 font-medium text-brand-ink transition-colors hover:bg-signal-hover sm:w-auto"
        >
          計算我的目標
        </button>
      </form>

      {result && (
        <>
          <section
            aria-live="polite"
            className="mt-8 rounded-sm border border-line bg-surface p-6 sm:p-8"
          >
            <p className="font-data text-xs uppercase tracking-widest text-signal">
              Your daily targets
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              每日建議攝取目標
            </h2>
            <p className="mt-5 font-data text-4xl font-bold text-signal">
              {result.calories.toLocaleString()}{" "}
              <span className="text-base font-normal text-text-dim">KCAL</span>
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-line py-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-text-dim">基礎代謝率（BMR）</dt>
                <dd className="mt-1 font-data text-lg text-text">
                  {result.bmr.toLocaleString()} kcal
                </dd>
              </div>
              <div>
                <dt className="text-text-dim">每日總消耗（TDEE）</dt>
                <dd className="mt-1 font-data text-lg text-text">
                  {result.tdee.toLocaleString()} kcal
                </dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-text-dim">蛋白質建議值</dt>
                <dd className="mt-1 font-data text-lg text-protein">
                  1.8 g / kg
                </dd>
              </div>
            </dl>

            <MacroBar macro={result.macroSplit} labeled className="mt-6" />
            <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div>
                <dt className="text-sm text-text-dim">蛋白質</dt>
                <dd className="mt-1 font-data text-2xl text-protein">
                  {result.protein}g
                </dd>
              </div>
              <div>
                <dt className="text-sm text-text-dim">碳水</dt>
                <dd className="mt-1 font-data text-2xl text-carb">
                  {result.carbs}g
                </dd>
              </div>
              <div>
                <dt className="text-sm text-text-dim">脂肪</dt>
                <dd className="mt-1 font-data text-2xl text-fat">
                  {result.fat}g
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-text-dim">
              這是以 Mifflin-St Jeor 公式估算的參考值，實際需求會因個人狀況而異。請觀察數週的體重與身體狀況，再逐步調整；本工具不取代醫療或營養專業建議。
            </p>
          </section>
          <EmailCapture source="calculator" />
        </>
      )}
    </div>
  );
}
