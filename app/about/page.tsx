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

        <div className="space-y-8 text-black leading-relaxed">
          <div>
            <p className="text-2xl md:text-3xl font-light tracking-wide mb-4">
              <strong>Disrupt. Evolve. Be Relentless.</strong>
            </p>
            <p className="text-lg md:text-xl font-light">
              It's more than a motto. It's our DNA.
            </p>
          </div>

          <p className="text-base md:text-lg font-light leading-relaxed">
            <strong className="font-semibold">MUV</strong> was born from a relentless drive to push boundaries—on and off the mats. Inspired by the Tamil phrase <em>மாற்றம் செய். உயர்வு அடை. விடாமுயற்சி கொண்டிரு.</em> (Disrupt. Evolve. Be Relentless.), our name reflects our commitment to constant progress, cultural depth, and uncompromising standards.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              Built for the Obsessive
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed">
              We design for those who live at the edge—the ones chasing the extra round, refining every detail, evolving daily. Our gear isn't for the casual. It's for the obsessed. The ones who demand performance, precision, and presence in everything they wear.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              High-End by Design
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              Every MUV product starts with one question: <em>What does excellence look like?</em>
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed">
              We use only premium materials, rigorous construction, and future-facing design principles. From innovative textiles to obsessive detailing, our gear is engineered to perform under pressure—and look good doing it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
              Where We're Going
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-4">
              MUV begins in Jiu-Jitsu, but the mission goes far beyond. We're building a system of gear and apparel for athletes and creators who refuse to plateau. BJJ today. Activewear and lifestyle tomorrow. Different sports next. The core stays the same:
            </p>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Disrupt. Evolve. Be Relentless.
            </p>
          </div>

          <div className="pt-8 border-t border-black/10">
            <p className="text-base md:text-lg font-light">
              Thank you,
            </p>
            <p className="text-base md:text-lg font-semibold">
              Team MUV
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
