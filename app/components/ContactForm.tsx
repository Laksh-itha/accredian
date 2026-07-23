"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("/api/enquire", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  console.log(data);

  alert(data.message);
};
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-page max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Book a Demo
        </h2>

        <p className="text-center mt-3 text-gray-500">
          Fill in your details and we'll contact you.
        </p>

        <form
  className="mt-10 space-y-5"
  onSubmit={handleSubmit}
>
          <input
            className="w-full border rounded-lg p-3"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            type="email"
            placeholder="Work Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg p-3"
          >
            Book Demo
          </button>
        </form>
      </div>
    </section>
  );
}