import type { Metadata } from "next";
import { leadership } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience, organizational leadership and community service of Salva Aleu.",
  alternates: { canonical: "/experience" },
};

const roles = [
  {
    title: "Executive Director & Founder",
    organization: "Young Innovative Farmers Organization (YIFO)",
    period: "Current",
    category: "Organizational leadership",
    description: "Provide strategic direction and support programme development across youth empowerment, agriculture, food security, climate action, digital skills and community development.",
  },
  {
    title: "Education Assistant",
    organization: "Knowledge Spear Development Organization (KSDO)",
    period: "Community development",
    category: "Education",
    description: "Contribute to education-focused activities and community development initiatives.",
  },
  {
    title: "Secretary General",
    organization: "Biong-Makiech Youth Association (BYA)",
    period: "2023–2025",
    category: "Youth leadership",
    description: "Supported youth association coordination, communication and organizational activities, contributing to youth representation and engagement.",
  },
  {
    title: "Sales Manager",
    organization: "Dolphin Pharmaceutical Company",
    period: "2022–Recent",
    category: "Commercial experience",
    description: "Gained experience in sales coordination, customer relationships and commercial operations in the pharmaceutical sector.",
  },
  {
    title: "Community Nutrition Volunteer",
    organization: "Community service",
    period: "2018–2020",
    category: "Volunteering",
    description: "Supported community nutrition-related work and local service activities.",
  },
];

export default function ExperiencePage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">EXPERIENCE</p>
        <h1>Work, service and leadership grounded in practical responsibility.</h1>
        <p>My experience spans organizational leadership, youth coordination, education, community service and commercial work.</p>
      </section>
      <section className="section work-stack">
        {roles.map((role, index) => (
          <article className="work-detail" key={role.organization}>
            <div className="work-number">0{index + 1}</div>
            <div className="work-title">
              <p className="project-eyebrow">{role.category}</p>
              <h2>{role.title}</h2>
              <p>{role.organization}</p>
              <p className="experience-period">{role.period}</p>
            </div>
            <div className="work-copy"><p className="work-lead">{role.description}</p></div>
          </article>
        ))}
      </section>
      <section className="section work-note">
        <p className="eyebrow">APPROACH</p>
        <p>I value work that turns responsibility into useful outcomes. As the portfolio grows, specific dates, documented outcomes and supporting evidence will be added where they can be stated accurately.</p>
      </section>
    </main>
  );
}
