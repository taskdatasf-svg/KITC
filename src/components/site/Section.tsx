import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-hero">
      <div className="container-page py-14 md:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-base opacity-90 md:text-lg">{description}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  className = "",
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-14 md:py-20 ${className}`}>
      {title ? <h2 className="text-2xl font-bold md:text-3xl">{title}</h2> : null}
      {description ? <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p> : null}
      <div className={title || description ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
