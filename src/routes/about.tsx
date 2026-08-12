import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, Target } from "lucide-react";

import workshopImage from "@/assets/workshop.jpg";
import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CENTERS, ORG } from "@/data/kitc";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KITC — Kakatheeya Industrial Training Centre" },
      {
        name: "description",
        content:
          "Kakatheeya Industrial Training Centre and Association is a Telangana-registered non-profit (CIN U88900TS2023NPL176600) delivering free skilling and employment support.",
      },
      { property: "og:title", content: "About KITC — Kakatheeya Industrial Training Centre" },
      {
        property: "og:description",
        content: "A registered Telangana non-profit delivering free vocational skilling and placement support.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={ORG.legalName}
        description="A registered non-profit working on vocational training, industrial training and youth employment in Hyderabad."
      />

      <Section>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <img
            src={workshopImage}
            alt="Trainers guiding students during a practical session"
            width={1200}
            height={900}
            className="rounded-xl shadow-card"
          />
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Who we are</h2>
            <p className="mt-4 text-muted-foreground">
              KITC was registered on {ORG.registered} as a {ORG.entityType.toLowerCase()}, working in{" "}
              {ORG.sector.toLowerCase()}. We run two centres in Hyderabad and deliver a free 35-day vocational
              programme plus six-month industrial training for diploma and engineering students.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our approach is simple: teach a skill the market is actually hiring for, build the confidence to use it,
              and stay involved until the candidate is placed.
            </p>
            <dl className="mt-6 grid gap-2 rounded-lg border border-border bg-card p-5 text-sm shadow-card">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">CIN</dt>
                <dd className="font-medium">{ORG.cin}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Registered on</dt>
                <dd className="font-medium">{ORG.registered}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Entity type</dt>
                <dd className="text-right font-medium">{ORG.entityType}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section title="Mission, vision and values">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Mission",
                body: "Make quality vocational and industrial training free and accessible to underprivileged youth, and connect them to real jobs.",
              },
              {
                icon: Eye,
                title: "Vision",
                body: "A Telangana where a young person's household income never decides whether they can get skilled work.",
              },
              {
                icon: Compass,
                title: "Values",
                body: "Be focused. Be determined. Be empowered. We hold trainees and ourselves to the same discipline.",
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-card">
                <CardContent className="p-6">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Where we operate">
        <div className="grid gap-6 md:grid-cols-2">
          {CENTERS.map((c) => (
            <Card key={c.id} className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-8">
          <Link to="/contact">Visit or contact us</Link>
        </Button>
      </Section>
    </>
  );
}
