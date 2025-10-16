import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Navigation */}
      <nav className="absolute top-8 left-8">
        <Link
          href="/about"
          className={`text-black hover:text-black/60 transition-colors text-sm tracking-wide ${montserrat.className}`}
        >
          About Us
        </Link>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
        {/* Logo */}
        <div className="mb-8 animate-fadeIn">
          <Image
            src="/Logo.png"
            alt="MUV Logo"
            width={600}
            height={200}
            priority
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Tagline */}
        <div className="mb-12 animate-fadeIn animation-delay-200">
          <p className={`text-xl md:text-2xl text-black font-light tracking-wide ${montserrat.className}`}>
            Disrupt. Evolve. Be Relentless.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center animate-fadeIn animation-delay-400">
          <h1 className={`text-5xl md:text-7xl font-bold text-black tracking-tight ${montserrat.className}`}>
            Coming Early 2026
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center animate-fadeIn animation-delay-400">
        <p className="text-sm text-black/60">
          Pour Global Ltd. trading as MUV
        </p>
      </footer>
    </div>
  );
}
