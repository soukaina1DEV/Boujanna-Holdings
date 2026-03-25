import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  Play,
  Sun,
  Snowflake,
  Shield,
  Sparkles,
  Thermometer,
  Building2,
  GraduationCap,
  Landmark,
  Home,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      "Generally, our customers recover their investment within 2 to 4 years thanks to energy savings. Savings vary depending on the initial condition of your windows and existing insulation.",
  },
  {
    question: "Is it toxic?",
    answer:
      "No. Our products meet environmental standards, are certified and approved. Safe for everyone.",
  },
  {
    question: "Is installation done indoors or outdoors?",
    answer:
      "Except in certain exceptional cases, installation is done inside your premises.",
  },
  {
    question: "Do I need to leave the premises during application?",
    answer:
      "No, the application is safe and you can stay on site. However, installation is not completely silent and requires clear access to windows. If this may affect your work or concentration, we can adapt to your schedule or intervene during periods of lower occupancy.",
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
    description: "Houses, condos, multi-unit",
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
    <div className="min-h-screen bg-[#0B0B0C] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
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
              {/* Breadcrumb */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/60 mb-8">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span>Low-E Membrane</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Technology</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Low-E Window Membrane
                <br />
                <span className="text-white/80">for Existing Windows</span>
              </h1>

              {/* Stat */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
                <span className="text-3xl font-bold text-white">Up to 40%</span>
                <span className="text-white/70">energy savings</span>
              </div>

              {/* Description */}
              <p className="text-lg text-white/70 max-w-xl mb-10">
                Reduces solar energy penetration in summer and retains heat in
                winter with our nanothermal technology.
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
        className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 xl:px-24 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                year: "2011",
                award: "Eco Product Award",
                event: "Montreal Home Show",
              },
              {
                year: "2023",
                award: "CLC Award",
                event: "Objective Net Zero, UK",
              },
              {
                year: "2025",
                award: "Wates Sustainable Tech",
                event: "Financial Services Competition, UK",
              },
            ].map((item, index) => (
              <div key={index} className="reveal-item text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {item.year}
                </div>
                <div className="text-sm font-medium text-white/80 mb-1">
                  {item.award}
                </div>
                <div className="text-xs text-white/50">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={benefitsRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Effective protection summer and winter, in the south and in the
              north
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Summer Benefits */}
            <div className="reveal-item bg-white/[0.02] border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Sun className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Summer Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Significantly reduces solar energy penetration",
                  "Reduces air conditioning costs significantly",
                  "Reduces greenhouse effect indoors",
                  "Keeps the building cool",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <Check className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Winter Benefits */}
            <div className="reveal-item bg-white/[0.02] border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Snowflake className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Winter Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Reduces heat loss through windows",
                  "Reduces heating costs",
                  "Reduces condensation by up to 50%",
                  "Keeps heat inside the building",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Year-Round Benefits */}
            <div className="reveal-item bg-white/[0.02] border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Year-Round Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Reduces fading of materials, furniture & fabrics",
                  "Improved thermal comfort",
                  "Reduces indoor greenhouse effect",
                  "Reduces heating & cooling costs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section
        ref={comparisonRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-white/60 text-lg">
              Half-and-half comparison: with and without Low-E membrane
            </p>
          </div>

          <div className="reveal-item relative rounded-2xl overflow-hidden aspect-[21/9] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
              alt="Building comparison"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/60 via-transparent to-[#0B0B0C]/60" />

            {/* Comparison Labels */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2">
              <div className="bg-[#0B0B0C]/80 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium text-white/60">
                  Without Membrane
                </span>
              </div>
            </div>
            <div className="absolute top-1/2 right-8 -translate-y-1/2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                <span className="text-sm font-medium text-white">
                  With Low-E Membrane
                </span>
              </div>
            </div>
          </div>

          {/* Location Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 reveal-item">
            {["Dakar Airport", "Farmacia Medina", "2075 Robert-Bourrassa"].map(
              (loc, i) => (
                <span
                  key={i}
                  className="text-sm text-white/50 bg-white/5 px-4 py-2 rounded-full"
                >
                  {loc}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section
        ref={projectsRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Achievements Around the World
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
          <div className="mt-16 reveal-item bg-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-12">
            <blockquote className="text-xl lg:text-2xl text-white/80 font-light italic mb-6 leading-relaxed">
              "We were able to notice a difference in comfort from the very
              first day. A year and a half later, we observe savings of
              approximately{" "}
              <span className="text-white font-semibold">30%</span>."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <p className="font-medium">2075 Boulevard Robert-Bourrassa</p>
                <p className="text-sm text-white/50">Office Tower</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 reveal-item">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 rounded-full px-6"
            >
              Discover More Achievements
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section
        ref={specsRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/[0.01]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <span className="text-sm tracking-widest uppercase text-white/50 mb-4 block">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Measured Performance
            </h2>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "99", unit: "%", label: "UV Blocked" },
              { value: "95", unit: "%", label: "IR Blocked" },
              { value: "40", unit: "%", label: "Energy Savings*" },
              { value: "2×", unit: "", label: "Insulation (R2→R4)" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-number text-center p-6 bg-white/[0.02] border border-white/10 rounded-xl"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.unit}</span>
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 text-sm mb-16">
            * Savings on heating and air conditioning. Savings can reach up to
            40% depending on your installation.
          </p>

          {/* Detailed Specs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Filtering */}
            <div className="reveal-item">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white/60" />
                Performance Filtering
              </h3>
              <div className="space-y-4">
                {[
                  { label: "UV (Ultraviolet) Ray Blocking", value: "99%" },
                  { label: "IR (Infrared) Ray Blocking", value: "95%" },
                  { label: "Glare Reduction", value: "19%" },
                  { label: "Perceived Light Blocking", value: "12%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Test */}
            <div className="reveal-item">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-white/60" />
                Performance Test
              </h3>
              <div className="space-y-4">
                {[
                  { label: "SC (Shading Coefficient)", value: "0.45" },
                  { label: "TSER (High Visibility Membrane)", value: "47%" },
                  { label: "U-Factor", value: "0.48 BTU" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Certifications */}
            <div className="reveal-item">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-white/60" />
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
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="font-medium text-emerald-400">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glass Compatibility */}
          <div className="mt-12 reveal-item">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Glass Compatibility (Indoor Installation Only)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Clear Single Glazing",
                "Tinted Single Glazing",
                "Clear Double Glazing",
                "Tinted Double Glazing",
                "Double Glazing Low-E",
                "Clear Triple Glazing",
                "Tinted Triple Glazing",
                "Triple Glazing Low-E",
              ].map((type, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Warranty & ROI */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6 reveal-item">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">10 Years</div>
              <div className="text-white/60">
                Warranty on performance and installation
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                ROI in 2-4 Years
              </div>
              <div className="text-white/60">Thanks to energy savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        ref={trustedRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Certified and Approved
            </h2>
            <p className="text-white/60 text-lg">
              World-renowned companies trust our Low-E membrane
            </p>
          </div>

          <div className="reveal-item flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-50">
            {[
              "Concordia University",
              "Tim Hortons",
              "Westin Hotels",
              "Iberostar",
            ].map((company, i) => (
              <div
                key={i}
                className="text-xl lg:text-2xl font-semibold text-white/40"
              >
                {company}
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

      {/* CTA Form Section */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="reveal-item bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Save?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Reduce your air conditioning costs in summer and heating in
                winter. Keep cool or warmth in your premises. Contact us for a
                free quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Call us</p>
                    <p className="text-lg font-medium">1-866-985-8686</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email us</p>
                    <p className="text-lg font-medium">info@ecolosynergy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Serving</p>
                    <p className="text-lg font-medium">
                      5 continents worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Project Type"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  />
                  <Input
                    placeholder="Name *"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Email *"
                    type="email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  />
                  <Input
                    placeholder="Phone"
                    type="tel"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  />
                </div>
                <Textarea
                  placeholder="Project Description"
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-lg resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-[#0B0B0C] hover:bg-white/90 rounded-lg py-6 font-medium"
                >
                  Send My Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Sector Section */}
      <section
        ref={sectorsRef}
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

      {/* Footer */}
      <footer className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Energy Efficiency */}
            <div>
              <h4 className="font-semibold mb-4">Energy Efficiency</h4>
              <ul className="space-y-2">
                {[
                  "Low-E Membrane",
                  "Our Technology",
                  "Projects",
                  "Photo Gallery",
                  "Quote Tool",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cleaning Products */}
            <div>
              <h4 className="font-semibold mb-4">Cleaning Products</h4>
              <ul className="space-y-2">
                {["Full Range", "iClean Mini", "SAO Dispenser"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Anti-Slip */}
            <div>
              <h4 className="font-semibold mb-4">Anti-Slip</h4>
              <ul className="space-y-2">
                {["Full Range", "Floor / Footwear", "Bath / Barefoot"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "FAQ", "Contact", "Service Areas", "News"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2010-{new Date().getFullYear()} EcoloSynergy Inc. | All Rights
              Reserved
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                Manage Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
