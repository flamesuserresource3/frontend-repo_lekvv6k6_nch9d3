export default function Services() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Positioning, audience insights, messaging and naming that align your business to what the market truly values.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><path d="M12 14v8"/><path d="m7.5 4.21 3 3"/><path d="M18 13A6 6 0 1 1 11 6"/><path d="m15 9-3 3-3-3 3-6Z"/></svg>
      ),
    },
    {
      title: 'Brand Design',
      desc: 'Visual identity systems, logo, color, typography and assets that stand out and scale across touchpoints.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="m12 6 7-4 3 3-4 7-6 6-3-3 6-6Z"/><path d="M5 7l3 3"/><path d="M2 22l4-10 6 6-10 4Z"/></svg>
      ),
    },
    {
      title: 'Brand Marketing',
      desc: 'Launch plans, content, campaigns and performance creative to take your brand to market with momentum.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone"><path d="M3 11l18-5v12L3 13v-2Z"/><path d="M11.6 16.8a3 3 0 0 1-5.6-1.8v-2"/></svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          Our Services
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">End‑to‑end brand building for SMEs</h2>
        <p className="mt-3 text-gray-600">Clarity meets craft. We turn strategy into design and design into growth.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 opacity-0 transition group-hover:opacity-100">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
