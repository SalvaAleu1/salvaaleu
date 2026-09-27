import type { Metadata } from "next";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Salva Aleu for youth-development, sustainable-development, technology and community-focused collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero section">
        <p className="eyebrow">CONTACT</p>
        <h1>Let&apos;s talk about work that has a reason to exist.</h1>
        <p>
          I&apos;m open to thoughtful conversations around youth programs,
          sustainable development, digital products, learning opportunities and
          community-focused collaboration.
        </p>
      </section>

      <section className="section contact-grid">
        <div className="contact-primary">
          <p className="eyebrow">BEST WAY TO REACH ME</p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>
          <p>
            For formal invitations, partnerships or project enquiries, email is the
            best place to start.
          </p>
        </div>

        <div className="contact-details">
          <div>
            <span>Based in</span>
            <strong>{site.location}</strong>
          </div>
          <div>
            <span>Areas</span>
            <strong>Youth · SDGs · Technology · Community</strong>
          </div>
          <div>
            <span>Response</span>
            <strong>Clear context makes a good first message.</strong>
          </div>
        </div>
      </section>

      <section className="section contact-note">
        <p>
          If you are reaching out about a program or collaboration, include the
          purpose, organization, expected role and relevant dates. It helps me
          understand the opportunity quickly and respond usefully.
        </p>
      </section>
    </main>
  );
}
