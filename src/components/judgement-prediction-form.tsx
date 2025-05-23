'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { judgmentPrediction, JudgmentPredictionInput, JudgmentPredictionOutput } from "@/ai/flows/judgment-prediction";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  legalArgumentType: z.string().min(10, {
    message: "Please describe the legal argument type in at least 10 characters.",
  }).max(300, { message: "Argument type description should not exceed 300 characters."}),
});

type PredictionFormValues = z.infer<typeof formSchema>;

export function JudgementPredictionForm() {
  const [predictionResult, setPredictionResult] = useState<JudgmentPredictionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<PredictionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legalArgumentType: "",
    },
  });

  async function onSubmit(data: PredictionFormValues) {
    setIsLoading(true);
    setError(null);
    setPredictionResult(null);
    try {
      const input: JudgmentPredictionInput = { legalArgumentType: data.legalArgumentType };
      const result = await judgmentPrediction(input);
      setPredictionResult(result);
      toast({
        title: "Prediction Generated",
        description: "AI analysis complete. See results below.",
        action: <CheckCircle2 className="text-green-500" />,
      });
    } catch (err) {
      console.error("Error fetching judgment prediction:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to get prediction: ${errorMessage}`);
      toast({
        title: "Prediction Error",
        description: `Could not generate prediction. ${errorMessage}`,
        variant: "destructive",
        action: <AlertTriangle className="text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
          <FormField
            control={form.control}
            name="legalArgumentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground text-lg">Type of Legal Argument</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g., 'Breach of contract due to non-delivery of goods'" 
                    {...field} 
                    className="bg-background focus:ring-primary text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-lg py-3 transition-all duration-300 ease-in-out hover:shadow-lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Get AI Prediction"
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle /> Prediction Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {predictionResult && (
        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary">AI Judgment Prediction Result</CardTitle>
            <CardDescription>Based on the provided legal argument type.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-1">Likely Outcome:</h4>
              <p className="text-muted-foreground bg-secondary p-3 rounded-md">{predictionResult.likelyOutcome}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-1">Reasoning:</h4>
              <p className="text-muted-foreground bg-secondary p-3 rounded-md whitespace-pre-wrap">{predictionResult.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
