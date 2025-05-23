
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureDetail {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  dataAiHint: string;
  learnMoreLink: string;
  imageLeft: boolean;
}

const features: FeatureDetail[] = [
  {
    title: "Tailored to Your Expertise",
    description: "Lexamplify adapts to your specific area of law, providing relevant insights, document templates, and case law that match your unique practice needs. Stop sifting through irrelevant information and focus on what matters.",
    category: "Personalized AI",
    imageUrl: "https://placehold.co/800x600.png",
    imageAlt: "Abstract representation of personalized legal AI",
    dataAiHint: "abstract legal tech",
    learnMoreLink: "#",
    imageLeft: false,
  },
  {
    title: "Rapid Research, Grounded Results",
    description: "Our AI-powered research engine scans millions of documents in seconds, delivering accurate and contextually relevant case law, statutes, and legal articles. All results are grounded in verified legal sources for maximum reliability.",
    category: "Intelligent Search",
    imageUrl: "https://placehold.co/800x600.png",
    imageAlt: "Illustration of rapid legal research",
    dataAiHint: "legal research data",
    learnMoreLink: "#",
    imageLeft: true,
  },
  {
    title: "Automated Document Drafting",
    description: "Generate precise first drafts of legal documents, from notices to petitions, in minutes. Our AI understands Indian legal nuances, helping you save time and reduce errors in your drafting process.",
    category: "Efficient Drafting",
    imageUrl: "https://placehold.co/800x600.png",
    imageAlt: "Visual of AI assisting with document drafting",
    dataAiHint: "document automation AI",
    learnMoreLink: "#",
    imageLeft: false,
  },
   {
    title: "Strategic Case Management",
    description: "Organize case files, track deadlines, and manage client communication effortlessly. Lexamplify provides a centralized hub for all your case-related activities, ensuring nothing falls through the cracks.",
    category: "Organized Workflow",
    imageUrl: "https://placehold.co/800x600.png",
    imageAlt: "Dashboard for case management",
    dataAiHint: "case management software",
    learnMoreLink: "#",
    imageLeft: true,
  },
];

const AlternatingFeaturesSection = () => {
  return (
    <section id="alternating-features" className="bg-background text-foreground">
      <div className="container mx-auto px-6 space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              feature.imageLeft ? "md:grid-flow-row-dense" : ""
            }`}
          >
            <div
              className={`md:order-1 ${
                feature.imageLeft ? "md:col-start-2" : ""
              } animate-fade-in`}
            >
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                {feature.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {feature.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {feature.description}
              </p>
              <Button asChild variant="link" className="text-primary p-0 hover:underline group">
                <Link href={feature.learnMoreLink}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div
              className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl animate-fade-in animation-delay-300 ${
                feature.imageLeft ? "md:col-start-1" : ""
              }`}
            >
              <Image
                src={feature.imageUrl}
                alt={feature.imageAlt}
                layout="fill"
                objectFit="cover"
                data-ai-hint={feature.dataAiHint}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlternatingFeaturesSection;
