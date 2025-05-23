
'use client';
import Link from 'next/link';
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#value-prop', label: 'Why Lexamplify?' },
  { href: '#ai-prediction', label: 'AI Prediction' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#home" className="mr-6 flex items-center space-x-2" onClick={handleLinkClick}>
          <LexamplifyLogo />
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="transition-all duration-300 ease-in-out hover:shadow-lg group">
            <Link href="#contact">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="p-4">
                <Link href="#home" className="mb-6 flex items-center" onClick={handleLinkClick}>
                  <LexamplifyLogo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 transition-all duration-300 ease-in-out hover:shadow-lg group" onClick={handleLinkClick}>
                    <Link href="#contact">
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
