import { FaqsSection } from "@/components/FaqsSection";
import { HeroSection } from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TaglineBand } from "@/components/TaglineBand";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FaqsSection />
        <TaglineBand />
        <ReviewsSection />
        <ServiceAreasSection />
      </main>
      <SiteFooter />
    </>
  );
}
