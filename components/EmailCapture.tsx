"use client";

import { useState } from "react";

/**
 * Axion Fit — Email 收集區塊
 * 放在計算機結果下方、或文章底部。
 * 使用 Netlify Forms（免費，每月 100 筆），不用另外註冊服務。
 * 需搭配 public/__forms.html 讓 Netlify 偵測表單。
 */
export default function EmailCapture({
  source = "calculator",
}: {
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const body = new URLSearchParams({
        "form-name": "email-capture",
        email,
        source,
      });
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={styles.box}>
      {status === "done" ? (
        <div>
          <p style={styles.title}>🎉 送出成功！</p>
          <p style={styles.text}>你的 7 天高蛋白菜單在這裡：</p>
          <a
            href="/downloads/7day-menu.pdf"
            download
            className="email-capture-cta"
            style={styles.button}
          >
            下載 PDF
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p style={styles.title}>不知道每天要吃什麼？</p>
          <p style={styles.text}>
            留下 Email，免費拿「7 天高蛋白菜單」— 超商、外食都能照著吃。
          </p>
          <div style={styles.row}>
            <input
              type="email"
              required
              placeholder="你的 Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="email-capture-cta"
              style={styles.button}
            >
              {status === "loading" ? "送出中…" : "免費領取"}
            </button>
          </div>
          {status === "error" && (
            <p style={styles.error}>送出失敗，請確認 Email 後再試一次</p>
          )}
          <p style={styles.note}>不會寄垃圾信，隨時可取消訂閱。</p>
        </form>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
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
  row: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" },
  input: {
    flex: "1 1 200px",
    maxWidth: 320,
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #2E333A",
    background: "#15181C",
    color: "#F9FAFB",
    fontSize: 16,
  },
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
  error: { color: "#F87171", fontSize: 14, marginTop: 10 },
  note: { color: "#9CA3AF", fontSize: 12, marginTop: 12 },
};
