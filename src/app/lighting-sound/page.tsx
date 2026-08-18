import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SeoHero from "@/components/seo/SeoHero";
import ProcessSection from "@/components/seo/ProcessSection";
import FaqSection from "@/components/seo/FaqSection";
import RelatedLinks from "@/components/seo/RelatedLinks";
import PageCta from "@/components/seo/PageCta";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { createPageMetadata, buildSeoPageJsonLd } from "@/lib/seo";

const PATH = "/lighting-sound";

const TITLE = "桃園燈光音響｜雙北・桃竹苗活動燈光音響服務｜魔幻點子";

const DESCRIPTION =
  "提供桃園、雙北、桃竹苗地區活動燈光、舞台音響與現場技術服務，適用於企業活動、校園活動、舞台演出、尾牙、記者會及各類活動，其他縣市亦可依需求評估。";

const SERVICE_AREA_TEXT =
  "主要服務雙北、桃園、新竹及苗栗地區，提供活動燈光、舞台音響與現場技術服務；若活動位於其他縣市，也歡迎提出需求，我們將依活動內容、場地與執行條件進行評估。";

const PRICING_DISCLAIMER =
  "以上為基礎方案起始價格（含 4 小時服務）。實際報價將依活動規模、場地、設備需求與服務時間評估。";

const SERVICE_OFFERINGS = [
  {
    title: "舞台燈光",
    description:
      "活動舞台、演出、企業活動、校園活動等燈光配置與現場控制，依場地與演出內容規劃舞台燈光方案。",
  },
  {
    title: "活動音響",
    description:
      "提供活動現場音響配置、麥克風、音樂播放及現場音訊需求，適用講座、演出、尾牙及各類活動音響服務。",
  },
  {
    title: "燈光音響整合",
    description:
      "依照活動流程、舞台配置與現場需求，整合活動燈光與舞台音響系統，提供完整的活動燈光音響服務。",
  },
  {
    title: "現場技術服務",
    description:
      "協助活動現場的設備架設、測試、操作與撤場等技術工作，確保活動進行順暢。",
  },
  {
    title: "客製化活動需求",
    description:
      "依活動場地、參與人數、舞台形式、演出內容及活動流程進行規劃，提供符合現場條件的燈光音響配置。",
  },
] as const;

const AUDIO_SERVICE_CONTENT = [
  "活動音響系統",
  "麥克風與音訊設備",
  "混音與音訊控制",
  "音樂播放與現場控制",
  "現場架設與撤場",
  "技術操作與現場支援",
] as const;

const LIGHTING_SERVICE_CONTENT = [
  "舞台燈光系統",
  "LED 舞台燈具",
  "面光燈光配置",
  "燈光控制系統",
  "現場架設與撤場",
  "技術操作與現場支援",
] as const;

const ACTIVITY_SCENARIOS = [
  {
    title: "企業活動",
    description:
      "企業家庭日、尾牙、春酒、品牌活動、開幕活動、講座等，依活動內容規劃舞台音響與活動燈光配置。",
  },
  {
    title: "校園活動",
    description:
      "校慶、成果發表、社團活動、畢業活動、校園演出等，提供適合校園場地的活動技術服務。",
  },
  {
    title: "舞台演出",
    description:
      "魔術、歌唱、樂團、舞蹈、戲劇及各類舞台表演，依演出內容規劃舞台燈光與音響支援。",
  },
  {
    title: "戶外活動",
    description:
      "社區活動、地方活動、公益活動、戶外演出等，依現場條件規劃活動音響設備與燈光配置。",
  },
  {
    title: "選舉及大型活動",
    description:
      "依活動規模、場地條件與現場需求，規劃音響、舞台燈光及現場技術支援。",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "桃園可以提供活動燈光音響服務嗎？",
    answer:
      "可以。我們主要服務桃園及雙北、桃竹苗地區，提供活動燈光、舞台音響與現場技術服務，並依活動內容、場地條件與實際需求進行規劃。",
  },
  {
    question: "台北、新北可以提供燈光音響服務嗎？",
    answer:
      "可以，雙北為主要服務範圍之一，可提供企業活動、校園活動、舞台演出、講座、記者會、尾牙春酒及各類活動的燈光音響服務。",
  },
  {
    question: "新竹、苗栗可以提供服務嗎？",
    answer:
      "可以，桃竹苗地區皆可提出活動燈光、舞台音響及現場技術需求，我們會依活動地點、日期與實際需求進行評估。",
  },
  {
    question: "可以只需要燈光或只需要音響嗎？",
    answer:
      "可以。燈光與音響服務可以依活動需求分開提供，也可以整合規劃，實際服務內容將依活動日期、地點、活動形式與現場需求評估。",
  },
  {
    question: "可以承接企業或校園活動嗎？",
    answer:
      "可以。企業活動、校園活動、舞台演出、講座、記者會、尾牙春酒、戶外活動及各類現場活動皆可提出需求，我們會依活動內容協助規劃合適的燈光與音響配置。",
  },
  {
    question: "可以承接大型活動嗎？",
    answer:
      "可以。大型活動將依活動規模、場地條件、舞台配置、觀眾人數與活動內容進行整體評估，規劃合適的燈光、音響及現場技術配置。",
  },
  {
    question: "其他縣市也可以提供服務嗎？",
    answer:
      "可以。除雙北、桃園、新竹及苗栗外，其他縣市也歡迎提出需求，我們會依活動日期、地點、規模與實際執行條件進行評估。",
  },
];

