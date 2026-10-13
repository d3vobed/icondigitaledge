"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Team photo blended into the teal panel, echoing the original */}
      <div className="absolute inset-y-0 right-0 hidden w-[55%] md:block">
        <Image
          src="/images/cta-team.jpg"
          alt="IconDigitalEdge team collaborating in the office"
          fill
          sizes="55vw"
          className="cta-photo object-cover"
          priority={false}
        />
        <div className="cta-photo absolute inset-0 bg-brand/45" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 py-24 md:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#042425] md:text-[52px]">
            Ready to Grow Faster Than Your Competition?
          </h2>
          <Link
            href="#contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#0b0b0b] pl-8 pr-2.5 py-2.5 font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get a Free Growth Audit
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
