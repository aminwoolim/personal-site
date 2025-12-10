// src/app/projects/page.tsx
"use client";

import { AnimatedItem } from "@/components/AnimatedList";


type Project = {
  slug: string;
  title: string;
  period: string;
  tags: string[];
  summary: string;
  githubUrl: string;
};


const projects: Project[] = [
  {slug: "aws-housing-mlops",
   title: "Housing Price Prediction Pipeline",
   period: "2025",
   tags: ["Python", "Pandas", "Scikit-learn", "Regression", "AWS"],
   summary:
     "Built a housing price prediction pipeline using AWS services and MLops best practices.",
   githubUrl: "https://github.com/aminwoolim/aws-housing-mlops"
  },
  {
    slug: "titanic-survival-model",
    title: "Titanic Survival Prediction Model",
    period: "2025",
    tags: ["Python", "Pandas", "TensorFlow", "Classification"],
    summary:
      "Built and compared several classification models to analyze survival factors on the Titanic dataset.",
    githubUrl: "https://github.com/aminwoolim/titanic-survival-prediction"
  },
  {
    slug: "Stock-HistoLib",
    title: "Stock History Library",
    period: "2025",
    tags: ["AWS", "DynamoDB", "API Gateway"],
    summary:
      "Designed a site that allows users to better understand and visualize stock market data.",
    githubUrl: "https://github.com/aminwoolim/Stock-HistoLib"
  },
  {
    slug: "mirai-visual-novel-engine",
    title: "Mirai – AI-Driven Visual Novel Engine",
    period: "2025",
    tags: ["Python", "OpenAI API", "JSON Engine"],
    summary:
      "Reusable engine for branching narrative scenes with AI-generated dialogue.",
    githubUrl: "https://github.com/aminwoolim/mirai-visual-novel-engine"
  },
];


export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <AnimatedItem key={project.slug} index={index}>
            <article className="rounded border p-4">
              <div className="mb-1 flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}  
                  </a>
                </h2>
                <span className="text-[11px] text-slate-500">
                  {project.period}
                </span>
              </div>
              <p className="mb-2 text-xs text-slate-700">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-1 text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}