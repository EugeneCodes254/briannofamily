"use client";

import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/#industries"],
  ["Insights", "/#insights"],
  ["Contact", "/#contact"],
];

const services = [
  {
    number: "01",
    title: "Business Development",
    shortTitle: "Growth & Development",
    description:
      "Helping organisations identify opportunities, strengthen their market position and develop practical strategies for sustainable commercial growth.",
    detail:
      "Our business development advisory focuses on understanding where growth can come from and how an organisation can position itself to capture it. We combine commercial thinking with practical market considerations to help clients move from opportunity identification to action.",
    capabilities: [
      "Business growth strategy",
      "Market development",
      "Opportunity identification",
      "Strategic partnerships",
      "Commercial strategy",
      "Market research",
    ],
  },
  {
    number: "02",
    title: "Tender Advisory",
    shortTitle: "Tenders & Procurement",
    description:
      "Providing structured advisory support to businesses pursuing tenders, procurement opportunities and competitive bids.",
    detail:
      "Tender opportunities can be complex, competitive and highly process-driven. We help organisations assess opportunities, understand requirements and prepare strategically before committing resources to a bid.",
    capabilities: [
      "Tender opportunity identification",
      "Bid strategy",
      "Tender assessment",
      "Documentation support",
      "Compliance review",
      "Submission preparation",
    ],
  },
  {
    number: "03",
    title: "International Trade",
    shortTitle: "Markets & Trade",
    description:
      "Supporting organisations exploring new markets, cross-border opportunities, international partnerships and commercial expansion.",
    detail:
      "International expansion requires more than identifying a market. We help clients consider market conditions, commercial opportunities, potential relationships and the practical requirements involved in pursuing cross-border business.",
    capabilities: [
      "Market entry strategy",
      "International opportunity assessment",
      "Trade research",
      "Commercial partnerships",
      "Sourcing opportunities",
      "Market intelligence",
    ],
  },
  {
    number: "04",
    title: "Financial Consulting",
    shortTitle: "Financial Strategy",
    description:
      "Providing financial and commercial insight to support planning, evaluation and informed business decision-making.",
    detail:
      "Sound financial thinking is central to effective business decisions. Our consulting approach helps organisations examine financial information, evaluate opportunities and develop clearer commercial plans.",
    capabilities: [
      "Financial analysis",
      "Business planning",
      "Financial modelling",
      "Investment analysis",
      "Commercial evaluation",
      "Decision support",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your organisation, objectives, market environment and the opportunity or challenge you are addressing.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We examine the relevant commercial factors, available options, risks and potential routes forward.",
  },
  {
    number: "03",
    title: "Strategise",
    description:
      "We develop a structured approach designed around your objectives and the realities of your operating environment.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We help translate strategy into practical next steps and support informed action.",
  },
];

export default function ServicesPage() {
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

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

              {navigation.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className={`text-[13px] font-medium transition-colors duration-200 ${
                    label === "Services"
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

            {/* Mobile Menu */}

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

          {/* Mobile Navigation */}

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
          PAGE HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0d1721] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute -right-72 -top-72 h-[800px] w-[800px] rounded-full border border-white/[0.045]" />

        <div className="pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full border border-[#b58b47]/10" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-[#b99252]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c6a568] sm:text-xs">
                Our services
              </span>

            </div>

            <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
              Expertise for
              <br />
              <span className="text-[#c6a568]">
                ambitious organisations.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-[16px] leading-8 text-white/50 sm:text-lg">
              From business growth and tender opportunities to international
              markets and financial decisions, Briano and Family provides
              focused advisory support built around your commercial
              objectives.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <a
                href="#service-list"
                className="inline-flex items-center justify-center rounded-full bg-[#a77d36] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8c682d]"
              >
                Explore Our Expertise
                <span className="ml-3">↓</span>
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Discuss an Opportunity
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              What we do
            </p>

            <div className="mt-6 h-px w-16 bg-[#a77d36]" />

          </div>

          <div>

            <h2 className="max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
              Turning commercial questions into clearer strategic decisions.
            </h2>

            <p className="mt-8 max-w-3xl text-[16px] leading-8 text-[#626d76]">
              Every business opportunity comes with questions. Is the market
              right? Is the opportunity worth pursuing? How should the
              organisation position itself? What financial considerations
              need to be understood?
            </p>

            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#626d76]">
              Our role is to help clients examine those questions
              systematically and develop practical approaches for moving
              forward.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICE LIST
      ========================================================= */}

      <section
        id="service-list"
        className="bg-[#f5f3ee] px-6 py-24 lg:px-8 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Core capabilities
            </p>

            <h2 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Four areas of focused expertise.
            </h2>

          </div>

          <div className="space-y-5">

            {services.map((service) => (

              <article
                key={service.number}
                className="group overflow-hidden rounded-[1.5rem] border border-black/[0.055] bg-white"
              >

                <div className="grid lg:grid-cols-[0.32fr_1fr]">

                  {/* Number */}

                  <div className="relative min-h-[180px] overflow-hidden bg-[#111b27] p-8 text-white sm:p-10 lg:min-h-full">

                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#c6a568]/10" />

                    <div className="absolute bottom-8 left-8 sm:left-10">

                      <p className="text-[11px] font-bold tracking-[0.25em] text-[#c6a568]">
                        SERVICE
                      </p>

                      <p className="mt-2 text-5xl font-semibold tracking-[-0.04em]">
                        {service.number}
                      </p>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-8 sm:p-10 lg:p-12">

                    <div className="flex flex-col justify-between gap-8 md:flex-row">

                      <div className="max-w-2xl">

                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a77d36]">
                          {service.shortTitle}
                        </p>

                        <h3 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] sm:text-4xl">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-[15px] leading-7 text-[#68737c]">
                          {service.description}
                        </p>

                        <p className="mt-5 text-[14px] leading-7 text-[#68737c]">
                          {service.detail}
                        </p>

                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg transition duration-300 group-hover:border-[#a77d36] group-hover:bg-[#a77d36] group-hover:text-white">
                        ↗
                      </div>

                    </div>

                    <div className="mt-10 border-t border-black/[0.07] pt-8">

                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#92999f]">
                        Areas of support
                      </p>

                      <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                        {service.capabilities.map((capability) => (

                          <div
                            key={capability}
                            className="flex items-center gap-2 text-xs font-medium text-[#4f5a64]"
                          >

                            <span className="h-1.5 w-1.5 rounded-full bg-[#a77d36]" />

                            {capability}

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          BUSINESS DEVELOPMENT FEATURE
      ========================================================= */}

      <section className="bg-[#0d1721] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Visual */}

            <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#172632]">

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "55px 55px",
                }}
              />

              <div className="absolute left-[18%] top-[20%] h-40 w-40 rounded-full border border-[#c6a568]/20" />

              <div className="absolute right-[15%] top-[34%] h-56 w-56 rounded-full border border-white/10" />

              <div className="absolute bottom-[15%] left-[25%] h-28 w-28 rounded-full border border-[#c6a568]/30" />

              <div className="absolute left-[30%] top-[38%] h-3 w-3 rounded-full bg-[#c6a568] shadow-[0_0_30px_rgba(198,165,104,0.6)]" />

              <div className="absolute right-[25%] top-[55%] h-3 w-3 rounded-full bg-[#c6a568] shadow-[0_0_30px_rgba(198,165,104,0.6)]" />

              <div className="absolute bottom-10 left-10 right-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c6a568]">
                  Strategic growth
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  Opportunity becomes valuable when strategy meets execution.
                </p>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#c6a568]">
                Business development
              </p>

              <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Finding the next opportunity.
              </h2>

              <p className="mt-7 text-[16px] leading-8 text-white/45">
                Growth rarely happens by accident. It requires an
                understanding of markets, customers, relationships and the
                organisation&apos;s ability to execute.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-white/45">
                Our business development advisory helps organisations examine
                potential opportunities and build practical approaches for
                pursuing them.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">

                {[
                  "Growth strategy",
                  "Market development",
                  "Strategic partnerships",
                  "Opportunity identification",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/10 py-4"
                  >

                    <span className="h-1.5 w-1.5 rounded-full bg-[#c6a568]" />

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
          PROCESS
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Our process
              </p>

              <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                From question
                <br />
                to action.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#68737c]">
                A structured approach helps ensure that advisory work remains
                focused on the decisions that matter.
              </p>

            </div>

            <div className="border-t border-black/10">

              {process.map((step) => (

                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[80px_1fr]"
                >

                  <span className="text-sm font-bold text-[#a77d36]">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#68737c]">
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}

      <section className="bg-[#eae7de] px-6 py-24 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Who we work with
            </p>

            <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Supporting organisations at different stages of opportunity.
            </h2>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Established Businesses",
                text: "Organisations seeking new markets, partnerships or growth opportunities.",
              },
              {
                title: "Growing Enterprises",
                text: "Businesses looking to develop stronger commercial strategies and capabilities.",
              },
              {
                title: "Entrepreneurs",
                text: "Founders and business owners evaluating opportunities and strategic decisions.",
              },
              {
                title: "Organisations",
                text: "Institutions and organisations requiring focused commercial advisory support.",
              },
            ].map((item, index) => (

              <article
                key={item.title}
                className="rounded-[1.5rem] bg-white p-7"
              >

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a77d36]">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68737c]">
                  {item.text}
                </p>

              </article>

            ))}

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
                Have a business opportunity
                <br />
                worth exploring?
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70">
                Tell us what you are working on and let&apos;s discuss how
                professional advisory support could help.
              </p>

            </div>

            <a
              href="mailto:info@brianofamily.com"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111b27] transition hover:bg-white/90"
            >
              Contact Us
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
                  href="/#industries"
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
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}