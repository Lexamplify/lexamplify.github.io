
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-background text-foreground py-24 md:py-40">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight max-w-3xl mx-auto">
          Amplify Your Legal Practice with AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in-up animation-delay-300">
          Lexamplify leverages cutting-edge AI to streamline your legal workflows, from drafting and research to case management. Empower your practice, save time, and achieve better outcomes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-in-up animation-delay-600">
          <Button asChild size="lg" className="text-lg py-3 px-8 transition-all duration-300 ease-in-out hover:shadow-primary/30 hover:scale-105 group">
            <Link href="#contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg py-3 px-8 border-primary/70 text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 group">
            <Link href="#"> {/* Updated to # or actual pricing page link */}
              <Tag className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
