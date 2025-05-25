
'use client';
import Link from 'next/link';
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, CalendarPlus } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#contact', label: 'Book a Demo', icon: <CalendarPlus className="mr-2 h-4 w-4"/> },
  { href: '#', label: 'Login', icon: <LogIn className="mr-2 h-4 w-4"/> },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <LexamplifyLogo />
        </Link>
        
        <nav className="hidden md:flex gap-2 items-center"> {/* Reduced gap for closer buttons */}
          {navLinks.map((link, index) => (
            <Button 
              key={link.label} 
              asChild 
              variant={link.label === 'Book a Demo' ? "default" : "ghost"} 
              size="sm" 
              className={`${link.label === 'Book a Demo' ? "transition-all duration-300 ease-in-out hover:shadow-lg group" : "text-foreground/80 hover:text-primary"} px-4 py-2`} // Added explicit padding
            >
              <Link href={link.href}>
                <>
                  {link.icon}
                  {link.label}
                </>
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
                <Link href="/" className="mb-8 flex items-center" onClick={handleLinkClick}> {/* Increased mb */}
                  <LexamplifyLogo />
                </Link>
                <nav className="flex flex-col space-y-4"> {/* Increased space-y */}
                  {navLinks.map((link) => (
                     <Button 
                        key={link.label} 
                        asChild 
                        variant={link.label === 'Book a Demo' ? "default" : "ghost"} 
                        className="justify-start text-base py-3" // Adjusted text size
                        onClick={handleLinkClick}
                      >
                        <Link href={link.href}>
                         <>
                           {link.icon}
                           {link.label}
                         </>
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
