/**
 * Reserved slot for a Google AdSense ad unit.
 * Returns nothing until AdSense is approved, so visitors and reviewers
 * never see an empty placeholder box. After approval, replace `return null`
 * with the AdSense <ins> ad unit code.
 */
export default function AdSlot({ label = "廣告" }: { label?: string }) {
  void label;
  return null;
}
