import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing and research interests from Salva Aleu across science, digital innovation, youth development and sustainability.",
  alternates: { canonical: "/insights" },
};

const themes = [
  {
    category: "Youth leadership & development",
    title: "The role of digital skills in expanding opportunities for young people",
    description: "Exploring how practical digital literacy, mentoring and access to information can help young people navigate education and work.",
  },
  {
    category: "Science & industry",
    title: "Why science education matters for industrial development",
    description: "Reflections on scientific learning, applied chemistry and the relationship between technical capacity and local industry.",
  },
  {
    category: "Digital innovation",
    title: "Building digital platforms around real community needs",
    description: "Lessons and questions from creating useful online services for organizations, students and communities.",
  },
  {
    category: "Sustainable development",
    title: "Youth-led innovation for sustainable agriculture",
    description: "Considering the connections between young people, agricultural opportunity, climate resilience and community-led solutions.",
  },
];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <section className="page-hero section">
        <p className="eyebrow">INSIGHTS & RESEARCH</p>
        <h1>Questions I am exploring across science, technology and social impact.</h1>
        <p>This section is being developed. The themes below describe areas I intend to write and research about; they are not presented as already-published articles or academic papers.</p>
      </section>
      <section className="section work-stack">
        {themes.map((item, index) => (
          <article className="work-detail" key={item.title}>
            <div className="work-number">0{index + 1}</div>
            <div className="work-title">
              <p className="project-eyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p className="insight-status">Writing theme · Not yet published</p>
            </div>
            <div className="work-copy"><p className="work-lead">{item.description}</p></div>
          </article>
        ))}
      </section>
    </main>
  );
}
