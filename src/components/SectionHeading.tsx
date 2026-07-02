"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-14 sm:mb-20 md:mb-24 ${alignClass}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-en text-gold/60 text-[10px] sm:text-xs tracking-luxury uppercase mb-5 sm:mb-6"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: EASE }}
        className="font-display text-[clamp(1.75rem,5vw,3.75rem)] font-medium tracking-tight leading-[1.1] mb-5 sm:mb-6"
      >
        <span className="gold-gradient-text">{title}</span>
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="text-white/45 text-sm sm:text-base md:text-lg leading-relaxed font-light text-balance"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className={`mt-8 sm:mt-10 h-px w-12 sm:w-16 bg-gradient-to-r from-gold/60 to-transparent origin-left ${
          align === "center" ? "mx-auto origin-center" : ""
        }`}
      />
    </div>
  );
}
