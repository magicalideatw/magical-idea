"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

function HeroContent() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className="font-display font-medium text-gold text-[clamp(1.25rem,4.5vw,1.75rem)] sm:text-[clamp(1.75rem,2.2vw,2.25rem)] tracking-wide mb-4 sm:mb-5 sm:whitespace-nowrap"
      >
        <span className="whitespace-nowrap">魔幻點子</span>
        <span className="whitespace-nowrap">表演娛樂</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="font-display font-medium text-white/95 tracking-tight [word-break:keep-all] text-[clamp(1.875rem,7vw,2.375rem)] sm:text-[clamp(3rem,3.2vw,4rem)] leading-[1.3]"
      >
        <span className="hidden sm:block">讓魔術，成為活動</span>
        <span className="hidden sm:block">最難忘的瞬間。</span>
        <span className="sm:hidden">讓魔術，成為活動最難忘的瞬間。</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="mt-4 sm:mt-5 text-white/45 text-xs sm:text-sm tracking-wide [word-break:keep-all]"
      >
        專業舞台魔術｜企業活動｜婚禮｜親子活動
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.65, ease: EASE }}
        className="mt-6 sm:mt-8"
      >
        <Link
          href="/contact"
          className="btn-primary justify-center sm:justify-start text-sm w-full sm:w-auto"
        >
          立即詢問演出
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-background overflow-x-hidden">
      <div className="relative w-full max-w-[100vw]">
        <Image
          src="/hero-magic.jpg"
          alt="魔幻點子魔術表演"
          width={4894}
          height={3263}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />

        {/* Desktop: left dark gradient for text readability */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none bg-gradient-to-r from-black/90 via-black/55 via-45% to-transparent"
          aria-hidden
        />

        {/* Desktop: text overlay on left dark area */}
        <div className="hidden sm:flex absolute inset-0 items-center pointer-events-none">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 pointer-events-auto">
            <div className="w-full max-w-[580px]">
              <HeroContent />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: text below full image — avoids covering person & dove */}
      <div className="sm:hidden px-5 py-8 bg-background overflow-x-hidden">
        <HeroContent />
      </div>
    </section>
  );
}
