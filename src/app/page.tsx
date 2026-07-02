import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import PhotoGallery from "@/components/PhotoGallery";
import { VideoGridWithHeading } from "@/components/VideoGrid";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PhotoGallery />
      <VideoGridWithHeading />
      <CaseStudies />
      <CTASection />
    </>
  );
}
