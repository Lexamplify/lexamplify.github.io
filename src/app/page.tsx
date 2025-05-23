
import HeroSection from "@/components/sections/hero-section";
import TrustedBySection from "@/components/sections/trusted-by-section";
import FeaturesSection from "@/components/sections/features-section";
import ValuePropSection from "@/components/sections/value-prop-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import AboutUsSection from "@/components/sections/about-us-section";
import JudgementPredictionSection from "@/components/sections/judgement-prediction-section";
import ContactSection from "@/components/sections/contact-section";


export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <ValuePropSection />
      <TestimonialsSection />
      <JudgementPredictionSection />
      <AboutUsSection />
      <ContactSection />
    </main>
  );
}
