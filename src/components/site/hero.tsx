"use client";

import { motion } from "framer-motion";
import { ArrowPillButton, PillButton } from "./ui";

export default function Hero() {
  return (
    <section className="hero-glow grain relative overflow-hidden bg-[#050505] pt-20">
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1320px] flex-col items-center justify-center px-5 pb-28 pt-24 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display max-w-4xl text-[42px] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[72px]"
        >
          Africa&rsquo;s Premier Digital Marketing Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/80"
        >
          500+ clients. 32 countries. $256M in client revenue. We build marketing, technology,
          and design systems that grow businesses — not just campaigns that spend budgets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <PillButton href="#works">See Our Work</PillButton>
          <ArrowPillButton href="#contact">Book a Free Session</ArrowPillButton>
        </motion.div>
      </div>
    </section>
  );
}
