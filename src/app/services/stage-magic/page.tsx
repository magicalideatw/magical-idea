import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SeoHero from "@/components/seo/SeoHero";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata, buildSeoPageJsonLd } from "@/lib/seo";
import { COOPERATION_STEPS } from "@/lib/seo";

const PATH = "/services/stage-magic";

const TITLE = "魔術表演｜專業魔術演出｜魔幻點子表演娛樂";

const DESCRIPTION =
  "魔幻點子表演娛樂提供專業魔術表演，適合企業活動、尾牙、春酒、婚宴與各類商業活動。可依活動人數、場地與流程安排舞台魔術、近距離魔術及互動演出。";

const SHARE_DESCRIPTION =
  "專業魔術表演，適合企業活動、尾牙、春酒、婚宴與各類商業活動，依活動需求安排舞台魔術、近距離魔術與互動演出。";

const SCHEMA_SERVICE_NAME = "魔術表演｜魔幻點子表演娛樂";

const SCHEMA_DESCRIPTION =
  "魔幻點子表演娛樂提供企業活動、尾牙、春酒、婚宴與各類商業活動的魔術表演，可依活動需求安排舞台魔術、近距離魔術及互動演出。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  shareDescription: SHARE_DESCRIPTION,
  path: PATH,
  ogImageAlt: "專業魔術表演現場",
});

const PERFORMANCE_PRICING_TIERS = [
  {
    title: "經典魔術商業秀",
    price: "NT$8,000 起",
    description:
      "約 10–15 分鐘｜精選經典魔術演出，適合企業活動、社區活動、開幕及各類商業場合。",
  },
  {
    title: "近距離魔術",
    price: "NT$10,000 起",
    description:
      "適合餐會、婚宴、品牌活動等需要近距離互動的場合，可穿插於入場、用餐或交流時段。",
  },
  {
    title: "舞台魔術｜約 15 分鐘",
    price: "NT$15,000 起",
    description:
      "適合流程較緊湊、需要精簡舞台節目的場合，作為重點演出段落。",
  },
  {
    title: "舞台魔術｜約 20–30 分鐘",
    price: "NT$20,000 起",
    description:
      "適合尾牙、春酒、企業晚會等需要較完整舞台魔術演出的活動。",
  },
] as const;

const faqItems = [
  {
    question: "魔術表演適合哪些活動？",
    answer:
      "常見於公司尾牙、春酒、企業活動、婚宴、社區活動、商業活動、品牌活動與公開演出。可依流程選擇舞台演出、近距離互動，或兩者搭配。",
  },
  {
    question: "魔術表演可以和觀眾互動嗎？",
    answer:
      "可以。近距離魔術以桌邊或人群互動為主；舞台魔術也可依節目安排邀請觀眾上台。互動程度會依人數、場地與活動性質規劃。",
  },
  {
    question: "魔術表演通常需要多久？",
    answer:
      "經典魔術商業秀約 10–15 分鐘；舞台魔術常見為約 15 分鐘或 20–30 分鐘方案；近距離魔術則依活動流程與覆蓋範圍安排。",
  },
  {
    question: "魔術表演需要舞台嗎？",
    answer:
      "不一定。舞台魔術需要適合全場觀看的演出空間；近距離魔術通常不需要大型舞台。請提供場地型態，以便建議適合的演出形式。",
  },
  {
    question: "魔術表演需要音響嗎？",
    answer:
      "視演出形式而定。近距離魔術設備需求相對單純；舞台魔術通常需要麥克風與適當音響，並視需要搭配燈光。若活動需一併評估設備，可參考活動燈光音響服務。",
  },
  {
    question: "魔術表演費用怎麼計算？",
    answer:
      "依演出形式而異：經典魔術商業秀 NT$8,000 起；近距離魔術 NT$10,000 起；舞台魔術約 15 分鐘 NT$15,000 起；約 20–30 分鐘 NT$20,000 起。企業／大型活動及客製化演出依需求報價。實際費用另依活動日期、地點、場地條件及製作需求評估。",
  },
];

