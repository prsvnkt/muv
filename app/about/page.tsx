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
            width={500}
            height={1500}
            priority
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Origin */}
        <div className="text-center mb-8">
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We were born from the belief that we can do better and the conviction that we will.<br /> 
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            This is defined by our three guiding principles: Disrupt, Evolve and Be Relentless. <br />
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            They are a constant reminder of what drives us and what we stand for.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We make apparel for people who care about how something feels, fits, and holds up through time.
          </p>
        </div>

        {/* High-End by Design */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            High-End by Design
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We don&apos;t rush things.<br />
            We don&apos;t chase fast fashion trends.<br />
            Every material, every stitch, every design choice has a reason behind it.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            This includes choosing sustainable, high-grade fabrics, backed by real research and meticulous QA.<br />
            We build for performance and we build to last.<br />
            We ask ourselves one question before anything leaves the studio: Would we wear this every day, for years to come?
          </p>
        </div>

        {/* Our Promise */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Our Promise
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We&apos;ll never release something we don&apos;t believe in.<br />
            If it doesn&apos;t perform, endure, and feel right — it doesn&apos;t make the cut.<br />
            We are committed to meticulous quality and fighting consumption fatigue.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            We make fewer things, but we make them right.<br />
            That&apos;s our promise: every piece should earn its place in your life, reducing waste and elevating the way you feel in our apparel.
          </p>
        </div>

        {/* Where We're Going */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Where We&apos;re Going
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-2">
            We are starting with Jiu-Jitsu — our home base.<br />
            Every Gi is rigorously tested on the mat and refined until it meets our uncompromising standards.<br />
            But this is just the beginning.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed mb-4">
            We&apos;re building a collection of apparel designed to carry your high standards everywhere.<br />
            Because the pursuit never ends and the ethos stays the same.
          </p>

          <p className="text-3xl md:text-5xl font-bold tracking-tight pt-14">
            Built for movement. Worn for life.
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
