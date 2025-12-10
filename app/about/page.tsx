// src/app/about/page.tsx

const focusAreas = [
  "Integrating AI capabilities into production applications",
  "Designing data pipelines and serverless data workflows",
  "Building end-to-end ML prototypes and validating impact",
  "Collaborating across engineering, product, and design",
];

const experience = [
  {
    title: "Software Engineer",
    company: "Scrypted Inc",
    period: "Jul 2022 – Present",
    bullets: [
      "Build Python services and RESTful APIs that integrate AI-driven image generation and game engines.",
      "Lead and mentor a small team of interns through code reviews, weekly check-ins, and task planning.",
      "Develop internal tools to extract and transform JSON/XML/HTML data, reducing manual content setup.",
    ],
  },
  {
    title: "Explosive Performance Coach",
    company: "Onelife Fitness",
    period: "Oct 2024 – Aug 2025",
    bullets: [
      "Used data modeling tools to track client progress and optimize strength & mobility programs.",
      "Designed a nutrition tracker and body composition calculator to log and visualize results.",
    ],
  },
];

const skills = {
  "Languages & Data": ["Python", "SQL", "JavaScript", "Pandas", "NumPy"],
  "ML / AI": ["TensorFlow", "Scikit-Learn", "Orange3", "Applied ML Engineering"],
  "Cloud & Infra": ["AWS", "Serverless data lakes", "ETL with Glue (PySpark)"],
  "Other": ["Git", "REST APIs", "PMP-certified project management"],
};

export default function AboutPage() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          About Me
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I&apos;m an AI engineer who enjoys taking ideas
          from rough prototype to reliable, production-ready systems. Most of my
          work blends backend engineering with applied machine learning:
          building APIs, experimenting with models, and wiring everything
          together.
        </p>
      </div>

      {/* Quick facts + focus areas */}
      <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            What I&apos;m focused on
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {focusAreas.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-xl border bg-white/50 p-5 text-sm shadow-sm">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            At a glance
          </h2>
          <dl className="space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Location</dt>
              <dd className="text-slate-700">Vienna, VA (U.S. Citizen)</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Experience</dt>
              <dd className="text-slate-700">3+ years software engineering</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Current role</dt>
              <dd className="text-slate-700">Software Engineer @ Scrypted</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Focus</dt>
              <dd className="text-slate-700">
                Applied ML, backend systems, data workflows
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Education</dt>
              <dd className="text-slate-700 text-right">
                B.A. Mathematics, NYU
                <br />
                CSC in AI &amp; Data Analytics
              </dd>
            </div>
          </dl>
        </aside>
      </div>

     
    {/* Experience Timeline */}
{/* Experience Timeline */}
<div className="space-y-6">
  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
    Experience
  </h2>

  {/* Timeline container */}
  <div className="relative border-l border-slate-300 pl-8">
    {experience.map((role) => (
      <div key={role.title + role.company} className="relative pb-12">

        {/* Timeline dot */}
        <span
          className="absolute -left-[10px] top-1 h-4 w-4 rounded-full border-2 border-slate-400 bg-white"
        />

        {/* Content block */}
        <div className="ml-2 space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold">
              {role.title} · {role.company}
            </h3>
            <span className="text-xs text-slate-500">{role.period}</span>
          </div>

          <ul className="space-y-1 text-sm text-slate-600">
            {role.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-slate-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Skills
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-xl border bg-white/40 p-5 text-sm shadow-sm"
            >
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {group}
              </h3>
              <p className="text-slate-700">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}