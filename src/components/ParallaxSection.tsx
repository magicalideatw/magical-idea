"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  background?: ReactNode;
  speed?: number;
}

export default function ParallaxSection({
  children,
  className = "",
  background,
  speed = 0.15,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {background && (
        <motion.div style={{ y: bgY, opacity }} className="absolute inset-0 -z-10">
          {background}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
