import { HeroSection } from "@/components/landingPage/heroSection";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Vyroverse } from "@/components/landingPage/vyroverse";
import { ArtGeneratorSection } from "@/components/landingPage/artGeneratorSection";
import { StatisticsSection } from "@/components/landingPage/statisticsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Vyroverse />
      <ArtGeneratorSection />
      <StatisticsSection />
    </div>
  );
}
//
