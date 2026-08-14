import { Sparkles, Building2, Heart, Megaphone, CalendarDays } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SeoHero from "@/components/seo/SeoHero";
import BulletSection from "@/components/seo/BulletSection";
import ServiceCards from "@/components/seo/ServiceCards";
import SeoPricingSection from "@/components/seo/SeoPricingSection";
import ProcessSection from "@/components/seo/ProcessSection";
import FaqSection from "@/components/seo/FaqSection";
import PageCta from "@/components/seo/PageCta";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { createPageMetadata, buildSeoPageJsonLd } from "@/lib/seo";
import { FAQ_STAGE_MAGIC_PRICE, STAGE_MAGIC_TIERS } from "@/lib/constants";

const PATH = "/services/stage-magic";

const TITLE = "舞台魔術表演｜專業舞台魔術師演出｜魔幻點子表演娛樂";

const DESCRIPTION =
  "專業舞台魔術表演，適合企業活動、尾牙、春酒、婚宴、商業活動及各類舞台演出。15 分鐘 NT$15,000 起，20–30 分鐘 NT$20,000 起。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "專業舞台魔術表演現場",
});

const introPoints = [
  "舞台魔術以視覺效果與現場節奏感為核心，適合需要「全場聚焦」的活動時段",
  "可安排為開場、中段重點節目或壓軸演出",
  "結合燈光、音響與舞台空間，呈現完整的魔術段落",
  "適合企業活動、尾牙、春酒、婚宴與公開活動",
];

const faqItems = [
  {
    question: "舞台魔術表演費用是多少？",
    answer: FAQ_STAGE_MAGIC_PRICE,
  },
  {
    question: "舞台魔術適合哪些活動？",
    answer:
      "常見於企業尾牙、春酒、婚宴、商業發表、公開活動等需要舞台呈現的場合。",
  },
  {
    question: "15 分鐘與 20–30 分鐘該怎麼選？",
    answer:
      "15 分鐘適合流程較緊湊、需要精簡節目的場合；20–30 分鐘則適合尾牙、春酒、企業晚會等需要完整舞台演出的活動。",
  },
  {
    question: "舞台魔術需要什麼場地條件？",
    answer:
      "通常需要可供觀眾清楚觀看的演出空間，並視活動規模討論舞台、燈光與音響配置。實際條件依場地評估。",
  },
];

export default function StageMagicPage() {
  const jsonLd = buildSeoPageJsonLd({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    serviceName: "舞台魔術表演",
    breadcrumbs: [
      { name: "首頁", path: "/" },
      { name: "演出服務", path: "/services" },
      { name: "舞台魔術表演" },
    ],
    faq: faqItems,
  });

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "演出服務", href: "/services" },
          { label: "舞台魔術表演" },
        ]}
      />

      <SeoHero
        eyebrow="Stage Magic Performance"
        title="舞台魔術表演"
        description="專業舞台魔術演出，為企業活動、尾牙、春酒、婚宴與商業活動打造全場聚焦的魔術節目。"
        primaryCta={{ label: "詢問舞台魔術演出", href: "/contact" }}
        secondaryCta={{ label: "觀看演出影片", href: "/videos" }}
      />

      <BulletSection
        title="什麼是舞台魔術表演？"
        items={introPoints}
      />

      <ServiceCards
        title="舞台魔術適合哪些活動？"
        items={[
          {
            icon: Building2,
            title: "尾牙／春酒",
            description: "適合作為企業尾牙或春酒的重點節目，帶動全場氣氛。",
            suitable: ["公司尾牙", "春酒", "年終聚餐"],
          },
          {
            icon: Sparkles,
            title: "企業活動",
            description: "適合發表會、週年慶、頒獎典禮等需要舞台呈現的場合。",
            suitable: ["企業晚會", "週年慶", "頒獎活動"],
          },
          {
            icon: Heart,
            title: "婚宴",
            description: "可為婚宴安排精緻舞台段落，增添驚喜與記憶點。",
            suitable: ["婚宴", "訂婚宴", "歸寧宴"],
          },
          {
            icon: Megaphone,
            title: "商業／公開活動",
            description: "適合需要視覺聚焦與現場互動的商業或公開演出。",
            suitable: ["品牌活動", "公開演出", "開幕活動"],
          },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading align="left" title="舞台魔術演出的特色" />
          </AnimatedSection>
          <ul className="max-w-3xl space-y-4">
            {[
              "視覺集中，適合全場同步觀賞",
              "可配合活動流程安排開場、中段或壓軸",
              "可依場地與活動規模調整演出內容",
              "適合需要「現場感」與「驚喜感」的場合",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/50 text-sm sm:text-base leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="舞台魔術演出方案"
              description="依活動流程與需求，選擇適合的演出時間。"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {STAGE_MAGIC_TIERS.map((tier, index) => (
              <AnimatedSection key={tier.title} delay={index * 0.08}>
                <article className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-surface-elevated/20 h-full">
                  <h3 className="font-display text-lg sm:text-xl text-white/90 mb-2 tracking-premium leading-snug">
                    {tier.title}
                  </h3>
                  <p className="font-display text-xl sm:text-2xl gold-gradient-text mb-4 whitespace-nowrap">
                    {tier.price}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.12}>
            <p className="mt-6 max-w-3xl text-white/40 text-sm leading-relaxed">
              實際費用依活動日期、地點、演出時間、場地條件、演出內容及製作需求評估。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading align="left" title="場地與舞台需求" />
          </AnimatedSection>
          <div className="max-w-3xl flex items-start gap-4 p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20">
            <CalendarDays className="w-6 h-6 text-gold/70 shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              舞台魔術通常需要適合觀眾觀看的演出空間，並視活動規模討論舞台、
              動線、燈光與音響配置。請於詢價時提供場地資訊，以便評估最適合的演出方式。
            </p>
          </div>
        </div>
      </section>

      <SeoPricingSection
        title="完整演出費用"
        subtitle="以下為全站演出起價，近距離魔術、舞台魔術與客製化方案一併列出。"
        pricingLink={{
          label: "查看完整魔術表演費用",
          href: "/pricing",
        }}
      />

      <ProcessSection title="合作流程" />

      <FaqSection items={faqItems} />

      <RelatedLinks
        links={[
          {
            label: "尾牙魔術表演",
            href: "/events/annual-dinner",
            description: "了解尾牙與春酒的魔術演出方案",
          },
          {
            label: "魔術表演費用",
            href: "/pricing",
            description: "查看各類魔術演出的價格說明",
          },
        ]}
      />

      <PageCta
        title="預約舞台魔術演出"
        description="提供活動日期、地點、預計人數與場地資訊，我們將依活動內容評估適合的舞台魔術方案。"
        buttonLabel="詢問舞台魔術演出"
      />
    </>
  );
}
