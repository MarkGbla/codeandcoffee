"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
  transition: { duration: 0.8, ease },
};

export function Intro() {
  return (
    <section className="bg-[#F2F3F3] py-28 md:py-40">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 text-[22px] md:text-[26px] leading-[1.35] tracking-tight">
        <motion.div {...fadeUp} className="space-y-8">
          <p>
            there are many ways to learn tech.
            <br />
            tutorials, courses, videos — everywhere.
          </p>
          <p>
            you&apos;ve probably tried some.
            <br />
            but something still feels missing.
          </p>
          <p className="font-semibold">
            most learning feels overwhelming, disconnected, or hard to apply.
          </p>
          <p>
            so people start… and stop.
            <br />
            nothing real gets built. that&apos;s the problem.
          </p>
          <p>
            code &amp; coffee is different.
            <br />
            we focus on learning by building — together.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="space-y-8"
        >
          <p className="font-semibold">
            code &amp; coffee is simple, practical, and community-driven.
          </p>
          <p>
            not focused on theory.
            <br />
            not focused on perfection.
          </p>
          <p>
            focused on helping you start, build, and keep going.
          </p>
          <p>ex, join a session, and grow with others.</p>

          <p className="text-[18px] md:text-[20px] leading-snug pt-6">
            <span className="font-semibold">Mark Gbla</span>
            <br />
            <em className="font-scribble not-italic text-[18px]">
              Founder, Code &amp; Coffee
            </em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
