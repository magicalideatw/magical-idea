import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type SeoHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function SeoHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: SeoHeroProps) {
  return (
    <section className="pb-16 sm:pb-20 hero-gradient noise-overlay">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="font-en text-gold/60 text-[10px] sm:text-xs tracking-luxury uppercase mb-4">
              {eyebrow}
            </p>
            <h1 className="font-display font-medium text-white/95 tracking-tight [word-break:keep-all] text-[clamp(1.75rem,5vw,3rem)] leading-[1.2] mb-5 sm:mb-6">
              {title}
            </h1>
            <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
              {description}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href={primaryCta.href}
                className="btn-primary justify-center text-sm sm:text-base"
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-secondary justify-center text-sm sm:text-base"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
