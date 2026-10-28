import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Liladet",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lidiya-alemayehu-179036251/", 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:lilaalex94@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" {...stroke}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

function SocialIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-accent/10 hover:text-accent"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-end px-4 md:px-8">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative flex items-center gap-1 rounded-full py-1.5 pl-3 pr-1.5 backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? "bg-black/70" : "bg-black/30"
        }`}
      >
        {/* desktop links */}
        <ul className="hidden items-center md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative block px-3 py-1.5 text-[0.8rem] transition-colors ${
                  active === link.id
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* divider + social icons (desktop) */}
        <span className="mx-2 hidden h-4 w-px bg-white/15 md:block" />
        <SocialIcons className="hidden md:flex" />

        {/* Hire Me */}
        <a
          href="#contact"
          className="ml-1 rounded-full bg-accent px-4 py-1.5 text-[0.8rem] font-medium text-black transition hover:scale-105"
        >
          Hire Me
        </a>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-3 w-56 rounded-3xl bg-black/90 p-4 backdrop-blur-xl md:hidden"
            >
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-2 text-sm ${
                        active === link.id
                          ? "bg-accent/10 text-accent"
                          : "text-white/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-white/10 pt-3">
                <SocialIcons className="justify-center" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}