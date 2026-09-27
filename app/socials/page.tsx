import type { Metadata } from "next";
import { site, socialProfiles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Social Media",
  description:
    "Official social media, WhatsApp, phone and email contacts for Salva Aleu.",
  alternates: { canonical: "/socials" },
};

export default function SocialsPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">SOCIAL MEDIA</p>
        <h1>Find me on the platforms I actually use.</h1>
        <p>
          These are my official public profiles and direct contact channels. For
          professional enquiries, email remains the best starting point.
        </p>
      </section>

      <section className="section social-grid" aria-label="Official social media profiles">
        {socialProfiles.map((profile, index) => (
          <a
            className="social-card"
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            key={profile.name}
          >
            <div className="social-card-top">
              <span>0{index + 1}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div>
              <p className="project-eyebrow">{profile.handle}</p>
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="section direct-channels">
        <div className="direct-channel-block">
          <p className="eyebrow">WHATSAPP</p>
          <h2>Direct messaging</h2>
          <div className="channel-list">
            <a href={site.whatsapp.personal.href} target="_blank" rel="noreferrer">
              <span>{site.whatsapp.personal.label}</span>
              <strong>{site.whatsapp.personal.display}</strong>
              <em aria-hidden="true">↗</em>
            </a>
            <a href={site.whatsapp.business.href} target="_blank" rel="noreferrer">
              <span>{site.whatsapp.business.label}</span>
              <strong>{site.whatsapp.business.display}</strong>
              <em aria-hidden="true">↗</em>
            </a>
          </div>
        </div>

        <div className="direct-channel-block">
          <p className="eyebrow">EMAIL</p>
          <h2>Professional contact</h2>
          <div className="channel-list">
            {site.emails.map((email) => (
              <a href={`mailto:${email}`} key={email}>
                <span>Email</span>
                <strong>{email}</strong>
                <em aria-hidden="true">↗</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section phone-panel">
        <div>
          <p className="eyebrow">PHONE</p>
          <h2>Telephone numbers</h2>
        </div>
        <div className="phone-list">
          {site.phones.map((phone) => (
            <a href={phone.href} key={phone.display}>
              <span>{phone.label}</span>
              <strong>{phone.display}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
