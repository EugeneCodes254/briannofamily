"use client";

import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/#insights"],
  ["Contact", "/#contact"],
];

const industries = [
  {
    number: "01",
    title: "Financial Services",
    label: "Finance & Investment",
    description:
      "Supporting financial organisations, investors and businesses with commercial analysis, growth opportunities, financial planning and strategic decision-making.",
    areas: [
      "Business development",
      "Market opportunities",
      "Financial analysis",
      "Investment assessment",
      "Strategic planning",
    ],
  },
  {
    number: "02",
    title: "Construction & Infrastructure",
    label: "Infrastructure & Development",
    description:
      "Helping businesses operating across construction and infrastructure evaluate opportunities, strengthen their commercial positioning and pursue relevant tenders.",
    areas: [
      "Tender opportunities",
      "Bid strategy",
      "Market development",
      "Commercial evaluation",
      "Strategic partnerships",
    ],
  },
  {
    number: "03",
    title: "Trade & Distribution",
    label: "Commerce & Supply",
    description:
      "Supporting businesses involved in trade and distribution as they explore markets, suppliers, partnerships and opportunities for commercial expansion.",
    areas: [
      "Market entry",
      "International trade",
      "Supplier opportunities",
      "Distribution strategy",
      "Commercial partnerships",
    ],
  },
  {
    number: "04",
    title: "Professional Services",
    label: "Business Services",
    description:
      "Providing commercial advisory support to professional service businesses seeking growth, stronger positioning and new opportunities.",
    areas: [
      "Growth strategy",
      "Business development",
      "Market positioning",
      "Strategic relationships",
      "Opportunity assessment",
    ],
  },
  {
    number: "05",
    title: "Manufacturing",
    label: "Industry & Production",
    description:
      "Helping manufacturing businesses assess markets, commercial opportunities, expansion strategies and potential partnerships.",
    areas: [
      "Market development",
      "Trade opportunities",
      "Business planning",
      "Strategic partnerships",
      "Commercial analysis",
    ],
  },
  {
    number: "06",
    title: "Energy & Natural Resources",
    label: "Energy & Resources",
    description:
      "Supporting organisations exploring commercial opportunities across energy, resources and related supply chains.",
    areas: [
      "Opportunity assessment",
      "Market research",
      "Business development",
      "Trade advisory",
      "Commercial strategy",
    ],
  },
  {
    number: "07",
    title: "Agriculture & Agribusiness",
    label: "Agriculture & Food",
    description:
      "Providing strategic and commercial support to businesses operating across agriculture, agribusiness, food and related value chains.",
    areas: [
      "Market opportunities",
      "Trade development",
      "Business strategy",
      "Value-chain opportunities",
      "Market expansion",
    ],
  },
  {
    number: "08",
    title: "Technology & Innovation",
    label: "Technology & Digital",
    description:
      "Supporting technology-oriented businesses and organisations evaluating growth opportunities, market expansion and commercial partnerships.",
    areas: [
      "Market entry",
      "Business development",
      "Commercial strategy",
      "Partnership development",
      "Growth planning",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Industry Context",
    description:
      "We first understand the sector, competitive environment, market dynamics and commercial conditions relevant to the assignment.",
  },
  {
    number: "02",
    title: "Opportunity",
    description:
      "We identify relevant opportunities, potential markets, relationships and strategic routes that may support the client's objectives.",
  },
  {
    number: "03",
    title: "Commercial Assessment",
    description:
      "We examine opportunities through a practical commercial lens, considering feasibility, resources, positioning and potential challenges.",
  },
  {
    number: "04",
    title: "Strategic Direction",
    description:
      "We translate our assessment into a clearer direction and practical next steps aligned with the client's objectives.",
  },
];

export default function IndustriesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111b27]">

      {/* =========================================================
          TOP BAR
      ========================================================= */}

      <div className="bg-[#0d1721] px-6 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs">
        Strategic Advisory • Business Development • International Trade
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f5f3ee]/95 backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <a href="/" className="shrink-0">

              <div className="text-[20px] font-bold tracking-[0.16em] text-[#111b27]">
                BRIANO
              </div>

              <div className="-mt-0.5 pl-[1px] text-[8px] font-semibold tracking-[0.5em] text-[#a77d36]">
                AND FAMILY
              </div>

            </a>

            {/* Desktop navigation */}

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

              {navigation.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className={`text-[13px] font-medium transition-colors duration-200 ${
                    label === "Industries"
                      ? "text-[#111b27]"
                      : "text-[#56616b] hover:text-[#111b27]"
                  }`}
                >
                  {label}
                </a>
              ))}

            </nav>

            {/* CTA */}

            <a
              href="/#contact"
              className="hidden rounded-full bg-[#a77d36] px-6 py-3 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#896529] lg:inline-flex"
            >
              Talk to an Advisor
            </a>

            {/* Mobile menu button */}

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#111b27]/10 lg:hidden"
            >

              <span className="sr-only">
                {menuOpen ? "Close navigation" : "Open navigation"}
              </span>

              <span className="flex w-5 flex-col gap-1.5">

                <span
                  className={`block h-[2px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`block h-[2px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-[2px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />

              </span>

            </button>

          </div>

          {/* Mobile navigation */}

          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              menuOpen
                ? "max-h-[650px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <nav className="border-t border-black/[0.06] py-5">

              {navigation.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-black/[0.04] py-4 text-[16px] font-medium text-[#111b27]"
                >
                  {label}
                </a>
              ))}

              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center rounded-full bg-[#a77d36] px-6 py-4 text-sm font-semibold text-white"
              >
                Talk to an Advisor
              </a>

            </nav>

          </div>

        </div>

      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0d1721] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute -right-72 -top-72 h-[800px] w-[800px] rounded-full border border-white/[0.045]" />

        <div className="pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full border border-[#b58b47]/10" />

        <div className="pointer-events-none absolute bottom-[-300px] left-[-200px] h-[500px] w-[500px] rounded-full border border-white/[0.035]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-[#b99252]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c6a568] sm:text-xs">
                Industries
              </span>

            </div>

            <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
              Commercial insight
              <br />
              <span className="text-[#c6a568]">
                across industries.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-[16px] leading-8 text-white/50 sm:text-lg">
              Briano and Family works across a range of sectors, bringing
              commercial thinking, strategic perspective and practical
              advisory support to organisations pursuing growth and new
              opportunities.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <a
                href="#industries-list"
                className="inline-flex items-center justify-center rounded-full bg-[#a77d36] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8c682d]"
              >
                Explore Industries
                <span className="ml-3">↓</span>
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Discuss Your Industry
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Sector perspective
              </p>

              <div className="mt-6 h-px w-16 bg-[#a77d36]" />

            </div>

            <div>

              <h2 className="max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
                Every industry has its own commercial realities.
              </h2>

              <p className="mt-8 max-w-3xl text-[16px] leading-8 text-[#626d76]">
                A strong advisory approach starts with understanding the
                environment in which a business operates. Market conditions,
                regulation, competition, customers, supply chains and capital
                requirements can all influence the right strategic decision.
              </p>

              <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#626d76]">
                We therefore combine our core consulting capabilities with
                sector-aware thinking to help clients evaluate opportunities
                in context.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section
        id="industries-list"
        className="bg-[#f5f3ee] px-6 py-24 lg:px-8 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Areas of focus
            </p>

            <h2 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Industry knowledge meets commercial strategy.
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#68737c]">
              Our capabilities can be applied across multiple sectors,
              depending on the specific objectives and requirements of each
              engagement.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {industries.map((industry) => (

              <article
                key={industry.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-black/[0.055] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                {/* Decorative number */}

                <div className="absolute right-6 top-2 select-none text-[100px] font-bold leading-none tracking-[-0.08em] text-[#111b27]/[0.035]">
                  {industry.number}
                </div>

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
                      {industry.label}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm text-[#68737c] transition duration-300 group-hover:border-[#a77d36] group-hover:bg-[#a77d36] group-hover:text-white">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-8 max-w-sm text-[27px] font-semibold leading-tight tracking-[-0.03em]">
                    {industry.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#68737c]">
                    {industry.description}
                  </p>

                  <div className="mt-8 border-t border-black/[0.07] pt-6">

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#999fa4]">
                      Relevant capabilities
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {industry.areas.map((area) => (

                        <span
                          key={area}
                          className="rounded-full border border-black/[0.07] bg-[#f8f7f3] px-3 py-2 text-[11px] font-medium text-[#5d6871]"
                        >
                          {area}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CROSS INDUSTRY CAPABILITY
      ========================================================= */}

      <section className="bg-[#111b27] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Visual */}

            <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#172632]">

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Connecting lines */}

              <div className="absolute left-[25%] top-[35%] h-px w-[50%] rotate-[18deg] bg-[#c6a568]/30" />

              <div className="absolute left-[25%] top-[35%] h-px w-[50%] -rotate-[18deg] bg-[#c6a568]/20" />

              <div className="absolute left-[25%] top-[35%] h-[45%] w-px rotate-[20deg] bg-white/10" />

              <div className="absolute right-[25%] top-[35%] h-[45%] w-px -rotate-[20deg] bg-white/10" />

              {/* Nodes */}

              <div className="absolute left-[22%] top-[28%] h-5 w-5 rounded-full bg-[#c6a568] shadow-[0_0_35px_rgba(198,165,104,0.65)]" />

              <div className="absolute right-[22%] top-[28%] h-5 w-5 rounded-full bg-[#c6a568] shadow-[0_0_35px_rgba(198,165,104,0.65)]" />

              <div className="absolute bottom-[22%] left-[31%] h-5 w-5 rounded-full bg-[#c6a568] shadow-[0_0_35px_rgba(198,165,104,0.65)]" />

              <div className="absolute bottom-[22%] right-[31%] h-5 w-5 rounded-full bg-[#c6a568] shadow-[0_0_35px_rgba(198,165,104,0.65)]" />

              {/* Centre */}

              <div className="absolute left-1/2 top-[50%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c6a568]/30 bg-[#111b27]">

                <div className="text-center">

                  <div className="text-xl font-semibold">
                    B&F
                  </div>

                  <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#c6a568]">
                    Advisory
                  </div>

                </div>

              </div>

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c6a568]">
                  Connected thinking
                </p>

                <p className="mt-3 max-w-md text-xl font-semibold">
                  Business challenges rarely exist in isolation.
                </p>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#c6a568]">
                Cross-industry perspective
              </p>

              <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Different sectors.
                <br />
                Connected opportunities.
              </h2>

              <p className="mt-7 text-[16px] leading-8 text-white/45">
                Modern businesses often operate across traditional industry
                boundaries. A construction company may need international
                suppliers. A manufacturer may be seeking new markets. A
                technology business may need strategic partnerships.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-white/45">
                Our multidisciplinary approach allows us to look beyond a
                single sector and consider the broader commercial picture.
              </p>

              <div className="mt-10 space-y-3">

                {[
                  "Business development",
                  "Tender advisory",
                  "International trade",
                  "Financial consulting",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-5 border-t border-white/10 py-4"
                  >

                    <span className="text-[10px] font-bold text-[#c6a568]">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-white/65">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Our approach
            </p>

            <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              We start with the industry.
              <br />
              We finish with the opportunity.
            </h2>

          </div>

          <div className="mt-16 grid gap-0 border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">

            {approach.map((item, index) => (

              <article
                key={item.number}
                className={`border-b border-black/10 py-8 md:px-7 lg:border-b-0 lg:py-10 ${
                  index > 0 ? "lg:border-l" : ""
                }`}
              >

                <span className="text-[11px] font-bold tracking-[0.2em] text-[#a77d36]">
                  {item.number}
                </span>

                <h3 className="mt-10 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68737c]">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          MARKET EXPANSION
      ========================================================= */}

      <section className="bg-[#eae7de] px-6 py-24 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Beyond sectors
              </p>

              <h2 className="mt-6 max-w-4xl text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
                Looking for growth beyond your current market?
              </h2>

            </div>

            <div>

              <p className="text-sm leading-7 text-[#68737c]">
                Whether the objective is entering a new market, developing a
                partnership, pursuing a tender or evaluating a commercial
                opportunity, our team can help structure the thinking around
                the decision.
              </p>

              <a
                href="/services"
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#111b27]"
              >
                Explore our services
                <span className="ml-3 text-[#a77d36]">→</span>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#a77d36] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/65">
            Start a conversation
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <h2 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                Have an opportunity
                <br />
                in your industry?
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70">
                Tell us about your business, market or opportunity and let us
                explore the commercial possibilities together.
              </p>

            </div>

            <a
              href="mailto:info@brianofamily.com"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111b27] transition hover:bg-white/90"
            >
              Contact Briano and Family
              <span className="ml-3">↗</span>
            </a>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#080f16] px-6 py-14 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div className="lg:col-span-2">

              <div className="text-2xl font-bold tracking-[0.16em]">
                BRIANO
              </div>

              <div className="-mt-0.5 text-[8px] font-semibold tracking-[0.5em] text-[#c6a568]">
                AND FAMILY
              </div>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/38">
                Professional business advisory and consulting services across
                business development, tender advisory, international trade
                and financial consulting.
              </p>

              <p className="mt-5 text-xs text-white/30">
                Established 2019 • Nairobi, Kenya
              </p>

            </div>

            {/* Company */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Company
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/50">

                <a
                  href="/about"
                  className="block transition hover:text-white"
                >
                  About Us
                </a>

                <a
                  href="/services"
                  className="block transition hover:text-white"
                >
                  Services
                </a>

                <a
                  href="/industries"
                  className="block transition hover:text-white"
                >
                  Industries
                </a>

                <a
                  href="/#insights"
                  className="block transition hover:text-white"
                >
                  Insights
                </a>

              </div>

            </div>

            {/* Contact */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Contact
              </p>

              <div className="mt-5 space-y-4 text-sm text-white/50">

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

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/25 sm:flex-row">

            <p>
              © 2026 Briano and Family. All rights reserved.
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms &amp; Conditions
              </a>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}