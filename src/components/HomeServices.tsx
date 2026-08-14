"use client";

import { Sparkles, Wand2, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HOME_SERVICES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap = {
  sparkles: Sparkles,
  wand: Wand2,
  users: Users,
  star: Star,
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeServices() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Our Services"
            title="演出服務"
            description="依照活動形式，選擇適合的魔術演出。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {HOME_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
                className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/8 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white/90 mb-3 tracking-premium">
                  {service.title}
                </h3>
                <p className="text-gold/50 text-xs uppercase tracking-wider mb-2">
                  適合
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  {service.suitable}
                </p>
                {service.id === "stage" && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    <Link
                      href="/services/stage-magic"
                      className="text-gold/60 text-xs hover:text-gold transition-colors"
                    >
                      舞台魔術表演 →
                    </Link>
                    <Link
                      href="/events/annual-dinner"
                      className="text-gold/60 text-xs hover:text-gold transition-colors"
                    >
                      尾牙魔術表演 →
                    </Link>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
