import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Trophy,
  Play,
  Building2,
  GraduationCap,
  Landmark,
  Home,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  {
    id: 1,
    category: "Hotel",
    location: "Canada",
    name: "Westin Montreal",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    hasBeforeAfter: false,
  },
  {
    id: 2,
    category: "Airport",
    location: "Senegal",
    name: "Dakar Airport",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    hasBeforeAfter: true,
  },
  {
    id: 3,
    category: "Hotel",
    location: "Mexico",
    name: "Iberostar Cancun",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    hasBeforeAfter: true,
  },
  {
    id: 4,
    category: "Retail",
    location: "Spain",
    name: "Farmacia Medina",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    hasBeforeAfter: true,
  },
  {
    id: 5,
    category: "Office",
    location: "Canada",
    name: "2075 Robert-Bourrassa",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    hasBeforeAfter: true,
  },
  {
    id: 6,
    category: "Restaurant",
    location: "Canada",
    name: "Tim Hortons",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    hasBeforeAfter: false,
  },
];

// FAQ data
const faqItems = [
  {
    question: "What is the warranty?",
    answer: "10 years for our nanothermal window insulation.",
  },
  {
    question: "Does the insulation protect my furniture and fabrics?",
    answer:
      "Yes. Our product blocks up to 99% of UV rays, which protects your furniture and fabrics from fading.",
  },
  {
    question: "What is the return on investment period?",
    answer:
      "Generally, our clients recover their investment in 2 to 4 years through energy savings. Savings vary depending on your windows' initial condition and existing insulation.",
  },
  {
    question: "Is it toxic?",
    answer:
      "No. Our products meet environmental standards, are certified and approved. Safe for everyone.",
  },
  {
    question: "Is the installation done inside or outside?",
    answer:
      "Except in certain exceptional cases, installation is done inside your premises.",
  },
  {
    question: "Do I need to leave the premises during application?",
    answer:
      "No, the application is safe and you can stay on site. However, the installation is not completely silent and requires clear access to windows. If this may affect your work or concentration, we can adapt to your schedule or work during low-occupancy periods.",
  },
  {
    question: "Can installation be done in winter?",
    answer:
      "Yes, we can install the product in winter. You'll just need to allow for longer drying time and the premises must be heated, but the product's effectiveness is not affected.",
  },
  {
    question: "How do I clean the windows after installation?",
    answer:
      "Use a soft microfiber cloth with products free of ammonia, abrasives, alcohol, or vinegar. These products could damage the membrane.",
  },
  {
    question: "Are residential homes qualified?",
    answer:
      "Yes. The majority of our clients are commercial, but we also do residential installations with the same level of quality.",
  },
  {
    question: "Does it change the appearance of my windows?",
    answer:
      "Slightly. Our membrane allows visible light through while blocking heat and UV. It may give windows a slight bluish tint, but the effect remains subtle.",
  },
];

// Sector solutions
const sectorSolutions = [
  {
    icon: Building2,
    title: "Commercial Solutions",
    description: "Offices, retail, hospitality",
    href: "#commercial",
  },
  {
    icon: GraduationCap,
    title: "Institutional",
    description: "Universities, hospitals, government",
    href: "#institutional",
  },
  {
    icon: Landmark,
    title: "ESG Certifications",
    description: "LEED and BOMA BEST credits",
    href: "#esg",
  },
  {
    icon: Home,
    title: "Residential Solutions",
    description: "Houses, condos, multi-unit dwellings",
    href: "#residential",
  },
];

