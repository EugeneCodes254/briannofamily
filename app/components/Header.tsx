"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bf-header">
      <div className="bf-container bf-header-inner bf-header-shifted">
        <Link href="/" className="bf-logo" onClick={() => setOpen(false)}>
          <Image
            src="/b.png"
            alt="Brianno & Family"
            width={150}
            height={126}
            className="bf-logo-mark"
            priority
          />
        </Link>

        <nav className="bf-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`bf-nav-link ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="bf-btn bf-btn-dark bf-header-cta"
        >
          Start a Conversation
          <span>→</span>
        </Link>

        <button
          type="button"
          className="bf-mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <div className={`bf-mobile-menu ${open ? "" : "closed"}`}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bf-mobile-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="bf-btn bf-btn-primary"
          style={{ marginTop: "18px" }}
          onClick={() => setOpen(false)}
        >
          Start a Conversation →
        </Link>
      </div>
    </header>
  );
}
