import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import VideoGrid from "@/components/VideoGrid";
import CTASection from "@/components/CTASection";
import { brandHeading, createPageMetadata } from "@/lib/seo";

const PATH = "/videos";

const TITLE = "演出影片｜舞台魔術與活動演出｜魔幻點子表演娛樂";

const DESCRIPTION =
  "觀看魔幻點子表演娛樂的舞台魔術、沿桌互動及國際賽事精彩影片，了解企業尾牙、婚宴與校園活動的魔術演出現場。";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "魔幻點子表演娛樂舞台魔術演出影片",
});

export default function VideosPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Performance Videos"
              title={brandHeading("演出影片")}
              titleAs="h1"
              description="精選舞台魔術、沿桌互動及國際賽事精彩回顧。點擊播放，感受現場的震撼與驚喜。"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <VideoGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
