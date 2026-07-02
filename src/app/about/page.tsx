import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE, EXPERIENCES } from "@/lib/constants";
import { Award, Globe, Star, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "魔幻點子表演娛樂 — FISM 世界魔術大賽台灣代表、Magic Castle 特別獎、超過 20 年表演經驗、國際魔術競賽得獎。",
};

const experienceIcons = [Globe, Award, Star, Trophy];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="About Us"
              title="關於我們"
              description="魔幻點子表演娛樂，致力於為台灣各類活動帶來最頂尖的魔術體驗與活動娛樂規劃。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gold-border gold-glow">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                  alt={SITE.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-display text-3xl gold-gradient-text">
                    {SITE.name}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    國際級魔術表演 × 活動娛樂規劃
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-6">
                用魔法，創造難忘的時刻
              </h3>
              <div className="space-y-4 text-white/60 leading-relaxed font-light">
                <p>
                  魔幻點子表演娛樂匯集多位具備國際競賽得獎經歷的專業魔術師，
                  以超過二十年的豐富演出經驗，為企業、學校、政府及婚宴客戶
                  提供量身定制的魔術表演服務。
                </p>
                <p>
                  團隊曾代表台灣參加 FISM 世界魔術大賽，並於 Magic Castle 獲得特別獎，
                  這份國際認可是我們持續追求卓越的最好證明。
                </p>
                <p>
                  我們不僅提供精彩魔術演出，更擅長將魔術融入尾牙、春酒、頒獎、
                  婚宴等活動流程，讓魔術成為活動中不可或缺的亮點與記憶。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading subtitle="Experience" title="主要經歷" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((item, index) => {
              const Icon = experienceIcons[index];
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-gold/10 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
