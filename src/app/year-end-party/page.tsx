import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import YearEndPartyVideos from "@/components/YearEndPartyVideos";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  getOrganizationSchema,
} from "@/lib/seo";
import {
  VIDEOS,
  getYoutubeEmbedUrl,
  FAQ_STAGE_MAGIC_PRICE,
  PRICING,
} from "@/lib/constants";
import { PRICING_DISCLAIMER } from "@/lib/seo";

const PAGE_PATH = "/year-end-party";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "尾牙魔術表演｜企業尾牙・春酒活動魔術演出｜魔幻點子表演娛樂";

const PAGE_DESCRIPTION =
  "魔幻點子表演娛樂提供尾牙魔術、春酒表演與企業活動魔術演出，包含舞台魔術與近距離互動演出，依活動流程與需求規劃適合的表演方案。";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 4894,
        height: 3263,
        alt: "魔幻點子表演娛樂舞台魔術演出",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const whyPoints = [
  "可成為晚會主秀，帶動全場氣氛",
  "可配合活動流程，安排於開場、中段或壓軸",
  "可與主持人及其他節目搭配，銜接更順暢",
  "可依活動時間調整演出長度與內容",
  "可增加現場互動，提升賓客參與感",
  "適合企業尾牙、春酒與年終聚餐",
];

const serviceTypes = [
  {
    icon: Sparkles,
    title: "舞台魔術｜約 15 分鐘",
    duration: "NT$15,000 起",
    description:
      "適合流程較緊湊的尾牙、節目串場或需要精簡演出的活動。",
    suitable: ["節目串場", "流程緊湊的尾牙", "時段有限的晚會"],
  },
  {
    icon: Sparkles,
    title: "舞台魔術｜約 20–30 分鐘",
    duration: "NT$20,000 起",
    description:
      "完整舞台魔術演出，視覺效果集中，適合作為尾牙主秀或重點節目。",
    suitable: ["尾牙主秀", "春酒", "企業晚會", "年終聚餐"],
  },
  {
    icon: Wand2,
    title: "近距離互動魔術",
    duration: "NT$10,000 起",
    description:
      "於賓客席間或活動區域近距離演出，適合穿插在正式流程之間。",
    suitable: [
      "賓客入場",
      "開席前",
      "用餐交流",
      "活動空檔",
      "賓客互動",
    ],
  },
];

const eventTypes = [
  "公司尾牙",
  "春酒",
  "企業晚會",
  "年終聚餐",
  "員工活動",
  "企業家庭日",
  "品牌活動",
];

const prepQuestions = [
  {
    question: "尾牙魔術表演需要舞台嗎？",
    answer:
      "依演出形式而定。完整舞台魔術通常需要適合觀眾觀看的演出空間，實際條件可於詢問時提供活動場地資訊。",
  },
  {
    question: "20～30 分鐘適合安排在尾牙哪個流程？",
    answer:
      "常見於開場暖場、用餐後或壓軸時段。實際安排將依當晚流程與活動需求討論。",
  },
  {
    question: "尾牙魔術適合多少人？",
    answer:
      "舞台魔術可依場地與座位配置規劃，適合中大型企業聚會。實際演出條件將依活動場地與需求評估。",
  },
  {
    question: "桃園以外可以演出嗎？",
    answer:
      "可以洽詢其他地區的活動演出，包含台北、新竹等地，實際安排與費用依活動地點評估。",
  },
  {
    question: "可以配合企業活動主題嗎？",
    answer:
      "可依活動主題、品牌元素或當晚流程討論客製化內容，實際演出條件將依活動需求評估。",
  },
];

const faqItems = [
  {
    question: "尾牙魔術表演費用是多少？",
    answer: `${FAQ_STAGE_MAGIC_PRICE} 近距離魔術 NT$10,000 起。`,
  },
  {
    question: "尾牙可以安排多久的魔術？",
    answer:
      "舞台魔術可依活動流程安排約 15 分鐘或 20–30 分鐘方案，互動魔術則可穿插於入場或用餐時段。實際內容依活動流程討論。",
  },
  {
    question: "桃園以外可以演出嗎？",
    answer:
      "可以洽詢其他地區的活動演出，實際安排與費用依活動地點評估。",
  },
  {
    question: "尾牙一定需要舞台嗎？",
    answer:
      "依演出形式而定。完整舞台魔術通常需要適合觀眾觀看的演出空間，實際條件可於詢問時提供活動場地資訊。",
  },
];

function FaqCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20">
      <h3 className="font-display text-base sm:text-lg text-white/90 mb-3 tracking-premium">
        {question}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed">{answer}</p>
    </article>
  );
}

