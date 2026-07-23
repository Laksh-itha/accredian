import { CLIENTS } from "../data";

export default function Clients() {
  return (
    <section id="clients" className="border-y border-ink/10 bg-white py-16">
      <div className="container-page">
        <p className="reveal text-center font-mono text-xs uppercase tracking-[0.14em] text-ink/40">
          Successful collaborations with the industry&rsquo;s best
        </p>
        <div className="reveal mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center font-display text-lg font-700 text-ink/35 grayscale transition-all duration-300 hover:text-ink/70 hover:grayscale-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
