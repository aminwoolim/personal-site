// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-sm text-slate-700">
          The best way to reach me is by email or LinkedIn.
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            Email:{" "}
            <a href="mailto:aminwoolim@gmail.com" className="underline">
              aminwoolim@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/alex-lim-6685b2154"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://linkedin.com/in/alex-lim-6685b2154
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/aminwoolim"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @aminwoolim
            </a>
          </li>
        </ul>
      </section>
    );
  }