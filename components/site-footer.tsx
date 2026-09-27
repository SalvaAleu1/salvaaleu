import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-kicker">SALVA ALEU</p>
          <p className="footer-copy">
            Youth leadership, sustainable development, science and digital innovation.
          </p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/work">Work</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/socials">Social Media</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-meta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsapp.personal.href} target="_blank" rel="noreferrer">
            WhatsApp: {site.whatsapp.personal.display}
          </a>
          <span>{site.location}</span>
          <span>© {new Date().getFullYear()} Salva Aleu</span>
        </div>
      </div>
    </footer>
  );
}
