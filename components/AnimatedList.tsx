// components/AnimatedList.tsx
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  className?: string;
};

export function AnimatedItem({ children, index, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.3, // stagger each item by 100ms
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}