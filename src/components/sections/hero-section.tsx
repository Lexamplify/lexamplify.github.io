'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Legal Technology Background" 
          layout="fill" 
          objectFit="cover"
          priority
          data-ai-hint="abstract technology" 
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in leading-tight">
          Amplify Your Legal Practice with the Power of AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-in-up animation-delay-300">
          Draft smarter. Research faster. Manage cases seamlessly. Lexamplify is designed for the modern Indian legal professional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-up animation-delay-600">
          <Button asChild size="lg" className="text-lg py-3 px-8 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <Link href="#contact">Join Waitlist</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg py-3 px-8 border-primary text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <Link href="#features">See How It Works</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;
