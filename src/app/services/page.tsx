import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  Users,
  GraduationCap,
  Wand2,
  Heart,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "演出項目",
  description:
    "舞台魔術秀、尾牙春酒演出、企業家庭日、校園活動、婚宴魔術、沿桌魔術 — 多元化魔術表演方案。",
};

const iconMap = {
  sparkles: Sparkles,
  building: Building2,
  users: Users,
  graduation: GraduationCap,
  heart: Heart,
  wand: Wand2,
} as const;

const serviceDetails: Record<
  string,
  { features: string[]; ideal: string }
> = {
  stage: {
    features: [
      "大型視覺魔術效果",
      "專業燈光音響配合",
      "可融入開場或壓軸環節",
      "適合 200 人以上大型場地",
    ],
    ideal: "企業晚會、頒獎典禮、大型慶典",
  },
  corporate: {
    features: [
      "尾牙春酒專屬流程設計",
      "魔術融入頒獎與抽獎",
      "帶動全場氣氛與互動",
      "可配合主持人串場",
    ],
    ideal: "企業尾牙、春酒、週年慶",
  },
  family: {
    features: [
      "親子同樂互動魔術",
      "街頭式近距離表演",
      "適合戶外園遊會",
      "安全且趣味兼具",
    ],
    ideal: "企業家庭日、園遊會、開幕活動",
  },
  campus: {
    features: [
      "結合教育與娛樂元素",
      "適合各年齡層學生",
      "可配合校園主題",
      "安全規範符合校園需求",
    ],
    ideal: "開學典禮、畢業典禮、社團活動",
  },
  wedding: {
    features: [
      "為新人量身設計魔術橋段",
      "浪漫與驚喜兼具",
      "可配合婚禮流程安排",
      "適合中型至大型婚宴",
    ],
    ideal: "婚禮宴會、訂婚宴、歸寧宴",
  },
  table: {
    features: [
      "近距離互動魔術",
      "於宴會桌間穿梭演出",
      "每桌 5-10 分鐘精采體驗",
      "不影響用餐流程",
    ],
    ideal: "婚宴、餐會、VIP 晚宴",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Services"
              title="演出項目"
              description="從震撼全場的舞台魔術秀，到親密互動的沿桌表演，我們提供完整的魔術娛樂解決方案。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const details = serviceDetails[service.id];
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={service.id} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <span className="text-gold/60 text-sm tracking-widest uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {details.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-white/50 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gold/80 text-sm">
                      適合場景：{details.ideal}
                    </p>
                  </div>

                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden gold-border ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-surface-elevated to-surface flex items-center justify-center">
                      <Icon className="w-24 h-24 text-gold/20" />
                    </div>
                  </div>
                </div>

                {index < SERVICES.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-white/50 mb-6">
              不確定哪種演出最適合您的活動？
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-all duration-300"
            >
              免費諮詢方案
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
