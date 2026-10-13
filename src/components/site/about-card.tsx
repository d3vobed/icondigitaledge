"use client";

import { motion } from "framer-motion";
import { ArrowPillButton } from "./ui";

export default function AboutCard() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#050505] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-surface px-8 py-14 md:px-14 md:py-20"
        >
          <h2 className="font-display max-w-3xl text-3xl font-bold leading-[1.25] tracking-tight text-white md:text-[40px]">
            We at IconDigitalEdge, scale companies sustainably in both emerging and mature
            economies through our <span className="text-brand">personalized solutions.</span>
          </h2>
          <div className="mt-10">
            <ArrowPillButton href="#about">About us</ArrowPillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
