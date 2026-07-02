import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "客戶案例",
  description:
    "魔幻點子表演娛樂服務過的企業、學校、政府機構及婚宴案例，見證我們的專業與口碑。",
};

export default function CasesPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Client Cases"
              title="客戶案例"
              description="我們榮幸為眾多知名企業、學府及政府機構提供專業魔術表演服務，創造無數難忘的活動時刻。"
            />
          </AnimatedSection>
        </div>
      </section>

      <CaseStudies showHeading={false} />

      <section className="py-16 section-gradient">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-white/40 text-sm leading-relaxed">
              以上僅列出部分合作案例。基於客戶保密協議，
              許多企業與政府活動未能公開展示。
              歡迎洽詢以了解更多合作經驗。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
