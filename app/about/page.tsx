import Link from "next/link";
import { Montserrat } from "next/font/google";

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

      {/* Content */}
      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
          About Us
        </h1>

        <div className="space-y-12 text-black leading-relaxed">
          <div>
            <p className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
              Disrupt. Evolve. Be Relentless.
            </p>
            <p className="text-base md:text-lg font-light">
              It&apos;s more than a motto — it&apos;s how we move through everything.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg font-light leading-relaxed">
              <strong>MUV</strong> was born from a need to keep pushing — to make things that feel intentional, that stand for something.
              Our name comes from the Tamil phrase
            </p>
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              மாற்றம் செய். உயர்வு அடை. விடாமுயற்சி கொண்டிரு.
            </p>
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              Maatram Sei. Uyarvu Adai. Vidamuyarchi Kondiru.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              It&apos;s a reminder of what drives us: change, growth, and persistence.
            </p>
          </div>

          <div className="border-t border-black/20 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              Built for the Obsessive
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              We make gear for people who care — about how something feels, fits, and holds up through time.
              For the ones chasing better every day, the ones who never stop refining.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              MUV isn&apos;t made for everyone. It&apos;s made for those who live with intent.
            </p>
          </div>

          <div className="border-t border-black/20 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              High-End by Design
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              We don&apos;t rush things.
              Every material, every stitch, every design choice has a reason behind it.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              Premium fabrics. Honest construction. Details that last.
              We ask ourselves one question before anything leaves the studio: Would we wear this every day?
            </p>
          </div>

          <div className="border-t border-black/20 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              Our Promise
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              We&apos;ll never release something we don&apos;t believe in.
              If it doesn&apos;t perform, endure, and feel right — it doesn&apos;t make the cut.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              We make fewer things, but we make them right.
              That&apos;s our promise: every piece should earn its place in your life.
            </p>
          </div>

          <div className="border-t border-black/20 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              Where We&apos;re Going
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              MUV starts with Jiu-Jitsu — our home base. But this is just the beginning.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              We&apos;re building a system of gear that adapts as you grow — from the mats to the gym to wherever you move next.
              Because the pursuit never ends and the core stays the same:
            </p>
            <p className="text-xl md:text-2xl font-bold tracking-wide">
              Disrupt. Evolve. Be Relentless.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 text-center">
        <p className="text-sm text-black/60">
          Pour Global Ltd. trading as MUV
        </p>
      </footer>
    </div>
  );
}
