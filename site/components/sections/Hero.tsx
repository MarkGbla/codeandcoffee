"use client";

import { motion } from "framer-motion";
import { BackgroundVideo } from "../BackgroundVideo";

/**
 * Hero — pixel-port of the aiplusfriends.com header layout, populated with
 * the Code & Coffee headline and the project's `cnc.mp4` background video.
 *
 * Layering inside the section (low → high):
 *   z-0   BackgroundVideo  (autoplay, muted, loop, playsinline)
 *   z-10  dark gradient    (bottom-up fade for headline contrast)
 *   z-20  headline cluster (heading only)
 */
export function Hero() {
  return (
    <section className="relative isolate w-full h-screen min-h-[640px] overflow-hidden bg-black">
      <BackgroundVideo src="/video/cnc.mp4" className="z-0" />

      <div
        className="absolute inset-0 z-10 hero-gradient pointer-events-none"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: [0.69, 0, 0.05, 0.98],
        }}
        style={{ translate: "-50% 0" }}
        className="
          absolute z-20 left-1/2 bottom-[72px]
          w-[min(1312px,calc(100%-40px))] md:w-[min(1312px,calc(100%-80px))]
          flex flex-col items-start
        "
      >
        <motion.h1
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 1.4,
            ease: [0.95, -0.02, 0.38, 1],
          }}
          style={{
            fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            textTransform: "lowercase",
            transformOrigin: "left center",
            wordBreak: "break-word",
          }}
          className="
            text-white text-[34px] md:text-[75px]
            whitespace-pre-wrap text-left w-full
          "
        >
          {"a space for\n"}
          builders &amp; learners
        </motion.h1>
      </motion.div>
    </section>
  );
}
