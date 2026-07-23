"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#track-record", label: "Stats" },
  { href: "#clients", label: "Clients" },
  { href: "#edge", label: "Accredian Edge" },
  { href: "#cat-framework", label: "CAT" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faqs", label: "FAQs" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,27,51,0.08)]"
          : "bg-paper/0"
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <a href="#top" className="flex flex-col leading-none group">
          <span className="font-display font-800 text-xl tracking-tightest text-ink">
            accredian
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink/50 font-mono">
            credentials that matter
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-body text-sm font-medium text-ink/70">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#enquire"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(21,94,239,0.55)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          Enquire Now
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-body text-base text-ink/80">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 border-b border-ink/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#enquire"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
