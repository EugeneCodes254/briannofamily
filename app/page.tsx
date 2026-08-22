"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Business Development",
    short: "Growth",
    description:
      "We identify commercial opportunities, strengthen market positioning and help organisations turn strategic ambition into measurable growth.",
    points: [
      "Growth strategy",
      "Market development",
      "Strategic partnerships",
      "Opportunity identification",
    ],
  },
  {
    number: "02",
    title: "Tender Advisory",
    short: "Procurement",
    description:
      "We help organisations navigate procurement opportunities with disciplined bid strategy, documentation and submission support.",
    points: [
      "Tender identification",
      "Bid strategy",
      "Tender documentation",
      "Compliance support",
    ],
  },
  {
    number: "03",
    title: "International Trade",
    short: "Markets",
    description:
      "We help businesses explore new markets, international partnerships, sourcing opportunities and cross-border expansion.",
    points: [
      "Market entry",
      "Trade opportunities",
      "International partnerships",
      "Sourcing & research",
    ],
  },
  {
    number: "04",
    title: "Financial Consulting",
    short: "Capital",
    description:
      "We provide financial and commercial insight that enables better planning, evaluation and strategic decision-making.",
    points: [
      "Financial analysis",
      "Business planning",
      "Financial modelling",
      "Decision support",
    ],
  },
];

