import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NavItem = {
  id: string;
  label: string;
};

type ProjectCard = {
  title: string;
  category: string;
  location: string;
  image: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { id: "lowe", label: "Low-E Membrane" },
  { id: "technology", label: "Our Technology" },
  { id: "projects", label: "Our Projects" },
  { id: "gallery", label: "Photo Gallery" },
  { id: "commercial", label: "Commercial / Business" },
  { id: "institutional", label: "Institutional" },
  { id: "residential", label: "Residential" },
  { id: "esg", label: "ESG Certifications" },
];

const floatingBenefits = [
  "Reduces material fading on furniture, fabrics, and finishes",
  "Improves indoor thermal comfort in hot environments",
  "Helps reduce greenhouse effect indoors alongside cooling systems",
  "Lowers cooling and heating costs across large glazed surfaces",
];

const projects: ProjectCard[] = [
  {
    title: "Westin Montréal",
    category: "Hotel",
    location: "Canada",
    image: "/images/eco-project-1.jpg",
  },
  {
    title: "Dakar Airport",
    category: "Airport",
    location: "Senegal",
    image: "/images/eco-project-2.jpg",
  },
  {
    title: "Iberostar Cancun",
    category: "Hotel",
    location: "Mexico",
    image: "/images/eco-project-3.jpg",
  },
  {
    title: "Farmacia Medina",
    category: "Commercial",
    location: "Spain",
    image: "/images/eco-project-4.jpg",
  },
  {
    title: "2075 Robert-Bourassa",
    category: "Office",
    location: "Canada",
    image: "/images/eco-project-5.jpg",
  },
  {
    title: "Tim Hortons",
    category: "Restaurant",
    location: "Canada",
    image: "/images/eco-project-6.jpg",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the warranty?",
    answer:
      "The solution is designed for long-term performance, with installation and performance coverage commonly positioned around a 10-year window depending on deployment conditions.",
  },
  {
    question: "Does it help protect furniture and fabrics?",
    answer:
      "Yes. By blocking a very high percentage of UV radiation, it helps reduce fading on furniture, flooring, textiles, and other sensitive interior finishes.",
  },
  {
    question: "What is the expected return on investment?",
    answer:
      "Depending on climate, glazing type, and building use, ROI can be achieved in approximately 2 to 4 years through reduced cooling and heating demand.",
  },
  {
    question: "Is it toxic?",
    answer:
      "The solution is positioned as low-emission and suitable for interior use, with compatibility aligned with sustainability-focused environments.",
  },
  {
    question: "Is installation done indoors or outdoors?",
    answer:
      "The membrane is generally intended for interior-side application on compatible glazing systems.",
  },
  {
    question: "Do occupants need to leave during installation?",
    answer:
      "In many cases, installations can be organized with minimal disruption, depending on the building layout and project scope.",
  },
  {
    question: "Can it be installed in winter?",
    answer:
      "Yes. Installation scheduling can typically be managed year-round, subject to project conditions and access requirements.",
  },
  {
    question: "Will it change the appearance of windows?",
    answer:
      "The objective is to maintain a clean architectural appearance while improving thermal performance and occupant comfort.",
  },
];

const trustedLogos = [
  "/images/logo-iberostar.png",
  "/images/logo-melia.png",
  "/images/logo-bahia.png",
  "/images/logo-dreams.png",
  "/images/logo-atlific.png",
  "/images/logo-las.png",
  "/images/logo-concordia.png",
  "/images/logo-cancer.png",
  "/images/logo-npmc.png",
  "/images/logo-minto.png",
  "/images/logo-busac.png",
  "/images/logo-engros.png",
];

function EcoEnergyFilmPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>("lowe");
  const [activeVideo, setActiveVideo] = useState<"presentation" | "retention">(
    "presentation",
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const videoSrc = useMemo(() => {
    if (activeVideo === "retention") {
      return "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }
    return "https://www.youtube.com/embed/dQw4w9WgXcQ";
  }, [activeVideo]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".eco-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      gsap.fromTo(
        ".eco-hero-copy > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".eco-hero-visual",
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power2.out" },
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#0B0B0C] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(201,164,92,0.08), transparent 22%)",
      }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0">
          <img
            src="/images/platform_energy.jpg"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(11,11,12,0.55),rgba(11,11,12,1))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-32 md:grid-cols-2 md:px-10">
          <div className="eco-hero-copy max-w-2xl">
            <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#C9A45C]">
              Platform II
            </div>
            <div className="mb-7 h-px w-20 bg-[#C9A45C]" />

            <h1 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">
              Eco-Energy Film Platform
            </h1>

            <p className="max-w-xl text-sm leading-7 text-white/72 md:text-base">
              Advanced low-emissivity membrane technology designed to reduce
              solar heat gain, improve thermal comfort, and optimize energy
              performance across large glazed surfaces in modern architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact-tool"
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Request Consultation
              </a>

              <Link
                to="/#platforms"
                className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/85 transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                Back to Platforms
              </Link>
            </div>
          </div>

          <div className="eco-hero-visual">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_90px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <img
                src="/images/eco-diagram.png"
                alt="Eco-Energy process diagram"
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUB NAV */}
      <section className="sticky top-0 z-40 border-b border-white/8 bg-[#0B0B0C]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-4 md:px-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] uppercase tracking-[0.2em] transition ${
                  isActive ? "text-[#C9A45C]" : "text-white/55 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </section>

      {/* LOW-E MEMBRANE INTRO */}
      <section id="lowe" className="eco-reveal py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-6 text-[11px] uppercase tracking-[0.35em] text-[#C9A45C]">
            Low-E Membrane
          </div>
          <div className="mb-8 h-px w-20 bg-[#C9A45C]" />

          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-6 font-serif text-3xl leading-tight md:text-5xl">
                High-performance thermal membrane for existing glazing
              </h2>

              <p className="mb-5 max-w-2xl text-base leading-8 text-white/72">
                The Low-E membrane is engineered to regulate infrared heat
                transfer through glass while preserving daylight and maintaining
                a refined architectural appearance.
              </p>

              <p className="max-w-2xl text-base leading-8 text-white/72">
                It is particularly relevant for airports, office towers,
                hospitality assets, healthcare facilities, institutional
                buildings, and other glass-intensive environments in warm and
                high-exposure regions.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4">
              <img
                src="/images/eco-hero-side.jpg"
                alt="Low-E membrane illustration"
                className="w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / VIDEO */}
      <section
        id="technology"
        className="eco-reveal relative overflow-hidden bg-[linear-gradient(90deg,#081521,#102C43_45%,#081521)] py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-10">
          <div className="mb-4 inline-flex rounded-full bg-[#6D8700] px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-white">
            Demonstration
          </div>

          <h2 className="mb-5 font-serif text-3xl md:text-5xl">
            See our technology in action
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-white/70">
            Discover how the Eco-Energy Film Platform supports thermal control,
            reduces solar heat penetration, and improves occupant comfort.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveVideo("presentation")}
              className={`rounded-xl px-6 py-3 text-sm transition ${
                activeVideo === "presentation"
                  ? "bg-[#6DCD2B] text-white"
                  : "border border-white/12 bg-white/[0.04] text-white/80 hover:border-white/25"
              }`}
            >
              ▶ Low-E Presentation
            </button>

            <button
              type="button"
              onClick={() => setActiveVideo("retention")}
              className={`rounded-xl px-6 py-3 text-sm transition ${
                activeVideo === "retention"
                  ? "bg-[#6DCD2B] text-white"
                  : "border border-white/12 bg-white/[0.04] text-white/80 hover:border-white/25"
              }`}
            >
              ▶ Heat Retention
            </button>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <iframe
              className="aspect-video w-full"
              src={videoSrc}
              title="Eco-Energy Film video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left">
              <div className="mb-2 text-sm font-medium text-[#F0B23A]">
                Industry Recognition
              </div>
              <p className="text-sm leading-7 text-white/70">
                Positioned as an award-recognized energy-efficiency technology
                within sustainable building performance contexts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left">
              <div className="mb-2 text-sm font-medium text-[#F0B23A]">
                Thermal Reduction
              </div>
              <p className="text-sm leading-7 text-white/70">
                Supports significant reduction in heat gain through glazed
                façades and existing windows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left">
              <div className="mb-2 text-sm font-medium text-[#F0B23A]">
                Energy Efficiency
              </div>
              <p className="text-sm leading-7 text-white/70">
                Helps optimize cooling demand and improve comfort in
                energy-intensive spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 text-black/60">
            Effective thermal protection in summer and winter, adapted for
            comfort-focused architectural performance.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <img
                src="/images/eco-summer.jpg"
                alt="Summer benefits"
                className="h-[280px] w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-4 text-2xl font-medium text-[#D96A1E]">
                  Summer Benefits
                </h3>
                <ul className="space-y-3 text-sm leading-7 text-black/70">
                  <li>✓ Significantly reduces solar energy penetration</li>
                  <li>✓ Lowers cooling demand in glazed environments</li>
                  <li>
                    ✓ Supports better indoor comfort alongside HVAC systems
                  </li>
                  <li>✓ Helps preserve cooler interior conditions</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <img
                src="/images/eco-winter.jpg"
                alt="Winter benefits"
                className="h-[280px] w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-4 text-2xl font-medium text-[#1977B5]">
                  Winter Benefits
                </h3>
                <ul className="space-y-3 text-sm leading-7 text-black/70">
                  <li>✓ Reduces heat loss through existing glazing</li>
                  <li>✓ Supports improved heating efficiency</li>
                  <li>✓ Helps limit condensation-related discomfort</li>
                  <li>✓ Retains warmth within occupied interiors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#0F2A4C] p-8 text-white">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {floatingBenefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 px-5 py-5 text-sm leading-7 text-white/88"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEE THE DIFFERENCE */}
      <section
        id="gallery"
        className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            See the difference
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-8 text-black/60">
            Selected before-and-after style references highlighting improved
            thermal performance across high-glass environments.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "/images/eco-before-1.jpg",
              "/images/eco-before-2.jpg",
              "/images/eco-before-3.jpg",
            ].map((img, index) => (
              <div
                key={img}
                className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={img}
                  alt={`Comparison ${index + 1}`}
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#projects"
              className="inline-flex rounded-xl border border-[#0F5C8A] px-7 py-4 text-sm font-medium text-[#0F5C8A] transition hover:bg-[#0F5C8A] hover:text-white"
            >
              View the gallery
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            Projects worldwide
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 text-black/60">
            Selected deployments across hospitality, airports, offices,
            commercial assets, and institutional environments.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="group relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#95C11F] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-serif text-2xl">{project.title}</h3>
                  <p className="text-sm text-black/55">{project.location}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-[24px] bg-[linear-gradient(90deg,#143559,#2B8AC6)] px-8 py-10 text-center text-white shadow-[0_20px_55px_rgba(0,0,0,0.14)]">
            <p className="text-lg italic leading-9 md:text-2xl">
              “We noticed an immediate improvement in comfort from the first
              days of installation, followed by meaningful energy savings over
              time.”
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/70">
              Office Tower Reference
            </p>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            Technical specifications
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 text-black/60">
            Measured performance positioning for thermal efficiency
            applications.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "99%", label: "UV Blocked", color: "#2F96D0" },
              { value: "95%", label: "IR Blocked", color: "#F57A19" },
              { value: "40%", label: "Energy Savings", color: "#95C11F" },
              { value: "2×", label: "Insulation", color: "#7CB342" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-black/10 bg-white p-7 text-center shadow-[0_10px_26px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-2 text-5xl font-semibold">{item.value}</div>
                <div className="mb-5 text-sm uppercase tracking-[0.2em] text-black/55">
                  {item.label}
                </div>
                <div className="mx-auto h-1.5 w-full max-w-[170px] rounded-full bg-black/6">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: item.label === "Insulation" ? "90%" : "75%",
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#B7DDA7] bg-[#E9F6E6] p-6 text-sm leading-8 text-[#20553C]">
            Energy savings can vary according to glazing type, exposure, and
            HVAC performance. In many cases, the immediate gain is improved
            thermal comfort; in optimized systems, energy savings become more
            pronounced over time.
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
              <h3 className="mb-5 text-2xl font-serif">
                Filtration Performance
              </h3>
              <div className="space-y-4 text-sm text-black/70">
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Ultraviolet blockage</span>
                  <strong>99%</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Infrared blockage</span>
                  <strong>95%</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Glare reduction</span>
                  <strong>19%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Perceived light blockage</span>
                  <strong>12%</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
              <h3 className="mb-5 text-2xl font-serif">Performance Test</h3>
              <div className="space-y-4 text-sm text-black/70">
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Shading coefficient</span>
                  <strong>0.45</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Total solar energy rejected</span>
                  <strong>47%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>U-Factor</span>
                  <strong>0.48 BTU</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
              <h3 className="mb-5 text-2xl font-serif">
                Health Certifications
              </h3>
              <div className="space-y-4 text-sm text-black/70">
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Total lead content</span>
                  <strong>Not Detected</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Total mercury content</span>
                  <strong>Not Detected</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>Fire certification</span>
                  <strong>Passed</strong>
                </div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span>PFOS / PFAS</span>
                  <strong>Not Detected</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>RoHS & REACH</span>
                  <strong>Passed</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
              <h3 className="mb-5 text-2xl font-serif">
                Glazing Compatibility
              </h3>
              <p className="mb-5 text-sm text-black/55">
                Interior installation for a wide range of compatible glazing
                systems.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Single clear glazing",
                  "Single tinted glazing",
                  "Double clear glazing",
                  "Double tinted glazing",
                  "Double Low-E glazing",
                  "Triple clear glazing",
                  "Triple tinted glazing",
                  "Triple Low-E glazing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#B7DDA7] bg-[#EDF8EC] px-4 py-3 text-sm text-[#20553C]"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-full bg-[linear-gradient(90deg,#20B15B,#0F8C68)] px-8 py-4 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              10-year positioning on performance and installation
            </div>
            <div className="rounded-full bg-[linear-gradient(90deg,#20B15B,#0F8C68)] px-8 py-4 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              ROI in 2–4 years through energy savings
            </div>
          </div>
        </div>
      </section>

      {/* ESG / CERTIFIED */}
      <section
        id="esg"
        className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-5xl">
            Certified & Approved
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              "/images/cert-green-building.png",
              "/images/cert-low-voc.png",
              "/images/cert-canada.png",
              "/images/cert-epa.png",
            ].map((logo) => (
              <img
                key={logo}
                src={logo}
                alt="Certification"
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="eco-reveal bg-[#F2F2EE] py-24 text-[#0B0B0C]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            Trusted by leading institutions
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 text-black/55">
            A broad range of hospitality, healthcare, education, commercial, and
            real-estate environments have adopted the solution.
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 opacity-45 sm:grid-cols-3 lg:grid-cols-4">
            {trustedLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-xl border border-black/5 bg-white/40 p-6"
              >
                <img
                  src={logo}
                  alt="Trusted client logo"
                  className="h-10 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="eco-reveal bg-[#F2F2EE] py-28 text-[#0B0B0C]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq((prev) => (prev === index ? null : index))
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium">
                      {item.question}
                    </span>
                    <span className="text-2xl text-[#88B800]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] border-t border-black/8"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 py-5 text-sm leading-8 text-black/65">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT TOOL */}
      <section
        id="contact-tool"
        className="eco-reveal bg-[#EDEDE8] py-28 text-[#0B0B0C]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div className="self-center">
            <h2 className="mb-5 font-serif text-3xl md:text-5xl">
              Ready to save energy?
            </h2>
            <p className="max-w-md text-base leading-8 text-black/65">
              Reduce cooling and heating costs while improving indoor comfort
              across glazed spaces. Share your project requirements to begin the
              assessment process.
            </p>

            <div className="mt-8 text-4xl font-semibold text-[#6D8700]">
              +1 866 985 8686
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-black/65">
                  Project Type
                </label>
                <select className="w-full rounded-xl border border-black/12 px-4 py-4 outline-none transition focus:border-[#C9A45C]">
                  <option>Commercial</option>
                  <option>Institutional</option>
                  <option>Residential</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-black/65">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-black/12 px-4 py-4 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-black/65">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-black/12 px-4 py-4 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-black/65">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-black/12 px-4 py-4 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-black/65">
                  Project Description
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-black/12 px-4 py-4 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#6D8700] px-8 py-4 text-sm font-medium text-white transition hover:brightness-110"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="eco-reveal bg-[#F2F2EE] py-24 text-[#0B0B0C]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="mb-4 text-center font-serif text-3xl md:text-5xl">
            Solutions by Sector
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-8 text-black/60">
            The Eco-Energy membrane adapts to different building typologies and
            operational needs.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Commercial Solutions",
                text: "Offices, retail, hospitality",
              },
              {
                title: "Institutional",
                text: "Universities, hospitals, public buildings",
              },
              {
                title: "ESG Certifications",
                text: "Sustainability-aligned deployment support",
              },
              {
                title: "Residential Solutions",
                text: "Homes, condos, multi-unit residences",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[22px] border border-black/10 bg-white p-8 shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2374A4,#173B63)] text-2xl text-white">
                  ⬢
                </div>
                <h3 className="mb-3 font-serif text-2xl">{card.title}</h3>
                <p className="text-sm leading-7 text-black/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 bg-[#0D2646] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-4 md:px-10">
          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#C9A45C]">
              Eco-Energy
            </div>
            <ul className="space-y-3 text-sm text-white/72">
              <li>
                <a href="#lowe">Low-E Membrane</a>
              </li>
              <li>
                <a href="#technology">Our Technology</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#gallery">Photo Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#C9A45C]">
              Applications
            </div>
            <ul className="space-y-3 text-sm text-white/72">
              <li>
                <a href="#commercial">Commercial</a>
              </li>
              <li>
                <a href="#institutional">Institutional</a>
              </li>
              <li>
                <a href="#residential">Residential</a>
              </li>
              <li>
                <a href="#esg">ESG Certifications</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#C9A45C]">
              Group
            </div>
            <ul className="space-y-3 text-sm text-white/72">
              <li>
                <Link to="/#group">The Group</Link>
              </li>
              <li>
                <Link to="/#domains">Domains</Link>
              </li>
              <li>
                <Link to="/#platforms">Platforms</Link>
              </li>
              <li>
                <Link to="/#legacy">Legacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#C9A45C]">
              Contact
            </div>
            <div className="space-y-3 text-sm text-white/72">
              <p>Institutional & Strategic Inquiries</p>
              <p>info@boujannaholdings.com</p>
              <p>Montreal · Casablanca</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-white/8 px-6 pt-8 text-xs text-white/42 md:px-10">
          © Boujanna Holdings. All rights reserved.
        </div>
      </footer>

      {/* ANCHOR TARGETS FOR SOLUTION SECTIONS */}
      <div id="commercial" className="h-0" />
      <div id="institutional" className="h-0" />
      <div id="residential" className="h-0" />
    </main>
  );
}

export default EcoEnergyFilmPage;
