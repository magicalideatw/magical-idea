"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

function GalleryItem({
  image,
  index,
  className = "",
}: {
  image: (typeof GALLERY_IMAGES)[number];
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl gold-border ${className}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          sizes={
            index === 0
              ? "(max-width: 640px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, 33vw"
          }
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-700 ease-out">
        <p className="font-display text-white/90 text-sm sm:text-base tracking-premium">
          {image.alt}
        </p>
      </div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            subtitle="Performance Gallery"
            title="演出精彩瞬間"
            description="每一場演出都是獨一無二的魔法體驗，為您的活動創造難忘回憶。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.alt}
              image={image}
              index={index}
              className={
                index === 0
                  ? "sm:col-span-2 sm:row-span-2 aspect-[16/10] sm:aspect-auto sm:min-h-[420px]"
                  : "aspect-[4/3]"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