function SectionH2({
  title,
  className = "mb-6 sm:mb-8",
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-xl sm:text-2xl md:text-[1.75rem] font-medium tracking-tight leading-snug ${className}`}
    >
      <span className="gold-gradient-text">{title}</span>
    </h2>
  );
}

function ContentSection({
  title,
  children,
  variant = "surface",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "surface" | "gradient";
}) {
  const bg = variant === "gradient" ? "section-gradient" : "bg-surface";
  return (
    <section className={`section-padding ${bg}`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionH2 title={title} />
          <div className="max-w-3xl">{children}</div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function StageMagicPage() {
  const jsonLd = buildSeoPageJsonLd({
    path: PATH,
    title: TITLE,
    description: SCHEMA_DESCRIPTION,
    serviceName: SCHEMA_SERVICE_NAME,
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
        eyebrow="Magic Performance"
        title="魔術表演"
        description="提供專業魔術表演與活動演出，依照活動形式、觀眾人數、場地條件與活動流程，規劃適合的演出內容，適用於企業活動、尾牙、春酒、婚宴與各類商業活動。"
        primaryCta={{ label: "詢問魔術表演", href: "/contact" }}
        secondaryCta={{ label: "觀看演出影片", href: "/videos" }}
      />

      <ContentSection title="魔術表演適合哪些活動？" variant="surface">
        <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
          <p>
            魔術表演適合公司尾牙與春酒，可依活動流程安排舞台演出或觀眾互動，帶動全場氣氛。
          </p>
          <p>
            企業活動如週年慶、頒獎典禮、家庭日或品牌發表，可選擇全場聚焦的舞台魔術，或穿插於流程中的互動演出。
          </p>
          <p>
            婚宴與訂婚宴可安排精緻魔術段落或近距離互動，為賓客增添驚喜與記憶點。
          </p>
          <p>
            社區活動、開幕與各類商業場合，也適合以魔術演出創造視覺聚焦，並依場地選擇舞台或近距離形式。
          </p>
        </div>
      </ContentSection>

      <ContentSection title="魔術表演有哪些形式？" variant="gradient">
        <div className="space-y-6">
          {[
            {
              name: "舞台魔術",
              text: "適合需要全場觀眾同步觀看的時段，可配合燈光、音響與舞台空間，呈現完整段落，常見於尾牙、春酒或正式節目流程。",
            },
            {
              name: "近距離魔術",
              text: "魔術師在賓客之間或桌邊演出，適合餐敘、交流時段，讓更多觀眾近距離參與。",
            },
            {
              name: "互動式魔術",
              text: "可安排觀眾上台或現場參與，依活動性質調整互動深度，常與舞台或近距離形式結合。",
            },
            {
              name: "精簡型商業演出",
              text: "經典魔術商業秀約 10–15 分鐘，適合企業活動、社區活動、開幕等需要精簡、標準商業節目的場合。",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-surface-elevated/20"
            >
              <p className="font-display text-base sm:text-lg text-white/88 mb-2 tracking-premium">
                {item.name}
              </p>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="魔術表演可以和觀眾互動嗎？" variant="surface">
        <p className="text-white/50 text-sm sm:text-base leading-relaxed">
          可以。魔術表演可以依活動性質安排不同程度的觀眾互動，例如邀請觀眾上台參與、
          現場問答或近距離魔術等。近距離魔術以互動為核心；舞台魔術也可在節目中安排
          短暫的觀眾參與。實際方式會依人數、場地、流程與希望呈現的氣氛一起規劃。
        </p>
      </ContentSection>

      <ContentSection title="魔術表演通常需要多久？" variant="gradient">
        <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
          <p>
            <span className="text-white/70">精簡型商業演出（經典魔術商業秀）</span>
            約 10–15 分鐘，適合流程緊湊的活動段落。
          </p>
          <p>
            <span className="text-white/70">舞台魔術｜約 15 分鐘</span>
            適合需要精簡舞台節目的場合；NT$15,000 起。
          </p>
          <p>
            <span className="text-white/70">舞台魔術｜約 20–30 分鐘</span>
            適合需要較完整舞台內容的尾牙、春酒或企業晚會；NT$20,000 起。
          </p>
          <p>
            <span className="text-white/70">近距離魔術</span>
            則依活動流程、覆蓋桌數或區域安排時間，可與其他時段穿插。
          </p>
          <p>若流程特殊，也可依活動需求客製安排演出時間與形式。</p>
        </div>
      </ContentSection>

      <ContentSection title="魔術表演需要舞台與音響嗎？" variant="surface">
        <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
          <p>
            舞台魔術需要讓全場觀眾能清楚觀看的演出空間，並視活動規模評估舞台動線、
            觀看距離，以及是否需要燈光強調。
          </p>
          <p>
            近距離魔術通常不需要大型舞台，但需預留魔術師走動與與賓客互動的空間。
          </p>
          <p>
            音響需求依演出形式而定：舞台魔術一般需要麥克風與適當音響；近距離魔術
            設備需求相對單純。若活動本身尚未準備音響，可一併評估需求。
          </p>
          <p>
            魔幻點子也提供{" "}
            <Link
              href="/lighting-sound"
              className="text-gold/60 hover:text-gold transition-colors duration-300"
            >
              活動燈光音響
            </Link>
            整合服務，可依照活動規模與舞台魔術需求規劃燈光、音響及現場技術支援。
          </p>
        </div>
      </ContentSection>

      <section className="section-padding section-gradient">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionH2 title="魔術表演價格" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {PERFORMANCE_PRICING_TIERS.map((tier, index) => (
                <article
                  key={tier.title}
                  className="p-6 sm:p-8 rounded-xl border border-gold/10 bg-surface-elevated/20 h-full"
                >
                  <p className="font-display text-lg sm:text-xl text-white/90 mb-2 tracking-premium leading-snug">
                    {tier.title}
                  </p>
                  <p className="font-display text-xl sm:text-2xl gold-gradient-text mb-4 whitespace-nowrap">
                    {tier.price}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 max-w-3xl space-y-3 text-white/45 text-sm sm:text-base leading-relaxed">
              <p>
                企業／大型活動及客製化演出，依活動規模、演出時間與製作需求報價。
              </p>
              <p>
                實際費用依活動日期、地點、演出時間、場地條件、演出內容及製作需求評估。{" "}
                <Link
                  href="/pricing"
                  className="text-gold/60 hover:text-gold transition-colors duration-300"
                >
                  查看完整魔術表演費用
                </Link>
                。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContentSection title="魔術表演如何安排？" variant="surface">
        <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
          <p>
            安排魔術表演時，通常會一併確認活動人數、場地大小、活動流程、希望安排的
            表演時間、觀眾互動方式，以及音響與燈光需求。這些因素都會影響適合的演出
            形式與內容。
          </p>
          <p>
            建議提供活動日期、地點、預計人數、流程表（是否含餐敘、抽獎、致詞等），
            以及場地照片或平面配置，以便評估舞台魔術、近距離魔術或兩者搭配是否合適。
          </p>
          <p>一般合作流程如下：</p>
          <ul className="space-y-3 pt-1">
            {COOPERATION_STEPS.map((step) => (
              <li key={step.step} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <span>
                  <span className="text-white/65">{step.title}</span>
                  {" — "}
                  {step.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <section className="section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <SectionH2 title="魔術表演常見問題" className="mb-8 sm:mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full"
                >
                  <p className="font-display text-base sm:text-lg text-white/90 mb-3 tracking-premium">
                    {item.question}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

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
          {
            label: "活動燈光音響",
            href: "/lighting-sound",
            description: "舞台魔術所需的音響、燈光與現場技術",
          },
        ]}
      />

      <section className="section-padding section-gradient">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <p className="font-display text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
              <span className="gold-gradient-text">預約魔術表演</span>
            </p>
            <p className="text-white/45 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed text-balance">
              提供活動日期、地點、預計人數與場地資訊，我們將依活動內容評估適合的魔術演出方案。
            </p>
            <Link
              href="/contact"
              className="btn-primary justify-center text-sm sm:text-base mx-auto inline-flex"
            >
              詢問魔術表演
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