const PRICING_PLANS = [
  {
    title: "活動音響技術服務",
    price: "NT$5,000 起",
    duration: "／4 小時",
    features: [
      "活動音響系統",
      "麥克風與音訊設備",
      "混音與音訊控制",
      "現場架設與測試",
      "活動技術支援",
      "撤場",
    ],
  },
  {
    title: "燈光技術服務",
    price: "NT$5,000 起",
    duration: "／4 小時",
    features: [
      "舞台燈光系統",
      "LED 舞台燈具",
      "面光燈光配置",
      "現場架設與測試",
      "活動技術支援",
      "撤場",
    ],
  },
  {
    title: "燈光＋音響整合",
    price: "NT$10,000 起",
    duration: "／4 小時",
    features: [
      "活動燈光配置",
      "活動音響配置",
      "架設與測試",
      "現場技術支援",
      "撤場",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "提供活動資訊",
    description: "日期／地點／人數／活動類型",
  },
  {
    step: "02",
    title: "評估設備需求",
    description: "依場地、活動規模與形式規劃配置",
  },
  {
    step: "03",
    title: "現場架設與測試",
    description: "活動前完成設備架設與測試",
  },
  {
    step: "04",
    title: "活動執行與撤場",
    description: "提供現場技術支援，活動結束後撤場",
  },
] as const;

const SCHEMA_OFFERS = [
  { name: "活動音響技術服務", price: 5000 },
  { name: "燈光技術服務", price: 5000 },
  { name: "燈光＋音響整合", price: 10000 },
] as const;

const AREA_SERVED = [
  { type: "City", name: "台北市" },
  { type: "City", name: "新北市" },
  { type: "City", name: "桃園市" },
  { type: "City", name: "新竹市" },
  { type: "City", name: "新竹縣" },
  { type: "City", name: "苗栗縣" },
  { type: "Country", name: "Taiwan" },
] as const;

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "雙北桃竹苗活動舞台燈光與活動音響現場技術服務",
});

