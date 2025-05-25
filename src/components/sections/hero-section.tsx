'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section id="home" className="bg-black text-white py-28 md:py-48"> 
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in leading-tight max-w-3xl mx-auto font-heading">
          Amplify Your Legal Practice with AI
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto animate-slide-in-up animation-delay-300 font-body"> 
          Lexamplify leverages cutting-edge AI to streamline your legal workflows, from drafting and research to case management. Empower your practice, save time, and achieve better outcomes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-in-up animation-delay-600">
          <Button asChild size="lg" className="text-lg py-3.5 px-8 transition-all duration-300 ease-in-out bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/30 hover:scale-105 group font-body">
            <Link href="#contact">
              <>
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;