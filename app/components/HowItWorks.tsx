import { HOW_IT_WORKS } from "../data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            A structured three-step approach to skill development
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            How we deliver results that matter
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <div
              key={item.step}
              className="reveal relative rounded-2xl border border-ink/10 bg-paper p-8"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-800 text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
