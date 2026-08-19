"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { HOME_INTRO_SERVICES } from "@/lib/home-seo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeServiceIntro() {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Magic Performance"
            title="專業魔術表演服務"
            description="提供舞台魔術、沿桌魔術與各類活動魔術演出，依活動形式與現場需求規劃適合的魔術表演方案。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {HOME_INTRO_SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: EASE }}
              className="p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full"
            >
              <p className="font-display text-lg text-white/90 mb-2 tracking-premium">
                <Link
                  href={service.href}
                  className="hover:text-gold transition-colors"
                >
                  {service.title}
                </Link>
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              查看完整演出項目
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
