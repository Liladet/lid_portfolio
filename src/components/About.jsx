import { motion } from "framer-motion";

const stats = [
  { value: "2026", label: "Software Engineering Graduate" },
  { value: "5+", label: "Languages & Frameworks" },
  { value: "2", label: "Focus Areas: Web & Security" },
];

const tools = ["React", "Node.js", "Python", "Django", "SQL"];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12">
      <p className="mb-6 font-mono text-sm tracking-widest text-accent">
        01 / ABOUT
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-semibold leading-tight md:text-5xl"
        >
          I build <span className="text-accent">web applications</span> with a
          security mindset.
        </motion.h2>

        <div className="eth-card rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-semibold text-accent">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-4 py-2 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start gap-10 md:flex-row md:items-center">
  <motion.div
    whileHover={{ rotate: -2, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative shrink-0"
  >
    <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent to-transparent opacity-60 blur-md" />
    <img
      src="/lidiya.jpg"
      alt="Lidiya Alemayehu"
      className="relative h-80 w-64 rounded-[2rem] border border-accent/40 object-cover object-top"
    />
  </motion.div>

  <p className="max-w-2xl text-lg leading-relaxed text-white/70">
    I'm a Software Engineering graduate who loves technology and learning
    new tools. I have worked with React, Node.js, Python, Django, SQL and
    more, and I enjoy turning ideas into working products. Cybersecurity is
    my biggest passion, so I write code with security in mind from the
    start.
  </p>
</div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="eth-card rounded-3xl border border-white/10 p-8">
          <p className="text-sm text-white/40">EDUCATION · 2026</p>
          <h3 className="mt-2 text-xl font-bold">
            BSc in Software Engineering
          </h3>
          <p className="mt-1 text-accent">Haramaya University, Ethiopia</p>
        
        </div>

        <div className="eth-card rounded-3xl border border-white/10 p-8">
          <p className="text-sm text-white/40">WHAT I FOCUS ON</p>
          <h3 className="mt-2 text-xl font-bold">Web Development & Security</h3>
          <p className="mt-3 text-white/60">
            Full-stack web apps and APIs, built to be fast, clean, and secure.
          </p>
        </div>
      </div>
    </section>
  );
}