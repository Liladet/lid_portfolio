import { motion } from "framer-motion";

const projects = [
  {
    title: "YagoutPay Python SDK",
    badge: "Top 5 · SDK Competition 2025",
    description:
      "A secure, easy-to-use Python library for integrating YagoutPay payments: static QR and dynamic links with expiry checks, hosted checkout redirects, and direct wallet/card payments. Handles AES encryption, API requests, and validation out of the box, with test/prod environment switching.",
    tags: ["Python", "REST API", "AES Encryption", "Payments"],
    link: "https://github.com/Liladet/yagoutpay-sdk",
  },
  {
    title: "Food Delivery Starter",
    badge: "website",
    description:
      "A sleek, responsive food delivery web application, Users can browse a dynamic menu, add items to their cart, and place orders with a beautiful, animated UI experience.",
    tags: ["React, Tailwind CSS, Framer Motion, and Firebase"],
    link: "https://github.com/Liladet/food-delivery-starter",
  },
  {
    title: "CTF Write-ups",
    badge: "Security",
    description:
      "Step-by-step write-ups of Capture The Flag challenges, explaining how each challenge was analyzed and solved.",
    tags: ["CTF", "Security", "Write-ups"],
    link: "https://github.com/Liladet/headless-horseman-ctf-writeup",
  },
  {
    title: "Haramaya University Student Online Registration System",
    badge: "university project",
    description:
      "A PHP-based web application designed to manage the online registration of students at Haramaya University. It allows students to register for courses, view their information, and manage their academic profiles through a user-friendly interface.",
    tags: ["PHP ", "MySQL ", "XAMPP server", "HTML/CSS"],
    link: "https://github.com/Liladet/Haramaya-University-Student-Online-Registration",
  },
  {
    title: "Weather App",
    badge: "website",
    description:
      "A modern weather application.uses the OpenWeatherMap API to fetch real-time weather data.",
    tags: ["React ", "Vite ", "Tailwind CSS"],
    link: "https://github.com/Liladet/weather-app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28 md:px-12">
      <p className="mb-6 font-mono text-sm tracking-widest text-accent">
        03 / WORK
      </p>
      <h2 className="font-display text-4xl font-semibold md:text-5xl">
        Selected <span className="text-accent">projects</span>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`eth-card flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <span className="w-fit rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
              {p.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-white/65">
              {p.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-fit text-sm font-medium text-accent hover:underline"
              >
                View on GitHub ↗
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}