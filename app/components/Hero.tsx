"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

export default function Hero() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const trained = useCountUp(10482, active);
  const sessions = useCountUp(214, active);
  const gapClosed = useCountUp(63, active);

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* subtle dotted texture, restrained */}
      <div
        className="pointer-events-none absolute inset-0 bg-ribbon-grid opacity-[0.5]"
        style={{ backgroundSize: "22px 22px" }}
      />
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Enterprise Learning &amp; Development
          </span>

          <h1 className="mt-6 font-display font-800 text-[2.6rem] leading-[1.05] tracking-tightest text-ink md:text-[3.6rem]">
            Close the skill gap
            <br />
            before it costs you
            <br />
            <span className="text-accent">the next quarter.</span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/70">
            Accredian designs tailored training programs for enterprise teams —
            grounded in a proprietary framework, delivered by practitioners, and
            measured against the metrics your leadership actually reviews.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-[0_12px_28px_-10px_rgba(21,94,239,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Talk to an Advisor
            </a>
            <a
              href="#cat-framework"
              className="inline-flex items-center gap-2 font-semibold text-ink/80 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              See the CAT Framework
            </a>
          </div>
        </div>

        {/* Signature: live skill-gap counter panel */}
        <div
          ref={ref}
          className="relative rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(11,27,51,0.25)] md:p-9"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/40">
            Live program ledger
          </p>
          <div className="mt-5 grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-4xl font-800 tabular-nums text-ink">
                {trained.toLocaleString()}
                <span className="text-accent">+</span>
              </p>
              <p className="mt-1 text-sm text-ink/55">Professionals trained</p>
            </div>
            <div>
              <p className="font-display text-4xl font-800 tabular-nums text-ink">
                {sessions}
                <span className="text-accent">+</span>
              </p>
              <p className="mt-1 text-sm text-ink/55">Sessions delivered</p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-ink px-5 py-5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Average skill-gap closure</span>
              <span className="font-mono font-semibold text-success">
                {gapClosed}%
              </span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-success transition-all duration-[1400ms] ease-out"
                style={{ width: active ? `${gapClosed}%` : "0%" }}
              />
            </div>
            <p className="mt-3 text-xs text-white/40">
              Measured pre- vs. post-program assessment, aggregated across active enterprise cohorts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
