import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { CENTERS, ORG } from "@/data/kitc";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display text-xl font-bold">{ORG.shortName}</h2>
          <p className="mt-1 text-sm opacity-80">{ORG.legalName}</p>
          <p className="mt-4 max-w-sm text-sm opacity-90">{ORG.tagline}</p>
          <dl className="mt-6 space-y-1 text-xs opacity-80">
            <div className="flex gap-2">
              <dt>CIN</dt>
              <dd>{ORG.cin}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Registered</dt>
              <dd>{ORG.registered}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide opacity-80">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/programs" className="opacity-90 hover:opacity-100">Programmes</Link></li>
            <li><Link to="/youth-empowerment" className="opacity-90 hover:opacity-100">Youth Empowerment</Link></li>
            <li><Link to="/success-stories" className="opacity-90 hover:opacity-100">Success Stories</Link></li>
            <li><Link to="/gallery" className="opacity-90 hover:opacity-100">Gallery</Link></li>
            <li><Link to="/register" className="opacity-90 hover:opacity-100">Candidate Registration</Link></li>
            <li><Link to="/donate" className="opacity-90 hover:opacity-100">Donate / CSR</Link></li>
            <li><Link to="/hire" className="opacity-90 hover:opacity-100">Hire From Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide opacity-80">Our centres</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {CENTERS.map((c) => (
              <li key={c.id} className="flex gap-2 opacity-90">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <strong className="block font-medium">{c.name}</strong>
                  {c.address}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${ORG.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone className="h-4 w-4" /> {ORG.phone}
            </a>
            <a href={`mailto:${ORG.email}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Mail className="h-4 w-4" /> {ORG.email}
            </a>
            <a href={ORG.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} {ORG.legalName}. All rights reserved.</p>
          <p>{ORG.entityType}</p>
        </div>
      </div>
    </footer>
  );
}
