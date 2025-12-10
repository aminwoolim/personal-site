"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatedItem } from "@/components/AnimatedList";

type LabItemStatus = "planned" | "in-progress" | "paused";

type LabItem = {
  title: string;
  status: LabItemStatus;
  summary: string;
  nextSteps: string[];
  icon?: string; // For future icon support
};

const labItems: LabItem[] = [
  {
    title: "Fitness Analyzer",
    status: "in-progress",
    summary:
      "Using Azure tools to ingest my workout journal entries and notes, parse them into structured data, and train a model that suggests new and optimal workouts.",
    nextSteps: [
      "Set up Azure Document Intelligence (Form Recognizer) pipeline to parse journal entries into a consistent schema.",
      "Design a simple data model for workouts (exercise, sets, reps, load, RPE, notes).",
      "Build a first-pass recommendation baseline (e.g., progression-based templates) before experimenting with ML.",
      "Create a minimal dashboard to visualize trends in volume and performance.",
    ],
  },
  {
    title: "Pure News Anchor",
    status: "planned",
    summary:
      "An AI assistant that gathers news from multiple sources, produces unbiased factual summaries, and analyzes language patterns to highlight framing and repeated phrases across outlets.",
    nextSteps: [
      "Define evaluation questions and success metrics",
      "Experiment with chunking strategies and rerankers",
      "Compare open-source vs. hosted vector DB options",
    ],
  },
  {
    title: "AI Code Reviewer",
    status: "planned",
    summary:
      "Custom lightweight code reviewer that checks my projects for bugs, smells, and ML-specific issues.",
    nextSteps: [
      "Define code conventions and patterns to detect",
      "Use AST parsing and develop simple rule engine",
      "Add model-powered suggestions for improvements",
      "Integrate into GitHub Actions"
    ],
  },
  {
    title: "Data Quality Inspector",
    status: "planned",
    summary:
      "Tool that uses statistical checks and LLM-based reasoning to flag data quality issues and explain root causes.",
    nextSteps: [
      "Create test datasets with intentional issues",
      "Add schema & rule checks",
      "Add LLM explanation layer",
      "Build simple report generation"
    ]
  }
];

function StatusBadge({ status }: { status: LabItemStatus }) {
  const styles: Record<LabItemStatus, string> = {
    "in-progress": "bg-amber-100 text-amber-800 border-amber-200",
    planned: "bg-slate-100 text-slate-700 border-slate-200",
    paused: "bg-rose-50 text-rose-800 border-rose-200",
  };

  const labels: Record<LabItemStatus, string> = {
    "in-progress": "In progress",
    planned: "Planned",
    paused: "Paused",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function IconPlaceholder() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200">
      <svg
        className="h-6 w-6 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}

export default function LabPage() {
  const [selectedItem, setSelectedItem] = useState<LabItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (item: LabItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Lab</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          A snapshot of experiments, future projects, and ideas I&apos;m
          exploring. These are not polished case studies yet—just the things
          I&apos;m actively thinking about and building next.
        </p>
      </header>

      {/* Horizontal grid layout */}
      <div className="flex flex-wrap gap-4">
        {labItems.map((item, index) => (
          <AnimatedItem key={item.title} index={index}>
            <article
              onClick={() => handleCardClick(item)}
              className="flex w-[200px] cursor-pointer flex-col items-center gap-3 rounded-xl border bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <IconPlaceholder />
              <h2 className="text-center text-sm font-semibold leading-tight text-slate-900">
                {item.title}
              </h2>
              <StatusBadge status={item.status} />
            </article>
          </AnimatedItem>
        ))}
      </div>

      {/* Modal for project details */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white p-6 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            {selectedItem && (
              <>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <Dialog.Title className="text-lg font-semibold text-slate-900">
                    {selectedItem.title}
                  </Dialog.Title>
                  <Dialog.Close className="rounded-full p-1 hover:bg-slate-100">
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Dialog.Close>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <StatusBadge status={selectedItem.status} />
                </div>

                <Dialog.Description className="mb-4 text-sm text-slate-600">
                  {selectedItem.summary}
                </Dialog.Description>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Next steps
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {selectedItem.nextSteps.map((step) => (
                      <li key={step} className="flex gap-2">
                        <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-slate-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
