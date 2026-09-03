import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import ServiceInformationSection from "@/components/ServiceInformationSection";
import { SITE } from "@/lib/constants";
import { casesServiceInfo } from "@/lib/service-info/cases-service-info";
import { brandHeading, createPageMetadata } from "@/lib/seo";

const PATH = "/cases";

const TITLE = "客戶案例｜企業、學校、政府活動魔術演出｜魔幻點子表演娛樂";

const DESCRIPTION =
  "魔幻點子表演娛樂服務企業尾牙、春酒、家庭日、校園活動、政府活動及婚宴等魔術演出，累積多元活動演出經驗。";

export const metadata = {
  ...createPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    ogImageAlt: "魔幻點子表演娛樂客戶案例",
  }),
  authors: [{ name: SITE.name }],
  publisher: SITE.name,
};

export default function CasesPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Client Cases"
              title={brandHeading("客戶案例")}
              titleAs="h1"
              description="我們榮幸為眾多知名企業、學府及政府機構提供專業魔術表演服務，創造無數難忘的活動時刻。"
            />
          </AnimatedSection>
        </div>
      </section>

      <CaseStudies
        showHeading={false}
        sectionTitle="合作客戶與演出案例"
        showImages
      />

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

      <ServiceInformationSection content={casesServiceInfo} />
    </>
  );
}
