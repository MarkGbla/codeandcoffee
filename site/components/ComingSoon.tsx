"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

type Props = {
  title: string;
  eyebrow?: string;
  blurb?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function ComingSoon({
  title,
  eyebrow = "coming soon",
  blurb = "we’re building this page now. in the meantime, join a session or head back home.",
  primaryCta = { href: "/", label: "back home" },
  secondaryCta = { href: "/about", label: "about" },
}: Props) {
  return (
    <section className="wrap pt-28 md:pt-44 pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="inline-flex items-center gap-3 font-scribble lowercase text-[14px] sm:text-[16px]"
          >
            <span className="px-3 py-1 bg-brand-yellow text-black rounded-full">
              {eyebrow}
            </span>
            <span className="text-black/55">code &amp; coffee</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
            className="mt-8 font-display font-semibold tracking-[-0.03em] leading-[0.95] text-[clamp(44px,10vw,96px)] lowercase"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-7 md:mt-9 max-w-[62ch] text-[18px] md:text-[22px] leading-[1.6] text-brand-ink/80 tracking-tight"
          >
            {blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-4 text-[16px] tracking-tight lowercase"
              >
                {primaryCta.label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-4 text-[16px] tracking-tight lowercase border border-black/15 hover:border-black/30 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="relative bg-[#F2F3F3] border border-black/10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-28 w-[320px] h-[320px] bg-brand-yellow/60 blur-3xl" />
            <div className="absolute -bottom-32 -right-28 w-[360px] h-[360px] bg-[#0099FF]/20 blur-3xl" />
          </div>

          <div className="relative p-7 md:p-9">
            <div className="font-scribble lowercase text-[14px] tracking-wide opacity-70">
              what’s next
            </div>
            <div className="mt-4 font-display font-semibold tracking-tight text-[22px] md:text-[28px] lowercase">
              we’re polishing this page.
            </div>
            <ul className="mt-6 space-y-3 text-[16px] md:text-[18px] leading-[1.5] text-black/75">
              <li className="flex gap-3">
                <span className="mt-[0.3em] h-2 w-2 bg-black/70 rounded-full shrink-0" />
                session updates + schedule
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.3em] h-2 w-2 bg-black/70 rounded-full shrink-0" />
                community notes + wins
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.3em] h-2 w-2 bg-black/70 rounded-full shrink-0" />
                projects built together
              </li>
            </ul>

            <form
              className="mt-8 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="enter your email"
                className="flex-1 w-full bg-white px-5 py-4 text-[16px] outline-none focus:ring-2 focus:ring-black/15"
              />
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#FFEA00", color: "#000" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                type="submit"
                className="bg-black text-white font-semibold px-7 py-4 text-[16px] tracking-tight lowercase"
              >
                subscribe
              </motion.button>
            </form>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

