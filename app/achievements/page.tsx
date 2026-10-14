import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Selected fellowships, programmes and professional learning milestones in Salva Aleu's journey.",
  alternates: { canonical: "/achievements" },
};

const items = [
  {
    name: "Youth Opportunities Global Ambassador Program",
    organization: "Youth Opportunities",
    year: "2026",
    status: "Selected — Country Ambassador",
    description: "A global ambassador opportunity connected to youth access, engagement and opportunity sharing.",
  },
  {
    name: "East African Community Youth Fellowship",
    organization: "EAC Youth Fellowship / YouLead",
    year: "2025",
    status: "Fellowship participant",
    description: "Regional youth leadership learning focused on cooperation, public participation and sustainable development.",
  },
  {
    name: "Digital Skills Training",
    organization: "Internet Society South Sudan Chapter · Scenius Hub",
    year: "2026",
    status: "Training participant",
    description: "Digital skills development supporting continued learning in technology and online participation.",
  },
];

export default function AchievementsPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">ACHIEVEMENTS & FELLOWSHIPS</p>
        <h1>Milestones that reflect learning, service and growing responsibility.</h1>
        <p>This page distinguishes selection, participation and training. It will grow as additional awards and outcomes are confirmed and documented.</p>
      </section>
      <section className="section work-stack">
        {items.map((item, index) => (
          <article className="work-detail" key={item.name}>
            <div className="work-number">0{index + 1}</div>
            <div className="work-title">
              <p className="project-eyebrow">{item.year} · {item.status}</p>
              <h2>{item.name}</h2>
              <p>{item.organization}</p>
            </div>
            <div className="work-copy"><p className="work-lead">{item.description}</p></div>
          </article>
        ))}
      </section>
      <section className="section work-note">
        <p className="eyebrow">ACCURACY MATTERS</p>
        <p>Applications are not presented as awards or selections. Additional programme names, dates and status labels will be published only when confirmed.</p>
      </section>
    </main>
  );
}
