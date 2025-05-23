
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { href: '#alternating-features', label: 'AI Drafting' },
    { href: '#detailed-features', label: 'Case Management' },
    { href: '#detailed-features', label: 'Legal Research' },
    { href: '#', label: 'Pricing' },
  ];

  const companyLinks = [
    { href: '#', label: 'About Us' }, // Link to a future about page
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#', label: 'Careers' }, // Future
    { href: '#', label: 'Blog' }, // Future
  ];
  
  const resourcesLinks = [
    { href: '#', label: 'Help Center' },
    { href: '#', label: 'API Documentation' }, // Future
    { href: '#', label: 'System Status' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' }, 
  ];

  const socialLinks = [
    { href: '#', label: 'Twitter', icon: <Twitter size={20} /> },
    { href: '#', label: 'LinkedIn', icon: <Linkedin size={20} /> },
    { href: '#', label: 'Facebook', icon: <Facebook size={20} /> },
  ];


  return (
    <footer className="border-t border-border/40 bg-muted/40 text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="bg-primary/10 p-8 md:p-12 rounded-xl text-center mb-16 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Unlock preferred pricing with a demo
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            See Lexamplify in action and discover how our AI-powered tools can transform your legal practice.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LexamplifyLogo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Empowering India's legal professionals with AI-driven tools for enhanced efficiency and insight.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Product</h3>
              <ul className="mt-4 space-y-2">
                {productLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                 {companyLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
              <ul className="mt-4 space-y-2">
                 {resourcesLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Lexamplify Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Lexamplify provides AI-powered tools for legal professionals. It is not a substitute for legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
