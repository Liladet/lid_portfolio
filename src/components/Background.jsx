import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

const gridMask = "radial-gradient(ellipse at center, black 30%, transparent 75%)";

export default function Background() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* gold scroll progress line */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: gridMask,
            WebkitMaskImage: gridMask,
          }}
        />

        {/* floating glows */}
        <motion.div
          className="absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]"
          animate={{ x: [0, 90, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-amber-700/20 blur-[120px]"
          animate={{ x: [0, -80, 0], y: [0, -70, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* light that follows the mouse */}
        <motion.div
          style={{ x: sx, y: sy }}
          className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[90px]"
        />
      </div>
    </>
  );
}