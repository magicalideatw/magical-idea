import Image from "next/image";
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
import { brandHeading, createPageMetadata } from "@/lib/seo";

const PATH = "/services";

const TITLE = "魔術表演｜企業尾牙・春酒・校園・婚宴｜魔幻點子表演娛樂";

const DESCRIPTION =
  "提供專業魔術表演服務，包含舞台魔術、企業尾牙春酒、家庭日、校園活動、婚宴魔術與沿桌互動演出，打造適合各種活動的精彩演出。";

const KEYWORDS = [
  "魔術表演",
  "舞台魔術",
  "企業尾牙",
  "尾牙魔術",
  "春酒魔術",
  "校園魔術",
  "婚宴魔術",
  "沿桌魔術",
  "企業活動表演",
] as const;

export const metadata = {
  ...createPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    ogImageAlt: "魔幻點子舞台魔術表演服務",
  }),
  keywords: [...KEYWORDS],
};

const iconMap = {
  sparkles: Sparkles,
  building: Building2,
  users: Users,
  graduation: GraduationCap,
  heart: Heart,
  wand: Wand2,
} as const;

/** 前台顯示標題（不修改 constants 內部資料） */
const SERVICE_DISPLAY_TITLES: Record<string, string> = {
  stage: "舞台魔術秀",
  corporate: "尾牙・春酒魔術表演",
  family: "企業家庭日",
  campus: "校園魔術演出",
  wedding: "婚宴魔術",
  table: "沿桌魔術",
};

/** 各分類介紹（約 40～70 字） */
const SERVICE_INTROS: Record<string, string> = {
  stage:
    "以大型視覺效果與專業舞台呈現，適合企業晚會、頒獎典禮與大型活動開場或壓軸，帶來震撼全場的魔術演出。",
  corporate:
    "為企業尾牙、春酒量身規劃魔術橋段，可融入頒獎、抽獎與串場環節，帶動現場氣氛，讓員工留下深刻印象。",
  family:
    "適合企業家庭日與園遊會的互動魔術，親子同樂、安全有趣，在輕鬆氛圍中為大小朋友創造難忘的魔法時光。",
  campus:
    "結合教育與娛樂的校園魔術演出，適合開學典禮、畢業典禮與社團活動，依活動主題規劃符合校園需求的表演內容。",
  wedding:
    "為新人與賓客量身設計婚宴魔術橋段，在浪漫氛圍中穿插驚喜與互動，讓婚禮宴會增添難忘的感動時刻。",
  table:
    "魔術師於宴會桌間近距離互動演出，每桌精采體驗約五至十分鐘，不影響用餐流程，適合婚宴、餐會與 VIP 晚宴。",
};

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

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  stage: {
    src: "/images/stage-show.jpg",
    alt: "魔幻點子舞台魔術表演現場",
  },
  corporate: {
    src: "/images/year-end-party-magic.png",
    alt: "尾牙春酒企業活動魔術表演",
  },
  family: {
    src: "/images/corporate-family-day-magic.png",
    alt: "企業家庭日活動魔術表演",
  },
  campus: {
    src: "/images/school-event.jpg",
    alt: "校園活動魔術表演現場",
  },
  wedding: {
    src: "/images/wedding-magic.jpg",
    alt: "婚宴魔術表演現場",
  },
  table: {
    src: "/images/close-up-magic.jpg",
    alt: "沿桌魔術表演現場",
  },
};

function hasServiceImage(serviceId: string) {
  return serviceId in SERVICE_IMAGES;
}

function ServiceVisual({
  serviceId,
  icon: Icon,
  isEven,
}: {
  serviceId: string;
  icon: typeof Sparkles;
  isEven: boolean;
}) {
  const image = SERVICE_IMAGES[serviceId];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl gold-border ${
        !isEven ? "lg:order-1" : ""
      } ${
        image
          ? "order-1 aspect-[16/10] max-h-[260px] sm:max-h-[300px] lg:max-h-none lg:aspect-[4/3]"
          : "aspect-[4/3]"
      }`}
    >
      {image ? (
        <div className="group relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-surface-elevated to-surface flex items-center justify-center">
          <Icon className="w-24 h-24 text-gold/20" />
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Services"
              title={brandHeading("魔術表演服務")}
              titleAs="h1"
              description="從震撼全場的舞台魔術秀，到親密互動的沿桌表演，我們提供完整的魔術娛樂解決方案。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading align="left" title="魔術演出類型" />
          </AnimatedSection>

          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              const details = serviceDetails[service.id];
              const isEven = index % 2 === 0;
              const mobileImageFirst = hasServiceImage(service.id);
              const displayTitle =
                SERVICE_DISPLAY_TITLES[service.id] ?? service.title;
              const intro =
                SERVICE_INTROS[service.id] ?? service.description;

              return (
                <AnimatedSection key={service.id} delay={0.1}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div
                      className={`${!isEven ? "lg:order-2" : ""} ${
                        mobileImageFirst ? "order-2" : ""
                      }`}
                    >
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-gold" />
                        </div>
                        <span className="text-gold/60 text-sm tracking-widest uppercase">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                        {displayTitle}
                      </h3>
                      <p className="text-white/60 leading-relaxed mb-8 font-light">
                        {intro}
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
                      {service.id === "corporate" && (
                        <Link
                          href="/year-end-party"
                          className="inline-flex items-center gap-2 mt-6 text-gold/70 text-sm hover:text-gold transition-colors"
                        >
                          了解尾牙魔術表演方案
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>

                    <ServiceVisual
                      serviceId={service.id}
                      icon={Icon}
                      isEven={isEven}
                    />
                  </div>

                  {index < SERVICES.length - 1 && (
                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  )}
                </AnimatedSection>
              );
            })}
          </div>
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

      <CTASection title="為你的活動打造精彩魔術演出" />
    </>
  );
}
