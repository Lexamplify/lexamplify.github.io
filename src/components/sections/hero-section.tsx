
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background text-foreground py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Abstract Legal Technology Background" 
          layout="fill" 
          objectFit="cover"
          priority
          data-ai-hint="abstract legal data" 
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-8 animate-fade-in leading-tight max-w-4xl mx-auto">
          The Future of Legal Practice in India is Here
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-in-up animation-delay-300">
          Lexamplify leverages cutting-edge AI to streamline your legal workflows, from drafting and research to case management. Empower your practice, save time, and achieve better outcomes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-in-up animation-delay-600">
          <Button asChild size="lg" className="text-lg py-3 px-8 transition-all duration-300 ease-in-out hover:shadow-primary/30 hover:scale-105 group">
            <Link href="#contact">
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg py-3 px-8 border-primary/70 text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 group">
            <Link href="#features">
              <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Explore Features
            </Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;
