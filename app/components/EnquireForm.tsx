"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquireForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      workEmail: (form.elements.namedItem("workEmail") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      teamSize: (form.elements.namedItem("teamSize") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section id="enquire" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 rounded-3xl bg-ink p-8 text-white md:p-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Get expert guidance for your team&rsquo;s success
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 tracking-tightest md:text-4xl">
              Want to learn more about our training solutions?
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Tell us about your team and we&rsquo;ll come back with a
              tailored proposal — no generic decks.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
              <p>Email us: <a className="text-white/80 underline" href="mailto:enterprise@accredian.com">enterprise@accredian.com</a></p>
              <p className="mt-2">4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                Full name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jordan Rao"
                  className="rounded-lg border border-ink/15 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                Work email
                <input
                  required
                  name="workEmail"
                  type="email"
                  placeholder="jordan@company.com"
                  className="rounded-lg border border-ink/15 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                Company
                <input
                  required
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="rounded-lg border border-ink/15 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
                Team size
                <select
                  name="teamSize"
                  defaultValue="1-20"
                  className="rounded-lg border border-ink/15 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                >
                  <option value="1-20">1–20</option>
                  <option value="21-100">21–100</option>
                  <option value="101-500">101–500</option>
                  <option value="500+">500+</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/70">
              What are you hoping to solve?
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your team's skill gaps or goals"
                className="rounded-lg border border-ink/15 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Enquiry"}
            </button>

            {status === "success" && (
              <p role="status" className="text-sm font-medium text-success">
                Thanks — your enquiry is in. An advisor will reach out within one business day.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
