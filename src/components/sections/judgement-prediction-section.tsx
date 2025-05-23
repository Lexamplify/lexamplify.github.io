import { JudgementPredictionForm } from "@/components/judgement-prediction-form";

const JudgementPredictionSection = () => {
  return (
    <section id="ai-prediction" className="bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            AI Judgment Prediction
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Curious about potential outcomes? Enter a type of legal argument and let our AI provide an estimated judgment prediction based on prevailing case law analysis.
            <span className="block text-sm mt-2">(This is an experimental feature for informational purposes and not legal advice.)</span>
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <JudgementPredictionForm />
        </div>
      </div>
    </section>
  );
};

export default JudgementPredictionSection;
