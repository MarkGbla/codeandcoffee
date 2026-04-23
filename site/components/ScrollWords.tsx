"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  startColor?: string;
  endColor?: string;
};

/**
 * Scroll-linked word-by-word reveal. Each word's color interpolates from
 * `startColor` to `endColor` as the paragraph moves through the viewport.
 */
export function ScrollWords({
  text,
  className = "",
  startColor = "rgba(10, 10, 10, 0.18)",
  endColor = "rgba(10, 10, 10, 1)",
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const tokens = text.split(/(\s+)/);
  const nonSpaceCount = tokens.filter((t) => !/^\s+$/.test(t)).length;
  let idx = -1;

  return (
    <p ref={ref} className={className}>
      {tokens.map((t, i) => {
        if (/^\s+$/.test(t)) return <span key={i}>{t}</span>;
        idx += 1;
        const start = idx / nonSpaceCount;
        const end = Math.min(1, (idx + 1) / nonSpaceCount + 0.05);
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            startColor={startColor}
            endColor={endColor}
          >
            {t}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  progress,
  range,
  startColor,
  endColor,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  startColor: string;
  endColor: string;
  children: React.ReactNode;
}) {
  const color = useTransform(progress, range, [startColor, endColor]);
  return (
    <motion.span style={{ color }} className="inline-block">
      {children}
    </motion.span>
  );
}
