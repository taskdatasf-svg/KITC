import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ORG } from "@/data/kitc";

const NAV = [
  { to: "/programs", label: "Programmes" },
  { to: "/youth-empowerment", label: "Youth Empowerment" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/hire", label: "Hire From Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
            KI
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold">KITC</span>
            <span className="block text-[11px] text-muted-foreground">Industrial Training Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link to="/donate">Donate</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register">Apply now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="font-display">Menu</SheetTitle>
              <nav className="mt-6 grid gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                >
                  Donate
                </Link>
                <a
                  href={`tel:${ORG.phone.replace(/\s/g, "")}`}
                  className="mt-2 flex items-center gap-2 rounded-md bg-secondary px-3 py-3 text-base font-medium"
                >
                  <Phone className="h-4 w-4" /> Call the centre
                </a>
                <a
                  href={ORG.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md bg-secondary px-3 py-3 text-base font-medium"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