export default function LightingSoundPage() {
  const jsonLd = buildSeoPageJsonLd({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    serviceName: "雙北・桃竹苗活動燈光音響整合服務",
    breadcrumbs: [
      { name: "首頁", path: "/" },
      { name: "活動燈光音響" },
    ],
    faq: [...FAQ_ITEMS],
    offers: SCHEMA_OFFERS,
    areaServed: [...AREA_SERVED],
  });

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "活動燈光音響" },
        ]}
      />

      <SeoHero
        eyebrow="Lighting & Sound"
        title="活動燈光音響整合服務"
        subtitle="雙北・桃竹苗活動燈光音響服務"
        description="從設備配置、現場架設到活動執行與撤場，依照活動規模與現場需求提供彈性的燈光、音響技術支援。"
        note="依活動規模、場地條件與活動需求，彈性規劃燈光、音響及現場技術服務，提供完整的活動整合方案。"
        primaryCta={{ label: "立即詢價", href: "/contact" }}
        secondaryCta={{ label: "查看服務內容", href: "#services" }}
      />

      <section id="services" className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              title="服務介紹"
              description="依照活動規模、場地條件與實際需求，提供合適的燈光、音響及現場技術整合服務。"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICE_OFFERINGS.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                  <h3 className="font-display text-xl text-white/90 mb-4 tracking-premium">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="雙北・桃竹苗活動燈光音響服務"
              description="魔幻點子表演娛樂提供桃園活動燈光音響、雙北燈光音響及桃竹苗地區現場技術服務，依照活動場地、觀眾人數、舞台規模與節目內容，規劃合適的活動燈光設備與活動音響設備配置。"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <div className="max-w-3xl space-y-4 text-white/45 text-sm sm:text-base leading-relaxed">
              <p>
                服務可應用於企業活動、校園活動、舞台演出、講座、記者會、尾牙春酒、戶外活動、社區活動及各類現場演出，涵蓋舞台燈光、舞台音響、活動燈光音響及燈光音響整合等需求。
              </p>
              <p>{SERVICE_AREA_TEXT}</p>
              <p className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
                >
                  立即詢問活動燈光音響
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="燈光音響服務能力"
              description="設備配置將依活動規模、場地條件與演出需求彈性調整。以下為主要服務內容概覽，實際方案依現場評估。"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <AnimatedSection>
              <div className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-black/20 h-full">
                <h3 className="font-display text-lg text-white/90 mb-2 tracking-premium">
                  活動音響
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  提供活動現場音響系統、麥克風、音訊控制、音樂播放及現場技術支援，依活動規模、場地條件與實際需求進行規劃。
                </p>
                <p className="text-white/35 text-xs mb-5">服務內容</p>
                <ul className="space-y-3">
                  {AUDIO_SERVICE_CONTENT.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-black/20 h-full">
                <h3 className="font-display text-lg text-white/90 mb-2 tracking-premium">
                  舞台燈光
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  依舞台形式、活動流程與現場需求，提供舞台燈光配置、燈光控制與現場技術服務。
                </p>
                <p className="text-white/35 text-xs mb-5">服務內容</p>
                <ul className="space-y-3">
                  {LIGHTING_SERVICE_CONTENT.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.12}>
            <p className="mt-8 max-w-3xl text-white/40 text-sm leading-relaxed">
              依活動規模與需求，彈性規劃燈光、音響及現場技術配置。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              title="依活動規模彈性配置"
              description="從企業活動、校園活動、舞台演出到戶外活動，依照場地、觀眾人數、舞台規模與活動流程進行設備規劃。"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-xl border border-gold/10 bg-surface-elevated/20">
              <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                依活動規模、場地條件與活動需求，彈性規劃燈光、音響及現場技術服務，由魔幻點子負責需求溝通、整合規劃與現場執行。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading title="適用各類活動" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ACTIVITY_SCENARIOS.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                  <h3 className="font-display text-lg text-white/90 mb-3 tracking-premium">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              title="服務方案"
              description="以下為基礎方案起始價格，依活動規模與現場需求可彈性調整配置。超時或額外需求將另行評估。"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <AnimatedSection key={plan.title} delay={index * 0.08}>
                <article className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-black/30 h-full flex flex-col">
                  <h3 className="font-display text-lg text-white/90 mb-2 tracking-premium leading-snug">
                    {plan.title}
                  </h3>
                  <p className="mb-1">
                    <span className="text-gold/75 text-xl font-light">
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-sm font-light">
                      {plan.duration}
                    </span>
                  </p>
                  <p className="text-white/30 text-xs mb-5">基礎方案起價</p>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-white/45 text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0 mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.12}>
            <p className="mt-8 max-w-3xl mx-auto text-center text-white/40 text-sm leading-relaxed">
              {PRICING_DISCLAIMER}
            </p>
            <p className="mt-4 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-gold/60 text-sm hover:text-gold transition-colors"
              >
                查看演出費用說明
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20">
              <h2 className="font-display text-xl sm:text-2xl text-white/90 mb-4 tracking-premium">
                競選活動／政見發表
              </h2>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-6">
                提供候選人活動、政見發表、地方座談、競選總部活動及造勢等燈光音響與現場技術支援，依活動內容與現場需求規劃配置。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
              >
                活動需求詢價
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProcessSection title="服務流程" steps={PROCESS_STEPS} />

      <FaqSection title="活動燈光音響常見問題" items={FAQ_ITEMS} />

      <RelatedLinks
        links={[
          {
            label: "立即詢問活動燈光音響",
            href: "/contact",
            description: "提供活動日期、場地與需求，協助評估燈光音響配置",
          },
          {
            label: "演出服務",
            href: "/services",
            description: "了解魔幻點子的各類演出與活動服務",
          },
          {
            label: "舞台魔術",
            href: "/services/stage-magic",
            description: "查看舞台魔術表演服務內容",
          },
          {
            label: "演出費用",
            href: "/pricing",
            description: "查看魔術演出與相關服務費用說明",
          },
        ]}
      />

      <PageCta
        title="不確定需要多少設備？"
        description="提供活動日期、場地、預估人數與活動內容，我們會依需求協助評估適合的燈光與音響配置。"
        buttonLabel="立即詢價"
        href="/contact"
      />
    </>
  );
}
