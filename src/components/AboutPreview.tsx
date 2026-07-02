"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Globe, Star, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SITE, EXPERIENCES } from "@/lib/constants";

const experienceIcons = [Globe, Award, Star, Trophy];
const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutPreview() {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection>
            <p className="font-en text-gold/60 text-[10px] sm:text-xs tracking-luxury uppercase mb-5 sm:mb-6">
              About Us
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
              <span className="gold-gradient-text">{SITE.name}</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-5 font-light">
              魔幻點子表演娛樂匯集國際級魔術表演實力，擁有 FISM 世界魔術大賽台灣代表、
              Magic Castle 特別獎及超過二十年專業演出經驗，為每一場活動注入驚喜與感動。
            </p>
            <p className="text-white/30 text-sm leading-relaxed mb-8 sm:mb-10">
              我們專注於為企業、學校、政府單位及婚宴提供量身定制的魔術表演方案，
              從大型舞台到近距離沿桌，完整滿足您的活動需求。
            </p>
            <Link href="/about" className="btn-secondary text-sm">
              了解更多
            </Link>
          </AnimatedSection>

          <div className="space-y-3 sm:space-y-4">
            {EXPERIENCES.map((item, index) => {
              const Icon = experienceIcons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: index * 0.1, ease: EASE }}
                  className="group flex gap-4 sm:gap-5 p-5 sm:p-7 rounded-xl sm:rounded-2xl glass-gold hover:gold-glow transition-all duration-700"
                >
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gold/8 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold/80" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-white/90 mb-1 tracking-premium">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
