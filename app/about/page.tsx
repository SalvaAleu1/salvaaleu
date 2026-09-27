import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portrait from "../../Screenshot_20260709_094333_Drive.jpg";
import { SectionHeading } from "@/components/section-heading";
import { principles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Salva Aleu's studies, youth leadership, sustainable-development work and growing focus on digital innovation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">ABOUT</p>
        <h1>I&apos;m interested in work that is useful before it is impressive.</h1>
        <p>
          My path crosses science, youth leadership, community development and
          technology. The connection between them is simple: I like understanding
          problems and building practical responses.
        </p>
      </section>

      <section className="section about-story">
        <div className="about-image-wrap">
          <Image
            src={portrait}
            alt="Salva Aleu"
            sizes="(max-width: 900px) 90vw, 34vw"
            className="about-image"
          />
        </div>
        <div className="story-copy prose">
          <p className="eyebrow">MY STORY</p>
          <h2>Learning in the classroom. Building beyond it.</h2>
          <p>
            I am a third-year Industrial Chemistry student at the University of
            Juba in South Sudan. Science gives me discipline: observe carefully,
            question assumptions, understand systems and test what works.
          </p>
          <p>
            Outside university, much of my time has gone into youth and community
            initiatives. I serve as Executive Director of the Young Innovative
            Farmers Organization, where our work connects youth empowerment with
            agriculture, climate action, public health, digital skills and community
            development.
          </p>
          <p>
            I also coordinate Youth Opportunities, an initiative created to make
            scholarships, fellowships, trainings, jobs and other opportunities easier
            for young people to discover. It has grown from a WhatsApp community into
            a wider platform that combines opportunity sharing with mentorship,
            application support and practical skills sessions.
          </p>
          <p>
            Regional experiences through the EAC Youth Fellowship, YouLead and
            SDG-focused learning have expanded how I think about leadership. They have
            reinforced a lesson I keep returning to: regional ideas matter most when
            they become useful in local communities.
          </p>
          <p>
            Technology is now an important part of that work. I am developing my
            skills across web development, cloud technologies and digital systems,
            while building platforms for organizations, communities and emerging
            ventures.
          </p>
          <p>
            I am still learning. That is not a footnote to the story—it is the point.
            I want a career that keeps science, technology, entrepreneurship and
            public-interest work in conversation with one another.
          </p>
        </div>
      </section>

      <section className="section section-spaced">
        <SectionHeading
          eyebrow="HOW I TRY TO WORK"
          title="A few principles I want my work to live up to."
        />
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dual-panel">
        <div>
          <p className="eyebrow">EDUCATION</p>
          <h2>University of Juba</h2>
          <p>Bachelor&apos;s studies in Industrial Chemistry · Third year</p>
        </div>
        <div>
          <p className="eyebrow">CURRENT DIRECTION</p>
          <h2>Science + technology + development</h2>
          <p>
            Building deeper technical skills while continuing practical youth and
            community work.
          </p>
        </div>
      </section>

      <section className="section simple-cta">
        <h2>See what I&apos;m working on now.</h2>
        <Link className="button button-dark" href="/work">
          Explore my work
        </Link>
      </section>
    </main>
  );
}
