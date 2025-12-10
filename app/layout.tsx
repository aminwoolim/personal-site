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
        <div className="mx-auto max-w-4xl px-4 py-8">
          <header className="mb-10 flex items-center justify-between">
            
            <nav className="flex gap-6 text-xs text-slate-700">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
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