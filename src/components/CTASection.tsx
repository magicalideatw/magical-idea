"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SITE, isExternalLineUrl } from "@/lib/constants";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-gold/[0.08] to-gold/[0.04]"
      />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 vignette" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-6">
            Get Started
          </p>
          <h2 className="font-display text-[clamp(1.75rem,5vw,3.75rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
            <span className="gold-gradient-text">準備好創造魔法了嗎？</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base md:text-lg mb-10 sm:mb-12 font-light max-w-2xl mx-auto text-balance leading-relaxed">
            無論是企業尾牙、婚宴、校園活動或家庭日，
            我們將為您量身規劃最適合的魔術表演方案。
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary justify-center text-sm sm:text-base">
              立即詢價
              <ArrowRight className="w-4 h-4" />
            </Link>
            {isExternalLineUrl(SITE.lineUrl) ? (
              <Link href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center text-sm sm:text-base">
                LINE 諮詢
              </Link>
            ) : (
              <span className="btn-secondary justify-center text-sm sm:text-base text-gold/40 border-gold/10 cursor-default">
                LINE：{SITE.lineDisplay}
              </span>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
