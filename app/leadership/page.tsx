import type { Metadata } from "next";
import Link from "next/link";
import { leadership } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Salva Aleu's leadership roles and regional engagement across youth development, community work and sustainable development.",
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">LEADERSHIP</p>
        <h1>Leadership is not the title. It is the work that remains after the title.</h1>
        <p>
          These roles and experiences have shaped how I think about responsibility,
          collaboration, regional learning and community-focused action.
        </p>
      </section>

      <section className="section leadership-stack">
        {leadership.map((item, index) => (
          <article key={item.organization}>
            <div className="leadership-number">0{index + 1}</div>
            <div>
              <p className="project-eyebrow">{item.role}</p>
              <h2>{item.organization}</h2>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="section journey-panel">
        <div>
          <p className="eyebrow">REGIONAL LEARNING</p>
          <h2>East Africa has widened the frame.</h2>
        </div>
        <div className="prose">
          <p>
            Participation in the EAC Youth Fellowship and YouLead connected my local
            work in South Sudan to a wider East African conversation about youth
            leadership, public participation and sustainable development.
          </p>
          <p>
            SDG-focused engagement in Denmark—including participation in a panel on
            AI and sustainable development at Folkemødet on Bornholm—also strengthened
            my interest in how technology can support development without losing sight
            of local realities.
          </p>
        </div>
      </section>

      <section className="section simple-cta">
        <div>
          <p className="eyebrow">COLLABORATION</p>
          <h2>Have a serious idea worth building together?</h2>
        </div>
        <Link className="button button-dark" href="/contact">
          Contact me
        </Link>
      </section>
    </main>
  );
}
