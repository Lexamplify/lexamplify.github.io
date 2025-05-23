
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, MessageSquareHeart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background"> {/* Changed from bg-secondary */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <MessageSquareHeart className="h-12 w-12 text-primary" />
           </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Ready to Amplify Your Practice?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join the waitlist for early access, request a personalized demo, or simply share your thoughts. We're eager to connect with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 bg-secondary p-8 sm:p-10 rounded-xl shadow-lg"> {/* Added bg and padding */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Details</h3>
              <p className="text-muted-foreground mb-6">
                Reach out to us via the form or through the channels below. We look forward to hearing from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@lexamplify.com" className="text-foreground hover:text-primary transition-colors">
                    hello@lexamplify.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">(+91) XXXX-XXXXXX (Support line coming soon)</span>
                </div>
                 <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Bengaluru, India (HQ)</span>
                </div>
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 mt-8">Connect Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              <p className="text-muted-foreground">We aim to respond to all inquiries within 24 business hours.</p>
            </div>
          </div>

          <div className="bg-card p-0 rounded-xl shadow-xl overflow-hidden border border-border"> {/* Moved form to card for consistency */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
