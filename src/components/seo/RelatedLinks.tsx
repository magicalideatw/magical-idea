import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type RelatedLinksProps = {
  links: RelatedLink[];
};

export default function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-white/[0.04] bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <p className="font-en text-gold/50 text-[10px] tracking-luxury uppercase mb-6 text-center">
            Related Services
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-1 min-w-[200px] p-5 rounded-xl border border-white/[0.06] bg-surface-elevated/20 hover:border-gold/20 transition-colors text-center sm:text-left"
              >
                <p className="font-display text-white/85 text-base mb-1">
                  {link.label}
                </p>
                <p className="text-white/40 text-xs sm:text-sm">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
