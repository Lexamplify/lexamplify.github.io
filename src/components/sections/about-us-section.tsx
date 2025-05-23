import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  {
    name: "Saurabh Bishnoi",
    role: "Tech Lead",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "professional portrait",
    bio: "Expert in AI development and system architecture, driving Lexamplify's technological innovation.",
  },
  {
    name: "Yashraj Singh",
    role: "Tech & Research (PhD)",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "academic portrait",
    bio: "Specializes in NLP and machine learning, bridging cutting-edge research with practical legal tech solutions.",
  },
  {
    name: "Yugesh Kumar",
    role: "Business & Ops (MBA)",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "business professional",
    bio: "Oversees business strategy, operations, and market growth, ensuring Lexamplify meets the needs of legal professionals.",
  },
];

const AboutUsSection = () => {
  return (
    <section id="about" className="bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Founded by three engineers turned legal-tech entrepreneurs, united by a passion for innovation and a shared history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder) => (
            <Card key={founder.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={founder.dataAiHint}
                  />
                </div>
                <CardTitle className="font-sans text-2xl font-semibold text-foreground">{founder.name}</CardTitle>
                <p className="text-primary font-medium">{founder.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{founder.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-secondary p-8 md:p-12 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
            Our Story
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are college friends who embarked on a journey to solve real-world challenges within the Indian legal system. Lexamplify is born from our shared vision to empower legal professionals through technology, making justice more accessible and efficient.
          </p>
          <p className="mt-4 text-sm text-accent-foreground font-medium">
            Fun Fact: We built our first award-winning project together during a college hackathon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
