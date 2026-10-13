"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "./ui";

export default function CaseStudies() {
  return (
    <section id="works" className="scroll-mt-20 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading>
          Real Clients. <T>Real Results.</T>
        </SectionHeading>
        <p className="mt-5 text-[16.5px] text-white/70">We let the work speak for itself.</p>
        <div className="mt-8">
          <ArrowPillButton href="/our-works">See all case studies</ArrowPillButton>
        </div>

        {/* Stacked full-width case cards */}
        <div className="mt-14 space-y-8">
          {caseStudies.slice(0, 3).map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="rounded-2xl bg-surface px-7 py-10 transition-colors duration-300 hover:bg-surface-2 md:px-14 md:py-14"
            >
              <h3 className="font-display text-2xl font-bold text-white md:text-[28px]">
                {cs.client}
              </h3>
              <p className="mt-3 text-[15px] italic text-white/50">
                {cs.categories.join(" · ")}
              </p>
              <p className="mt-7 max-w-[520px] text-[15.5px] leading-relaxed text-white/80">
                {cs.body}
              </p>
              <div className="mt-10 max-w-[520px] border-t border-white/25 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group inline-flex items-center gap-2 font-display text-[17px] font-bold text-white transition-colors hover:text-brand"
                  >
                    See case study
                    <ArrowUpRight className="h-4.5 w-4.5 text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[15px] text-white/60">{cs.country}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
