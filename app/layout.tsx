// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Lim | Welcome",
  description:
    "AI engineer building applied machine learning products and scalable backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] px-4 2xl:px-12 py-8">
          <header className="mb-10 flex items-center justify-center">
            
            <nav className="flex gap-6 text-xs text-slate-700 bg-slate-100 px-6 py-3 rounded-full">
              <a href="/#hero" className="hover:text-slate-900 transition-colors">Home</a>
              <a href="/#about" className="hover:text-slate-900 transition-colors">About</a>
              <Link href="/projects">Projects</Link>
              <Link href="/lab">Lab</Link>
              <a href="/#resume" className="hover:text-slate-900 transition-colors">Resume</a>
              <a href="/#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-16 text-[11px] text-slate-500">
            © {new Date().getFullYear()} Alex Lim
          </footer>
        </div>
      </body>
    </html>
  );
}