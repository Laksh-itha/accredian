import { CAT_FRAMEWORK } from "../data";

export default function CatFramework() {
  return (
    <section id="cat-framework" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Our proven approach
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest text-ink md:text-4xl">
            The CAT Framework
          </h2>
          <p className="mt-3 text-ink/60">
            Every program moves through three connected stages — concept
            becomes application, application becomes tooling your team keeps.
          </p>
        </div>

        {/* Connected ribbon: order carries real information here */}
        <div className="reveal relative mt-16">
          <svg
            className="absolute left-0 top-8 hidden w-full md:block"
            viewBox="0 0 1000 90"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              d="M 60 45 C 200 -15, 300 105, 500 45 C 700 -15, 800 105, 940 45"
              stroke="#155EEF"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-10 md:grid-cols-3">
            {CAT_FRAMEWORK.map((item) => (
              <div key={item.step} className="flex flex-col items-start md:items-center md:text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink font-mono text-lg font-semibold text-white shadow-[0_10px_24px_-8px_rgba(11,27,51,0.5)]">
                  {item.step}
                </div>
                <h3 className="mt-5 font-display text-xl font-800 text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[22ch] text-ink/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
