/**
 * Reserved slot for a Google AdSense ad unit.
 * Swap the placeholder <div> below for your AdSense <ins> tag once the
 * account and ad unit are approved. Keeping a fixed min-height avoids
 * layout shift when the real ad script loads.
 */
export default function AdSlot({ label = "廣告" }: { label?: string }) {
  return (
    <div className="my-8 flex min-h-[100px] w-full items-center justify-center rounded-sm border border-dashed border-line font-data text-xs text-text-dim">
      {label} · AdSense 版位
    </div>
  );
}
