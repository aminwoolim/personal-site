"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/banner-1.png", alt: "Banner image 1" },
  { src: "/banner-2.png", alt: "Banner image 2" }
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4s

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden rounded-lg border md:h-80">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}