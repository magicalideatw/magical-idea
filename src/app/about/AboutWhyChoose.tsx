"use client";

import { motion } from "framer-motion";
import { TRUST_HIGHLIGHTS } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutWhyChoose() {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            subtitle="Why Choose Us"
            title="為什麼選擇魔幻點子？"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px max-w-5xl mx-auto rounded-xl overflow-hidden border border-gold/10">
          {TRUST_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
              className="px-4 sm:px-6 py-8 sm:py-10 bg-black/30 text-center"
            >
              <p className="font-display text-2xl sm:text-3xl gold-gradient-text font-medium mb-2 sm:mb-3">
                {item.value}
              </p>
              <p className="text-white/45 text-xs sm:text-sm leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
