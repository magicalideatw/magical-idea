"use client";

import Link from "next/link";
import {
  Sparkles,
  Building2,
  Users,
  GraduationCap,
  Wand2,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap = {
  sparkles: Sparkles,
  building: Building2,
  users: Users,
  graduation: GraduationCap,
  heart: Heart,
  wand: Wand2,
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Our Services"
            title="演出項目"
            description="從大型舞台到近距離互動，我們提供多元化的魔術表演方案，滿足各種活動需求。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: index * 0.07, ease: EASE }}
                className="group p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-surface-elevated/30 border border-white/[0.04] hover:border-gold/20 transition-all duration-700 hover:gold-glow"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gold/8 flex items-center justify-center mb-5 sm:mb-7 group-hover:bg-gold/15 transition-colors duration-500">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold/80" />
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white/90 mb-2 sm:mb-3 tracking-premium">
                  {service.title}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12 sm:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-en text-sm text-gold/70 hover:text-gold tracking-wide transition-colors duration-500 group"
          >
            查看全部演出項目
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