export default function Platform2Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<HTMLDivElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      // Section reveal animations
      const sections = [
        videoRef.current,
        awardsRef.current,
        benefitsRef.current,
        comparisonRef.current,
        projectsRef.current,
        specsRef.current,
        trustedRef.current,
        faqRef.current,
        ctaRef.current,
        sectorsRef.current,
      ];

      sections.forEach((section) => {
        if (section) {
          gsap.fromTo(
            section.querySelectorAll(".reveal-item"),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      // Stats counter animation
      gsap.fromTo(
        ".stat-number",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: specsRef.current,
            start: "top 70%",
          },
        },
      );

      // Project cards stagger
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 75%",
          },
        },
      );

      // Sector cards animation
      gsap.fromTo(
        ".sector-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectorsRef.current,
            start: "top 80%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white overflow-x-visible">
      {/* SUB NAV */}
      <div className="subnav">
        <div className="subnav-container">
          {[
            { label: "Low-E Membrane", id: "low-e" },
            { label: "Technology", id: "technology" },
            { label: "Projects", id: "projects" },
            { label: "Gallery", id: "gallery" },
            { label: "sectors", id: "sectors" },
          ].map((item, i) => (
            <a key={i} href={`#${item.id}`} className="subnav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="low-e"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/80 via-[#0B0B0C]/60 to-[#0B0B0C]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-20">
          <div className="hero-content max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE (TEXT) */}
            <div className="text-center lg:text-left">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Low-E Membrane
                <span className="block mt-5 text-white/80">
                  for Existing Windows
                </span>
              </h1>

              {/* Stat */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
                <span className="text-3xl font-bold text-white">Up to 40%</span>
                <span className="text-white/70">energy savings</span>
              </div>

              {/* Description */}
              <p className="text-lg text-white/70 max-w-xl mb-10">
                Reduces solar energy penetration in summer and keeps heat in
                during winter with our nanothermal technology.
              </p>

              {/* CTA */}
              <Button className="bg-white text-black rounded-full px-8 py-6">
                Get a Free Quote
              </Button>
            </div>

            {/* RIGHT SIDE (IMAGE / SCHEMA) */}
            <div className="hidden lg:flex justify-center">
              <img
                src="/images/eco-process.jpg"
                alt="Process"
                className="rounded-2xl shadow-2xl border border-white/10 max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Video Demo Section */}
      <section
        ref={videoRef}
        id="technology"
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal-item">
            <span className="text-sm tracking-widest uppercase text-white/50 mb-4 block">
              Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              See Our Technology in Action
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover how our Low-E membrane transforms your windows
            </p>
          </div>

          <div className="reveal-item relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
            {!isVideoPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src="/images/videoframe_0.png"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            ) : (
              <video className="w-full h-full object-cover" controls autoPlay>
                <source
                  src="https://video.ecolosynergy.com/Presentation%20Low-E%20Nanomembrane%20(FR)%20720P.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        ref={awardsRef}
        className="py-10 lg:py-8 px-6 sm:px-8 lg:px-16 xl:px-24 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* TOP ROW */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="reveal-item flex items-center gap-4 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl px-6 py-4 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Green Product Award 2011
                  </p>
                  <p className="text-sm text-white/50">Montreal Home Show</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="reveal-item flex items-center gap-4 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl px-6 py-4 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">CLC Award 2023</p>
                  <p className="text-sm text-white/50">
                    Net Zero Target, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM CENTER CARD */}
            <div className="reveal-item flex items-center gap-4 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl px-6 py-4 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="font-medium text-white">
                  Wates Sustainable Technology 2025
                </p>
                <p className="text-sm text-white/50">
                  Financial Services Competition, United Kingdom{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={benefitsRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-20 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Effective protection in summer and winter, in the south and in the
              north
            </p>
          </div>

          {/* Top Blocks */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Summer */}
            <div className="bg-white/[0.02] border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="relative">
                <img
                  src="/images/summer.webp"
                  className="w-full h-64 lg:h-72 object-contain bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">
                  Summer Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Significantly reduces solar energy penetration",
                    "Significantly reduces air conditioning costs",
                    "Reduces the indoor greenhouse effect when combined with air conditioning",
                    "Keeps the building cool",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-orange-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-white/[0.02] border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="relative">
                <img
                  src="/images/winter.webp"
                  className="w-full h-64 lg:h-72 object-contain bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Winter Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduces heat loss through windows",
                    "Reduces heating costs",
                    "Reduces condensation formation by up to 50%",
                    "Keeps heat in the building",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Year Round */}
          <div className="bg-white/[0.02] border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <h3 className="text-center text-emerald-400 mb-10 mt-10 text-lg">
              Year-Round Benefits
            </h3>

            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/70 backdrop-blur">
                  Reduces fading of materials, furniture and fabrics
                </div>

                <div className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/70 backdrop-blur">
                  Improved thermal comfort
                </div>
              </div>

              <div className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/70 backdrop-blur">
                Decreases the greenhouse effect inside your premises when
                combined with AC
              </div>

              <div className="px-6 py-3 mb-10 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white/70 backdrop-blur">
                Reduces air conditioning and heating costs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEE THE DIFFERENCE */}
      <section
        ref={comparisonRef}
        id="gallery"
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              See the Difference
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Half-and-half comparison: with and without Low-E membrane
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: "/images/eco1.webp", title: "Dakar Airport" },
              { img: "/images/eco2.webp", title: "Farmacia Medina" },
              { img: "/images/eco3.webp", title: "2075 Robert Bourrassa" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.02]"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm text-white/80">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-sm text-white transition hover:bg-white hover:text-black"
            >
              View gallery
            </a>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Projects Around the World
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover our projects in detail with client testimonials
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/60 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.hasBeforeAfter && (
                      <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/70">
                        Before/After
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/50">{project.location}</p>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-20 reveal-item">
            <div
              className="rounded-2xl p-10 lg:p-14 text-center
    bg-gradient-to-r from-[#0B1F2E] via-[#0F2A3D] to-[#13364D]
    border border-white/10"
            >
              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white/90 font-light italic leading-relaxed max-w-3xl mx-auto">
                “We noticed a difference in comfort from day one. A year and a
                half later, we're seeing savings of about
                <span className="font-semibold text-white"> 30%.</span>”
              </blockquote>

              {/* Author */}
              <div className="mt-6 text-sm text-white/60">
                2075 Boulevard Robert-Bourrassa — Office Tower
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 reveal-item">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black">
              Discover More Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section
        ref={specsRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Measured Performance
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "99", unit: "%", label: "UV Blocked" },
              { value: "95", unit: "%", label: "IR Blocked" },
              { value: "40", unit: "%", label: "Energy Savings*" },
              { value: "2×", unit: "", label: "Insulation (R2→R4)" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white/[0.03] border border-white/20 rounded-xl"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.unit}</span>
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mb-16 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-sm text-white/80 reveal-item">
            Savings can reach up to{" "}
            <span className="font-semibold text-white">40%</span> depending on
            your installation. For less efficient systems, the main benefit will
            be improved{" "}
            <span className="font-semibold">
              thermal comfort. For already efficient systems, energy savings
              will be more significant.
            </span>
            .
          </div>

          {/* Grid 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Performance Filtering */}
            <div className="bg-white/[0.02] border border-white/20 rounded-xl p-6 reveal-item">
              <h3 className="text-lg font-semibold mb-6">
                Filtration Performance
              </h3>

              <div className="space-y-4">
                {[
                  { label: "UV Ray Blocking (Ultraviolet)", value: "99%" },
                  { label: "IR Ray Blocking (Infrared)", value: "95%" },
                  { label: "Glare Reduction", value: "19%" },
                  { label: "Perceived Light Blocking", value: "12%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/10"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Test */}
            <div className="bg-white/[0.02] border border-white/20 rounded-xl p-6 reveal-item">
              <h3 className="text-lg font-semibold mb-6">Performance Test</h3>

              <div className="space-y-4">
                {[
                  { label: "SC (Shading Coefficient)", value: "0.45" },
                  { label: "TSER (High Visibility Membrane)", value: "47%" },
                  { label: "U-Factor", value: "0.48 BTU" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/10"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Certifications */}
            <div className="bg-white/[0.02] border border-white/20 rounded-xl p-6 reveal-item">
              <h3 className="text-lg font-semibold mb-6">
                Health Certifications
              </h3>

              <div className="space-y-4">
                {[
                  { label: "North America & Europe", value: "✓" },
                  { label: "Total Lead Content", value: "Not Detected" },
                  { label: "Total Mercury Content", value: "Not Detected" },
                  { label: "Fire Certification", value: "Passed" },
                  { label: "PFOS & PFAS", value: "Not Detected" },
                  { label: "ROHS & REACH", value: "Passed" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/10"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium text-emerald-400">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass Compatibility */}
            <div className="bg-white/[0.02] border border-white/20 rounded-xl p-6 reveal-item">
              <h3 className="text-lg font-semibold mb-6">
                Glass Compatibility
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Single pane clear",
                  "Double pane clear",
                  "Double pane Low-E",
                  "Triple pane tinted",
                  "Single pane tinted",
                  "Double pane tinted",
                  "Triple pane clear",
                  "Triple pane Low-E",
                ].map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/20 rounded-lg text-sm text-white/70"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROI / Warranty */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 reveal-item">
            <div className="px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-sm text-emerald-300">
              10-Year Warranty on Performance & Installation
            </div>

            <div className="px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-sm text-emerald-300">
              ROI in 2–4 Years through Energy Savings
            </div>
          </div>
        </div>
      </section>

      {/* Certified & Approved */}
      <section
        ref={trustedRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Certified and Approved
            </h2>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-14">
            {[
              "/images/U.S green building council logo.webp",
              "/images/Low voc formula logo.webp",
              "/images/Canada green building logo.webp",
              "/images/EPA logo.webp",
            ].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center
                 p-2 lg:p-3
                 rounded-full 
                 bg-white
                 shadow-sm
                 transition duration-300"
              >
                <img
                  src={logo}
                  alt="certification"
                  className="h-16 lg:h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By (Clients) */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              They Trust Us
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              World-renowned companies trust our Low-E membrane
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">
            {[
              "/images/client1.webp",
              "/images/client2.webp",
              "/images/client3.webp",
              "/images/client4.webp",
              "/images/client5.webp",
              "/images/client6.webp",
              "/images/client7.webp",
              "/images/client8.webp",
              "/images/client9.webp",
              "/images/client10.webp",
              "/images/client11.webp",
              "/images/client12.webp",
              "/images/client13.webp",
              "/images/client14.webp",
              "/images/client15.webp",
            ].map((logo) => (
              <div key={logo} className="group flex items-center justify-center">
                <img
                  src={logo}
                  alt="client"
                  className="
      h-15 lg:h-20 object-contain

      filter brightness-0 invert opacity-60
      transition-all duration-500 ease-out

      group-hover:brightness-100
      group-hover:invert-0
      group-hover:opacity-100
      group-hover:scale-105
    "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="reveal-item">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.04]"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-white/90">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Contact Section - Boujanna Style */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Ready to Save?
            </h2>

            <p className="text-white/60 leading-relaxed max-w-md">
              Reduce your air conditioning costs in summer and heating costs in
              winter. Keep your premises cool or warm. Contact us for a free
              quote.
            </p>

            <p className="text-xl font-semibold text-emerald-400">
              1-866-985-8686
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur">
            <form className="space-y-5">
              {/* Select */}
              <div>
                <label className="text-sm text-white/60 mb-2 block">
                  Project Type
                </label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-white/20">
                  <option className="text-black">Commercial</option>
                  <option className="text-black">Institutional</option>
                  <option className="text-black">Residential</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="text-sm text-white/60 mb-2 block">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-white/60 mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-white/60 mb-2 block">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-white/60 mb-2 block">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 placeholder:text-white/40 resize-none focus:outline-none focus:border-white/20"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 font-medium transition"
              >
                Send My Request
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Solutions by Sector Section */}
      <section
        ref={sectorsRef}
        id="sectors"
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Solutions by Sector
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The Low-E membrane reduces solar energy penetration and adapts to
              all your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorSolutions.map((sector, i) => (
              <a
                key={i}
                href={sector.href}
                className="sector-card group bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <sector.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-white/50">{sector.description}</p>
                <div className="mt-4 flex items-center text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0B0B0C] py-28 px-6 sm:px-8 lg:px-16 xl:px-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* LOGO */}
          <div className="flex justify-center mb-20">
            <img
              src="/images/Logo-Ecolosynergy-transparent-sans-texte.png"
              className="h-10 opacity-70"
              alt="logo"
            />
          </div>

          {/* LINKS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
            {/* Energy Efficiency */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-6">
                Energy Efficiency
              </h4>
              <ul className="space-y-3">
                {[
                  "Low-E Membrane",
                  "Our Technology",
                  "Projects",
                  "Photo Gallery",
                  "Quote Tool",
                ].map((item, i) => (
                  <li key={i}>
                    <a className="text-sm text-white/50 hover:text-white transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cleaning Products */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-6">
                Tersano Cleaners
              </h4>
              <ul className="space-y-3">
                {["Full Range", "iClean® Mini", "SAO® Dispenser"].map(
                  (item, i) => (
                    <li key={i}>
                      <a className="text-sm text-white/50 hover:text-white transition-all duration-300">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Anti-Slip */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-6">
                Anti-Slip
              </h4>
              <ul className="space-y-3">
                {["Full Range", "Floor / Shoes", "Bathrooms / Barefoot"].map(
                  (item, i) => (
                    <li key={i}>
                      <a className="text-sm text-white/50 hover:text-white transition-all duration-300">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Adjuvant Béton */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-6">
                Concrete Admixture
              </h4>
              <ul className="space-y-3">
                <li>
                  <a className="text-sm text-white/50 hover:text-white transition-all duration-300">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {["About", "FAQ", "Contact", "Service Areas", "News"].map(
                  (item, i) => (
                    <li key={i}>
                      <a className="text-sm text-white/50 hover:text-white transition-all duration-300">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
            <p>
              © 2010-{new Date().getFullYear()} EcoloSynergy Inc. | All Rights
              Reserved
            </p>

            <div className="flex gap-6">
              <a className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a className="hover:text-white transition-colors">
                Cookie Settings
              </a>
              <a className="hover:text-white transition-colors">Facebook</a>
              <a className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
