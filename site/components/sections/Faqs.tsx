"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ease } from "@/lib/motion";

const faqs = [
  {
    q: "what happens when i join?",
    a: "you join a session and become part of the community. you start learning, building, and interacting with others.",
  },
  {
    q: "are sessions recorded?",
    a: "some sessions are recorded. but being present gives you the full experience.",
  },
  {
    q: "what happens during sessions?",
    a: "coding, workshops, discussions, demos, and guest sessions. each session is different, but the focus stays the same: learn and build.",
  },
  {
    q: "do i need to know how to code?",
    a: "no. beginners are welcome. you just need interest and consistency.",
  },
  {
    q: "what if i don't have an idea?",
    a: "that's fine. you'll discover ideas through sessions, discussions, and problems around you.",
  },
  {
    q: "who runs code & coffee?",
    a: "it's student-led and community-driven, with support from builders, developers, and creators.",
  },
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-white pt-28 pb-32">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-center font-semibold tracking-[-0.02em] text-[56px] md:text-[96px] leading-none lowercase"
        >
          faqs
        </motion.h2>

        <div className="mt-16 max-w-[1100px] mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="border-t border-neutral-300 last:border-b"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full cursor-pointer flex items-start gap-10 md:gap-16 py-8 md:py-10 text-left group"
                >
                  <span className="text-[20px] md:text-[24px] font-semibold tracking-tight min-w-[4ch] tabular-nums">
                    / 0{i + 1}
                  </span>
                  <span className="flex-1 text-[20px] md:text-[28px] font-semibold tracking-tight leading-[1.25] transition-colors group-hover:text-black">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="text-[28px] leading-none pt-1 select-none inline-block"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[calc(4ch+2.5rem)] md:pl-[calc(4ch+4rem)] pr-[3rem] pb-10 -mt-2 text-[18px] md:text-[22px] text-neutral-800 leading-[1.45]">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
