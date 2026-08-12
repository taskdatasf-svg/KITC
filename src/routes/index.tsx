import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, GraduationCap, HeartHandshake, MapPin } from "lucide-react";

import heroImage from "@/assets/hero-training.jpg";
import workshopImage from "@/assets/workshop.jpg";
import placementImage from "@/assets/placement.jpg";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CENTERS, IMPACT, ORG, PARTNER_NOTE, PROGRAMS, STORIES } from "@/data/kitc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KITC — Free Skill Training & Jobs for Youth in Hyderabad" },
      {
        name: "description",
        content:
          "Free 35-day vocational training in Tally, GST, computers and spoken English, plus 6-month industrial training for diploma and B.Tech students in Medchal and Alwal.",
      },
      { property: "og:title", content: "KITC — Free Skill Training & Jobs for Youth in Hyderabad" },
      {
        property: "og:description",
        content:
          "Free vocational courses with placement assistance and 6-month industrial training across CSE, ECE, EEE, Mechanical and Civil.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const shortTerm = PROGRAMS.filter((p) => p.track === "short-term");
  const industrial = PROGRAMS.filter((p) => p.track === "industrial");

  return (
    <>
      <section className="surface-hero">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Welcome to KITC</p>
            <h1 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">{ORG.tagline}</h1>
            <p className="mt-5 max-w-lg text-base opacity-90 md:text-lg">
              Free vocational training, industrial training for diploma and engineering students, and real job
              placement support for young people across Hyderabad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/register">
                  Apply for a course <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/donate">Support us (CSR)</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs opacity-75">
              {ORG.legalName} · CIN {ORG.cin}
            </p>
          </div>
          <img
            src={heroImage}
            alt="Students learning computer basics at a KITC training centre in Hyderabad"
            width={1600}
            height={1008}
            className="rounded-xl shadow-lift"
          />
        </div>
      </section>

      <div className="border-y border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {IMPACT.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section
        title="Three ways to work with us"
        description="Whether you want to learn, hire or give, there is a clear next step."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Youth Enrolment",
              body: "Free computer training and job placement assistance. Course duration 35 days.",
              to: "/register" as const,
              cta: "Enrol now",
            },
            {
              icon: Building2,
              title: "Hire From Us",
              body: "Job-ready candidates with good communication skills, screened to your requirements.",
              to: "/hire" as const,
              cta: "Request candidates",
            },
            {
              icon: HeartHandshake,
              title: "CSR Engagement",
              body: "Fund free education and social activity programmes for underprivileged youth.",
              to: "/donate" as const,
              cta: "Donate",
            },
          ].map((item) => (
            <Card key={item.title} className="shadow-card">
              <CardContent className="p-6">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                <Button asChild variant="link" className="mt-3 px-0">
                  <Link to={item.to}>
                    {item.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section title="Our programmes" description="Two tracks, both built around getting a real job at the end.">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Classroom session in progress"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">35 days · Free</p>
                <h3 className="mt-2 font-display text-xl font-bold">{shortTerm[0]?.title}</h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {["Tally", "GST", "Spoken English", "Computer basics", "Life skills", "Confidence building"].map(
                    (c) => (
                      <li key={c} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-primary" /> {c}
                      </li>
                    ),
                  )}
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/programs/$slug" params={{ slug: shortTerm[0]?.slug ?? "" }}>
                    View syllabus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card">
              <img
                src={workshopImage}
                alt="Diploma students in an engineering practical lab"
                loading="lazy"
                width={1200}
                height={900}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">6 months · Diploma / B.Tech</p>
                <h3 className="mt-2 font-display text-xl font-bold">Industrial & practical training</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Branch-wise training with academic project work support and internship guidance.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industrial.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/programs/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium hover:bg-secondary"
                      >
                        {p.title.split("— ")[1]}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant="outline">
                  <Link to="/programs">Compare all programmes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>

      <Section title="Social impact" description="Training that changes a household, not just a résumé.">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={placementImage}
            alt="A KITC candidate being interviewed at a placement drive"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-xl shadow-card"
          />
          <div>
            <p className="text-muted-foreground">
              We work with students from underprivileged backgrounds, combining vocational training with social
              transformation training so that they are equipped to get the right job and uplift their families.
            </p>
            <p className="mt-4 text-muted-foreground">{PARTNER_NOTE}</p>
            <div className="mt-6 grid gap-3">
              {STORIES.slice(0, 2).map((s) => (
                <blockquote key={s.name} className="rounded-lg border border-border bg-card p-4 shadow-card">
                  <p className="text-sm">“{s.quote}”</p>
                  <footer className="mt-2 text-xs text-muted-foreground">
                    {s.name} — {s.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section title="Our offices in Hyderabad" description="Walk in to either centre, or message us before you visit.">
          <div className="grid gap-6 md:grid-cols-2">
            {CENTERS.map((c) => (
              <Card key={c.id} className="shadow-card">
                <CardContent className="flex gap-3 p-6">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.address}</p>
                    <Button asChild variant="link" className="mt-2 px-0">
                      <Link to="/contact">Get directions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
