"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Star } from "lucide-react";
import { SectionHeading, T } from "./ui";

const badges = [
  { label: "Meta Business Partner", sub: "Certified Agency", icon: BadgeCheck },
  { label: "Google Partner", sub: "Premier Agency", icon: BadgeCheck },
  { label: "Clutch 4.9/5", sub: "Top B2B Company", icon: Star },
  { label: "Global Agency Awards", sub: "Best SEO Campaign", icon: Award },
];

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-20 bg-[#050505] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1320px] px-5 text-center lg:px-8">
        <SectionHeading className="mx-auto max-w-3xl">
          Recognised as a leading <T>digital marketing company</T>
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-surface px-6 py-9 transition-colors hover:border-brand/40"
              >
                <Icon className="h-8 w-8 text-brand" strokeWidth={1.6} />
                <p className="font-display mt-2 text-lg font-bold text-white">{b.label}</p>
                <p className="text-sm text-white/55">{b.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
