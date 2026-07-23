import { STATS } from "../data";

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Our track record
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            The numbers behind our success
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal rounded-2xl border border-ink/10 bg-white p-8"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="font-display text-5xl font-800 tracking-tightest text-ink">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
