"use client";

import { useState } from "react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials" className="bg-accent-light/40 py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            What our clients are saying
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            Testimonials from our partners
          </h2>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.company}
              className="rounded-2xl border border-ink/10 bg-white p-8"
            >
              <span className="font-display text-lg font-800 text-ink/70">
                {t.company}
              </span>
              <blockquote className="mt-4 text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`View testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === i ? "bg-accent" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
