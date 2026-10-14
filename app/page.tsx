import Image from "next/image";
import Link from "next/link";
import portrait from "../Screenshot_20260709_094333_Drive.jpg";
import { focusAreas, leadership, projects, socialProfiles } from "@/lib/site-data";

const glance = [
  { label: "Education", value: "Industrial Chemistry", detail: "University of Juba" },
  { label: "Technology", value: "Digital innovation", detail: "Software & web development" },
  { label: "Leadership", value: "Founder & Executive Director", detail: "Young Innovative Farmers Organization" },
  { label: "Community", value: "Youth empowerment", detail: "Education, access and sustainable development" },
];

const skills = [
  ["Science", "Industrial Chemistry · Scientific learning"],
  ["Technology", "Website development · Basic Python · Digital platforms"],
  ["Leadership", "Project coordination · Organizational development · Youth engagement"],
  ["Communication", "Digital content · Website management · Social media"],
];

const milestones = [
  { year: "2026", name: "Youth Opportunities Global Ambassador Program", status: "Selected · Country Ambassador" },
  { year: "2025", name: "East African Community Youth Fellowship", status: "Fellowship participant" },
  { year: "2026", name: "Digital Skills Training", status: "Internet Society South Sudan Chapter · Scenius Hub" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">JUBA · SOUTH SUDAN</p>
          <h1>Salva Aleu <span>Wol Aleu.</span></h1>
          <p className="hero-role">Industrial Chemistry Student · Youth Leader · Technology Enthusiast · Social Impact Advocate</p>
          <p className="hero-intro">
            I work at the intersection of science, technology, youth leadership and
            sustainable development. Through education, community initiatives and
            digital projects, I want to help expand opportunity and create practical,
            lasting change.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/about">Explore my journey <span aria-hidden="true">↗</span></Link>
            <Link className="button button-light" href="/work">View my projects</Link>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            {socialProfiles.filter((profile) => ["LinkedIn", "Facebook", "GitHub", "X", "YouTube"].includes(profile.name)).map((profile) => (
              <a key={profile.name} href={profile.href} target="_blank" rel="noreferrer">{profile.name} ↗</a>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <Image src={portrait} alt="Official portrait of Salva Aleu Wol Aleu" priority sizes="(max-width: 900px) 86vw, 38vw" className="portrait" />
          </div>
          <div className="portrait-note"><span className="portrait-dot" /><p>Learning continuously. Building locally. Thinking beyond borders.</p></div>
        </div>
      </section>

      <section className="section section-spaced glance-section">
        <div className="section-heading">
          <p className="eyebrow">AT A GLANCE</p>
          <div className="section-heading-grid">
            <h2>Four connected parts of my journey.</h2>
            <p>My academic path, technology interests and community responsibilities all feed into the same goal: building useful things and widening access to opportunity.</p>
          </div>
        </div>
        <div className="glance-grid">
          {glance.map((item, index) => <article className="glance-card" key={item.label}>
            <span>0{index + 1} · {item.label}</span><h3>{item.value}</h3><p>{item.detail}</p>
          </article>)}
        </div>
      </section>

      <section className="section intro-band">
        <p className="intro-label">ABOUT ME</p>
        <p className="intro-statement">My work connects <strong>science</strong>, <strong>technology</strong>, <strong>leadership</strong> and <strong>social impact</strong>—with community needs at the centre.</p>
        <Link className="text-link" href="/about">Read my story <span aria-hidden="true">→</span></Link>
      </section>

      <section className="section section-spaced">
        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <div className="section-heading-grid">
            <h2>Ideas made useful through action.</h2>
            <p>I focus on initiatives that improve access, strengthen communities or use technology to solve practical problems.</p>
          </div>
        </div>
        <div className="project-list">
          {projects.slice(0, 4).map((project, index) => <article className="project-row" key={project.slug}>
            <div className="project-index">0{index + 1}</div>
            <div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3></div>
            <p className="project-summary">{project.summary}</p>
            <Link className="round-link" href={`/work#${project.slug}`} aria-label={`Read about ${project.title}`}>↗</Link>
          </article>)}
        </div>
        <div className="section-action"><Link className="button button-dark" href="/work">Explore projects</Link></div>
      </section>

      <section className="section impact-panel">
        <div className="impact-copy">
          <p className="eyebrow">YOUTH OPPORTUNITIES</p>
          <h2>Opportunity should be easier to find—and easier to act on.</h2>
          <p>A youth-focused initiative helping young people discover scholarships, fellowships, training, internships and other pathways, with practical guidance and mentorship.</p>
          <a className="text-link text-link-light" href="https://youthopp.yifoss.org" target="_blank" rel="noreferrer">Visit the platform <span aria-hidden="true">↗</span></a>
        </div>
        <div className="impact-stats">
          <div><strong>300+</strong><span>community members</span></div>
          <div><strong>40+</strong><span>young people supported through opportunities and mentorship</span></div>
          <div><strong>EA</strong><span>regional learning and youth engagement across East Africa</span></div>
        </div>
      </section>

      <section className="section section-spaced">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE & LEADERSHIP</p>
          <div className="section-heading-grid">
            <h2>Responsibility beyond the classroom.</h2>
            <p>Organizational leadership, education, youth coordination and community service have shaped how I approach collaboration and delivery.</p>
          </div>
        </div>
        <div className="leadership-preview">
          {leadership.slice(0, 3).map((item) => <article key={item.organization}><p>{item.role}</p><h3>{item.organization}</h3><span>{item.description}</span></article>)}
        </div>
        <div className="section-action"><Link className="text-link" href="/experience">View professional experience <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="section section-spaced">
        <div className="section-heading">
          <p className="eyebrow">SKILLS & EXPERTISE</p>
          <div className="section-heading-grid"><h2>What I am learning and putting into practice.</h2><p>A practical snapshot of my current capabilities and developing areas of expertise.</p></div>
        </div>
        <div className="skills-grid">{skills.map(([name, list], index) => <article className="skill-card" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{list}</p></article>)}</div>
      </section>

      <section className="section section-spaced">
        <div className="section-heading">
          <p className="eyebrow">SELECTED MILESTONES</p>
          <div className="section-heading-grid"><h2>Learning, selection and participation.</h2><p>These entries are labelled by their actual status—not treated as awards where that would be inaccurate.</p></div>
        </div>
        <div className="milestone-list">{milestones.map((item) => <article key={item.name}><span>{item.year}</span><div><h3>{item.name}</h3><p>{item.status}</p></div></article>)}</div>
        <div className="section-action"><Link className="text-link" href="/achievements">See achievements & fellowships <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s build something that matters.</h2>
        <p>I welcome thoughtful opportunities for collaboration in science, technology, youth leadership, research, speaking and sustainable development.</p>
        <Link className="button button-light button-large" href="/contact">Get in touch</Link>
      </section>
    </main>
  );
}
