import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import VideoGrid from "@/components/VideoGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "演出影片",
  description:
    "觀看魔幻點子表演娛樂的精彩演出影片，包含舞台魔術、沿桌互動及國際賽事回顧。",
};

export default function VideosPage() {
  return (
    <>
      <section className="pt-32 pb-20 hero-gradient noise-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Performance Videos"
              title="演出影片"
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
