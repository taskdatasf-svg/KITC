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
      <div className="container-page py-6 md:py-8">
        {eyebrow ? (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-2xl text-xl sm:text-2xl md:text-3xl font-bold leading-snug">{title}</h1>
        {description ? <p className="mt-1.5 max-w-xl text-xs sm:text-sm opacity-90 leading-relaxed">{description}</p> : null}
        {children ? <div className="mt-4">{children}</div> : null}
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
    <section className={`container-page py-8 md:py-12 ${className}`}>
      {title ? <h2 className="text-xl font-bold md:text-2xl">{title}</h2> : null}
      {description ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p> : null}
      <div className={title || description ? "mt-6" : ""}>{children}</div>
    </section>
  );
}
