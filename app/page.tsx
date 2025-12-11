// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedItem } from "@/components/AnimatedList";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StaggeredList } from "@/components/StaggeredList";

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

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="min-h-[70vh] flex items-center">
        <div className="flex w-full gap-6 items-center">
          {/* LEFT: text */}
          <AnimatedItem index={0}>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Welcome!
              </h1>
              <p className="max-w-md text-sm text-slate-600">
                My name is Alex, and I build applied machine learning features and the backend systems
                that support them. Have a look at my work and feel free to reach
                out.
              </p>
            </div>
          </AnimatedItem>

          {/* RIGHT: full-body photo */}
          <AnimatedItem index={1}>
            <div className="flex justify-center">
              <div className="relative h-96 w-60 shrink-0 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm">
                <Image
                  src="/Alex_Lim_Headshot.jpg"
                  alt="Alex Lim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </AnimatedItem>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <AnimatedSection id="about" className="space-y-10">
        {/* Hero */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="max-w-2xl text-sm text-slate-600">
            I&apos;m an AI engineer who enjoys taking ideas from rough prototype
            to reliable, production-ready systems. Most of my work blends
            backend engineering with applied machine learning: building APIs,
            experimenting with models, and wiring everything together.
          </p>
        </div>

        {/* Quick facts + focus areas */}
        <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What I&apos;m focused on
            </h3>
            <StaggeredList
              className="space-y-2 text-sm text-slate-600"
              itemClassName="flex gap-2"
              items={focusAreas.map((item) => ({
                key: item,
                content: (
                  <>
                    <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </>
                ),
              }))}
            />
          </div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border bg-white/50 p-5 text-sm shadow-sm"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              At a glance
            </h3>
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
          </motion.aside>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Experience
          </h3>

          {/* Timeline container */}
          <div className="relative border-l border-slate-300 pl-8">
            {experience.map((role, index) => (
              <motion.div
                key={role.title + role.company}
                className="relative pb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <span className="absolute -left-[10px] top-1 h-4 w-4 rounded-full border-2 border-slate-400 bg-white" />

                {/* Content block */}
                <div className="ml-2 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold">
                      {role.title} · {role.company}
                    </h4>
                    <span className="text-xs text-slate-500">{role.period}</span>
                  </div>

                  <ul className="space-y-1 text-sm text-slate-600">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-slate-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Skills
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items], index) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border bg-white/40 p-5 text-sm shadow-sm"
              >
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {group}
                </h4>
                <p className="text-slate-700">{items.join(" · ")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== RESUME SECTION ===== */}
      <AnimatedSection id="resume" className="space-y-4">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p className="text-sm text-slate-700">
          You can download my resume using the link below.
        </p>
        <motion.a
          href="/AL_Resume(Dec).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded border px-4 py-2 text-xs font-medium hover:bg-slate-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Download Resume (PDF)
        </motion.a>
      </AnimatedSection>

      {/* ===== CONTACT SECTION ===== */}
      <AnimatedSection id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-sm text-slate-700">
          The best way to reach me is by email or LinkedIn.
        </p>
        <StaggeredList
          className="space-y-2 text-sm"
          items={[
            {
              key: "email",
              content: (
                <>
                  Email:{" "}
                  <a href="mailto:aminwoolim@gmail.com" className="underline hover:text-slate-600 transition-colors">
                    aminwoolim@gmail.com
                  </a>
                </>
              ),
            },
            {
              key: "linkedin",
              content: (
                <>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/alex-lim-6685b2154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-600 transition-colors"
                  >
                    linkedin.com/in/alex-lim-6685b2154
                  </a>
                </>
              ),
            },
            {
              key: "github",
              content: (
                <>
                  GitHub:{" "}
                  <a
                    href="https://github.com/aminwoolim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-600 transition-colors"
                  >
                    @aminwoolim
                  </a>
                </>
              ),
            },
          ]}
        />
      </AnimatedSection>
    </div>
  );
}
