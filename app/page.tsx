import { HeroSection } from "@/components/landingPage/HeroSection";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Vyroverse } from "@/components/landingPage/vyroverse";
import { ArtGeneratorSection } from "@/components/landingPage/ArtGenerationSection";
import { StatisticsSection } from "@/components/landingPage/statisticsSection";
import { ProductCategories } from "@/components/landingPage/ProductCategories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Vyroverse />
      <ArtGeneratorSection />
      <StatisticsSection />
      <ProductCategories />
    </div>
  );
}
//
