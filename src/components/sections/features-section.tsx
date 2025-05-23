import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, FileText, Gavel, Lightbulb, Library, Search, TrendingUp, BrainCircuit, FolderKanban } from "lucide-react";

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary mb-4" />,
    title: "AI Legal Drafting",
    description: "Generate accurate legal documents, notices, and petitions with AI assistance, tailored to Indian legal standards.",
  },
  {
    icon: <FolderKanban className="h-10 w-10 text-primary mb-4" />,
    title: "Case Workspace (CaseSpace™)",
    description: "Organize all your case files, notes, and client communications in one secure, collaborative digital workspace.",
  },
  {
    icon: <Library className="h-10 w-10 text-primary mb-4" />,
    title: "Legal Research Reimagined",
    description: "Access a vast database of Indian case law and statutes with AI-powered semantic search for faster, more relevant results.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    title: "Argument Builder",
    description: "Construct compelling legal arguments by leveraging AI insights and relevant case law precedents.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary mb-4" />,
    title: "Judgment Prediction",
    description: "Gain AI-driven insights into potential case outcomes based on argument types and historical data.",
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-primary mb-4" />,
    title: "Court Calendar Integration",
    description: "Seamlessly manage your court dates, deadlines, and client meetings with smart calendar integration.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Lexamplify offers a suite of AI-powered tools to revolutionize your legal practice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="items-center text-center">
                {feature.icon}
                <CardTitle className="font-sans text-2xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
