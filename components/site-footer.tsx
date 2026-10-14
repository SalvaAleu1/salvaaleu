import Link from "next/link";
import { site, socialProfiles } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-kicker">SALVA ALEU WOL ALEU</p>
          <p className="footer-copy">Science, technology, leadership and social impact—connected by practical work.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/work">Projects</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-meta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {socialProfiles.filter((profile) => ["LinkedIn", "GitHub", "X"].includes(profile.name)).map((profile) => (
            <a href={profile.href} key={profile.name} target="_blank" rel="noreferrer">{profile.name} ↗</a>
          ))}
          <span>{site.location}</span>
          <span>© {new Date().getFullYear()} Salva Aleu Wol Aleu</span>
        </div>
      </div>
    </footer>
  );
}
