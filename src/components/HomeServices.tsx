"use client";

import {
  Sparkles,
  Wand2,
  Building2,
  Heart,
  GraduationCap,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_ACTIVITY_SERVICES } from "@/lib/home-seo";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap = {
  sparkles: Sparkles,
  wand: Wand2,
  building: Building2,
  heart: Heart,
  graduation: GraduationCap,
  calendar: CalendarDays,
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeServices() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Event Magic"
            title="適合各類活動的魔術演出"
            description="依照活動形式與場地條件，選擇適合的魔術演出內容。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {HOME_ACTIVITY_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
                className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/8 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white/90 mb-3 tracking-premium">
                  <Link
                    href={service.href}
                    className="hover:text-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gold/50 text-xs uppercase tracking-wider mb-2">
                  適合
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  {service.suitable}
                </p>
              </motion.article>
            );
          })}
        </div>

        <AnimatedSection delay={0.1}>
          <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              查看演出費用
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              立即詢價
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
