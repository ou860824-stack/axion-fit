import type { CSSProperties } from "react";

export default function EmailCapture() {
  return (
    <div style={styles.box}>
      <p style={styles.title}>不知道每天要吃什麼？</p>
      <p style={styles.text}>
        超商、便當店照著吃，每天 110g 以上蛋白質。PDF 直接寄到你的信箱。
      </p>
      <a
        href="https://axionfit.gumroad.com/l/7day-menu?utm_source=website"
        target="_blank"
        rel="noopener"
        className="email-capture-cta"
        style={styles.button}
      >
        免費領取 7 天菜單 →
      </a>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  box: {
    background: "#1E2227",
    color: "#F9FAFB",
    border: "1px solid #2E333A",
    borderRadius: 16,
    padding: "24px 20px",
    margin: "32px 0",
    textAlign: "center",
  },
  title: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" },
  text: { fontSize: 15, color: "#D1D5DB", margin: "0 0 16px", lineHeight: 1.6 },
  button: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: 10,
    border: "none",
    color: "#15181C",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    textDecoration: "none",
  },
};
