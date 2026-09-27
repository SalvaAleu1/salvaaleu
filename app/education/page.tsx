import type { Metadata } from "next";
import Link from "next/link";
import { education } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Salva Aleu's education journey from primary school through Industrial Chemistry at the University of Juba and Computer Applications studies with IGNOU.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">EDUCATION</p>
        <h1>My education has not followed a perfectly straight line—and that has shaped how I learn.</h1>
        <p>
          From primary school to university, my journey has included accelerated
          learning, interruptions, online study and the challenge of balancing two
          different academic fields.
        </p>
      </section>

      <section className="section education-intro">
        <div>
          <p className="eyebrow">CURRENTLY</p>
          <h2>Industrial Chemistry at the University of Juba.</h2>
        </div>
        <p>
          I am currently in my third year in the Department of Industrial Chemistry,
          School of Applied and Industrial Sciences. Alongside my full-time studies,
          I also have an ongoing Bachelor of Computer Applications programme with
          Indira Gandhi National Open University.
        </p>
      </section>

      <section className="section education-timeline" aria-label="Education timeline">
        {education.map((item, index) => (
          <article className="education-entry" key={item.institution}>
            <div className="education-index">0{index + 1}</div>
            <div className="education-years">{item.years}</div>
            <div className="education-main">
              <p className="project-eyebrow">{item.qualification}</p>
              <h2>{item.institution}</h2>
              <p className="education-description">{item.description}</p>
              {item.note ? (
                <div className="education-note">
                  <span>Context</span>
                  <p>{item.note}</p>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="section education-reflection">
        <p className="eyebrow">WHAT IT HAS TAUGHT ME</p>
        <p>
          My education has taught me to adapt. Studying science in person while also
          navigating online computing studies has made me more conscious of how
          infrastructure, access and opportunity affect learning—especially for
          students in places where reliable internet and resources cannot always be
          taken for granted.
        </p>
      </section>

      <section className="section simple-cta">
        <div>
          <p className="eyebrow">BEYOND THE CLASSROOM</p>
          <h2>Education is one part of the wider journey.</h2>
        </div>
        <Link className="button button-dark" href="/work">
          Explore my work
        </Link>
      </section>
    </main>
  );
}