const industries = [
  "Corporate & Commercial",
  "Government & Institutions",
  "Infrastructure & Construction",
  "International Trade",
  "Professional Services",
  "SMEs & Entrepreneurs",
];

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#101820] selection:bg-[#b38a4a] selection:text-white">

      {/* =========================================================
          TOP ANNOUNCEMENT
      ========================================================= */}

      <div className="bg-[#0b141d] px-5 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
        Strategic Advisory · Business Development · International Trade
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="sticky top-0 z-[100] border-b border-black/[0.06] bg-[#f4f1ea]/90 backdrop-blur-2xl">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="flex h-[82px] items-center justify-between">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group relative"
            >
              <div className="text-[21px] font-bold tracking-[0.18em]">
                BRIANO
              </div>

              <div className="-mt-0.5 pl-[2px] text-[7px] font-bold tracking-[0.58em] text-[#a77d36]">
                AND FAMILY
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">

              {navigation.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  className={`group relative text-[12px] font-semibold tracking-[0.02em] transition ${
                    index === 0
                      ? "text-[#101820]"
                      : "text-[#66717a] hover:text-[#101820]"
                  }`}
                >
                  {label}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#a77d36] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

            </nav>

            <div className="hidden lg:block">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#101820] px-6 py-3.5 text-[12px] font-semibold text-white transition duration-300 hover:bg-[#a77d36]"
              >
                Start a Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
            >
              <span className="flex w-5 flex-col gap-[5px]">

                <span
                  className={`h-[1.5px] w-full bg-[#101820] transition ${
                    menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#101820] transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#101820] transition ${
                    menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />

              </span>
            </button>

          </div>

          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              menuOpen
                ? "max-h-[700px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <nav className="border-t border-black/[0.06] py-5">

              {navigation.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-black/[0.05] py-5 text-[16px] font-medium"
                >
                  {label}
                  <span className="text-[#a77d36]">↗</span>
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center rounded-full bg-[#101820] px-6 py-4 text-sm font-semibold text-white"
              >
                Start a Conversation
              </Link>

            </nav>

          </div>

        </div>

      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#0b141d] text-white lg:min-h-[850px]">

        {/* Ambient light */}

        <div className="pointer-events-none absolute -right-[250px] -top-[300px] h-[850px] w-[850px] rounded-full bg-[#b38a4a]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-[400px] left-[10%] h-[700px] w-[700px] rounded-full bg-[#294355]/30 blur-[120px]" />

        {/* Fine grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large ring */}

        <div className="pointer-events-none absolute -right-[180px] top-[80px] h-[650px] w-[650px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-[100px] top-[160px] h-[490px] w-[490px] rounded-full border border-[#c6a568]/10" />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-16 px-5 py-20 sm:px-8 lg:min-h-[850px] lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-24">

          {/* Hero content */}

          <div className="relative z-10">

            <div className="mb-9 flex items-center gap-4">

              <div className="h-px w-14 bg-[#c6a568]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c6a568]">
                Established 2019 · Nairobi
              </span>

            </div>

            <h1 className="max-w-[850px] text-[50px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[68px] md:text-[78px] lg:text-[82px] xl:text-[96px]">

              Strategy that
              <br />

              <span className="text-[#c6a568]">
                moves business
              </span>

              <br />

              forward.

            </h1>

            <p className="mt-9 max-w-[650px] text-[16px] leading-8 text-white/55 sm:text-[18px]">
              Briano and Family is a professional advisory firm helping
              organisations identify opportunities, enter markets, strengthen
              commercial positions and make informed strategic decisions.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#b38a4a] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#c19a5d]"
              >
                Talk to an Advisor
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.04]"
              >
                Explore Our Expertise
              </Link>

            </div>

            {/* Metrics */}

            <div className="mt-16 grid max-w-[620px] grid-cols-3 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-semibold sm:text-3xl">
                  2019
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Established
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-9">
                <p className="text-2xl font-semibold sm:text-3xl">
                  04
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Advisory Areas
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-9">
                <p className="text-2xl font-semibold sm:text-3xl">
                  01
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Strategic Focus
                </p>
              </div>

            </div>

          </div>

          {/* Hero visual */}

          <div className="relative hidden lg:flex lg:justify-end">

            <div className="relative h-[610px] w-[460px]">

              {/* Back panel */}

              <div className="absolute right-0 top-0 h-[520px] w-[390px] rounded-[2rem] border border-white/10 bg-[#14222d] rotate-[5deg] opacity-50" />

              {/* Main panel */}

              <div className="absolute right-5 top-10 h-[560px] w-[410px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#162632] shadow-[0_50px_120px_rgba(0,0,0,.45)]">

                <div className="absolute inset-0 bg-gradient-to-br from-[#263b49] via-[#15242e] to-[#070d12]" />

                {/* Architectural lines */}

                <div className="absolute left-[50%] top-[-50px] h-[650px] w-px bg-white/[0.07]" />

                <div className="absolute left-[25%] top-0 h-full w-px bg-white/[0.04]" />

                <div className="absolute left-0 top-[34%] h-px w-full bg-white/[0.05]" />

                <div className="absolute left-0 top-[58%] h-px w-full bg-white/[0.05]" />

                {/* Circle */}

                <div className="absolute -right-[100px] top-[60px] h-[400px] w-[400px] rounded-full border border-[#c6a568]/20" />

                <div className="absolute -right-[45px] top-[115px] h-[290px] w-[290px] rounded-full border border-white/[0.08]" />

                <div className="absolute bottom-0 left-0 h-[65%] w-full bg-gradient-to-t from-[#060c11] via-[#060c11]/80 to-transparent" />

                {/* Top label */}

                <div className="absolute left-9 top-9 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a568]/30">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#c6a568]" />

                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                      Advisory
                    </p>

                    <p className="mt-1 text-[11px] font-semibold tracking-[0.12em]">
                      BRIANO & FAMILY
                    </p>
                  </div>

                </div>

                {/* Bottom copy */}

                <div className="absolute bottom-9 left-9 right-9">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c6a568]">
                    Strategic Perspective
                  </p>

                  <h2 className="mt-5 text-[35px] font-semibold leading-[1.02] tracking-[-0.04em]">
                    Commercial
                    <br />
                    clarity.
                  </h2>

                  <div className="mt-7 h-px bg-white/10" />

                  <p className="mt-5 max-w-[300px] text-xs leading-6 text-white/35">
                    Turning complex commercial questions into clear strategic
                    direction.
                  </p>

                </div>

              </div>

              {/* Floating location */}

              <div className="absolute -bottom-3 -left-2 z-20 rounded-2xl border border-white/10 bg-[#172631]/95 px-6 py-5 shadow-2xl backdrop-blur-xl">

                <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                  Headquarters
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Nairobi, Kenya
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom scroll cue */}

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex">

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
            Scroll to explore
          </span>

          <span className="h-10 w-px bg-white/15" />

        </div>

      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="border-b border-black/[0.06] bg-[#ebe7dd]">

        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-black/[0.08] sm:grid-cols-4">

          <div className="px-5 py-8 sm:px-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
              Focus
            </p>
            <p className="mt-2 text-sm font-semibold">
              Commercial Growth
            </p>
          </div>

          <div className="px-5 py-8 sm:px-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
              Expertise
            </p>
            <p className="mt-2 text-sm font-semibold">
              Strategic Advisory
            </p>
          </div>

          <div className="border-t border-black/[0.08] px-5 py-8 sm:border-t-0 sm:px-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
              Geography
            </p>
            <p className="mt-2 text-sm font-semibold">
              Kenya & Beyond
            </p>
          </div>

          <div className="border-t border-black/[0.08] px-5 py-8 sm:border-t-0 sm:px-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
              Established
            </p>
            <p className="mt-2 text-sm font-semibold">
              2019
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.55fr_1.45fr]">

          <div>

            <div className="sticky top-32">

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                01 · The Firm
              </p>

              <div className="mt-6 h-px w-16 bg-[#a77d36]" />

            </div>

          </div>

          <div>

            <h2 className="max-w-[1050px] text-[40px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[66px]">
              Better decisions begin with
              <span className="text-[#a77d36]"> better perspective.</span>
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2">

              <p className="text-[16px] leading-8 text-[#626d76]">
                Briano and Family is a professional business advisory and
                consulting firm established in 2019 to help organisations
                navigate commercial opportunities with greater clarity.
              </p>

              <p className="text-[16px] leading-8 text-[#626d76]">
                From growth strategy and tender advisory to international trade
                and financial consulting, we combine commercial perspective
                with practical execution.
              </p>

            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold"
            >
              Discover our story

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition duration-300 group-hover:border-[#a77d36] group-hover:bg-[#a77d36] group-hover:text-white">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-[#f4f1ea] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                02 · Expertise
              </p>

              <h2 className="mt-6 max-w-[800px] text-[43px] font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[70px]">
                What we
                <br />
                <span className="text-[#a77d36]">do best.</span>
              </h2>

            </div>

            <p className="max-w-md text-[15px] leading-7 text-[#68737c] lg:justify-self-end">
              Focused advisory services for organisations seeking growth,
              opportunity and stronger commercial outcomes.
            </p>

          </div>

          <div className="mt-20 divide-y divide-black/10 border-y border-black/10">

            {services.map((service) => (

              <Link
                key={service.number}
                href="/services"
                className="group grid gap-8 py-10 transition duration-500 md:grid-cols-[80px_180px_1fr_60px] md:items-center lg:py-12"
              >

                <span className="text-[11px] font-bold tracking-[0.2em] text-[#a77d36]">
                  {service.number}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/35">
                  {service.short}
                </span>

                <div>

                  <h3 className="text-[25px] font-semibold tracking-[-0.025em] transition duration-300 group-hover:text-[#a77d36] sm:text-[30px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69747d]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">

                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="text-[10px] font-medium text-black/45"
                      >
                        · {point}
                      </span>
                    ))}

                  </div>

                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-lg transition duration-300 group-hover:border-[#a77d36] group-hover:bg-[#a77d36] group-hover:text-white">
                  ↗
                </span>

              </Link>

            ))}

          </div>

          <div className="mt-10">

            <Link
              href="/services"
              className="group inline-flex items-center gap-4 text-sm font-semibold"
            >
              View complete service offering

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          DARK STATEMENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0b141d] px-5 py-28 text-white sm:px-8 lg:px-12 lg:py-40">

        <div className="pointer-events-none absolute right-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute bottom-[-300px] left-[-100px] h-[600px] w-[600px] rounded-full border border-[#c6a568]/10" />

        <div className="relative mx-auto max-w-[1200px] text-center">

          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#c6a568]">
            Our philosophy
          </p>

          <h2 className="mx-auto mt-8 max-w-[1100px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[72px]">
            We do not simply identify
            <span className="text-[#c6a568]"> opportunities.</span>
            <br />
            We help make them actionable.
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-[15px] leading-8 text-white/40">
            Good advisory work starts with understanding. It continues with
            rigorous thinking and ends with practical action.
          </p>

        </div>

      </section>

      {/* =========================================================
          WHY US
      ========================================================= */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                03 · Why Briano
              </p>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[62px]">
                Thinking beyond
                <br />
                <span className="text-[#a77d36]">the obvious.</span>
              </h2>

            </div>

            <div className="border-t border-black/10">

              {[
                [
                  "01",
                  "Strategic Perspective",
                  "We look beyond the immediate question to understand the wider commercial environment, risks and opportunities.",
                ],
                [
                  "02",
                  "Practical Advisory",
                  "Our recommendations are designed to move from analysis into clear, actionable next steps.",
                ],
                [
                  "03",
                  "Commercial Discipline",
                  "We approach opportunities with a clear understanding of value, positioning, markets and execution.",
                ],
                [
                  "04",
                  "Long-Term Thinking",
                  "We focus on building stronger commercial foundations rather than simply solving today's problem.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="grid gap-5 border-b border-black/10 py-9 sm:grid-cols-[70px_1fr]"
                >

                  <span className="text-[11px] font-bold text-[#a77d36]">
                    {number}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#68737c]">
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="bg-[#e9e5dc] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                04 · Markets
              </p>

              <h2 className="mt-6 max-w-[850px] text-[42px] font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[64px]">
                Experience across
                <br />
                <span className="text-[#a77d36]">commercial environments.</span>
              </h2>

            </div>

            <Link
              href="/industries"
              className="group inline-flex items-center gap-4 text-sm font-semibold"
            >
              Explore industries
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry, index) => (

              <Link
                href="/industries"
                key={industry}
                className="group relative overflow-hidden rounded-2xl bg-white px-7 py-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(16,24,32,.09)]"
              >

                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full border border-[#a77d36]/20 transition duration-500 group-hover:scale-[2]" />

                <div className="relative flex items-start justify-between">

                  <span className="max-w-[200px] text-base font-semibold">
                    {industry}
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#a77d36]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="relative mt-12 flex items-center justify-between">

                  <span className="h-px w-10 bg-[#a77d36] transition-all duration-500 group-hover:w-20" />

                  <span className="text-sm opacity-30 transition group-hover:opacity-100">
                    ↗
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                05 · Our approach
              </p>

              <h2 className="mt-6 text-[45px] font-semibold leading-[.95] tracking-[-0.055em] sm:text-5xl lg:text-[68px]">
                Understand.
                <br />
                Strategise.
                <br />
                <span className="text-[#a77d36]">Execute.</span>
              </h2>

            </div>

            <div className="grid gap-0 border-t border-black/10">

              {[
                [
                  "01",
                  "Understand",
                  "We start by understanding your objectives, challenges, commercial environment and the opportunity in front of you.",
                ],
                [
                  "02",
                  "Strategise",
                  "We evaluate the available options and develop a practical direction aligned with your commercial objectives.",
                ],
                [
                  "03",
                  "Execute",
                  "We help translate strategy into action, providing the perspective and support required to move forward.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="grid gap-6 border-b border-black/10 py-10 sm:grid-cols-[80px_1fr]"
                >

                  <span className="text-[11px] font-bold text-[#a77d36]">
                    {number}
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68737c]">
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INSIGHTS
      ========================================================= */}

      <section className="bg-[#f4f1ea] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                06 · Insights
              </p>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[62px]">
                Ideas worth
                <br />
                <span className="text-[#a77d36]">thinking about.</span>
              </h2>

            </div>

            <Link
              href="/insights"
              className="group inline-flex items-center gap-4 text-sm font-semibold"
            >
              View all insights
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                category: "BUSINESS DEVELOPMENT",
                title: "Identifying opportunities for sustainable business growth",
                description:
                  "Perspectives on commercial strategy, market development and business growth.",
              },
              {
                category: "INTERNATIONAL TRADE",
                title: "Exploring opportunities beyond traditional markets",
                description:
                  "Perspectives on international markets, partnerships and cross-border opportunities.",
              },
              {
                category: "TENDER ADVISORY",
                title: "Preparing organisations for competitive opportunities",
                description:
                  "Practical considerations for businesses approaching tenders and procurement.",
              },
            ].map((item) => (

              <Link
                href="/insights"
                key={item.title}
                className="group flex min-h-[360px] flex-col rounded-[1.5rem] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,24,32,.08)] sm:p-10"
              >

                <p className="text-[9px] font-bold tracking-[0.25em] text-[#a77d36]">
                  {item.category}
                </p>

                <h3 className="mt-10 text-[24px] font-semibold leading-[1.15] tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#68737c]">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-black/[0.07] pt-6">

                  <span className="text-xs font-semibold">
                    Read insight
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#a77d36] group-hover:bg-[#a77d36] group-hover:text-white">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#b08645] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">

        <div className="pointer-events-none absolute -right-[220px] -top-[220px] h-[650px] w-[650px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-[300px] left-[35%] h-[600px] w-[600px] rounded-full border border-white/[0.07]" />

        <div className="relative mx-auto max-w-[1440px]">

          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/60">
            Start a conversation
          </p>

          <div className="mt-7 grid gap-14 lg:grid-cols-[1fr_330px] lg:items-end">

            <h2 className="max-w-[1000px] text-[48px] font-semibold leading-[.95] tracking-[-0.055em] sm:text-6xl lg:text-[82px]">
              Have an opportunity
              <br />
              in mind?
              <br />
              <span className="text-white/55">
                Let&apos;s talk.
              </span>
            </h2>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/55">
                General enquiries
              </p>

              <a
                href="mailto:info@brianofamily.com"
                className="mt-4 block text-lg font-semibold underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
              >
                info@brianofamily.com
              </a>

              <a
                href="tel:+254742840154"
                className="mt-4 block text-lg font-semibold"
              >
                +254 742 840 154
              </a>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#8c682d] transition hover:bg-[#101820] hover:text-white"
              >
                Contact Briano & Family
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#070e14] px-5 py-16 text-white sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 lg:grid-cols-[1.5fr_.5fr_.7fr]">

            <div>

              <Link href="/" className="inline-block">

                <div className="text-[25px] font-bold tracking-[0.18em]">
                  BRIANO
                </div>

                <div className="-mt-0.5 pl-[2px] text-[7px] font-bold tracking-[0.58em] text-[#c6a568]">
                  AND FAMILY
                </div>

              </Link>

              <p className="mt-7 max-w-[500px] text-sm leading-7 text-white/35">
                Professional business advisory and consulting services across
                business development, tender advisory, international trade and
                financial consulting.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <span className="h-px w-10 bg-[#c6a568]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                  Nairobi · Kenya · 2019
                </span>

              </div>

            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Company
              </p>

              <div className="mt-6 space-y-4 text-sm text-white/45">

                {navigation.slice(1).map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}

              </div>

            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-sm text-white/45">

                <a
                  href="mailto:info@brianofamily.com"
                  className="block transition hover:text-white"
                >
                  info@brianofamily.com
                </a>

                <a
                  href="tel:+254742840154"
                  className="block transition hover:text-white"
                >
                  +254 742 840 154
                </a>

                <p className="leading-6">
                  316 Ndovu Close
                  <br />
                  Karen, Nairobi
                  <br />
                  Kenya
                </p>

              </div>

            </div>

          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 text-[10px] text-white/25 sm:flex-row sm:items-center">

            <p>
              © 2026 Briano and Family. All rights reserved.
            </p>

            <div className="flex gap-7">

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}