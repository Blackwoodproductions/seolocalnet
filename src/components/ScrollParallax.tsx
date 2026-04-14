import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number; // negative = slower (parallax up), positive = faster (parallax down)
  className?: string;
}

const ScrollParallax = ({ children, speed = -0.2, className = "" }: ScrollParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollParallax;
