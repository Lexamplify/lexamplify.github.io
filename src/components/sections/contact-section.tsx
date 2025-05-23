import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, a collaboration idea, or need a demo, reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form or reach out to us via email. We're excited to connect with you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:hello@lexamplify.com" className="text-foreground hover:text-primary transition-colors">
                    hello@lexamplify.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-foreground">(+91) XXXX-XXXXXX (Coming Soon)</span>
                </div>
                 <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Bengaluru, India (Main Office)</span>
                </div>
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Office Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
