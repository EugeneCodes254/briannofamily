"use client";

import { useState } from "react";
import Header from "../components/Header";

const categories = [
  "All",
  "Business Development",
  "International Trade",
  "Tender Advisory",
  "Financial Consulting",
];

const insights = [
  {
    category: "Business Development",
    number: "01",
    date: "Business Strategy",
    title: "Identifying opportunities for sustainable business growth",
    description:
      "Growth rarely happens by accident. Businesses need a clear understanding of their markets, customers, capabilities and competitive environment before deciding where to invest their attention.",
    featured: true,
  },
  {
    category: "International Trade",
    number: "02",
    date: "Market Expansion",
    title: "Exploring opportunities beyond traditional markets",
    description:
      "International expansion can create significant opportunities when businesses approach new markets with the right research, partnerships and commercial strategy.",
  },
  {
    category: "Tender Advisory",
    number: "03",
    date: "Procurement",
    title: "Preparing organisations for competitive tender opportunities",
    description:
      "A strong tender response begins long before submission. Understanding requirements, assessing fit and developing a disciplined bid strategy can make a significant difference.",
  },
  {
    category: "Financial Consulting",
    number: "04",
    date: "Financial Strategy",
    title: "Using financial insight to make better commercial decisions",
    description:
      "Financial information becomes more valuable when it is connected to business strategy, investment decisions, operational priorities and long-term objectives.",
  },
  {
    category: "Business Development",
    number: "05",
    date: "Commercial Strategy",
    title: "Turning business relationships into strategic opportunities",
    description:
      "Strategic relationships can open doors to new markets, capabilities and customers. The key is identifying partnerships that create genuine commercial value.",
  },
  {
    category: "International Trade",
    number: "06",
    date: "Market Intelligence",
    title: "Why market intelligence matters before entering a new market",
    description:
      "Before committing resources to a new market, organisations should understand demand, competition, regulations, commercial risks and potential routes to market.",
  },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter((item) => item.category === activeCategory);

  const featuredInsight = insights[0];

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111b27]">

      {/* =========================================================
          SHARED HEADER
      ========================================================= */}

      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0d1721] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute -right-64 -top-64 h-[720px] w-[720px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute -right-36 -top-36 h-[470px] w-[470px] rounded-full border border-[#c6a568]/10" />

        <div className="pointer-events-none absolute bottom-[-260px] left-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.035]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-[#c6a568]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c6a568] sm:text-xs">
                Briano & Family Insights
              </span>

            </div>

            <h1 className="text-[52px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">

              Ideas that create

              <br />

              <span className="text-[#c6a568]">
                better decisions.
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-[16px] leading-8 text-white/50 sm:text-lg">
              Perspectives, analysis and practical thinking on business
              development, international trade, tender opportunities,
              financial strategy and the changing commercial environment.
            </p>

          </div>

          {/* Hero bottom */}

          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end">

            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Knowledge centre
              </p>

              <p className="mt-2 text-sm text-white/60">
                Practical perspectives for businesses and organisations.
              </p>

            </div>

            <div className="flex items-center gap-3 text-xs text-white/40">

              <span className="h-2 w-2 rounded-full bg-[#c6a568]" />

              Nairobi • Kenya

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURED INSIGHT
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Featured perspective
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                From the Briano desk
              </h2>

            </div>

            <span className="hidden text-xs font-medium text-[#8a9298] sm:block">
              01 / Featured
            </span>

          </div>

          <article className="group relative overflow-hidden rounded-[2rem] bg-[#111b27] text-white">

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

              {/* Visual */}

              <div className="relative min-h-[420px] overflow-hidden bg-[#182532]">

                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                <div className="absolute -right-24 -top-24 h-[430px] w-[430px] rounded-full border border-[#c6a568]/20" />

                <div className="absolute right-8 top-12 h-[280px] w-[280px] rounded-full border border-white/[0.07]" />

                <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-[#0a1118] to-transparent" />

                <div className="absolute left-10 top-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a568]/30">

                    <span className="h-3 w-3 rounded-full bg-[#c6a568] shadow-[0_0_25px_rgba(198,165,104,.6)]" />

                  </div>

                </div>

                <div className="absolute bottom-10 left-10">

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c6a568]">
                    Strategic Perspective
                  </p>

                  <p className="mt-3 text-2xl font-semibold">
                    Opportunity
                    <br />
                    requires perspective.
                  </p>

                </div>

              </div>

              {/* Content */}

              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">

                <div>

                  <div className="flex items-center justify-between">

                    <span className="rounded-full border border-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      {featuredInsight.category}
                    </span>

                    <span className="text-xs text-white/25">
                      {featuredInsight.number}
                    </span>

                  </div>

                  <h3 className="mt-10 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                    {featuredInsight.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-7 text-white/45">
                    {featuredInsight.description}
                  </p>

                </div>

                <div className="mt-12">

                  <a
                    href="#insight-library"
                    className="inline-flex items-center rounded-full bg-[#a77d36] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8f6a30]"
                  >
                    Explore the insight
                    <span className="ml-3">↗</span>
                  </a>

                </div>

              </div>

            </div>

          </article>

        </div>

      </section>

      {/* =========================================================
          CATEGORY FILTER
      ========================================================= */}

      <section
        id="insight-library"
        className="bg-[#f5f3ee] px-6 py-24 lg:px-8 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Insight library
              </p>

              <h2 className="mt-5 text-[40px] font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl">
                Perspectives worth exploring.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#68737c]">
              Explore our perspectives across the areas where we advise
              businesses and organisations.
            </p>

          </div>

          {/* Filters */}

          <div className="mt-12 flex gap-2 overflow-x-auto pb-2">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "border-[#111b27] bg-[#111b27] text-white"
                    : "border-black/10 bg-white text-[#56616b] hover:border-black/20 hover:text-[#111b27]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredInsights.map((insight) => (

              <article
                key={insight.number}
                className="group flex min-h-[390px] flex-col rounded-[1.5rem] border border-black/[0.055] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(17,27,39,.08)] sm:p-9"
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a77d36]">
                    {insight.category}
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#a0a6aa]">
                    {insight.number}
                  </span>

                </div>

                <div className="mt-14">

                  <div className="mb-5 h-px w-10 bg-[#a77d36] transition-all duration-300 group-hover:w-20" />

                  <h3 className="text-[23px] font-semibold leading-tight tracking-[-0.025em]">
                    {insight.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#68737c]">
                    {insight.description}
                  </p>

                </div>

                <div className="mt-auto pt-10">

                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-[#111b27]"
                  >
                    Explore perspective

                    <span className="ml-3 text-[#a77d36] transition group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          KNOWLEDGE STATEMENT
      ========================================================= */}

      <section className="bg-[#eae7de] px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Our perspective
              </p>

              <div className="mt-6 h-px w-16 bg-[#a77d36]" />

            </div>

            <div>

              <h2 className="max-w-5xl text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[62px]">
                Informed decisions begin with better questions.
              </h2>

              <p className="mt-8 max-w-3xl text-[16px] leading-8 text-[#657079]">
                The business environment is constantly changing. Markets
                evolve, competition shifts and new opportunities emerge.
                Effective decision-making therefore requires more than
                information — it requires context, analysis and commercial
                judgement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOUR AREAS
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Areas of expertise
            </p>

            <h2 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Thinking across the commercial landscape.
            </h2>

          </div>

          <div className="mt-16 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Business Development",
                text: "Growth, markets, relationships and commercial opportunities.",
              },
              {
                number: "02",
                title: "Tender Advisory",
                text: "Procurement opportunities, bid strategy and tender preparation.",
              },
              {
                number: "03",
                title: "International Trade",
                text: "Markets, partnerships, sourcing and cross-border opportunities.",
              },
              {
                number: "04",
                title: "Financial Consulting",
                text: "Financial insight, planning, modelling and decision support.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="border-b border-black/10 p-7 sm:border-r lg:border-r lg:p-8"
              >

                <span className="text-xs font-bold text-[#a77d36]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68737c]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#a77d36] px-6 py-24 text-white lg:px-8 lg:py-32"
      >

        <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/60">
            Continue the conversation
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <h2 className="max-w-4xl text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
                Have an opportunity
                <br />
                worth exploring?
              </h2>

              <p className="mt-7 max-w-2xl text-[16px] leading-7 text-white/65">
                If you would like to discuss an opportunity, challenge or
                strategic question, our team would be pleased to hear from
                you.
              </p>

            </div>

            <div>

              <a
                href="mailto:info@brianofamily.com"
                className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111b27] transition hover:-translate-y-0.5 hover:bg-[#f5f3ee]"
              >
                Talk to an Advisor
                <span className="ml-3">↗</span>
              </a>

            </div>

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

              <a href="/" className="inline-block">

                <div className="text-2xl font-bold tracking-[0.16em]">
                  BRIANO
                </div>

                <div className="-mt-0.5 text-[8px] font-semibold tracking-[0.5em] text-[#c6a568]">
                  AND FAMILY
                </div>

              </a>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/35">
                Professional business advisory and consulting services across
                business development, tender advisory, international trade
                and financial consulting.
              </p>

              <p className="mt-5 text-xs text-white/25">
                Established 2019 • Nairobi, Kenya
              </p>

            </div>

            {/* Company */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                Company
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/45">

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
                  href="/insights"
                  className="block transition hover:text-white"
                >
                  Insights
                </a>

                <a
                  href="/#contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </a>

              </div>

            </div>

            {/* Contact */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                Contact
              </p>

              <div className="mt-5 space-y-4 text-sm text-white/45">

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
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
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