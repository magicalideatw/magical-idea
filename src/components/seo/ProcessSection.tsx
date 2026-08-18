import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { COOPERATION_STEPS } from "@/lib/seo";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessSectionProps = {
  title?: string;
  steps?: readonly ProcessStep[];
};

export default function ProcessSection({
  title = "合作流程",
  steps = COOPERATION_STEPS,
}: ProcessSectionProps) {
  return (
    <section className="section-padding section-gradient">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeading title={title} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.08}>
              <article className="p-6 rounded-xl border border-white/[0.06] bg-surface-elevated/20 h-full">
                <p className="font-en text-gold/50 text-xs tracking-luxury mb-3">
                  {item.step}
                </p>
                <h3 className="font-display text-lg text-white/90 mb-2 tracking-premium">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
