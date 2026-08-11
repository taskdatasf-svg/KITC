import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-training.jpg";
import placementImage from "@/assets/placement.jpg";
import workshopImage from "@/assets/workshop.jpg";
import youthImage from "@/assets/youth.jpg";
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
  { src: heroImage, alt: "Trainees at computers during a vocational class", caption: "Computer & Tally lab, Medchal" },
  { src: workshopImage, alt: "Diploma students working in an engineering workshop", caption: "Industrial training workshop" },
  { src: youthImage, alt: "Students during a community outreach session outdoors", caption: "Community outreach day" },
  { src: placementImage, alt: "A candidate in a job interview at a placement drive", caption: "Placement drive" },
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
        <div className="grid gap-6 sm:grid-cols-2">
          {PHOTOS.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
