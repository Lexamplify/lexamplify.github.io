import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import AboutUsSection from "@/components/sections/about-us-section";
import ContactSection from "@/components/sections/contact-section";
import JudgementPredictionSection from "@/components/sections/judgement-prediction-section";

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <JudgementPredictionSection />
      <ContactSection />
    </main>
  );
}
