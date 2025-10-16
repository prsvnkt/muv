import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUV - Coming 2026",
  description: "MUV - Disrupt. Evolve. Be Relentless. Premium Brazilian Jiu-Jitsu gear and performance apparel. Coming 2026.",
  keywords: ["MUV", "Brazilian Jiu-Jitsu", "BJJ", "activewear", "performance apparel", "martial arts"],
  authors: [{ name: "Pour Global Ltd." }],
  openGraph: {
    title: "MUV - Coming 2026",
    description: "MUV - Disrupt. Evolve. Be Relentless. Premium Brazilian Jiu-Jitsu gear and performance apparel.",
    type: "website",
  },
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
