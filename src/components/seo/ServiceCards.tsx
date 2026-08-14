import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export type ServiceCardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  suitable?: string[];
  price?: string;
};

type ServiceCardsProps = {
  title: string;
  subtitle?: string;
  items: ServiceCardItem[];
};

export default function ServiceCards({
  title,
  subtitle,
  items,
}: ServiceCardsProps) {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading title={title} description={subtitle} />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/8 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-white/90 mb-3 tracking-premium">
                    {item.title}
                  </h3>
                  {item.price && (
                    <p className="text-gold/70 text-sm mb-3">{item.price}</p>
                  )}
                  <p className="text-white/45 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.suitable && item.suitable.length > 0 && (
                    <>
                      <p className="text-gold/50 text-xs uppercase tracking-wider mb-2">
                        適合
                      </p>
                      <ul className="space-y-1.5">
                        {item.suitable.map((s) => (
                          <li
                            key={s}
                            className="text-white/40 text-sm flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold/50" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
