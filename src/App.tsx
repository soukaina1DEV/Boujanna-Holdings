import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";

import GreenSoilPage from "./GreenSoilPage";
import EcoEnergyFilmPage from "./EcoEnergyFilmPage";

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav ref={navRef} className="nav-fixed">
      <Link
        to="/"
        className="nav-wordmark"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Boujanna Holdings
      </Link>
      <div className="nav-links">
        <Link
          to="/#group"
          className={`nav-link ${activeSection === "group" ? "nav-active" : ""}`}
        >
          The Group
        </Link>

        <Link
          to="/#domains"
          className={`nav-link ${activeSection === "domains" ? "nav-active" : ""}`}
        >
          Domains
        </Link>

        <div className="nav-dropdown">
          <Link
            to="/#platforms"
            className={`nav-link ${activeSection === "platforms" ? "nav-active" : ""}`}
          >
            Platforms
          </Link>

          <div className="dropdown-menu">
            <Link to="/green-soil" className="dropdown-link">
              Green Soil Platform
            </Link>

            <Link to="/eco-energy-film" className="dropdown-link">
              Eco-Energy Film Platform
            </Link>
          </div>
        </div>

        <Link
          to="/#legacy"
          className={`nav-link ${activeSection === "legacy" ? "nav-active" : ""}`}
        >
          Legacy
        </Link>

        <Link
          to="/#contact"
          className={`nav-link ${activeSection === "contact" ? "nav-active" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline();

      loadTl
        .fromTo(
          bg,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.8",
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set(content.querySelectorAll(".animate-item"), {
              opacity: 1,
              y: 0,
            });
            gsap.set(bg, { scale: 1, y: 0 });
          },
        },
      });

      // ENTRANCE (0-30%): Hold at visible state (already animated on load)
      // SETTLE (30-70%): Static
      // EXIT (70-100%): Elements exit
      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text, .cta-link"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 10 }}>
      <img
        ref={bgRef}
        src="/images/hero_architecture.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Boujanna Holdings</div>
        <div className="animate-item gold-rule mb-8" />
        <h1 className="animate-item title-serif mb-10">
          A Privately Held Global Holding
        </h1>
        <p className="animate-item body-text mb-8">
          Active across essential industries and long-term value platforms. The
          Group operates across Canada, the United States, and Morocco with
          discipline, execution, and strategic depth.
        </p>
        <div className="animate-item flex flex-col gap-4 mt-4">
          <a href="#group" className="cta-link">
            Explore the Group
          </a>
          <a href="#domains" className="cta-link">
            View Domains
          </a>
        </div>
      </div>
    </section>
  );
}

// The Assets Section
function AssetsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance animation
      scrollTl
        .fromTo(
          bg,
          { scale: 1.1, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.04, ease: "none" },
          0,
        );

      // Exit animation
      scrollTl
        .fromTo(
          content.querySelector(".assets-number"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.05, y: "-5vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 15 }}>
      <img
        ref={bgRef}
        src="/images/45c48bc9-caca-495c-ac79-db473012b3e7 (1) (1).png"
        alt=""
        className="bg-image"
      />

      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <h1 className="animate-item title-serif mb-10">Scale of the Group</h1>
        <div className="grid md:grid-cols-2 gap-0 items-center w-full max-w-7xl mx-auto mt-14">
          {/* LEFT TEXT */}
          <div className="animate-item body-text text-left min-w-[400px]">
            <p className="mb-6">
              Boujanna Holdings operates as a multi-domain family holding with
              strategic assets across essential industries.
            </p>

            <p>
              Through long-term capital deployment and disciplined execution,
              the Group develops and oversees platforms designed to support
              resilient infrastructure, energy systems, and resource-driven
              economies.
            </p>
          </div>

          {/* RIGHT NUMBER */}
          <div className="animate-item text-right">
            <h2 className="title-serif !text-[130px] leading-none mb-6">
              $70B
            </h2>

            <div className="label">Assets Under Management</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// The Group Section
function GroupSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl
        .fromTo(
          bg,
          { scale: 1.1, y: "8vh", opacity: 0.8 },
          { scale: 1, y: 0, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text, .cta-link"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.05, y: "-5vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="group"
      className="section-pinned"
      style={{ zIndex: 20 }}
    >
      <img
        ref={bgRef}
        src="/images/group_interior.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">The Group</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Structure & Stewardship
        </h2>
        <p className="animate-item body-text mb-8">
          Boujanna Holdings is structured as a multi-domain family holding with
          operational and strategic assets across North America and North
          Africa. The Group operates through vertically integrated platforms
          designed to ensure execution control, long-term value protection, and
          institutional-grade governance. Discretion, continuity, and
          stewardship define its philosophy.
        </p>
        <a href="#domains" className="animate-item cta-link">
          Explore Our Domains
        </a>
      </div>
    </section>
  );
}

// Domains Overview Section
function DomainsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text, .cta-link"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="section-pinned"
      style={{ zIndex: 30 }}
    >
      <img
        ref={bgRef}
        src="/images/domains_corridor.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domains</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">Eight Pillars</h2>
        <p className="animate-item body-text mb-8">
          Construction, Renewable Energy, Eco-Energy, Healthcare, Mining,
          Security & Logistics, Education, and Agriculture—each platform is
          built for execution control and long-term value protection.
        </p>
        <a href="#platforms" className="animate-item cta-link">
          View Flagship Platforms
        </a>
      </div>
    </section>
  );
}

// Construction Domain Section
function ConstructionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.1, opacity: 0.75 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.05, y: "-5vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 40 }}>
      <img
        ref={bgRef}
        src="/images/construction_modern.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain I</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Construction, Real Estate & Industrial Development
        </h2>
        <p className="animate-item body-text">
          Geographic Presence: Canada | United States | Morocco
        </p>
        <p className="animate-item body-text mt-6">
          Boujanna Holdings operates an integrated construction, real estate,
          and industrial development platform across Canada, the United States,
          and Morocco. The Group is active in large-scale construction, real
          estate development, industrial facilities, and structural steel
          manufacturing, supported by in-house architectural and interior design
          capabilities. From logistics and industrial hubs to high-performance
          buildings and steel-based infrastructures, Boujanna Holdings delivers
          assets designed for durability, efficiency, and long-term strategic
          value.
        </p>
      </div>
    </section>
  );
}

// Renewable Energy Section
function RenewableSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 50 }}>
      <img
        ref={bgRef}
        src="/images/renewable_wind.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain II</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Renewable Energy & Green Platforms
        </h2>
        <p className="animate-item body-text">
          Renewable energy and sustainability represent a central pillar of
          Boujanna Holdings' long-term strategy. The Group develops and controls
          large-scale green platforms focused on soil regeneration, ecological
          resilience, and climate-adapted solutions designed for arid and
          high-temperature regions. These platforms are engineered for regional
          and national-scale deployment and long-term environmental impact.
        </p>
      </div>
    </section>
  );
}


// Eco-Energy Section
function EcoEnergySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 50 }}>
      <img
        ref={bgRef}
        src="/images/group_interior.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain III</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Eco-Energy & Thermal Efficiency
        </h2>
        <p className="animate-item body-text">
          Boujanna Holdings invests in advanced eco-energy technologies designed to reduce heat transfer,
          cooling demand, and overall energy consumption in modern architecture. 
          These solutions address one of the primary challenges of glass-based buildings and are particularly suited for large-scale institutional, 
          commercial, and high-density developments.
        </p>
      </div>
    </section>
  );
}


// Healthcare Section
function HealthcareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.1, opacity: 0.75 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.05, y: "-5vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 60 }}>
      <img
        ref={bgRef}
        src="/images/healthcare_clinic.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain IV</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Healthcare & Human Performance
        </h2>
        <p className="animate-item body-text">
          Boujanna Holdings operates across healthcare delivery,
          multidisciplinary clinical infrastructure, and human performance
          platforms. The Group controls medical clinics, rehabilitation
          facilities, performance centers, and elite training environments
          focused on health, resilience, and long-term physical optimization. In
          parallel, Boujanna Holdings actively supports professional athletes in
          combat sports and high-performance disciplines.
        </p>
      </div>
    </section>
  );
}

// Mining Section
function MiningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 70 }}>
      <img
        ref={bgRef}
        src="/images/mining_landscape.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain V</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Mining, Refining & Natural Resources
        </h2>
        <p className="animate-item body-text">
          Boujanna Holdings maintains strategic interests in mining operations
          and refining infrastructure across controlled jurisdictions. The Group
          is active in resource extraction, processing, and refining, supported
          by secure logistics, compliance-driven operations, and
          industrial-grade governance.
        </p>
      </div>
    </section>
  );
}



// Security Section
function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 70 }}>
      <img
        ref={bgRef}
        src="/images/mining_landscape.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain VI</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Security, Logistics & AI-Driven Systems
        </h2>
        <p className="animate-item body-text">
          Boujanna Holdings controls secure transport, logistics, and
          surveillance platforms designed for high-value assets and critical
          infrastructure. These platforms integrate physical security, secure
          transportation, and AI-driven command centers to ensure operational
          integrity across sensitive environments.
        </p>
      </div>
    </section>
  );
}


// Education Section
function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 70 }}>
      <img
        ref={bgRef}
        src="/images/mining_landscape.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain VII</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Education, Technology & Knowledge Platforms
        </h2>
        <p className="animate-item body-text">
          Education and knowledge transmission represent a long-term investment
          for Boujanna Holdings. The Group operates academic and professional
          training centers specializing in information technology, systems
          engineering, and applied digital skills.
        </p>
      </div>
    </section>
  );
}



// Agriculture Section
function AgricultureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.12, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.06, y: "-6vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 70 }}>
      <img
        ref={bgRef}
        src="/images/mining_landscape.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Domain VIII</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">
          Agriculture, Equine & Heritage Assets
        </h2>
        <p className="animate-item body-text">
          Boujanna Holdings controls agricultural operations, equine breeding
          programs, and heritage assets reflecting a commitment to land
          stewardship, tradition, and long-term asset preservation.
        </p>
      </div>
    </section>
  );
}



// Flagship Platforms Section
function PlatformsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      // Flowing section with reveal animations
      gsap.fromTo(
        content.querySelectorAll(".platform-item"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="platforms"
      className="section-flowing bg-dark py-32"
      style={{ zIndex: 80 }}
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-8">
        <div className="platform-item text-center mb-20">
          <div className="label mb-6">Flagship Platforms</div>
          <div className="gold-rule mb-8 mx-auto" />
          <h2 className="title-serif mb-8">Sovereign-Scale Impact</h2>
          <p className="body-text mx-auto">
            Boujanna Holdings develops a limited number of flagship platforms
            designed to address global environmental, energy, and climate
            challenges at scale. These platforms are structured for
            sovereign-level partnerships, long-term deployment, and
            capital-intensive expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="platform-item">
            <div className="relative overflow-hidden mb-8">
              <img
                src="/images/platform_soil.jpg"
                alt=""
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] to-transparent opacity-60" />
            </div>
            <div className="label mb-4">Platform I</div>
            <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-wide mb-6 text-light">
              Green Soil Platform
            </h3>
            <p className="body-text">
              Green Soil is a regenerative environmental platform designed to
              restore, enhance, and protect soil ecosystems while supporting
              sustainable agriculture and climate resilience. The platform
              integrates soil regeneration techniques, ecological engineering,
              and sustainable land management models suitable for arid,
              semi-arid, and climate-stressed regions. Green Soil is engineered
              for regional and national-scale deployment and aligns with
              long-term environmental and food security strategies.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <Link to="/green-soil" className="cta-link">
                View Platform
              </Link>
            </div>
          </div>

          <div className="platform-item">
            <div className="relative overflow-hidden mb-8">
              <img
                src="/images/platform_energy.jpg"
                alt=""
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] to-transparent opacity-60" />
            </div>
            <div className="label mb-4">Platform II</div>
            <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-wide mb-6 text-light">
              Eco-Energy Film Platform
            </h3>
            <p className="body-text">
              The Eco-Energy Film Platform focuses on advanced thermal control
              technologies applied to glass surfaces to significantly reduce
              heat penetration and cooling demand. In modern architecture, glass
              represents one of the primary sources of heat gain. By controlling
              infrared heat transfer while preserving natural light, the
              platform enables improved indoor comfort and reduced energy
              strain. The platform is designed for deployment across airports,
              high-rise towers, hospitality assets, healthcare facilities, and
              large institutional buildings, particularly in high-temperature
              regions.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <Link to="/eco-energy-film" className="cta-link">
                View Platform
              </Link>
            </div>
          </div>
        </div>

        <div className="platform-item text-center pt-12 border-t border-[rgba(201,164,92,0.15)]">
          <p className="body-text mx-auto italic">
            Together, the Green Soil and Eco-Energy Film platforms reflect
            Boujanna Holdings' commitment to environmental stewardship,
            technological excellence, and sovereign-scale impact.
          </p>
        </div>
      </div>
    </section>
  );
}

// Legacy Section
function LegacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          bg,
          { scale: 1.1, opacity: 0.75 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        )
        .fromTo(
          content.querySelectorAll(".animate-item"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.03, ease: "none" },
          0,
        );

      scrollTl
        .fromTo(
          content.querySelector(".title-serif"),
          { y: 0, opacity: 1 },
          { y: "-18vh", opacity: 0, ease: "power2.in" },
          0.7,
        )
        .fromTo(
          content.querySelectorAll(".body-text"),
          { y: 0, opacity: 1 },
          { y: "-10vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
          0.72,
        )
        .fromTo(
          bg,
          { scale: 1, y: 0 },
          { scale: 1.05, y: "-5vh", ease: "power2.in" },
          0.7,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className="section-pinned"
      style={{ zIndex: 90 }}
    >
      <img
        ref={bgRef}
        src="/images/legacy_portrait.jpg"
        alt=""
        className="bg-image"
      />
      <div className="overlay-dark" />
      <div className="overlay-vignette" />
      <div className="grain-overlay" />

      <div ref={contentRef} className="content-center">
        <div className="animate-item label mb-6">Legacy</div>
        <div className="animate-item gold-rule mb-8" />
        <h2 className="animate-item title-serif mb-10">Three Generations</h2>
        <p className="animate-item body-text mb-12">
          Boujanna Holdings is built on three generations of values: discipline,
          responsibility, and ambition. From its foundations to its current
          global footprint, the Group remains guided by family leadership and a
          commitment to long-term stewardship.
        </p>

        <div className="animate-item grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="legacy-portrait mb-4">
              <img
                src="/images/legacy_founder.jpg"
                alt=""
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="label text-xs">Foundations</div>
          </div>
          <div className="text-center">
            <div className="legacy-portrait mb-4">
              <img
                src="/images/legacy_continuity.jpg"
                alt=""
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="label text-xs">Continuity</div>
          </div>
          <div className="text-center">
            <div className="legacy-portrait mb-4">
              <img
                src="/images/legacy_vision.jpg"
                alt=""
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="label text-xs">Vision</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.querySelectorAll(".animate-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-flowing contact-section py-32"
      style={{ zIndex: 100 }}
    >
      <div ref={contentRef} className="max-w-4xl mx-auto px-8 text-center">
        <div
          className="animate-item label mb-6 text-dark"
          style={{ color: "#C9A45C" }}
        >
          Contact
        </div>
        <div className="animate-item gold-rule mb-8 mx-auto" />
        <h2 className="animate-item font-serif text-4xl md:text-5xl uppercase tracking-wide mb-8 text-dark">
          Institutional Inquiry
        </h2>
        <p className="animate-item text-dark/70 text-base md:text-lg mb-12 max-w-xl mx-auto">
          For institutional and strategic inquiries only.
        </p>

        <div className="animate-item">
          <a
            href="mailto:info@boujannaholdings.com"
            className="text-dark text-lg md:text-xl font-medium hover:text-[#C9A45C] transition-colors duration-300"
          >
            info@boujannaholdings.com
          </a>
        </div>

        <div className="animate-item mt-16 pt-12 border-t border-dark/10">
          <p className="text-dark/50 text-sm">Montreal · Casablanca</p>
          <p className="text-dark/40 text-xs mt-8">
            © Boujanna Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

// Main App
function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <AssetsSection />
      <GroupSection />
      <DomainsSection />
      <ConstructionSection />
      <RenewableSection />
      <EcoEnergySection />
      <HealthcareSection />
      <MiningSection />
      <SecuritySection />
      <EducationSection />
      <AgricultureSection />
      <PlatformsSection />
      <LegacySection />
      <ContactSection />
    </main>
  );
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const setupGlobalSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center:
          (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02,
            );

            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0,
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          ease: "power2.out",
        },
      });
    };

    ScrollTrigger.addEventListener("refresh", setupGlobalSnap);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", setupGlobalSnap);
    };
  }, []);

  return (
    <div className="relative">
      {/* navbar يظهر في كل الصفحات */}
      <Navigation />

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/green-soil" element={<GreenSoilPage />} />
        <Route path="/eco-energy-film" element={<EcoEnergyFilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
