import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaInstagram } from "react-icons/fa";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className={`min-h-screen bg-white px-4 py-8 ${montserrat.className}`}>
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-12">
        <Link
          href="/"
          className="text-black hover:text-black/60 transition-colors text-sm tracking-wide"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/Logo.png"
            alt="MUV Logo"
            width={600}
            height={200}
            priority
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Origin */}
        <div className="text-center mb-8">
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We were born from the belief that we can do better and the conviction that we will.
            Our name carries that same spirit, drawn from the Tamil phrase
          </p>

          <p className="text-3xl md:text-3xl font-light tracking-wider mb-2 pt-6">
            மாற்றம் செய். உயர்வு அடை. விடாமுயற்சி கொண்டிரு.
          </p>
          <p className="text-2xl md:text-sm font-light text-gray-500 tracking-wider mb-6 italic">
            <strong>M</strong>aatram Sei. <strong>U</strong>yarvu Adai. <strong>V</strong>idamuyarchi Kondiru.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed">
            It&apos;s a reminder of what drives us - change, growth, and persistence.
          </p>
        </div>

        {/* Built for the Obsessive */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Built for the Pursuit
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We make apparel for people who care about how something feels, fits, and holds up through time.
            For the ones chasing better every day, the ones who never stop refining.
          </p>
        </div>

        {/* High-End by Design */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            High-End by Design
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We don&apos;t rush things.<br />
            Every material, every stitch, every design choice has a reason behind it.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            Premium fabrics. Honest construction. Details that last.<br />
            We ask ourselves one question before anything leaves the studio: Would we wear this every day?
          </p>
        </div>

        {/* Our Promise */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Our Promise
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We&apos;ll never release something we don&apos;t believe in.<br />
            If it doesn&apos;t perform, endure, and feel right — it doesn&apos;t make the cut.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            We make fewer things, but we make them right.<br />
            That&apos;s our promise: every piece should earn its place in your life.
          </p>
        </div>

        {/* Where We're Going */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Where We&apos;re Going
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            MUV starts with Jiu-Jitsu — our home base. But this is just the beginning.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed mb-4">
            We&apos;re building a system of apparel that adapts as you grow — from the mats to the gym to wherever you move next.<br />
            Because the pursuit never ends and the core stays the same:
          </p>

          <p className="text-3xl md:text-5xl font-bold tracking-tight pt-14">
            Disrupt. Evolve. Be Relentless.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 text-center">
        <div className="flex items-center justify-center gap-4 text-sm text-black/60">
          <p>Pour Global Ltd. trading as MUV</p>
          <span>|</span>
          <a
            href="mailto:contact@muvclo.com"
            className="hover:text-black transition-colors"
          >
            contact@muvclo.com
          </a>
          <span>|</span>
          <a
            href="https://instagram.com/muvclo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}
