import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Django", "PHP / Laravel", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["SQL", "Neo4j"],
  },
  {
    title: "Security",
    items: ["CTF Challenges", "Active Directory Security", "Attack Path Analysis", "TryHackMe"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12">
      <p className="mb-6 font-mono text-sm tracking-widest text-accent">
        02 / SKILLS
      </p>
      <h2 className="font-display text-4xl font-semibold md:text-5xl">
        Tools I <span className="text-accent">work with</span>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="eth-card rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h3 className="font-display text-2xl font-bold text-accent">
              {group.title}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}