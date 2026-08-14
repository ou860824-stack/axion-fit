import type { MacroSplit } from "@/lib/content";

export default function MacroBar({
  macro,
  labeled = false,
  className = "",
}: {
  macro: MacroSplit;
  labeled?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="macro-bar" role="img" aria-label={`蛋白質 ${macro.p}%，碳水 ${macro.c}%，脂肪 ${macro.f}%`}>
        <span className="p" style={{ width: `${macro.p}%` }} />
        <span className="c" style={{ width: `${macro.c}%` }} />
        <span className="f" style={{ width: `${macro.f}%` }} />
      </div>
      {labeled && (
        <div className="mt-2 flex gap-4 font-data text-xs text-text-dim">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-protein" /> P {macro.p}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-carb" /> C {macro.c}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-fat" /> F {macro.f}%
          </span>
        </div>
      )}
    </div>
  );
}
