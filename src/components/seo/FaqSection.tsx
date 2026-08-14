import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export default function FaqSection({
  title = "常見問題",
  items,
}: FaqSectionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading title={title} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.06}>
              <article className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                <h3 className="font-display text-base sm:text-lg text-white/90 mb-3 tracking-premium">
                  {item.question}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
