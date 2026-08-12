"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import {
  getFeaturedVideo,
  getYoutubeEmbedUrl,
  getYoutubeThumbnail,
} from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import VideoPlayerModal from "./VideoPlayerModal";

export default function FeaturedVideo() {
  const featured = getFeaturedVideo();
  const [active, setActive] = useState(false);

  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Performance Videos"
            title="演出影片"
            description="看看魔術在現場發生的瞬間"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <button
              type="button"
              onClick={() => setActive(true)}
              className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/25 transition-colors duration-500 text-left"
            >
              <Image
                src={getYoutubeThumbnail(featured.youtubeId)}
                alt={featured.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-black ml-1" />
                </div>
              </div>
            </button>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-0.5">
              <h3 className="font-display text-white/90 text-lg sm:text-xl tracking-premium">
                {featured.title}
              </h3>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 font-en text-sm text-gold/70 hover:text-gold tracking-wide transition-colors group shrink-0"
              >
                查看更多演出影片
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {active && (
        <VideoPlayerModal
          embedUrl={getYoutubeEmbedUrl(featured.youtubeId)}
          title={featured.title}
          onClose={() => setActive(false)}
        />
      )}
    </section>
  );
}
