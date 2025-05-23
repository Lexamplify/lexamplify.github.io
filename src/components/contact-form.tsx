"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  inquiryType: z.enum(["Demo", "Collaborate", "Feedback", "Other"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// This is a mock server action. Replace with actual submission logic.
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Simulate success/failure
  if (data.email.includes("fail")) {
    return { success: false, message: "Submission failed. Please try again." };
  }
  return { success: true, message: "Thank you! Your message has been sent." };
}


export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "Demo",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // In a real app, you'd call a server action or API endpoint here
      // For example: const result = await submitToServerAction(data);
      const result = await submitContactForm(data);

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Rohan Sharma" {...field} className="bg-background focus:ring-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g. rohan.sharma@example.com" {...field} className="bg-background focus:ring-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Reason for Contact</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background focus:ring-primary">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Demo">Request a Demo</SelectItem>
                  <SelectItem value="Collaborate">Collaboration Inquiry</SelectItem>
                  <SelectItem value="Feedback">Provide Feedback</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  className="resize-none bg-background focus:ring-primary"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg py-3 transition-all duration-300 ease-in-out hover:shadow-lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
