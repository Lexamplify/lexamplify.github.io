import LexamplifyLogo from '@/components/lexamplify-logo';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <LexamplifyLogo />
            <p className="mt-4 text-sm text-muted-foreground">
              Amplify Your Legal Practice with the Power of AI.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Lexamplify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
