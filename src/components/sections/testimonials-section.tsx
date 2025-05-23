
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Lexamplify has revolutionized how our firm handles legal research. The AI insights are incredibly accurate and have saved us countless hours.",
    name: "Adv. Priya Sharma",
    title: "Partner, Sharma & Associates",
    imageUrl: "https://placehold.co/100x100.png",
    dataAiHint: "female lawyer portrait"
  },
  {
    quote: "The AI drafting tool is a game-changer. It helps us create initial drafts much faster, allowing us to focus on strategic aspects of the case.",
    name: "Mr. Arjun Singh",
    title: "Senior Counsel, LexCorp India",
    imageUrl: "https://placehold.co/100x100.png",
    dataAiHint: "male lawyer portrait"
  },
  {
    quote: "CaseSpace has made team collaboration so much smoother. All our case files and communications are now in one secure place.",
    name: "Ms. Ananya Reddy",
    title: "Independent Practitioner",
    imageUrl: "https://placehold.co/100x100.png",
    dataAiHint: "professional woman portrait"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from legal professionals who are transforming their practice with Lexamplify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-xl flex flex-col rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-6">
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter className="bg-muted/30 p-6 mt-auto">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/30">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={testimonial.dataAiHint}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
