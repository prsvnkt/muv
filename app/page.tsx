import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
        {/* Logo */}
        <div className="mb-12 animate-fadeIn">
          <Image
            src="/Logo.png"
            alt="MUV Logo"
            width={600}
            height={200}
            priority
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Coming Soon Message */}
        <div className="text-center space-y-6 animate-fadeIn animation-delay-200">
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Coming 2026
          </h1>

          <p className="text-xl md:text-2xl text-black font-light tracking-wide">
            Disrupt. Evolve. Be Relentless.
          </p>
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
