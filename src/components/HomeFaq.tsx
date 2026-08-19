"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { HOME_FAQ_ITEMS } from "@/lib/home-faq";

const EASE = [0.16, 1, 0.3, 1] as const;

const linkClass =
  "text-gold/70 hover:text-gold transition-colors underline-offset-2 hover:underline";

function FaqAnswer({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          魔術表演適合企業活動、尾牙春酒、家庭日、婚宴、校園活動、舞台演出、品牌活動及各類節慶活動，可依活動形式與觀眾需求規劃適合的演出內容。
        </p>
      );
    case 1:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          魔術表演費用會依演出形式、活動日期、地點、演出時間與活動需求而有所不同。可以參考我們的
          <Link href="/pricing" className={linkClass}>
            演出費用
          </Link>
          頁面，了解不同演出形式的費用資訊。
        </p>
      );
    case 2:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          可以。
          <Link href="/services/stage-magic" className={linkClass}>
            舞台魔術
          </Link>
          適合企業活動、尾牙春酒、校園活動、舞台節目及各類活動，可依舞台條件與活動流程安排適合的演出內容。
        </p>
      );
    case 3:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          可以，婚宴可以依場地與活動流程安排
          <Link href="/services" className={linkClass}>
            沿桌魔術
          </Link>
          、近距離魔術或舞台魔術，讓賓客在不同活動階段都能參與表演。
        </p>
      );
    case 4:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          可以。企業家庭日、
          <Link href="/year-end-party" className={linkClass}>
            尾牙春酒
          </Link>
          、品牌活動、員工活動及各類企業場合，都可以依活動人數、場地與流程規劃適合的魔術演出。
        </p>
      );
    case 5:
      return (
        <p className="text-white/45 text-sm leading-relaxed">
          可以透過網站的
          <Link href="/contact" className={linkClass}>
            詢價表單
          </Link>
          提供活動日期、地點、預估人數與活動內容，我們會依需求協助評估適合的演出形式。
        </p>
      );
    default:
      return null;
  }
}

function FaqItem({
  question,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="rounded-xl border border-white/[0.06] bg-surface-elevated/20 overflow-hidden">
      <h3 className="font-display text-base sm:text-lg text-white/90 tracking-premium">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:text-gold/90"
        >
          <span>{question}</span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 text-gold/50 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>
      </h3>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className="overflow-hidden"
        aria-hidden={!isOpen}
      >
        <div className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0 border-t border-white/[0.04]">
          <FaqAnswer index={index} />
        </div>
      </motion.div>
    </article>
  );
}

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading title="魔術表演常見問題" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {HOME_FAQ_ITEMS.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.04}>
              <FaqItem
                question={item.question}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
