import { COURSE_SEGMENTS, DOMAINS } from "../data";

export default function DomainExpertise() {
  return (
    <section id="domains" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Specialized programs designed to fuel innovation
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            Our domain expertise
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((domain, i) => (
            <div
              key={domain.title}
              className="reveal group rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_40px_-24px_rgba(21,94,239,0.4)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="font-display text-base font-700 text-ink">
                {domain.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Explore custom-fit courses
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            Tailored course segmentation
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSE_SEGMENTS.map((seg, i) => (
            <div
              key={seg.title}
              className="reveal rounded-2xl bg-accent-light p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="font-display text-base font-700 text-accent-dark">
                {seg.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{seg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
