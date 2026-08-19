"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CLIENT_CASES } from "@/lib/constants";
import { HOME_CASES_PREVIEW_COUNT } from "@/lib/home-seo";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeCasesPreview() {
  const previewCases = CLIENT_CASES.slice(0, HOME_CASES_PREVIEW_COUNT);

  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Featured Cases"
            title="精選演出案例"
            description="部分企業、學校與婚宴活動的魔術演出經驗，更多案例歡迎洽詢了解。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto">
          {previewCases.map((item, index) => (
            <motion.article
              key={`${item.client}-${item.year}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: index * 0.07, ease: EASE }}
              className="p-6 sm:p-8 rounded-xl bg-surface-elevated/30 border border-white/[0.04] hover:border-gold/20 transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="font-en text-gold/60 text-[10px] tracking-luxury uppercase">
                  {item.year}
                </span>
                <span className="w-6 h-px bg-gold/20" />
              </div>
              <h3 className="font-display text-lg sm:text-xl text-white/90 mb-2 tracking-premium">
                {item.event}
              </h3>
              <p className="text-white/50 text-sm mb-2">{item.client}</p>
              <p className="text-white/30 text-xs tracking-wide font-en">
                {item.type}
              </p>
            </motion.article>
          ))}
        </div>

        <AnimatedSection delay={0.12}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              查看更多演出案例
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
