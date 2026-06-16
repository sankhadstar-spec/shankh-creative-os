import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHANKH Creative OS — Anything Creative",
  description: "Anything Creative, powered by SHANKH MEDIA. AI scripts, Reel ideas, captions, thumbnails — built for creators.",
  keywords: ["AI creator tools","YouTube script generator","Reel script","content ideas","SHANKH MEDIA","caption generator"],
  authors: [{ name: "SHANKH MEDIA" }],
  openGraph: {
    title: "SHANKH Creative OS",
    description: "Anything Creative, powered by SHANKH MEDIA.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SHANKH Creative OS", description: "Anything Creative, powered by SHANKH MEDIA." },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 1, themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
