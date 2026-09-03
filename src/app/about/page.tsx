import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { SITE, EXPERIENCES } from "@/lib/constants";
import {
  brandHeading,
  createPageMetadata,
  getOrganizationSchema,
  SITE_URL,
} from "@/lib/seo";
import { Award, Globe, Star, Trophy } from "lucide-react";
import AboutCta from "./AboutCta";
import AboutWhyChoose from "./AboutWhyChoose";
import ServiceInformationSection from "@/components/ServiceInformationSection";
import { aboutServiceInfo } from "@/lib/service-info/about-service-info";

const PATH = "/about";

const TITLE = "關於魔幻點子｜專業魔術表演團隊｜魔幻點子表演娛樂";

const DESCRIPTION =
  "魔幻點子表演娛樂專業提供舞台魔術、企業活動、婚宴、校園及各類活動魔術演出。FISM世界魔術大賽台灣代表，擁有超過20年表演經驗，為活動打造精彩難忘的魔法體驗。";

const KEYWORDS = [
  "魔術表演",
  "舞台魔術",
  "企業活動",
  "企業尾牙",
  "春酒",
  "婚宴魔術",
  "校園演出",
  "活動魔術",
  "FISM",
  "Magic Castle",
] as const;

const OFFERED_SERVICES = [
  {
    title: "舞台魔術",
    description:
      "大型舞台視覺效果，結合燈光音響與互動設計，打造震撼全場的開場或壓軸演出。",
  },
  {
    title: "企業活動魔術",
    description:
      "為企業尾牙、春酒、家庭日及品牌活動量身規劃，融入活動流程帶動現場氣氛。",
  },
  {
    title: "婚宴魔術",
    description:
      "為婚禮增添浪漫與驚喜，以精緻魔術為新人與賓客創造難忘的幸福時刻。",
  },
  {
    title: "校園活動魔術",
    description:
      "結合教育與娛樂的校園魔術秀，適合校慶、畢業典禮與社團活動。",
  },
] as const;

export const metadata = {
  ...createPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    ogImageAlt: "魔幻點子表演娛樂舞台魔術表演現場",
  }),
  keywords: [...KEYWORDS],
};

const experienceIcons = [Globe, Award, Star, Trophy];

export default function AboutPage() {
  const organization = getOrganizationSchema();
  const pageUrl = `${SITE_URL}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "zh-TW",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": organization["@id"] },
        author: {
          "@type": "Organization",
          name: SITE.name,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="About Us"
              title={brandHeading("關於我們")}
              titleAs="h1"
              description="魔幻點子表演娛樂，致力於為台灣各類活動帶來最頂尖的魔術體驗與活動娛樂規劃。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gold-border gold-glow">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                  alt="魔幻點子表演娛樂專業舞台魔術表演團隊"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-display text-3xl gold-gradient-text">
                    {SITE.name}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    國際級魔術表演 × 活動娛樂規劃
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
                用魔法，創造難忘的時刻
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed font-light">
                <p>
                  魔幻點子表演娛樂匯集多位具備國際競賽得獎經歷的專業魔術師，
                  以超過二十年的豐富演出經驗，為企業、學校、政府及婚宴客戶
                  提供量身定制的魔術表演服務。
                </p>
                <p>
                  團隊曾代表台灣參加 FISM 世界魔術大賽，並於 Magic Castle 獲得特別獎，
                  這份國際認可是我們持續追求卓越的最好證明。
                </p>
                <p>
                  我們不僅提供精彩魔術演出，更擅長將魔術融入尾牙、春酒、頒獎、
                  婚宴等活動流程，讓魔術成為活動中不可或缺的亮點與記憶。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading subtitle="Experience" title="專業經歷" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((item, index) => {
              const Icon = experienceIcons[index];
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-gold/10 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Services"
              title="我們提供的魔術表演"
              description="依活動形式與場地需求，提供適合的魔術演出內容。"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFERED_SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <article className="p-8 rounded-2xl bg-surface-elevated/50 border border-gold/10 h-full">
                  <h3 className="font-display text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AboutWhyChoose />
      <AboutCta />

      <ServiceInformationSection content={aboutServiceInfo} />
    </>
  );
}
