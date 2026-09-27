import type { Metadata } from "next";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and initiatives by Salva Aleu across youth opportunity access, community development, SDGs and digital innovation.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Projects are where ideas have to survive contact with reality.</h1>
        <p>
          I focus on work with a clear purpose: expanding access, strengthening
          community participation and using technology where it genuinely helps.
        </p>
      </section>

      <section className="section work-stack">
        {projects.map((project, index) => (
          <article className="work-detail" id={project.slug} key={project.slug}>
            <div className="work-number">0{index + 1}</div>
            <div className="work-title">
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h2>{project.title}</h2>
            </div>
            <div className="work-copy">
              <p className="work-lead">{project.summary}</p>
              <p>{project.detail}</p>
              <div className="result-box">
                <span>Current picture</span>
                <p>{project.result}</p>
              </div>
              {project.href && project.cta ? (
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.cta} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="section work-note">
        <p className="eyebrow">HOW I CHOOSE WORK</p>
        <p>
          I&apos;m less interested in adding projects for the sake of appearing busy.
          The work I want to keep building should solve a real access problem, strengthen
          an organization or community, or create infrastructure that people can
          genuinely use.
        </p>
      </section>
    </main>
  );
}
