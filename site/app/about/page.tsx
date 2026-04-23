"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ease } from "@/lib/motion";

const strip = [
  { src: "/frnds/shaurya.png", caption: "first session, may 2025" },
  { src: "/frnds/prey.png", caption: "students showing up" },
  { src: "/frnds/manav.png", caption: "building ideas together" },
  { src: "/frnds/arny.png", caption: "learning by doing" },
  { src: "/frnds/ridhi.png", caption: "community energy" },
  { src: "/frnds/arun.png", caption: "growing over time" },
];

const story = [
  "it started as a small experiment.",
  "a few students meeting to code, share ideas, and try to solve real problems.",
  "it wasn't smooth.",
  "progress was slow. some sessions felt uncertain. there were challenges we didn't expect.",
  "but we kept showing up.",
  "over time, it became something more.",
  "a community. a habit. a space where people build and grow together.",
];

const closing = ["keep showing up.", "keep learning.", "keep building."];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Nav variant="solid" />
      <div className="pt-36 md:pt-44" />

      <section className="wrap pb-24 md:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="font-display font-semibold tracking-[-0.03em] leading-[0.95] text-[56px] md:text-[112px] lowercase"
        >
          about code &amp; coffee
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16 md:mt-24 max-w-[70ch] space-y-6 text-[20px] md:text-[24px] leading-[1.55] tracking-tight"
        >
          {story.map((p, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="pt-10 space-y-2 text-[#0A0A0A]/85"
          >
            <p>the goal is simple:</p>
            {closing.map((c) => (
              <p key={c} className="font-semibold">
                {c}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="pb-0">
        <Marquee items={strip} speed={45} />
      </section>

      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-black">
        <BackgroundVideo src="/video/cnc.mp4" className="z-0" />
        <div className="absolute inset-0 z-10 bg-black/45 pointer-events-none" />
        <div className="relative z-20 h-full flex items-center">
          <div className="wrap">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.9, ease }}
              className="font-display text-white font-semibold tracking-[-0.02em] leading-[1.02] text-[44px] md:text-[80px] max-w-[20ch]"
            >
              creating a space where people can learn and build together.
            </motion.h2>
          </div>
        </div>
      </section>

      <section className="bg-[#E6F2F1] py-28">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-display font-semibold tracking-[-0.02em] text-[56px] md:text-[88px] leading-none lowercase">
              team
            </h2>
            <p className="mt-6 text-[20px] md:text-[22px]">
              the people behind code &amp; coffee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-square bg-neutral-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/frnds/esteban.png"
                  alt="Mark Gbla"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3">
                <div className="text-[22px] md:text-[26px] font-semibold tracking-tight">
                  Mark Gbla,{" "}
                  <span className="font-scribble font-normal text-[18px]">
                    Founder
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="wrap max-w-[820px] mx-auto text-center"
        >
          <h2 className="font-display font-semibold tracking-[-0.02em] text-[36px] md:text-[50px] leading-[1.05] lowercase">
            stay updated
          </h2>
          <p className="mt-5 text-[18px] md:text-[20px] text-[#919191] leading-[1.45]">
            get updates on upcoming sessions, events, and community activities.
          </p>
          <form
            className="mt-10 flex flex-col md:flex-row gap-3 justify-center max-w-[540px] mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="enter your email"
              className="flex-1 bg-[#F2F3F3] px-5 py-4 text-[16px] outline-none focus:ring-2 focus:ring-black/20"
            />
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#FFEA00", color: "#000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              type="submit"
              className="bg-black text-white font-semibold px-8 py-4 text-[16px] tracking-tight lowercase"
            >
              subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
