"use client";

import { motion } from "framer-motion";
import { BackgroundVideo } from "../BackgroundVideo";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="relative aspect-[16/10] bg-black overflow-hidden"
        >
          <BackgroundVideo src="/video/clip2.mp4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="relative aspect-[16/10] bg-black overflow-hidden"
        >
          <BackgroundVideo src="/video/clip3.mp4" />
        </motion.div>
      </div>
    </section>
  );
}
