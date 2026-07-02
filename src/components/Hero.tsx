"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden hero-gradient"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 origin-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=2400&q=85"
          alt="魔術表演舞台"
          fill
          className="object-cover ken-burns"
          priority
          sizes="100vw"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-background"
        />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-12 pt-28 sm:pt-32"
      >
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            className="font-en text-gold/70 text-[10px] sm:text-xs tracking-luxury uppercase mb-6 sm:mb-8"
          >
            {SITE.nameEn}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
            className="font-display font-medium leading-[1.05] tracking-tight"
          >
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)] text-white/95">
              {SITE.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
            className="mt-4 sm:mt-6 font-display text-[clamp(1.25rem,3.5vw,2.75rem)] font-normal gold-gradient-text tracking-premium leading-snug"
          >
            {SITE.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
            className="mt-6 sm:mt-8 max-w-xl text-white/45 text-sm sm:text-base md:text-lg leading-relaxed font-light text-balance"
          >
            為企業尾牙、春酒、家庭日、校園演出、婚宴及政府活動，
            量身打造國際級魔術體驗。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Link href="/contact" className="btn-primary justify-center sm:justify-start text-sm sm:text-base">
              立即詢價
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/videos" className="btn-secondary justify-center sm:justify-start text-sm sm:text-base">
              觀看演出影片
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-px glass-gold rounded-2xl overflow-hidden max-w-2xl"
        >
          {[
            { value: "20+", label: "年表演經驗" },
            { value: "FISM", label: "台灣代表" },
            { value: "國際", label: "競賽得獎" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 sm:px-8 py-5 sm:py-6 text-center bg-black/40"
            >
              <p className="font-display text-xl sm:text-3xl gold-gradient-text font-medium">
                {stat.value}
              </p>
              <p className="text-white/35 text-[10px] sm:text-xs mt-1.5 tracking-wider font-en uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-10 flex flex-col items-center pb-6 sm:pb-8"
      >
        <span className="font-en text-white/25 text-[10px] tracking-luxury uppercase mb-3">
          Scroll
        </span>
        <div className="scroll-hint w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
