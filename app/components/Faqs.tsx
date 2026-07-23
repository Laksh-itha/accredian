"use client";

import { useState } from "react";
import { FAQ_CATEGORIES, FAQS } from "../data";

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState<(typeof FAQ_CATEGORIES)[number]>(
    FAQ_CATEGORIES[0]
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQS[activeCategory];

  return (
    <section id="faqs" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Answers, upfront
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="reveal flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0);
                }}
                className={`shrink-0 rounded-xl border px-5 py-3.5 text-left text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? "border-accent bg-accent-light text-accent-dark"
                    : "border-ink/10 bg-white text-ink/60 hover:border-ink/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="reveal flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="rounded-xl border border-ink/10 bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-700 text-ink">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-ink/60">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
