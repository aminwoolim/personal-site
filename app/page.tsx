// src/app/page.tsx
"use client";

import Image from "next/image";
import { AnimatedItem } from "@/components/AnimatedList";

export default function HomePage() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="grid w-full gap-10 md:grid-cols-[1fr_auto] md:items-center">
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
          <div className="flex justify-center md:justify-start">
            <div className="relative h-72 w-44 overflow-hidden rounded-2xl border bg-slate-100 shadow-sm md:h-96 md:w-56">
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
  );
}