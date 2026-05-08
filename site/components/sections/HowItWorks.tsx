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
    <section className="bg-black text-white py-20 md:py-40">
      <motion.div {...stagger} className="wrap text-center max-w-[1100px] mx-auto">
        <motion.p variants={item} className="text-white/60 text-[18px] md:text-[26px]">
          how does it work?
        </motion.p>
        <motion.h2
          variants={item}
          className="text-white mt-6 md:mt-10 tracking-[-0.02em] font-semibold leading-[1.04] text-[clamp(40px,10vw,88px)]"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          we meet, we build,
          <br className="hidden md:inline" />
          <span className="md:hidden"> </span>
          we learn.
        </motion.h2>
        <motion.p
          variants={item}
          className="text-white font-semibold mt-6 md:mt-8 text-[clamp(22px,5.5vw,40px)] leading-[1.25] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          coding sessions, workshops,
          <br className="hidden md:inline" />
          <span className="md:hidden"> </span>
          discussions, and shared experiences.
        </motion.p>
        <motion.div
          variants={item}
          className="text-white/70 mt-10 md:mt-16 text-[18px] md:text-[24px] leading-[1.55] max-w-[68ch] mx-auto space-y-3 md:space-y-4"
        >
          <p>you show up with a laptop and a willingness to try.</p>
          <p>we code, share ideas, solve problems, learn together.</p>
          <p>
            you don&apos;t need to be perfect. you just need to start.
          </p>
        </motion.div>
        <motion.p
          variants={item}
          className="text-white/80 mt-10 md:mt-14 text-[18px] md:text-[28px]"
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
