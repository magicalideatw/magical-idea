"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PricingSection() {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Performance Pricing"
            title="演出費用"
            description={PRICING.headline}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <p className="max-w-2xl mx-auto text-center text-white/45 text-sm sm:text-base leading-relaxed mb-10 sm:mb-14">
            {PRICING.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px max-w-5xl mx-auto rounded-xl overflow-hidden border border-gold/10">
          {PRICING.tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
              className="px-5 sm:px-6 py-8 sm:py-10 bg-black/30 text-center"
            >
              <h3 className="font-display text-base sm:text-lg text-white/85 tracking-premium mb-3">
                {tier.title}
              </h3>
              <p className="text-gold/75 text-sm sm:text-base font-light">
                {tier.price}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/contact"
              className="btn-primary justify-center text-sm sm:text-base mx-auto"
            >
              立即詢問演出
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
