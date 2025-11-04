export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-indigo-600 via-sky-500 to-emerald-500 p-[1px] shadow-md">
        <div className="flex flex-col items-center gap-6 bg-white/80 px-8 py-12 text-center backdrop-blur md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Ready to build a brand that grows with you?</h3>
            <p className="mt-2 max-w-2xl text-gray-700">Book a free 30‑minute consultation. We’ll review your goals and map the right path to market traction.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white shadow transition hover:bg-gray-800">
              Book a call
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5l3-3"/><path d="M12 3c6 0 9 3 9 9 0 2.7-1.5 5.4-3 7.5L9.6 12.9 12 3Z"/><path d="M3 21l4.5-1.5L6 15 3 21Z"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-black/10 transition hover:bg-gray-50">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
