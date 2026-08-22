"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

const capabilities = [
  {
    number: "01",
    title: "Business Development",
    description:
      "Identifying growth opportunities, strengthening commercial positioning and developing strategic relationships.",
  },
  {
    number: "02",
    title: "Tender Advisory",
    description:
      "Helping organisations navigate procurement opportunities, bid strategy, documentation and submission requirements.",
  },
  {
    number: "03",
    title: "International Trade",
    description:
      "Supporting market exploration, international partnerships, sourcing and cross-border commercial opportunities.",
  },
  {
    number: "04",
    title: "Financial Consulting",
    description:
      "Providing financial and commercial insight for planning, evaluation, modelling and strategic decision-making.",
  },
];

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We believe professional advisory begins with honesty, accountability and a clear understanding of our client's interests.",
  },
  {
    number: "02",
    title: "Strategic Thinking",
    description:
      "We look beyond immediate challenges to understand the wider commercial environment and identify meaningful opportunities.",
  },
  {
    number: "03",
    title: "Practicality",
    description:
      "Our recommendations are designed to be useful, understandable and capable of being translated into practical action.",
  },
  {
    number: "04",
    title: "Professionalism",
    description:
      "We approach every engagement with discipline, discretion and respect for the objectives and circumstances of our clients.",
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-[#111b27]">

      {/* =========================================================
          TOP BAR
      ========================================================= */}

      <div className="bg-[#081018] px-6 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-[10px]">
        Strategic Advisory
        <span className="mx-3 text-[#b99455]">•</span>
        Business Development
        <span className="mx-3 text-[#b99455]">•</span>
        International Trade
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f5f3ee]/90 backdrop-blur-2xl">

        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

          <div className="flex h-[82px] items-center justify-between">

            {/* LOGO */}

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group shrink-0"
            >
              <div className="text-[21px] font-bold tracking-[0.18em] text-[#111b27] transition group-hover:tracking-[0.21em]">
                BRIANO
              </div>

              <div className="-mt-0.5 pl-[1px] text-[8px] font-semibold tracking-[0.55em] text-[#a77d36]">
                AND FAMILY
              </div>
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">

              {navigation.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`relative text-[12px] font-medium transition duration-300 ${
                    label === "About Us"
                      ? "text-[#111b27]"
                      : "text-[#68727a] hover:text-[#111b27]"
                  }`}
                >
                  {label}

                  {label === "About Us" && (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-[#a77d36]" />
                  )}
                </Link>
              ))}

            </nav>

            {/* CTA */}

            <Link
              href="/contact"
              className="hidden rounded-full bg-[#111b27] px-6 py-3.5 text-[12px] font-semibold text-white shadow-[0_8px_25px_rgba(17,27,39,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a77d36] lg:inline-flex"
            >
              Talk to an Advisor
              <span className="ml-3 text-[#c6a568]">↗</span>
            </Link>

            {/* MOBILE */}

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
            >
              <span className="flex w-5 flex-col gap-1.5">

                <span
                  className={`h-[1.5px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#111b27] transition duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />

              </span>
            </button>

          </div>

          {/* MOBILE MENU */}

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
                  className={`block border-b border-black/[0.05] py-4 text-[15px] font-medium ${
                    label === "About Us"
                      ? "text-[#a77d36]"
                      : "text-[#111b27]"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center rounded-full bg-[#111b27] px-6 py-4 text-sm font-semibold text-white"
              >
                Talk to an Advisor
                <span className="ml-3 text-[#c6a568]">↗</span>
              </Link>

            </nav>

          </div>

        </div>

      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#0b141d] text-white">

        {/* Decorative geometry */}

        <div className="pointer-events-none absolute -right-[360px] -top-[360px] h-[820px] w-[820px] rounded-full border border-white/[0.045]" />

        <div className="pointer-events-none absolute -right-[230px] -top-[230px] h-[560px] w-[560px] rounded-full border border-[#c6a568]/10" />

        <div className="pointer-events-none absolute -bottom-[300px] -left-[200px] h-[600px] w-[600px] rounded-full border border-white/[0.025]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">

          {/* LEFT */}

          <div>

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-14 bg-[#b99252]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c6a568]">
                About Briano and Family
              </span>

            </div>

            <h1 className="max-w-5xl text-[50px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px]">
              We bring
              <br />
              <span className="text-[#c6a568]">
                perspective
              </span>
              <br />
              to opportunity.
            </h1>

            <p className="mt-9 max-w-2xl text-[16px] leading-8 text-white/50 sm:text-[17px]">
              Briano and Family is a professional business advisory and
              consulting firm helping organisations understand opportunities,
              navigate complexity and make commercially informed decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <Link
                href="/services"
                className="rounded-full bg-[#a77d36] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd9452]"
              >
                Explore our expertise
                <span className="ml-3">↗</span>
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/40"
              >
                Start a conversation
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative hidden lg:block">

            <div className="relative mx-auto aspect-[0.82] max-w-[420px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#16232f] shadow-[0_40px_100px_rgba(0,0,0,0.35)]">

              <div className="absolute inset-0 bg-gradient-to-br from-[#263a4b] via-[#172631] to-[#080e14]" />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* circles */}

              <div className="absolute -right-24 top-16 h-[370px] w-[370px] rounded-full border border-[#c6a568]/20" />

              <div className="absolute -right-5 top-36 h-[250px] w-[250px] rounded-full border border-white/10" />

              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#080e14] to-transparent" />

              {/* center symbol */}

              <div className="absolute left-10 top-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#c6a568]/30">

                <div className="h-3 w-3 rounded-full bg-[#c6a568] shadow-[0_0_35px_rgba(198,165,104,.65)]" />

              </div>

              {/* text */}

              <div className="absolute bottom-10 left-10 right-10">

                <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#c6a568]">
                  ESTABLISHED 2019
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight xl:text-4xl">
                  Strategic
                  <br />
                  perspective.
                </h2>

                <div className="my-7 h-px bg-white/10" />

                <p className="text-sm leading-6 text-white/40">
                  Business advisory built around opportunity, commercial
                  insight and practical action.
                </p>

              </div>

            </div>

            {/* floating card */}

            <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-[#15232e] px-6 py-5 shadow-2xl">

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Based in
              </p>

              <p className="mt-1 text-sm font-medium">
                Nairobi, Kenya
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                Our story
              </p>

              <div className="mt-6 h-px w-16 bg-[#a77d36]" />

              <p className="mt-8 max-w-xs text-sm leading-7 text-[#7a838a]">
                Established in 2019 with a focus on practical, commercially
                relevant advisory.
              </p>

            </div>

            <div>

              <h2 className="max-w-5xl text-[39px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[62px]">
                Business decisions become stronger when opportunity is viewed
                from the right perspective.
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-2">

                <p className="text-[16px] leading-8 text-[#68737c]">
                  Briano and Family was established in 2019 with a vision of
                  providing practical and commercially focused advisory
                  support to businesses and organisations.
                </p>

                <p className="text-[16px] leading-8 text-[#68737c]">
                  Our work spans business development, tender advisory,
                  international trade and financial consulting, giving clients
                  access to focused expertise across important areas of
                  commercial decision-making.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f3ee] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                Our journey
              </p>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                Built around
                <br />
                <span className="text-[#a77d36]">possibility.</span>
              </h2>

            </div>

            <div className="relative border-l border-black/10 pl-8 sm:pl-12">

              <div className="relative pb-14">

                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-[3px] border-[#f5f3ee] bg-[#a77d36] sm:-left-[57px]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
                  2019
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Briano and Family is established
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#68737c]">
                  The firm begins with a focus on supporting businesses and
                  organisations through practical commercial advisory.
                </p>

              </div>

              <div className="relative pb-14">

                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-[3px] border-[#f5f3ee] bg-[#a77d36] sm:-left-[57px]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
                  Growth
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Expanding across complementary disciplines
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#68737c]">
                  Business development, tender advisory, international trade
                  and financial consulting form the firm's core capabilities.
                </p>

              </div>

              <div className="relative">

                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-[3px] border-[#f5f3ee] bg-[#a77d36] sm:-left-[57px]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a77d36]">
                  Today
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Helping clients move from possibility to action
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#68737c]">
                  We continue to provide focused advisory designed around
                  opportunity, informed decisions and sustainable commercial
                  progress.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BIG STATEMENT
      ========================================================= */}

      <section className="bg-[#111b27] px-6 py-28 text-white lg:px-10 lg:py-36">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c6a568]">
                Our philosophy
              </p>

              <h2 className="mt-7 max-w-6xl text-[44px] font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl lg:text-[76px]">
                Good advice should create
                <span className="text-[#c6a568]"> clarity,</span>
                <br />
                not complexity.
              </h2>

            </div>

            <div className="border-l border-white/15 pl-7 lg:mb-2">

              <p className="text-[15px] leading-8 text-white/45">
                Our role is to help clients understand their options,
                evaluate opportunities and move forward with greater
                confidence.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                Our capabilities
              </p>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                Focused expertise.
                <br />
                <span className="text-[#a77d36]">
                  Practical outcomes.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[15px] leading-7 text-[#68737c]">
                Four complementary areas allow us to address important aspects
                of growth, opportunity and commercial decision-making.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#111b27]"
              >
                Explore our services
                <span className="ml-3 text-[#a77d36]">→</span>
              </Link>

            </div>

            <div className="border-t border-black/10">

              {capabilities.map((item) => (

                <Link
                  href="/services"
                  key={item.number}
                  className="group grid gap-6 border-b border-black/10 py-9 transition duration-300 hover:px-4 sm:grid-cols-[80px_1fr_40px]"
                >

                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#a77d36]">
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-[23px] font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#68737c]">
                      {item.description}
                    </p>

                  </div>

                  <span className="text-xl text-black/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#a77d36]">
                    ↗
                  </span>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="bg-[#eae7de] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
              What guides us
            </p>

            <h2 className="mt-6 text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Principles that shape every engagement.
            </h2>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">

            {values.map((value) => (

              <article
                key={value.number}
                className="group relative overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-[0_15px_50px_rgba(17,27,39,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(17,27,39,0.09)] sm:p-10"
              >

                <div className="absolute right-8 top-8 text-[52px] font-semibold tracking-[-0.08em] text-black/[0.035] transition duration-500 group-hover:text-[#a77d36]/10">
                  {value.number}
                </div>

                <span className="relative text-[11px] font-bold tracking-[0.2em] text-[#a77d36]">
                  {value.number}
                </span>

                <h3 className="relative mt-14 text-2xl font-semibold tracking-[-0.025em]">
                  {value.title}
                </h3>

                <p className="relative mt-4 max-w-lg text-sm leading-7 text-[#68737c]">
                  {value.description}
                </p>

                <div className="mt-8 h-px w-12 bg-[#a77d36] transition-all duration-500 group-hover:w-24" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77d36]">
                How we work
              </p>

              <h2 className="mt-6 text-[43px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                Understand.
                <br />
                Strategise.
                <br />
                <span className="text-[#a77d36]">
                  Execute.
                </span>
              </h2>

            </div>

            <div className="border-t border-black/10">

              {[
                [
                  "01",
                  "Understand",
                  "We begin by understanding your objectives, circumstances, market environment and the opportunity or challenge you are addressing.",
                ],
                [
                  "02",
                  "Strategise",
                  "We assess available options and develop a structured approach aligned with your objectives and commercial priorities.",
                ],
                [
                  "03",
                  "Execute",
                  "We help turn strategy into practical next steps, giving clients a clearer direction for moving forward.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="grid gap-5 border-b border-black/10 py-9 sm:grid-cols-[70px_1fr]"
                >

                  <span className="text-sm font-bold text-[#a77d36]">
                    {number}
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold">
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
          NAIROBI
      ========================================================= */}

      <section className="bg-[#f5f3ee] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1440px]">

          <div className="overflow-hidden rounded-[2rem] bg-[#0d1721] text-white shadow-[0_30px_90px_rgba(17,27,39,0.12)]">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              <div className="p-9 sm:p-12 lg:p-16">

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c6a568]">
                  Our base
                </p>

                <h2 className="mt-6 text-[40px] font-semibold tracking-[-0.04em] sm:text-5xl">
                  Nairobi,
                  <br />
                  Kenya.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                  Based in Karen, Nairobi, Briano and Family provides
                  professional advisory services to businesses and
                  organisations navigating commercial opportunities.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">

                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Office
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    316 Ndovu Close
                    <br />
                    Karen, Nairobi
                    <br />
                    Kenya
                  </p>

                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-[#a77d36] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd9452]"
                >
                  Contact us
                  <span className="ml-3">↗</span>
                </Link>

              </div>

              {/* VISUAL */}

              <div className="relative min-h-[430px] overflow-hidden bg-[#15232e]">

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
                    backgroundSize: "65px 65px",
                  }}
                />

                <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-[#c6a568]/15" />

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">

                  <div className="absolute h-52 w-52 animate-pulse rounded-full border border-[#c6a568]/10" />

                  <div className="absolute h-32 w-32 rounded-full border border-[#c6a568]/20" />

                  <div className="h-5 w-5 rounded-full bg-[#c6a568] shadow-[0_0_45px_rgba(198,165,104,.75)]" />

                </div>

                <div className="absolute bottom-8 left-8">

                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                    BRIANO AND FAMILY
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Karen · Nairobi
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#a77d36] px-6 py-24 text-white lg:px-10 lg:py-32">

        <div className="pointer-events-none absolute -right-56 -top-56 h-[650px] w-[650px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-[1440px]">

          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">
            Start a conversation
          </p>

          <div className="mt-7 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <h2 className="max-w-5xl text-[48px] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[78px]">
              Let&apos;s explore
              <br />
              what&apos;s possible.
            </h2>

            <div className="lg:min-w-[280px]">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                General enquiries
              </p>

              <a
                href="mailto:info@brianofamily.com"
                className="mt-3 block text-lg font-semibold underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
              >
                info@brianofamily.com
              </a>

              <a
                href="tel:+254742840154"
                className="mt-5 block text-lg font-semibold"
              >
                +254 742 840 154
              </a>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111b27] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f3ee]"
              >
                Contact Briano and Family
                <span className="ml-3">↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#070e14] px-6 py-16 text-white lg:px-10">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">

            {/* BRAND */}

            <div>

              <Link href="/" className="inline-block">

                <div className="text-2xl font-bold tracking-[0.18em]">
                  BRIANO
                </div>

                <div className="-mt-0.5 text-[8px] font-semibold tracking-[0.55em] text-[#c6a568]">
                  AND FAMILY
                </div>

              </Link>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/35">
                Professional business advisory and consulting services across
                business development, tender advisory, international trade
                and financial consulting.
              </p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
                Established 2019 · Nairobi, Kenya
              </p>

            </div>

            {/* COMPANY */}

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Company
              </p>

              <div className="mt-6 space-y-4 text-sm text-white/45">

                <Link href="/about" className="block hover:text-white">
                  About Us
                </Link>

                <Link href="/services" className="block hover:text-white">
                  Services
                </Link>

                <Link href="/industries" className="block hover:text-white">
                  Industries
                </Link>

                <Link href="/insights" className="block hover:text-white">
                  Insights
                </Link>

                <Link href="/contact" className="block hover:text-white">
                  Contact
                </Link>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-sm text-white/45">

                <a
                  href="mailto:info@brianofamily.com"
                  className="block hover:text-white"
                >
                  info@brianofamily.com
                </a>

                <a
                  href="tel:+254742840154"
                  className="block hover:text-white"
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

          {/* BOTTOM */}

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 text-[10px] text-white/25 sm:flex-row">

            <p>
              © 2026 Briano and Family. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6">

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
                Terms &amp; Conditions
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}