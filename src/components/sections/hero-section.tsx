
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added Input import
import { ArrowRight } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section id="home" className="bg-primary text-white py-28 md:py-48"> 
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in leading-normal max-w-3xl mx-auto font-heading">
          Amplify Your Legal Practice with AI
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto animate-slide-in-up animation-delay-300 font-body"> 
          Lexamplify leverages cutting-edge AI to streamline your legal workflows, from drafting and research to case management. Empower your practice, save time, and achieve better outcomes.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mt-8 max-w-lg mx-auto animate-slide-in-up animation-delay-600">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow bg-white/20 text-white placeholder-neutral-300 border-neutral-500 focus:ring-white focus:border-white py-3.5 px-4 text-lg sm:text-base"
          />
          <Button 
            type="submit" // Assuming this will be part of a form
            size="lg" 
            className="text-lg py-3.5 px-8 transition-all duration-300 ease-in-out bg-white hover:bg-neutral-200 text-primary hover:shadow-lg hover:scale-105 group font-body shrink-0"
          >
            <>
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-primary" />
            </>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
