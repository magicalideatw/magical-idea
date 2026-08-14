import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PRICING } from "@/lib/constants";
import { PRICING_DISCLAIMER } from "@/lib/seo";

type PricingSectionProps = {
  title?: string;
  subtitle?: string;
  showDisclaimer?: boolean;
  pricingLink?: { label: string; href: string };
};

export default function SeoPricingSection({
  title = "演出費用",
  subtitle,
  showDisclaimer = true,
  pricingLink,
}: PricingSectionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading align="left" title={title} description={subtitle} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px max-w-4xl rounded-xl overflow-hidden border border-gold/10">
          {PRICING.tiers.map((tier, index) => (
            <AnimatedSection key={tier.title} delay={index * 0.06}>
              <div className="px-5 sm:px-6 py-8 sm:py-10 bg-black/30 h-full">
                <h3 className="font-display text-base sm:text-lg text-white/90 mb-2 tracking-premium leading-snug">
                  {tier.title}
                </h3>
                <p className="text-gold/75 text-base sm:text-lg font-light whitespace-nowrap">
                  {tier.price}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {showDisclaimer && (
          <AnimatedSection delay={0.1}>
            <p className="mt-6 max-w-3xl text-white/40 text-sm leading-relaxed">
              {PRICING_DISCLAIMER}
            </p>
          </AnimatedSection>
        )}
        {pricingLink && (
          <AnimatedSection delay={0.12}>
            <p className="mt-4">
              <Link
                href={pricingLink.href}
                className="text-gold/70 text-sm hover:text-gold transition-colors"
              >
                {pricingLink.label} →
              </Link>
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
