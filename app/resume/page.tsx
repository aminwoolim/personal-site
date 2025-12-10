// src/app/resume/page.tsx
export default function ResumePage() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <p className="text-sm text-slate-700">
          You can download my resume using the link below.
        </p>
        <a
          href="/alex-lim-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded border px-4 py-2 text-xs font-medium"
        >
          Download Resume (PDF)
        </a>
      </section>
    );
  }