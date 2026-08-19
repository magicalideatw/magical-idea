"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOME_HERO_SUBTITLE } from "@/lib/home-seo";

const EASE = [0.16, 1, 0.3, 1] as const;
const PARALLAX_MAX_X = 8;
const PARALLAX_MAX_Y = 6;
const HERO_IMAGE_ALT = "舞台魔術與活動魔術表演現場";

function HeroContent() {
  return (
    <div className="max-w-[580px]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className="font-display font-medium text-gold text-sm sm:text-[clamp(1.75rem,2.2vw,2.25rem)] tracking-wide mb-3 sm:mb-5"
      >
        魔幻點子表演娛樂
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="font-display font-medium text-white/95 tracking-tight [word-break:keep-all] text-[clamp(1.625rem,6.2vw,4rem)] leading-[1.3]"
      >
        魔術表演｜舞台魔術與活動演出
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="mt-3 sm:mt-5 text-white/45 text-xs sm:text-sm tracking-wide [word-break:keep-all] leading-relaxed"
      >
        {HOME_HERO_SUBTITLE}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.65, ease: EASE }}
        className="mt-5 sm:mt-8"
      >
        <Link
          href="/contact"
          className="btn-primary w-full sm:w-auto justify-center sm:justify-start text-sm py-3.5 sm:py-0"
        >
          立即詢價
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}

function useHeroMotionPrefs() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 640px)");

    const updateReducedMotion = () => setReducedMotion(reducedMotionQuery.matches);
    const updateDesktop = () => setIsDesktop(desktopQuery.matches);

    updateReducedMotion();
    updateDesktop();

    reducedMotionQuery.addEventListener("change", updateReducedMotion);
    desktopQuery.addEventListener("change", updateDesktop);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateReducedMotion);
      desktopQuery.removeEventListener("change", updateDesktop);
    };
  }, []);

  return { reducedMotion, isDesktop };
}

type HeroImageProps = {
  enableParallax?: boolean;
  layout?: "desktop" | "mobile";
};

function HeroImage({ enableParallax = false, layout = "desktop" }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const { reducedMotion, isDesktop } = useHeroMotionPrefs();

  const parallaxEnabled = enableParallax && isDesktop && !reducedMotion;

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!parallaxEnabled) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

      setParallax({
        x: relativeX * PARALLAX_MAX_X * 2,
        y: relativeY * PARALLAX_MAX_Y * 2,
      });
    },
    [parallaxEnabled],
  );

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  const parallaxTransform = parallaxEnabled
    ? `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
    : undefined;

  if (layout === "mobile") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div
          className={`relative h-full w-full ${reducedMotion ? "" : "hero-ken-burns"}`}
        >
          <Image
            src="/hero-magic.jpg"
            alt={HERO_IMAGE_ALT}
            fill
            priority
            className="object-cover object-[center_38%]"
            sizes="100vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseMove={parallaxEnabled ? handleMouseMove : undefined}
      onMouseLeave={parallaxEnabled ? handleMouseLeave : undefined}
    >
      <div
        className={parallaxEnabled ? "hero-parallax-layer" : undefined}
        style={parallaxTransform ? { transform: parallaxTransform } : undefined}
      >
        <div className={reducedMotion ? undefined : "hero-ken-burns"}>
          <Image
            src="/hero-magic.jpg"
            alt={HERO_IMAGE_ALT}
            width={4894}
            height={3263}
            priority
            className="block h-auto w-full max-w-full"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-background">
      <div className="relative w-full max-w-[100vw]">
        <div className="hidden sm:block">
          <HeroImage enableParallax layout="desktop" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 via-45% to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative h-[clamp(380px,105vw,420px)] w-full overflow-hidden sm:hidden">
          <HeroImage layout="mobile" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] from-20% via-black/55 via-55% to-transparent"
            aria-hidden
          />
        </div>

        <div
          className="relative z-10 mx-6 max-w-full rounded-t-[20px] bg-[#030303] px-6 pb-8 pt-6 -mt-[85px] sm:absolute sm:inset-0 sm:mx-0 sm:mt-0 sm:flex sm:items-center sm:rounded-none sm:bg-transparent sm:px-8 lg:px-12 sm:pb-0 sm:pt-0"
        >
          <div className="pointer-events-auto mx-auto w-full max-w-[1400px] sm:px-0">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}
