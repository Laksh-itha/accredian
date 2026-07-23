import { EDGE_POINTS } from "../data";

export default function AccredianEdge() {
  return (
    <section id="edge" className="bg-ink py-20 text-white md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Key aspects of our strategic training
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest md:text-4xl">
            The Accredian Edge
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {EDGE_POINTS.map((point, i) => (
            <div
              key={point.title}
              className="reveal bg-ink p-7"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="font-mono text-xs text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-700">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
