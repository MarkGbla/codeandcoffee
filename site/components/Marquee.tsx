"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

type Item = { src: string; caption?: string };
type Props = { items: Item[]; speed?: number };

export function Marquee({ items, speed = 40 }: Props) {
  const controls = useAnimationControls();
  const [paused, setPaused] = useState(false);
  const loop = [...items, ...items];

  useEffect(() => {
    if (paused) {
      controls.stop();
      return;
    }
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: speed, ease: "linear", repeat: Infinity },
    });
  }, [paused, speed, controls]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div animate={controls} className="flex gap-2 will-change-transform">
        {loop.map((it, i) => (
          <figure
            key={i}
            className="relative shrink-0 w-[60vw] sm:w-[40vw] md:w-[26vw] min-w-[220px] md:min-w-[280px] aspect-[4/5] bg-neutral-900 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={it.src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              draggable={false}
            />
            {it.caption && (
              <figcaption className="absolute bottom-4 left-4 right-4 font-scribble text-[#F7D24A] text-[20px] md:text-[22px] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,.6)]">
                {it.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
