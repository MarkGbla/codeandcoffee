"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ease } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16"
        >
          <p className="text-[22px] md:text-[28px] leading-[1.3] tracking-tight">
            for partnerships or collaborations:
            <br />
            <a
              className="underline decoration-[1.5px] underline-offset-4"
              style={{ color: "#FFEA00" }}
              href="mailto:codeandcoffee.sl@gmail.com"
            >
              codeandcoffee.sl@gmail.com
            </a>
          </p>

          <div className="font-scribble text-[18px] leading-[2]">
            <div className="opacity-60 mb-1 tracking-widest text-[13px] uppercase">
              pages
            </div>
            <ul className="space-y-1 lowercase">
              <li>
                <Link className="hover:opacity-70 transition-opacity" href="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-70 transition-opacity" href="/about">
                  about
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-70 transition-opacity" href="/sessions">
                  sessions
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-70 transition-opacity" href="/community">
                  community
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-70 transition-opacity" href="/projects">
                  projects
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="h-px bg-white/25 mt-20" />
        <div className="font-scribble text-[16px] pt-4 pb-2 opacity-80">
          © code &amp; coffee
        </div>
        <div className="h-px bg-white/25" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1, ease }}
          className="flex items-center justify-center pt-20 pb-6"
        >
          <Logo size="xl" href={null} tone="light" />
        </motion.div>
      </div>
    </footer>
  );
}
