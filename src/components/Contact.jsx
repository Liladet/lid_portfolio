import { useState } from "react";

const EMAIL = "lilaalex94@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/Liladet" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/lidiya-alemayehu-179036251/" },
  
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-accent";

  return (
    <section id="contact" className="px-6 py-28 md:px-12">
      <p className="mb-6 font-mono text-sm tracking-widest text-accent">
        05 / CONTACT
      </p>

      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-semibold leading-tight md:text-5xl">
            Let's build <span className="text-accent">something</span> great
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            Have a project in mind? Tell me about it and I'll get back to you
            soon.
          </p>

          <div className="mt-10 space-y-2">
            <p className="text-sm text-white/40">Email</p>
            <a href={`mailto:${EMAIL}`} className="text-lg hover:text-accent">
              {EMAIL}
            </a>
            <p className="pt-4 text-sm text-white/40">Location</p>
            <p className="text-lg">Ethiopia,Addis Ababa</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-accent hover:text-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-white/10 p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={update}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={update}
              placeholder="Tell me about your project..."
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-4 font-medium text-black transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}