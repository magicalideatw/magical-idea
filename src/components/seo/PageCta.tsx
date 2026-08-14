import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type PageCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
};

export default function PageCta({
  title,
  description,
  buttonLabel,
  href = "/contact",
}: PageCtaProps) {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight mb-5 sm:mb-6 leading-tight">
            <span className="gold-gradient-text">{title}</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed text-balance">
            {description}
          </p>
          <Link
            href={href}
            className="btn-primary justify-center text-sm sm:text-base mx-auto"
          >
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
