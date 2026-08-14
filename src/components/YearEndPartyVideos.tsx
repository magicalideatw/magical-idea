"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import {
  VIDEOS,
  getYoutubeEmbedUrl,
  getYoutubeThumbnail,
} from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import VideoPlayerModal from "./VideoPlayerModal";

const corporateVideos = [...VIDEOS]
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .slice(0, 2);

export default function YearEndPartyVideos() {
  const [active, setActive] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Performance Videos"
            title="實際演出影片"
            description="了解實際舞台演出效果與現場互動方式。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {corporateVideos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 0.08}>
              <article>
                <button
                  type="button"
                  onClick={() =>
                    setActive({
                      embedUrl: getYoutubeEmbedUrl(video.youtubeId),
                      title: video.title,
                    })
                  }
                  className="group relative w-full aspect-video rounded-xl overflow-hidden border border-gold/10 hover:border-gold/25 transition-colors duration-500 text-left"
                >
                  <Image
                    src={getYoutubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black ml-1" />
                    </div>
                  </div>
                </button>
                <h3 className="mt-3 sm:mt-4 font-display text-white/90 text-base sm:text-lg tracking-premium">
                  {video.title}
                </h3>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 font-en text-sm text-gold/70 hover:text-gold tracking-wide transition-colors group"
            >
              觀看更多演出
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {active && (
        <VideoPlayerModal
          embedUrl={active.embedUrl}
          title={active.title}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
