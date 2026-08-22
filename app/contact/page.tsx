"use client";

import { FormEvent, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/#insights"],
  ["Contact", "/contact"],
];

const services = [
  "Business Development",
  "Tender Advisory",
  "International Trade Consulting",
  "Financial Consulting",
  "Strategic Advisory",
  "Other / General Enquiry",
];

const faqs = [
  {
    question: "What type of organisations do you work with?",
    answer:
      "We support businesses, entrepreneurs, organisations and other commercial entities seeking professional guidance around growth, tenders, international trade, financial matters and strategic opportunities.",
  },
  {
    question: "Can you help with international business opportunities?",
    answer:
      "Yes. Our international trade consulting can support organisations assessing markets, partnerships, sourcing opportunities and potential routes for international expansion.",
  },
  {
    question: "Do you assist with tender opportunities?",
    answer:
      "Yes. We provide tender advisory support including opportunity assessment, bid strategy, documentation support and preparation for competitive procurement processes.",
  },
  {
    question: "How do I start a conversation?",
    answer:
      "Complete the enquiry form on this page, email info@brianofamily.com, or call +254 742 840 154. We can then understand your requirements and determine the appropriate next step.",
  },
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
                    label === "Contact"
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
              href="mailto:info@brianofamily.com"
              className="hidden rounded-full bg-[#a77d36] px-6 py-3 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#896529] lg:inline-flex"
            >
              Email Us
            </a>

            {/* Mobile menu */}

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
                href="mailto:info@brianofamily.com"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center rounded-full bg-[#a77d36] px-6 py-4 text-sm font-semibold text-white"
              >
                Email Us
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

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-[#b99252]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c6a568] sm:text-xs">
                Contact Briano and Family
              </span>

            </div>

            <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
              Let&apos;s discuss
              <br />
              <span className="text-[#c6a568]">
                your next opportunity.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/50 sm:text-lg">
              Whether you are exploring a new market, pursuing a tender,
              developing your business or evaluating a financial opportunity,
              we would be pleased to hear from you.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT INFORMATION + FORM
      ========================================================= */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}

          <aside className="rounded-[1.75rem] bg-[#111b27] p-8 text-white sm:p-10 lg:p-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c6a568]">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
              Speak with our team.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45">
              Contact us directly or send an enquiry using the form. We will
              review your requirements and respond with the appropriate next
              steps.
            </p>

            {/* Email */}

            <div className="mt-10 border-t border-white/10 pt-7">

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Email
              </p>

              <a
                href="mailto:info@brianofamily.com"
                className="mt-3 block text-sm font-medium text-white transition hover:text-[#c6a568]"
              >
                info@brianofamily.com
              </a>

            </div>

            {/* Phone */}

            <div className="mt-7 border-t border-white/10 pt-7">

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Phone
              </p>

              <a
                href="tel:+254742840154"
                className="mt-3 block text-sm font-medium text-white transition hover:text-[#c6a568]"
              >
                +254 742 840 154
              </a>

            </div>

            {/* Location */}

            <div className="mt-7 border-t border-white/10 pt-7">

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Office
              </p>

              <p className="mt-3 text-sm leading-6 text-white/65">
                316 Ndovu Close
                <br />
                Karen, Nairobi
                <br />
                Kenya
              </p>

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/254742840154"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#c6a568]/40 hover:bg-white/[0.07]"
            >

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c6a568]">
                  Quick contact
                </p>

                <p className="mt-2 text-sm font-semibold">
                  Message us on WhatsApp
                </p>

              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a77d36] text-sm">
                ↗
              </span>

            </a>

            <div className="mt-10">

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Established
              </p>

              <p className="mt-2 text-sm text-white/45">
                2019 • Nairobi, Kenya
              </p>

            </div>

          </aside>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <div className="rounded-[1.75rem] border border-black/[0.07] bg-white p-8 shadow-sm sm:p-10 lg:p-12">

            {!submitted ? (
              <>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77d36]">
                    Send an enquiry
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    Tell us about your requirements.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68737c]">
                    Complete the form below and provide as much information as
                    you can. This helps us understand your enquiry before we
                    get in touch.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-6"
                >

                  {/* Name */}

                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="firstName"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        First Name *
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Your first name"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="lastName"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        Last Name *
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Your last name"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      />

                    </div>

                  </div>

                  {/* Company */}

                  <div>

                    <label
                      htmlFor="company"
                      className="text-[11px] font-semibold text-[#39444d]"
                    >
                      Company / Organisation
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company or organisation name"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                    />

                  </div>

                  {/* Email / Phone */}

                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="email"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="phone"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 ..."
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      />

                    </div>

                  </div>

                  {/* Service */}

                  <div>

                    <label
                      htmlFor="service"
                      className="text-[11px] font-semibold text-[#39444d]"
                    >
                      What can we help you with? *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#39444d] outline-none transition focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                    >

                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}

                    </select>

                  </div>

                  {/* Budget / Country */}

                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="country"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        Country / Market
                      </label>

                      <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="e.g. Kenya"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="preferredContact"
                        className="text-[11px] font-semibold text-[#39444d]"
                      >
                        Preferred Contact
                      </label>

                      <select
                        id="preferredContact"
                        name="preferredContact"
                        defaultValue="Email"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#39444d] outline-none transition focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                      >
                        <option>Email</option>
                        <option>Phone</option>
                        <option>WhatsApp</option>
                      </select>

                    </div>

                  </div>

                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="text-[11px] font-semibold text-[#39444d]"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Please tell us briefly about your business, opportunity or requirements..."
                      className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-[#a1a6aa] focus:border-[#a77d36] focus:ring-2 focus:ring-[#a77d36]/10"
                    />

                  </div>

                  {/* Privacy */}

                  <label className="flex items-start gap-3">

                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-black/20 accent-[#a77d36]"
                    />

                    <span className="text-xs leading-5 text-[#7a838a]">
                      I agree that Briano and Family may use the information
                      provided to respond to my enquiry.
                    </span>

                  </label>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-xl bg-[#a77d36] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#896529] sm:w-auto sm:min-w-[220px]"
                  >
                    Send Enquiry
                    <span className="ml-3">↗</span>
                  </button>

                  <p className="text-[11px] leading-5 text-[#9ba1a6]">
                    We aim to review enquiries promptly and will contact you
                    using your preferred method.
                  </p>

                </form>

              </>
            ) : (

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div className="flex min-h-[650px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a77d36]/10">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a77d36] text-xl text-white">
                    ✓
                  </div>

                </div>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77d36]">
                  Enquiry received
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  Thank you for contacting us.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#68737c]">
                  Your enquiry has been received. Our team will review the
                  information provided and get back to you using your preferred
                  contact method.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#111b27] transition hover:border-[#a77d36] hover:text-[#a77d36]"
                >
                  Send another enquiry
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* =========================================================
          OFFICE / LOCATION
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] bg-[#eae7de] lg:grid-cols-2">

            {/* Location information */}

            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
                Our office
              </p>

              <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Nairobi,
                <br />
                Kenya.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#68737c]">
                Our office is located in Karen, Nairobi, providing a
                convenient base for business discussions, consultations and
                meetings.
              </p>

              <div className="mt-10 border-t border-black/10 pt-7">

                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#92999f]">
                  Address
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[#37434d]">
                  Briano and Family
                  <br />
                  316 Ndovu Close
                  <br />
                  Karen, Nairobi
                  <br />
                  Kenya
                </p>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=316%20Ndovu%20Close%2C%20Karen%2C%20Nairobi%2C%20Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-[#111b27] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d2a38]"
              >
                Get Directions
                <span className="ml-3">↗</span>
              </a>

            </div>

            {/* Map-style visual */}

            <div className="relative min-h-[400px] overflow-hidden bg-[#172632] lg:min-h-full">

              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="absolute left-[15%] top-[18%] h-[65%] w-px rotate-[25deg] bg-white/10" />

              <div className="absolute left-[40%] top-[5%] h-[100%] w-px -rotate-[38deg] bg-white/10" />

              <div className="absolute right-[20%] top-[10%] h-[80%] w-px rotate-[62deg] bg-white/10" />

              <div className="absolute left-[5%] top-[48%] h-px w-[90%] rotate-[8deg] bg-white/10" />

              <div className="absolute left-[10%] top-[65%] h-px w-[80%] -rotate-[15deg] bg-white/10" />

              {/* Location marker */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="absolute -inset-8 animate-pulse rounded-full bg-[#a77d36]/10" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#a77d36] shadow-[0_0_50px_rgba(167,125,54,0.4)]">

                  <div className="h-4 w-4 rounded-full bg-white" />

                </div>

              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-[#0d1721]/80 p-5 backdrop-blur-md">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c6a568]">
                  Briano and Family
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  316 Ndovu Close, Karen, Nairobi
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-[#f5f3ee] px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a77d36]">
              Frequently asked
            </p>

            <h2 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Questions
              <br />
              & answers.
            </h2>

          </div>

          <div className="border-t border-black/10">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/10"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >

                    <span className="text-[15px] font-semibold sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-sm transition duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="max-w-2xl text-sm leading-7 text-[#68737c]">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#a77d36] px-6 py-24 text-white lg:px-8 lg:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/60">
            Briano and Family
          </p>

          <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <h2 className="max-w-4xl text-[44px] font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl">
                Good decisions begin
                <br />
                with a conversation.
              </h2>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+254742840154"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#111b27] transition hover:bg-white/90"
              >
                Call +254 742 840 154
              </a>

              <a
                href="mailto:info@brianofamily.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-white"
              >
                Email Us
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

                <a
                  href="https://wa.me/254742840154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  WhatsApp
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