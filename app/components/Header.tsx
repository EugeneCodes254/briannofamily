"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-black/[0.06] bg-[#f4f1ea]/95 backdrop-blur-2xl">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER ROW
            LOGO + NAME LEFT / NAVIGATION RIGHT
        ===================================================== */}

        <div className="flex min-h-[82px] items-center justify-between">

          {/* ===================================================
              LEFT SIDE — LOGO + BRIANO & FAMILY
          =================================================== */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            {/* LOGO */}

            <div className="flex h-[54px] w-[54px] items-center justify-center">
              <Image
                src="/b.png"
                alt="Briano & Family"
                width={1400}
                height={1400}
                priority
                className="h-[50px] w-[50px] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* COMPANY NAME */}

            <div className="flex flex-col justify-center">

              {/* BRIANO — NAVY BLUE */}

              <span className="text-[21px] font-bold leading-none tracking-[0.16em] text-[#0b2a4a] transition duration-300 group-hover:text-[#123d63]">
                BRIANO
              </span>

              {/* & FAMILY — GOLD */}

              <span className="mt-1 text-[9px] font-bold leading-none tracking-[0.42em] text-[#b58b47]">
                & FAMILY
              </span>

            </div>
          </Link>

          {/* ===================================================
              RIGHT SIDE — DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden items-center lg:flex">

            <nav className="flex items-center gap-7 xl:gap-9">

              {navigation.map(([label, href]) => {
                const isAbout = label === "About Us";

                return (
                  <Link
                    key={label}
                    href={href}
                    className={`group relative py-3 text-[12px] font-semibold transition duration-300 ${
                      isAbout
                        ? "text-[#0b2a4a]"
                        : "text-[#66717a] hover:text-[#0b2a4a]"
                    }`}
                  >
                    {label}

                    {/* GOLD ACTIVE / HOVER LINE */}

                    <span
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#b58b47] transition-all duration-300 ${
                        isAbout
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

            </nav>

            {/* =================================================
                CONTACT BUTTON
            ================================================= */}

            <Link
              href="/contact"
              className="group ml-7 inline-flex items-center gap-3 rounded-full bg-[#0b2a4a] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_8px_25px_rgba(11,42,74,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b58b47]"
            >
              Start a Conversation

              <span className="text-[#d4b477] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* ===================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]">

              <span
                className={`h-[1.5px] w-full bg-[#0b2a4a] transition duration-300 ${
                  menuOpen
                    ? "translate-y-[6.5px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-full bg-[#0b2a4a] transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-full bg-[#0b2a4a] transition duration-300 ${
                  menuOpen
                    ? "-translate-y-[6.5px] -rotate-45"
                    : ""
                }`}
              />

            </span>
          </button>

        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            menuOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-black/[0.06] py-5">

            {navigation.map(([label, href]) => {
              const isAbout = label === "About Us";

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-black/[0.05] py-5 text-[16px] font-medium ${
                    isAbout
                      ? "text-[#b58b47]"
                      : "text-[#0b2a4a]"
                  }`}
                >
                  {label}

                  <span className="text-[#b58b47]">
                    ↗
                  </span>
                </Link>
              );
            })}

            {/* MOBILE CTA */}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center rounded-full bg-[#0b2a4a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b58b47]"
            >
              Start a Conversation

              <span className="ml-3 text-[#d4b477]">
                →
              </span>
            </Link>

          </nav>
        </div>

      </div>
    </header>
  );
}