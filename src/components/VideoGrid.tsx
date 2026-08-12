"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  VIDEOS,
  getYoutubeEmbedUrl,
  getYoutubeThumbnail,
} from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import VideoPlayerModal from "./VideoPlayerModal";

interface ActiveVideo {
  embedUrl: string;
  title: string;
}

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const sortedVideos = [...VIDEOS].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {sortedVideos.map((video, index) => (
          <AnimatedSection key={video.id} delay={index * 0.08}>
            <article>
              <motion.button
                type="button"
                onClick={() =>
                  setActiveVideo({
                    embedUrl: getYoutubeEmbedUrl(video.youtubeId),
                    title: video.title,
                  })
                }
                className="group relative w-full aspect-video rounded-xl overflow-hidden border border-gold/10 hover:border-gold/25 transition-colors duration-500 text-left"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={getYoutubeThumbnail(video.youtubeId)}
                  alt={video.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black ml-1" />
                  </div>
                </div>
              </motion.button>

              <div className="mt-3 sm:mt-4 px-0.5">
                <h3 className="font-display text-white/90 text-base sm:text-lg tracking-premium">
                  {video.title}
                </h3>
                {"description" in video && video.description && (
                  <p className="text-white/40 text-sm mt-1 line-clamp-1">
                    {video.description}
                  </p>
                )}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      {activeVideo && (
        <VideoPlayerModal
          embedUrl={activeVideo.embedUrl}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}

export function VideoGridWithHeading() {
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
        <VideoGrid />
      </div>
    </section>
  );
}
