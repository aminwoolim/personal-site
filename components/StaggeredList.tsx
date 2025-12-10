// components/StaggeredList.tsx
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

type ListItem = {
  key: string;
  content: ReactNode;
};

type Props = {
  items: ListItem[];
  className?: string;
  itemClassName?: string;
};

export function StaggeredList({ items, className, itemClassName }: Props) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {items.map((listItem) => (
        <motion.li key={listItem.key} variants={item} className={itemClassName}>
          {listItem.content}
        </motion.li>
      ))}
    </motion.ul>
  );
}