export default function YearEndPartyPage() {
  const organization = getOrganizationSchema();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${PAGE_URL}/#service` },
        inLanguage: "zh-TW",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "魔幻點子表演娛樂",
        publisher: { "@id": organization["@id"] },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        name: "尾牙魔術表演",
        description: PAGE_DESCRIPTION,
        provider: { "@id": organization["@id"] },
        areaServed: {
          "@type": "Country",
          name: "Taiwan",
        },
        serviceType: "企業尾牙魔術表演",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首頁",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "演出服務",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "尾牙魔術表演",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [...prepQuestions, ...faqItems].map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      ...corporateVideosForSchema(),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "演出服務", href: "/services" },
          { label: "尾牙魔術表演" },
        ]}
      />

      {/* Hero */}
      <section className="pb-16 sm:pb-20 hero-gradient noise-overlay">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="font-en text-gold/60 text-[10px] sm:text-xs tracking-luxury uppercase mb-4">
                Year-End Party Magic
              </p>
              <h1 className="font-display font-medium text-white/95 tracking-tight [word-break:keep-all] text-[clamp(1.5rem,4.5vw,2.75rem)] leading-[1.35] mb-5 sm:mb-6">
                尾牙魔術表演｜讓企業尾牙成為難忘的夜晚
              </h1>
              <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                專業舞台魔術與互動演出，為企業尾牙、春酒與年終活動打造精彩節目。
                服務桃園、台北、新竹及全台企業活動。
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-primary justify-center text-sm sm:text-base"
                >
                  詢問尾牙演出
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/videos"
                  className="btn-secondary justify-center text-sm sm:text-base"
                >
                  觀看演出影片
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="尾牙為什麼適合安排魔術表演？"
            />
          </AnimatedSection>
          <ul className="max-w-3xl space-y-4">
            {whyPoints.map((point, index) => (
              <AnimatedSection key={point} delay={index * 0.05}>
                <li className="flex items-start gap-3 text-white/50 text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  {point}
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading title="尾牙可以安排哪些魔術演出？" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.08}>
                  <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                    <div className="w-10 h-10 rounded-lg bg-gold/8 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-white/90 mb-2 tracking-premium">
                      {service.title}
                    </h3>
                    {"duration" in service && service.duration && (
                      <p className="text-gold/60 text-sm mb-4">
                        {service.duration}
                      </p>
                    )}
                    <p className="text-white/45 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <p className="text-gold/50 text-xs uppercase tracking-wider mb-2">
                      適合
                    </p>
                    <ul className="space-y-1.5">
                      {service.suitable.map((item) => (
                        <li
                          key={item}
                          className="text-white/40 text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
          <p className="mt-8 text-center text-white/35 text-sm">
            也可參考{" "}
            <Link href="/services" className="text-gold/70 hover:text-gold transition-colors">
              完整演出項目
            </Link>
            ，了解舞台魔術與近距離魔術方案。
          </p>
        </div>
      </section>

      {/* Section 3: Pricing */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="演出費用"
              description={PRICING.headline}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {PRICING.tiers.map((tier, index) => (
              <AnimatedSection key={tier.title} delay={index * 0.06}>
                <div className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-surface-elevated/20 h-full">
                  <h3 className="font-display text-base sm:text-lg text-white/90 mb-3 tracking-premium leading-snug">
                    {tier.title}
                  </h3>
                  <p className="font-display text-xl sm:text-2xl gold-gradient-text whitespace-nowrap">
                    {tier.price}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 max-w-3xl text-white/40 text-sm leading-relaxed">
              {PRICING_DISCLAIMER}
            </p>
            <p className="mt-4">
              <Link
                href="/pricing"
                className="text-gold/70 text-sm hover:text-gold transition-colors"
              >
                查看完整魔術表演費用 →
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading title="適合哪些企業活動？" />
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {eventTypes.map((event, index) => (
              <AnimatedSection key={event} delay={index * 0.04}>
                <span className="inline-block px-4 py-2 rounded-full border border-gold/15 text-white/50 text-sm">
                  {event}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Prep */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="尾牙魔術演出需要準備什麼？"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl">
            {prepQuestions.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.06}>
                <FaqCard question={item.question} answer={item.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Videos */}
      <YearEndPartyVideos />

      {/* Section 8: FAQ */}
      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading title="常見問題" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.06}>
                <FaqCard question={item.question} answer={item.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding section-gradient">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
              <span className="gold-gradient-text">預約尾牙魔術演出</span>
            </h2>
            <p className="text-white/45 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed text-balance">
              提供活動日期、地點、預計人數與活動需求，
              我們將依活動內容評估適合的演出方案。
            </p>
            <Link
              href="/contact"
              className="btn-primary justify-center text-sm sm:text-base mx-auto"
            >
              立即詢問尾牙演出
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function corporateVideosForSchema() {
  return [...VIDEOS]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, 2)
    .map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description:
        "description" in video && video.description
          ? video.description
          : video.title,
      embedUrl: getYoutubeEmbedUrl(video.youtubeId),
      thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
    }));
}
