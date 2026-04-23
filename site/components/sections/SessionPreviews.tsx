"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export function SessionPreviews() {
  return (
    <section className="bg-white pt-2 pb-2 md:pt-4 md:pb-4">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <Frame delay={0} videoSrc="/video/session-preview-1.mp4" />
          <Frame delay={0.1} videoSrc="/video/session-preview-2.mp4" />
        </div>
      </div>
    </section>
  );
}

function Frame({ delay, videoSrc }: { delay: number; videoSrc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900"
    >
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          tabIndex={-1}
        />
      )}
    </motion.div>
  );
}
