import { BeforeYouGoSection } from "@/components/home/before-you-go-section";
import { DivisionExplorerSection } from "@/components/home/division-explorer-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FoodStorySection } from "@/components/home/food-story-section";
import { HeroSection } from "@/components/home/hero-section";
import { HotelAssistantSection } from "@/components/home/hotel-assistant-section";
import { TransportGuideSection } from "@/components/home/transport-guide-section";
import { TravelerBenefitsSection } from "@/components/home/traveler-benefits-section";
import { TripOverviewSection } from "@/components/home/trip-overview-section";

export default function Page() {
  return (
    <main className="bg-[#f7f4ed]">
      <HeroSection />
      <TravelerBenefitsSection />
      <DivisionExplorerSection />
      <TransportGuideSection />
      <HotelAssistantSection />
      <FoodStorySection />
      <BeforeYouGoSection />
      <TripOverviewSection />
      <FinalCtaSection />
    </main>
  );
}