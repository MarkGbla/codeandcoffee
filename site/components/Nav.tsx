"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ease } from "@/lib/motion";

const items = [
  { href: "/", label: "home" },
  { href: "/sessions", label: "sessions" },
  { href: "/community", label: "community" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];

type Props = { variant?: "overlay" | "solid" };

export function Nav({ variant = "overlay" }: Props) {
  const pathname = usePathname();
  const tone = variant === "solid" ? "dark" : "light";

  return (
    <header
      className={`absolute top-0 inset-x-0 z-40 ${variant === "solid" ? "bg-white" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="wrap flex items-center justify-between pt-7 pb-4"
      >
        <Logo size="sm" tone={tone} />
        <nav className="flex items-center gap-5 md:gap-8">
          {items.map((it, i) => {
            const active = pathname === it.href;
            return (
              <motion.span
                key={it.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.4 + i * 0.06 }}
              >
                <Link
                  href={it.href}
                  data-active={active}
                  className="nav-link text-[18px] md:text-[20px] leading-none"
                  style={tone === "dark" ? { color: "#0A0A0A" } : undefined}
                >
                  {it.label}
                </Link>
              </motion.span>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
}
