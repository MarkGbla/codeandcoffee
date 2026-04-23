"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const stagger = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "0px 0px -15% 0px" },
  variants: { show: { transition: { staggerChildren: 0.12 } } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function HowItWorks() {
  return (
    <section className="bg-black text-white py-28 md:py-40">
      <motion.div {...stagger} className="wrap text-center max-w-[1100px] mx-auto">
        <motion.p variants={item} className="text-white/60 text-[22px] md:text-[26px]">
          how does it work?
        </motion.p>
        <motion.h2
          variants={item}
          className="text-white mt-10 tracking-[-0.02em] font-semibold leading-[1.02] text-[48px] md:text-[88px]"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          we meet, we build,
          <br />
          we learn.
        </motion.h2>
        <motion.p
          variants={item}
          className="text-white font-semibold mt-8 text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          coding sessions, workshops,
          <br />
          discussions, and shared experiences.
        </motion.p>
        <motion.div
          variants={item}
          className="text-white/70 mt-16 text-[20px] md:text-[24px] leading-[1.5] max-w-[68ch] mx-auto space-y-4"
        >
          <p>you show up with a laptop and a willingness to try.</p>
          <p>we code, share ideas, solve problems, learn together.</p>
          <p>
            you don&apos;t need to be perfect. you just need to start.
          </p>
        </motion.div>
        <motion.p
          variants={item}
          className="text-white/80 mt-14 text-[22px] md:text-[28px]"
        >
          not sure?{" "}
          <a
            href="#faqs"
            className="underline underline-offset-4 decoration-[1.5px] font-semibold transition-colors hover:opacity-90"
            style={{ color: "#FFEA00" }}
          >
            check the faqs
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
