"use client";

import { motion } from "framer-motion";
import { ScrollWords } from "../ScrollWords";
import { ease } from "@/lib/motion";

export function Disclaimer() {
  return (
    <section className="bg-[#F2F3F3] pb-24 md:pb-40">
      <div className="wrap text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#919191] text-[22px] md:text-[26px] mb-4"
        >
          Disclaimer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="uppercase whitespace-nowrap font-semibold tracking-[-0.03em] leading-[0.95] text-[clamp(28px,8vw,108px)]"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          this is not a course.
        </motion.h2>

        <ScrollWords
          className="text-[22px] md:text-[28px] leading-[1.35] max-w-[64ch] mx-auto mt-10 tracking-tight"
          startColor="rgba(10, 10, 10, 0.15)"
          endColor="rgba(10, 10, 10, 1)"
          text="this is not a structured program or certification. we won't try to teach everything. that knowledge is literally a google/youtube/chatgpt search away. the goal is simple: help you learn, build something, and keep improving over time."
        />
      </div>
    </section>
  );
}
