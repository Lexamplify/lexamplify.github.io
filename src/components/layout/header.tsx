'use client';
import Link from 'next/link';
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About Us' },
  { href: '#ai-prediction', label: 'AI Prediction' },
  { href: '#contact', label: 'Contact Us' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <LexamplifyLogo />
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="transition-all duration-300 ease-in-out hover:shadow-lg">
            <Link href="#contact">Join Waitlist</Link>
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
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="p-4">
                <Link href="#home" className="mb-6 flex items-center" onClick={handleLinkClick}>
                  <LexamplifyLogo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 transition-all duration-300 ease-in-out hover:shadow-lg" onClick={handleLinkClick}>
                    <Link href="#contact">Join Waitlist</Link>
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
