"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export function PriceBanner() {
  return (
    <section className="bg-[#F2F3F3] pb-24 md:pb-32">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="w-full"
          style={{ backgroundColor: "#FFEA00" }}
        >
          <div className="p-[14px] md:p-[22px]">
            <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 py-10 md:py-20 px-6 text-center">
              <span className="font-inter text-white/70 font-semibold text-[clamp(36px,10vw,64px)] tracking-[-0.02em] leading-none lowercase">
                free / open
              </span>
              <motion.a
                initial={{ backgroundColor: "#FFFFFF" }}
                whileHover={{ scale: 1.03, backgroundColor: "#FFEA00" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                href="https://luma.com/event/evt-grXuBUZuIfUQFVf"
                target="_blank"
                rel="noopener noreferrer"
                data-luma-action="checkout"
                data-luma-event-id="evt-grXuBUZuIfUQFVf"
                className="font-display text-black font-semibold text-[22px] md:text-[40px] leading-none px-7 md:px-12 py-4 md:py-5"
              >
                join a session
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
