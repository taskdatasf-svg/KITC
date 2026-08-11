import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ORG } from "@/data/kitc";
import { donationSchema, submitDonation, type DonationInput } from "@/lib/leads";

const PURPOSES = [
  "Sponsor a full batch",
  "Sponsor one student",
  "Computers & lab equipment",
  "Youth empowerment activities",
  "General / unrestricted",
];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate & CSR — Fund Free Skilling at KITC" },
      {
        name: "description",
        content:
          "Support KITC through CSR or individual giving. Sponsor a batch, fund lab equipment or back youth empowerment activities in Hyderabad.",
      },
      { property: "og:title", content: "Donate & CSR — Fund Free Skilling at KITC" },
      { property: "og:description", content: "Sponsor a batch, fund equipment or back youth empowerment work." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [done, setDone] = useState(false);
  const form = useForm<DonationInput>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donor_name: "",
      phone: "",
      email: "",
      organisation: "",
      amount: "",
      purpose: "",
      message: "",
    },
  });

  async function onSubmit(values: DonationInput) {
    try {
      await submitDonation(values);
      setDone(true);
      form.reset();
      toast.success("Thank you — we'll be in touch shortly");
    } catch (error) {
      console.error(error);
      toast.error("We couldn't record your pledge. Please try again or email us.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Donate & CSR"
        title="Keep the course free for the next batch"
        description="Every rupee goes into training, equipment and placement support for young people who cannot pay fees."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {done ? (
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <h2 className="mt-4 font-display text-xl font-bold">Thank you</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our team will contact you with payment details, CSR documentation and reporting options.
                  </p>
                  <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
                    Submit another pledge
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="donor_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl>
                              <Input placeholder="Full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organisation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organisation (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Company or trust" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="10-digit mobile" {...field} />
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
                            <FormLabel>Email (optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Indicative amount (₹, optional)</FormLabel>
                            <FormControl>
                              <Input inputMode="numeric" placeholder="e.g. 50000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What would you like to support?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value ?? ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose a purpose" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PURPOSES.map((p) => (
                                  <SelectItem key={p} value={p}>
                                    {p}
                                  </SelectItem>
                                ))}
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
                          <FormItem className="md:col-span-2">
                            <FormLabel>Message (optional)</FormLabel>
                            <FormControl>
                              <Textarea rows={4} placeholder="Tell us about your CSR goals" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="md:col-span-2">
                        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                          {form.formState.isSubmitting ? "Sending…" : "Pledge support"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>

          <aside className="space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <HeartHandshake className="h-6 w-6 text-brand-red" />
                <h2 className="mt-3 font-display text-base font-bold">Where your money goes</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Trainer salaries and course material</li>
                  <li>Computers, software and workshop tools</li>
                  <li>Placement drives and travel support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-sm text-muted-foreground">
                <p className="font-display text-base font-bold text-foreground">Compliance</p>
                <p className="mt-3">{ORG.legalName}</p>
                <p>CIN {ORG.cin}</p>
                <p className="mt-2">
                  Write to <a className="underline" href={`mailto:${ORG.email}`}>{ORG.email}</a> for CSR documentation.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
