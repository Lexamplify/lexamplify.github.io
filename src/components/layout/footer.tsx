
import LexamplifyLogo from '@/components/lexamplify-logo';
import { Twitter, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainNavLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#value-prop', label: 'Why Lexamplify' },
    { href: '#ai-prediction', label: 'AI Prediction' },
  ];

  const companyLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact & Waitlist' },
    // { href: '/blog', label: 'Blog' }, // Future
    // { href: '/careers', label: 'Careers' }, // Future
  ];
  
  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    // { href: '#', label: 'Cookie Policy' }, // Future
  ];

  const socialLinks = [
    { href: '#', label: 'Twitter', icon: <Twitter size={20} /> },
    { href: '#', label: 'LinkedIn', icon: <Linkedin size={20} /> },
    { href: '#', label: 'Facebook', icon: <Facebook size={20} /> },
    // { href: '#', label: 'Instagram', icon: <Instagram size={20} /> }, // Future
    // { href: '#', label: 'YouTube', icon: <Youtube size={20} /> }, // Future
  ];


  return (
    <footer className="border-t border-border/40 bg-muted/30"> {/* Slightly different bg for footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {mainNavLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                 {companyLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-serif font-semibold uppercase tracking-wider text-foreground">Legal</h3>
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
