"use client";

import { motion } from "framer-motion";
import { CLIENT_CASES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface CaseStudiesProps {
  showHeading?: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CaseStudies({ showHeading = true }: CaseStudiesProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {showHeading && (
          <AnimatedSection>
            <SectionHeading
              subtitle="Client Cases"
              title="客戶案例"
              description="我們榮幸為眾多知名企業、學府及政府機構提供專業魔術表演服務。"
            />
          </AnimatedSection>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {CLIENT_CASES.map((item, index) => (
            <motion.div
              key={`${item.client}-${item.year}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: index * 0.07, ease: EASE }}
              className="group p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-surface-elevated/30 border border-white/[0.04] hover:border-gold/20 transition-all duration-700 hover:gold-glow"
            >
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="font-en text-gold/60 text-[10px] tracking-luxury uppercase">
                  {item.year}
                </span>
                <span className="w-6 h-px bg-gold/20 group-hover:w-10 transition-all duration-700" />
              </div>
              <h3 className="font-display text-lg sm:text-xl text-white/90 mb-2 tracking-premium">
                {item.client}
              </h3>
              <p className="text-white/50 text-sm mb-2">{item.event}</p>
              <p className="text-white/30 text-xs tracking-wide font-en">
                {item.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
