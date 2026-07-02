"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VIDEOS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {VIDEOS.map((video, index) => (
          <AnimatedSection key={video.id} delay={index * 0.1}>
            <motion.button
              type="button"
              onClick={() => setActiveVideo(video.embedUrl)}
              className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden gold-border text-left"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 gold-glow">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="font-display text-white/90 text-base sm:text-lg mb-1 tracking-premium">{video.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm">{video.description}</p>
              </div>
            </motion.button>
          </AnimatedSection>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="演出影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="關閉影片"
            >
              ✕
            </button>
          </div>
        </div>
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
            description="精選舞台魔術、沿桌互動及國際賽事精彩回顧，感受現場的震撼與驚喜。"
          />
        </AnimatedSection>
        <VideoGrid />
      </div>
    </section>
  );
}
