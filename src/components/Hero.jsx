import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Digilary • Brand Strategy, Design & Marketing
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Shape a brand that small businesses
          <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent"> remember</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
          We help SMEs turn ideas into distinctive brands that win attention, build trust, and drive growth — from strategy to design to go‑to‑market.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white shadow transition hover:bg-gray-800">
            Start a project
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/70 px-5 py-3 text-gray-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
