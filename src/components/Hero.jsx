import { motion } from "framer-motion";
import EthiopianCross from "./EthiopianCross";

const roles = [
  "Full-Stack Developer",
  "API Developer",
  "React Developer",
  "Security Enthusiast",
];

const firstName = "Lidiya".split("");

const GOLD = "#d4af37";
const LIGHT = "#f3d98b";

const ringWords = [
  "DEVELOPER",
  "SECURITY",
  "FULL-STACK",
  "API",
  "FRONTEND",
  "BACKEND",
  "ETHIOPIA",
];

// one small non-breaking gap around a dot between words (also closes the circle evenly)
const SEP = "\u00A0•\u00A0";
const ringText = ringWords.join(SEP) + SEP;

function Emblem() {
  return (
    <div className="relative hidden h-80 w-80 shrink-0 items-center justify-center lg:flex">
      <div className="absolute h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <defs>
          <linearGradient
            id="mono-grad"
            gradientUnits="userSpaceOnUse"
            x1="60"
            y1="70"
            x2="140"
            y2="130"
          >
            <stop offset="0%" stopColor={LIGHT} />
            <stop offset="55%" stopColor={GOLD} />
            <stop offset="100%" stopColor="#a67c1e" />
          </linearGradient>
          <linearGradient
            id="fade-line"
            gradientUnits="userSpaceOnUse"
            x1="50"
            y1="0"
            x2="150"
            y2="0"
          >
            <stop offset="0%" stopColor={GOLD} stopOpacity="0" />
            <stop offset="50%" stopColor={LIGHT} stopOpacity="1" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </linearGradient>

          {/* full circle, radius 82 */}
          <path
            id="ring-path"
            d="M 18,100 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          />
        </defs>

        {/* rotating letters */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="45s"
            repeatCount="indefinite"
          />
          <text fill={LIGHT} fontSize="7.5" fontWeight="500">
            <textPath
              href="#ring-path"
              textLength="513"
              lengthAdjust="spacing"
            >
              {ringText}
            </textPath>
          </text>
        </g>

        {/* EL monogram (stays still) */}
        <motion.g
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <text
            x="100"
            y="120"
            textAnchor="middle"
            fontSize="68"
            fill="url(#mono-grad)"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            EL
          </text>
          <line
            x1="50"
            y1="105"
            x2="150"
            y2="105"
            stroke="url(#fade-line)"
            strokeWidth="1"
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center px-6 pt-28 md:px-12"
    >
      <div className="flex items-center justify-between gap-10">
        <div>
          

          <p className="mb-4 text-2xl text-accent">
            AKKAM <span className="text-base text-white/50">· I'm</span>
          </p>

          <h1 className="font-display text-6xl font-semibold leading-[1.05] md:text-8xl">
            <span className="block">
              {firstName.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="relative inline-block"
                >
                  {c === "i" ? "ı" : c}
                  {c === "i" && (
                    <EthiopianCross className="absolute left-1/2 top-[0.06em] h-[0.3em] w-[0.3em] -translate-x-1/2 text-accent" />
                  )}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="gold-text block italic"
            >
              Alemayehu
            </motion.span>
          </h1>
        </div>

        <Emblem />
      </div>

      <div className="my-10">
        <div className="tilet-line" />
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex w-max items-center gap-10 text-lg text-white/50"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...roles, ...roles, ...roles, ...roles].map((role, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap"
              >
                {role}
                <EthiopianCross className="h-5 w-5 text-accent" />
              </span>
            ))}
          </motion.div>
        </div>
        <div className="tilet-line" />
      </div>

      

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded-full bg-accent px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-8 py-4 transition hover:border-accent hover:text-accent"
        >
          Let's Talk
        </a>
        <a
          href="/Lidiya_Alemayehu_CV.pdf"
          download
          className="rounded-full border border-accent/40 px-8 py-4 text-accent transition hover:bg-accent hover:text-black"
        >
          Download CV ↓
        </a>
      </div>
    </section>
  );
}