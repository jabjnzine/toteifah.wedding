import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/noto-sans-thai/400.css";
import "./globals.css";
import { wedding } from "@/lib/wedding";

export const metadata: Metadata = {
  title: `${wedding.bride} & ${wedding.groom} | We're getting married`,
  description: `การ์ดแต่งงานตัวอย่างโทนแดงไวน์และฟ้าอ่อน — ${wedding.bride} & ${wedding.groom} · ${wedding.thaiDateLabel}`,
  metadataBase: new URL("https://anne-pop-wedding-131026.techanamaster.chatgpt.site"),
  openGraph: {
    title: `${wedding.bride} & ${wedding.groom} — A day to remember`,
    description: "Together with our families, we invite you to celebrate our love. การ์ดเชิญตัวอย่าง",
    images: [wedding.photos.hero],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
