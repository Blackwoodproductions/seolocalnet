import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a numeric portion of a string from 0 to its final value when scrolled into view.
 * Preserves any non-numeric prefix/suffix (e.g. "+", "%", ",", "K").
 * Examples: "3,167+" → counts 0 → 3167 then renders "3,167+"; "25%" → "25%"; "10" → "10".
 */
const CountUp = ({ value, duration = 1.8, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Parse target number + non-numeric suffix/prefix
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numericRaw = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const hasComma = numericRaw.includes(",");
  const target = parseFloat(numericRaw.replace(/,/g, "")) || 0;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      const rounded = Math.round(latest);
      setDisplay(hasComma ? rounded.toLocaleString("en-US") : String(rounded));
    });
    return () => unsub();
  }, [spring, hasComma]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
