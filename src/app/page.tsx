import AboutSection from "@/components/sections/about";
import FacilitiesSection from "@/components/sections/facilities";
import HeroSection from "@/components/sections/hero";
import OwnerSection from "@/components/sections/owner";
import TrainersSection from "@/components/sections/trainers";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <TrainersSection />
      <OwnerSection />
    </div>
  );
}
