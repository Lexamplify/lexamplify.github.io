
import Image from "next/image";
import { Scale } from "lucide-react"; // Example icon

const logos = [
  { name: "Major Law Firm", src: "https://placehold.co/150x60.png?text=Firm+A", dataAiHint: "law firm logo" },
  { name: "Legal Tech Innovator", src: "https://placehold.co/150x60.png?text=InnovateLP", dataAiHint: "tech company logo" },
  { name: "Corporate Legal Dept", src: "https://placehold.co/150x60.png?text=CorpLegal", dataAiHint: "corporate logo" },
  { name: "Advocate Chambers", src: "https://placehold.co/150x60.png?text=Advocates+Inc", dataAiHint: "legal chambers logo" },
  { name: "Lexamplify Placeholder", src: "", icon: <Scale className="h-10 w-auto text-muted-foreground" />, dataAiHint: "company logo" }, // Placeholder for Lexamplify or similar
];

const TrustedBySection = () => {
  return (
    <section id="trusted-by" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Legal Professionals & Organizations
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity" title={logo.name}>
              {logo.src ? (
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={150} 
                  height={60} 
                  className="object-contain"
                  data-ai-hint={logo.dataAiHint}
                />
              ) : (
                logo.icon && <div className="w-[150px] h-[60px] flex items-center justify-center">{logo.icon}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
