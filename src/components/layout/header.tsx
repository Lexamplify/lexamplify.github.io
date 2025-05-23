
'use client';
import Link from 'next/link';
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, CalendarPlus, Tag } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#contact', label: 'Book a Demo', icon: <CalendarPlus className="mr-2 h-4 w-4"/> },
  { href: '#', label: 'Pricing', icon: <Tag className="mr-2 h-4 w-4"/> },
  { href: '#', label: 'Login', icon: <LogIn className="mr-2 h-4 w-4"/> },
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
        
        <nav className="hidden md:flex gap-4 items-center">
          {navLinks.map((link, index) => (
            <Button key={link.label} asChild variant={index === 0 ? "default" : "ghost"} size="sm" className={index === 0 ? "transition-all duration-300 ease-in-out hover:shadow-lg group" : "text-foreground/80 hover:text-primary"}>
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
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
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link, index) => (
                     <Button key={link.label} asChild variant={index === 0 ? "default" : "ghost"} className="justify-start text-lg py-3" onClick={handleLinkClick}>
                        <Link href={link.href}>
                         {link.icon}
                         {link.label}
                        </Link>
                    </Button>
                  ))}
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
