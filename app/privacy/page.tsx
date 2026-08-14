import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策｜Axion Fit",
  description: "Axion Fit 網站隱私權政策，說明資料蒐集方式與廣告 Cookie 使用。",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-data text-xs uppercase tracking-widest text-signal mb-3">
        Privacy Policy
      </p>
      <h1 className="font-display text-3xl font-black sm:text-4xl">
        隱私權政策
      </h1>
      <p className="mt-3 text-sm text-text-dim">最後更新日期：2026 年 8 月 14 日</p>

      <div className="mt-10 space-y-8 leading-relaxed text-text">
        <section>
          <h2 className="font-display text-xl font-bold mb-3">一、總則</h2>
          <p>
            歡迎使用 Axion Fit（以下稱「本網站」）。本隱私權政策說明本網站在您使用時如何蒐集、使用與保護您的資訊。使用本網站即表示您同意本政策所述內容。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">二、我們蒐集的資訊</h2>
          <p>
            本網站不要求使用者註冊帳號即可瀏覽內容。我們可能透過 Cookie
            與類似技術，自動蒐集非個人識別性的瀏覽資訊，例如造訪頁面、瀏覽時間、裝置類型與概略地理位置，用於了解網站使用狀況與改善內容品質。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">
            三、Google AdSense 與廣告 Cookie
          </h2>
          <p>
            本網站使用 Google AdSense
            刊登廣告。Google
            身為第三方供應商，會使用 Cookie
            在本網站上放送廣告。Google 使用廣告 Cookie
            能夠根據使用者先前造訪本網站或其他網站的紀錄，放送個人化廣告。
          </p>
          <p className="mt-3">
            使用者可以前往{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              Google 廣告設定
            </a>{" "}
            停用個人化廣告 Cookie；亦可前往{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              www.aboutads.info
            </a>{" "}
            停用第三方供應商的個人化廣告 Cookie。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">四、第三方連結</h2>
          <p>
            本網站部分內容包含前往第三方平台（例如
            Gumroad、賣貨便）的連結，用於產品購買。這些第三方網站有其獨立的隱私權政策，本網站不對其內容或做法負責，建議您在使用前自行查閱。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">五、Cookie 的使用與管理</h2>
          <p>
            您可以透過瀏覽器設定管理或封鎖
            Cookie。請注意，停用 Cookie 可能會影響本網站部分功能的正常運作，例如廣告顯示。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">六、兒童隱私</h2>
          <p>
            本網站內容不以未滿 13
            歲之兒童為目標對象，我們不會刻意蒐集兒童的個人資訊。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">七、政策異動</h2>
          <p>
            本隱私權政策可能因應法規或服務調整而不時修訂，修訂後將更新本頁面「最後更新日期」，建議您定期查閱本頁面以掌握最新內容。
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-3">八、聯絡我們</h2>
          <p>
            如對本隱私權政策有任何疑問，歡迎透過 Threads @axionfit_tw 與我們聯繫。
          </p>
        </section>
      </div>
    </div>
  );
}
