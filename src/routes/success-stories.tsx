import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IMPACT, PARTNER_NOTE, STORIES } from "@/data/kitc";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — KITC Graduates at Work" },
      {
        name: "description",
        content:
          "Real stories from KITC trainees who moved from free vocational training into accounting, back-office and technical jobs across Hyderabad.",
      },
      { property: "og:title", content: "Success Stories — KITC Graduates at Work" },
      {
        property: "og:description",
        content: "How KITC trainees moved from free training into paid work across Hyderabad.",
      },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="From first computer lesson to first salary"
        description="These are the outcomes we measure ourselves against — not attendance, but employment."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {STORIES.map((s) => (
            <Card key={s.name} className="shadow-card">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-accent" />
                <p className="mt-4 text-sm">{s.quote}</p>
                <p className="mt-5 font-display text-sm font-bold">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section title="Our impact so far" description={PARTNER_NOTE}>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {IMPACT.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <p className="font-display text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/register">Start your story</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/hire">Hire a graduate</Link>
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}
