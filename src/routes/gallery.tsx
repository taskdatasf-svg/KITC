import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Life at KITC Training Centres" },
      {
        name: "description",
        content:
          "Photos from KITC classrooms, engineering workshops, community outreach and placement drives in Medchal and Alwal, Hyderabad.",
      },
      { property: "og:title", content: "Gallery — Life at KITC Training Centres" },
      { property: "og:description", content: "Classrooms, workshops, outreach and placement drives at KITC." },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: "/extracted-images/img_15.jpeg", alt: "KITC classroom & training activities", caption: "Computer & Tally lab training" },
  { src: "/extracted-images/img_16.jpeg", alt: "Students during vocational training", caption: "Practical computer session" },
  { src: "/extracted-images/img_17.jpeg", alt: "Student group session", caption: "Student orientation batch" },
  { src: "/extracted-images/img_18.jpeg", alt: "KITC training activities", caption: "Skills empowerment workshop" },
  { src: "/extracted-images/img_19.jpeg", alt: "Industrial training lab", caption: "Technical training session" },
  { src: "/extracted-images/img_20.jpeg", alt: "Outreach & community session", caption: "Community outreach event" },
  { src: "/extracted-images/img_21.jpeg", alt: "Classroom learning", caption: "Vocational course lecture" },
  { src: "/extracted-images/img_22.jpeg", alt: "Trainees at KITC center", caption: "Student group activity" },
  { src: "/extracted-images/img_23.jpeg", alt: "Classroom interaction", caption: "Skill development class" },
  { src: "/extracted-images/img_24.jpeg", alt: "Training workshop", caption: "Practical lab exercise" },
  { src: "/extracted-images/img_25.jpeg", alt: "Youth empowerment session", caption: "Youth empowerment workshop" },
  { src: "/extracted-images/img_26.jpeg", alt: "KITC training center event", caption: "Placement assist guidance" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside our centres"
        description="Classrooms, workshops, outreach days and placement drives across Medchal and Alwal."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-56 w-full object-cover"
              />
              <figcaption className="p-3 text-xs font-medium text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
