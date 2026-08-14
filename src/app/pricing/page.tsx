import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SeoHero from "@/components/seo/SeoHero";
import ProcessSection from "@/components/seo/ProcessSection";
import FaqSection from "@/components/seo/FaqSection";
import PageCta from "@/components/seo/PageCta";
import RelatedLinks from "@/components/seo/RelatedLinks";
import PricingTierGrid from "./PricingTierGrid";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { createPageMetadata, buildSeoPageJsonLd } from "@/lib/seo";
import {
  FAQ_MINIMUM_PRICE,
  FAQ_STAGE_MAGIC_PRICE,
  STAGE_MAGIC_TIERS,
} from "@/lib/constants";

const PATH = "/pricing";

const TITLE = "魔術表演費用｜魔術師報價與演出價格｜魔幻點子表演娛樂";

const DESCRIPTION =
  "魔術表演費用公開說明，近距離魔術 NT$10,000 起，舞台魔術 15 分鐘 NT$15,000 起、20–30 分鐘 NT$20,000 起，企業活動依需求報價。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "魔幻點子表演娛樂演出費用說明",
});

const faqItems = [
  {
    question: "魔術表演最低多少錢？",
    answer: FAQ_MINIMUM_PRICE,
  },
  {
    question: "舞台魔術多少錢？",
    answer: FAQ_STAGE_MAGIC_PRICE,
  },
  {
    question: "魔術表演費用是如何計算的？",
    answer:
      "主要依演出形式、活動日期、地點、演出時間、活動規模及製作需求評估。近距離魔術 NT$10,000 起；舞台魔術約 15 分鐘 NT$15,000 起，約 20–30 分鐘 NT$20,000 起。",
  },
  {
    question: "舞台魔術與近距離魔術的費用為什麼不同？",
    answer:
      "舞台魔術依演出時間分為約 15 分鐘與 20–30 分鐘方案，需要更完整的舞台呈現與節目編排；近距離魔術則著重互動與分區演出，兩者形式與準備內容不同，因此起價有所差異。",
  },
  {
    question: "企業活動如何估算演出費用？",
    answer:
      "需提供活動日期、地點、預計人數、演出形式與流程需求。若為大型活動或客製化內容，將依活動規模、演出時間與製作需求另行報價。",
  },
];

export default function PricingPage() {
  const jsonLd = buildSeoPageJsonLd({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    serviceName: "魔術表演費用",
    breadcrumbs: [
      { name: "首頁", path: "/" },
      { name: "魔術表演費用" },
    ],
    faq: faqItems,
  });

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumb
        items={[
          { label: "首頁", href: "/" },
          { label: "魔術表演費用" },
        ]}
      />

      <SeoHero
        eyebrow="Performance Pricing"
        title="魔術表演費用"
        description="公開透明的演出起價說明，協助您了解不同魔術演出形式的費用方向。實際報價將依活動需求評估。"
        primaryCta={{ label: "立即詢問演出", href: "/contact" }}
        secondaryCta={{ label: "查看演出影片", href: "/videos" }}
      />

      <PricingTierGrid />

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="為什麼不同演出價格不同？"
            />
          </AnimatedSection>
          <div className="max-w-3xl space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              演出費用會依演出時間、形式、活動規模、場地條件、交通距離及客製化需求而有所不同。
            </p>
            <p>
              15 分鐘舞台魔術適合流程較緊湊的活動；20–30 分鐘舞台魔術則能安排更完整的節目內容，
              適合尾牙、春酒、企業晚會等正式活動。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="舞台魔術與近距離魔術的差異"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20">
              <h3 className="font-display text-lg text-white/90 mb-4">
                舞台魔術
              </h3>
              <div className="space-y-4 mb-4">
                {STAGE_MAGIC_TIERS.map((tier) => (
                  <div key={tier.title}>
                    <p className="text-white/70 text-sm mb-1 leading-snug">
                      {tier.title}
                    </p>
                    <p className="text-gold/70 text-sm whitespace-nowrap">
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                適合需要全場聚焦的舞台段落，常見於尾牙、春酒、企業晚會與公開活動。
                詳見{" "}
                <Link href="/services/stage-magic" className="text-gold/70 hover:text-gold">
                  舞台魔術表演
                </Link>
                。
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20">
              <h3 className="font-display text-lg text-white/90 mb-3">
                近距離魔術
              </h3>
              <p className="text-gold/70 text-lg mb-4 whitespace-nowrap">
                NT$10,000 起
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                適合餐會、婚宴、品牌活動等需要近距離互動的場合，
                可穿插於入場、用餐或交流時段。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="企業活動如何估算演出費用"
            />
          </AnimatedSection>
          <ul className="max-w-3xl space-y-4">
            {[
              "提供活動日期、地點與預計人數",
              "說明希望的演出形式（舞台／近距離／客製化）",
              "告知活動流程與希望安排的時段",
              "若有特殊主題、品牌元素或場地限制，一併提供",
              "我們將依需求提供報價與演出方案",
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
          <p className="mt-6 max-w-3xl text-white/40 text-sm">
            若為尾牙或春酒活動，也可參考{" "}
            <Link
              href="/events/annual-dinner"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              尾牙魔術表演
            </Link>
            頁面了解適合的演出形式。
          </p>
        </div>
      </section>

      <ProcessSection title="合作流程" />

      <FaqSection items={faqItems} />

      <RelatedLinks
        links={[
          {
            label: "舞台魔術表演",
            href: "/services/stage-magic",
            description: "了解舞台魔術的適合場合",
          },
          {
            label: "尾牙魔術表演",
            href: "/events/annual-dinner",
            description: "了解尾牙與春酒的演出方案",
          },
        ]}
      />

      <PageCta
        title="取得演出報價"
        description="提供活動日期、地點、預計人數與演出需求，我們將依活動內容提供適合的報價說明。"
        buttonLabel="立即詢問演出"
      />
    </>
  );
}
