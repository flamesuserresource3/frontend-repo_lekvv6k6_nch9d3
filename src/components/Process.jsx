export default function Process() {
  const steps = [
    {
      k: '01',
      title: 'Discovery & Strategy',
      desc: 'Workshops to clarify goals, audience, positioning and a roadmap that aligns brand and business objectives.'
    },
    {
      k: '02',
      title: 'Identity Design',
      desc: 'Logo, typography, color and a scalable visual system with clear usage guidelines.'
    },
    {
      k: '03',
      title: 'Go‑to‑Market',
      desc: 'Messaging, storytelling and launch assets across website, social and paid to drive traction.'
    }
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">How we work</span>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Simple, collaborative, outcome‑driven</h2>
          <p className="mt-3 max-w-xl text-gray-600">A focused process built for small teams. Transparent communication, clear milestones and momentum from day one.</p>

          <div className="mt-8 space-y-5">
            {steps.map(s => (
              <div key={s.k} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-gray-900 text-center text-sm font-semibold leading-9 text-white">{s.k}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Average ROI in 6 months" value="3.4x" />
            <Stat label="Client NPS" value="72" />
            <Stat label="On‑time delivery" value="98%" />
            <Stat label="Industries served" value="20+" />
          </div>
          <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
            <p className="text-lg font-medium">“Digilary took us from generic to unforgettable. We saw traction immediately after launch.”</p>
            <div className="mt-4 text-sm text-white/70">— Founder, SaaS SME</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold text-gray-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}
