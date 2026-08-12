"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function HomeFinalCTA() {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
            <span className="gold-gradient-text">正在規劃一場活動？</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed text-balance">
            告訴我們活動日期、地點與人數，
            <br className="hidden sm:block" />
            我們會協助你規劃適合的魔術演出。
          </p>
          <Link
            href="/contact"
            className="btn-primary justify-center text-sm sm:text-base mx-auto"
          >
            立即詢問演出
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
