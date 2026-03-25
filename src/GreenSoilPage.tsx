import { Link } from "react-router-dom";

function GreenSoilPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-32 overflow-hidden">
        {/* BG */}
        <img
          src="/images/platform_soil.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="overlay-dark" />
        <div className="overlay-vignette" />
        <div className="grain-overlay" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="label mb-6">Platform I</div>
          <div className="gold-rule mb-8 mx-auto" />

          <h1 className="title-serif mb-6">Green Soil Platform</h1>

          {/* subtitle */}
          <p className="text-white/50 text-sm tracking-widest uppercase mb-8">
            Soil • Food • Economic Stability
          </p>

          {/* description */}
          <p className="body-text mx-auto mb-10 max-w-2xl">
            A regenerative platform designed to restore soil systems, enhance
            agricultural resilience, and support long-term environmental and
            economic stability.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4 items-center">
            <Link to="/" className="cta-link">
              Back to Homepage
            </Link>
            <Link to="/#platforms" className="cta-link">
              Back to Flagship Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 bg-[#0B0B0C]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="label mb-6">Introduction</div>
          <div className="gold-rule mb-8 mx-auto" />

          <p className="body-text mb-6 max-w-3xl mx-auto">
            Green Soil is a regenerative environmental platform designed to
            restore degraded land and improve long-term soil performance across
            climate-stressed regions.
          </p>

          <p className="body-text max-w-3xl mx-auto">
            By enhancing soil structure, biological activity, and mineral
            balance, the platform supports food security, ecological resilience,
            and sustainable economic development.
          </p>

          {/* IMAGE */}
          <div className="mt-16">
            <img
              src="/images/platform_soil.jpg"
              alt="Soil regeneration"
              className="rounded-2xl border border-white/10 opacity-90 mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default GreenSoilPage;
