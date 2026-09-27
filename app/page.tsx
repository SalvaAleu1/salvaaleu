import Image from "next/image";
import Link from "next/link";
import portrait from "../Screenshot_20260709_094333_Drive.jpg";
import { SectionHeading } from "@/components/section-heading";
import { focusAreas, leadership, projects } from "@/lib/site-data";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">JUBA · SOUTH SUDAN · EAST AFRICA</p>
          <h1>
            Student. Youth leader.
            <span>Digital builder.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Salva Aleu, an Industrial Chemistry student at the University
            of Juba working across youth development, sustainable development,
            technology and community-driven initiatives.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/work">
              Explore my work
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-light" href="/contact">
              Get in touch
            </Link>
          </div>
          <div className="hero-meta" aria-label="Professional focus">
            <span>Industrial Chemistry</span>
            <span>Youth & SDGs</span>
            <span>Digital Innovation</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src={portrait}
              alt="Official portrait of Salva Aleu"
              priority
              sizes="(max-width: 900px) 86vw, 38vw"
              className="portrait"
            />
          </div>
          <div className="portrait-note">
            <span className="portrait-dot" />
            <p>
              Based in Juba. Building locally, learning regionally, thinking
              beyond borders.
            </p>
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <p className="intro-label">A little context</p>
        <p className="intro-statement">
          My work sits where <strong>science</strong>, <strong>youth leadership</strong>,
          <strong> sustainable development</strong> and <strong>technology</strong> meet.
          I&apos;m interested in practical ideas that help people access opportunity,
          strengthen communities and build useful systems.
        </p>
        <Link className="text-link" href="/about">
          Read my story <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="section section-spaced">
        <SectionHeading
          eyebrow="WHAT I FOCUS ON"
          title="Different disciplines. One practical direction."
          intro="I do not see science, technology and development as separate worlds. Each gives me a different way to understand problems and build better responses."
        />
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <span className="focus-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects built around access, participation and useful technology."
          intro="These are the initiatives that best represent the direction of my work today."
        />
        <div className="project-list">
          {projects.slice(0, 3).map((project, index) => (
            <article className="project-row" key={project.slug}>
              <div className="project-index">0{index + 1}</div>
              <div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              <Link className="round-link" href="/work" aria-label={`Read about ${project.title}`}>
                ↗
              </Link>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="button button-dark" href="/work">
            View all work
          </Link>
        </div>
      </section>

      <section className="section impact-panel">
        <div className="impact-copy">
          <p className="eyebrow">YOUTH OPPORTUNITIES</p>
          <h2>Opportunity should be easier to find—and easier to act on.</h2>
          <p>
            What began as a community for sharing opportunities now combines
            discovery, mentorship, application guidance and practical skills support.
          </p>
          <a
            className="text-link text-link-light"
            href="https://youthopp.yifoss.org"
            target="_blank"
            rel="noreferrer"
          >
            Visit the platform <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="impact-stats">
          <div>
            <strong>300+</strong>
            <span>community members</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>young people supported through opportunities and mentorship</span>
          </div>
          <div>
            <strong>EA</strong>
            <span>regional learning and youth engagement across East Africa</span>
          </div>
        </div>
      </section>

      <section className="section section-spaced">
        <SectionHeading
          eyebrow="LEADERSHIP & ENGAGEMENT"
          title="Leadership is most useful when it turns into responsibility."
          intro="A selection of roles and learning experiences that have shaped how I work with people, organizations and ideas."
        />
        <div className="leadership-preview">
          {leadership.slice(0, 3).map((item) => (
            <article key={item.organization}>
              <p>{item.role}</p>
              <h3>{item.organization}</h3>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href="/leadership">
            See leadership journey <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Good work usually starts with a useful conversation.</h2>
        <p>
          I&apos;m interested in thoughtful collaboration across youth development,
          sustainable development, digital innovation and community-focused work.
        </p>
        <Link className="button button-light button-large" href="/contact">
          Start a conversation
        </Link>
      </section>
    </main>
  );
}
