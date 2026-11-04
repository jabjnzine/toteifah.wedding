import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/noto-sans-thai/400.css";
import "./globals.css";
import { wedding, weddingDate, weddingIdentity } from "@/lib/wedding";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "https://anne-pop-wedding-131026.techanamaster.chatgpt.site");

export const metadata: Metadata = {
  title: `${weddingIdentity.names} | We're getting married`,
  description: `ขอเชิญร่วมพิธีมงคลสมรส ${weddingIdentity.names} · ${wedding.thaiDateLabel} · ${wedding.venueThai} ${wedding.venueAddress}`,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${weddingIdentity.names} — A day to remember`,
    description: `${wedding.thaiDateLabel} เวลา ${weddingDate.time} น. · ${wedding.venueThai} ${wedding.venueAddress}`,
    images: [wedding.photos.hero],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
