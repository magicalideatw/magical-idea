import Link from "next/link";
import { Sparkles, Wand2, Building2, Star } from "lucide-react";
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
import { FAQ_STAGE_MAGIC_PRICE } from "@/lib/constants";

const PATH = "/events/annual-dinner";

const TITLE = "尾牙魔術表演｜企業尾牙專業魔術演出｜魔幻點子表演娛樂";

const DESCRIPTION =
  "專業尾牙魔術表演，適合企業尾牙、公司年終聚餐、企業晚會等活動。提供舞台魔術、近距離互動與客製化演出，演出方案 NT$10,000 起。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "企業尾牙舞台魔術表演",
});

const whyPoints = [
  "魔術表演能成為尾牙重點節目，帶動全場氣氛",
  "可配合頒獎、抽獎或主持人串場，融入活動流程",
  "舞台魔術與互動魔術可依場地與人數彈性規劃",
  "適合公司尾牙、年終聚餐、春酒與企業晚會",
  "可依企業主題或活動需求討論客製化內容",
];

const faqItems = [
  {
    question: "尾牙魔術表演費用是多少？",
    answer: `${FAQ_STAGE_MAGIC_PRICE} 近距離魔術 NT$10,000 起。`,
  },
  {
    question: "15 分鐘與 20–30 分鐘舞台魔術有什麼差別？",
    answer:
      "15 分鐘舞台魔術適合流程較緊湊的尾牙或節目串場；20–30 分鐘則適合尾牙主秀、春酒或企業晚會等需要完整魔術節目的活動。",
  },
  {
    question: "尾牙適合安排多長的魔術演出？",
    answer:
      "舞台魔術常見為完整段落演出，互動魔術則可穿插於入場或用餐時段。實際長度將依當晚流程討論。",
  },
  {
    question: "尾牙魔術適合多少人？",
    answer:
      "舞台魔術適合中大型聚會，互動魔術則可配合桌次或分區進行。實際條件依場地與座位配置評估。",
  },
  {
    question: "桃園、台北、新竹可以演出嗎？",
    answer:
      "可以洽詢各區域的企業活動演出，實際安排與費用依活動地點評估。",
  },
];

export default function AnnualDinnerPage() {
  const jsonLd = buildSeoPageJsonLd({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    serviceName: "尾牙魔術表演",
    breadcrumbs: [
      { name: "首頁", path: "/" },
      { name: "演出服務", path: "/services" },
      { name: "尾牙魔術表演" },
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
          { label: "尾牙魔術表演" },
        ]}
      />

      <SeoHero
        eyebrow="Annual Dinner Magic"
        title="尾牙魔術表演"
        description="專業舞台魔術與互動演出，為企業尾牙、公司年終聚餐與企業晚會規劃適合的魔術節目。"
        primaryCta={{ label: "詢問尾牙魔術演出", href: "/contact" }}
        secondaryCta={{ label: "觀看演出影片", href: "/videos" }}
      />

      <BulletSection
        title="尾牙為什麼適合安排魔術表演？"
        items={whyPoints}
      />

      <ServiceCards
        title="適合企業尾牙的魔術演出形式"
        items={[
          {
            icon: Sparkles,
            title: "舞台魔術｜約 15 分鐘",
            price: "NT$15,000 起",
            description:
              "適合流程較緊湊的尾牙、節目串場或需要精簡演出的活動，能在有限時間內帶動全場焦點。",
            suitable: ["節目串場", "流程緊湊的尾牙", "時段有限的晚會"],
          },
          {
            icon: Star,
            title: "舞台魔術｜約 20–30 分鐘",
            price: "NT$20,000 起",
            description:
              "適合尾牙主秀、春酒、企業晚會等，希望安排較完整魔術節目的活動，可呈現更完整的舞台演出。",
            suitable: ["尾牙主秀", "春酒", "企業晚會", "年終聚餐"],
          },
          {
            icon: Wand2,
            title: "互動／近距離魔術",
            price: "NT$10,000 起",
            description:
              "於賓客席間或活動區域近距離演出，適合穿插在正式流程之間。",
            suitable: ["賓客入場", "開席前", "用餐交流", "活動空檔"],
          },
          {
            icon: Building2,
            title: "企業活動客製化演出",
            price: "依活動規模、演出時間與製作需求報價",
            description:
              "可依企業主題、品牌元素或當晚流程，討論專屬演出內容。",
            suitable: ["品牌活動", "週年慶", "頒獎典禮", "團隊聚會"],
          },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              align="left"
              title="適合的人數與活動場合"
            />
          </AnimatedSection>
          <div className="max-w-3xl space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              舞台魔術適合百人以上的企業尾牙、春酒或晚會，能讓全場賓客同步感受演出重點。
              互動魔術則適合需要分區互動、入場暖場或餐會交流的中大型活動。
            </p>
            <p>
              不論是桃園、台北、新竹或其他地區的企業活動，皆可依場地條件與活動流程討論最適合的安排方式。
            </p>
          </div>
        </div>
      </section>

      <SeoPricingSection
        subtitle="以下價格與全站演出費用一致，實際報價依活動需求評估。"
        pricingLink={{
          label: "查看完整魔術表演費用說明",
          href: "/pricing",
        }}
      />

      <ProcessSection title="演出流程與合作方式" />

      <FaqSection items={faqItems} />

      <RelatedLinks
        links={[
          {
            label: "舞台魔術表演",
            href: "/services/stage-magic",
            description: "了解舞台魔術的適合場合與演出特色",
          },
          {
            label: "魔術表演費用",
            href: "/pricing",
            description: "查看各類魔術演出的起價說明",
          },
        ]}
      />

      <PageCta
        title="預約尾牙魔術演出"
        description="提供活動日期、地點、預計人數與活動需求，我們將依活動內容評估適合的演出方案。"
        buttonLabel="詢問尾牙魔術演出"
      />
    </>
  );
}
