import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUV",
  description: "MUV - Disrupt. Evolve. Be Relentless. Premium Brazilian Jiu-Jitsu gear and performance apparel. Coming 2026.",
  keywords: ["MUV", "Brazilian Jiu-Jitsu", "BJJ", "activewear", "performance apparel", "martial arts"],
  authors: [{ name: "Pour Global Ltd." }],
  openGraph: {
    title: "MUV",
    description: "MUV - Disrupt. Evolve. Be Relentless. Premium Brazilian Jiu-Jitsu gear and performance apparel.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
