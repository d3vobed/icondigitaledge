"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { serviceCategories } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "./ui";
import { cn } from "@/lib/utils";

/* Stagger pattern per card position — reproduces the masonry-style offsets */
const offsetPatterns = [
  ["md:mt-0", "md:mt-14", "md:mt-7"],
  ["md:mt-10", "md:mt-0", "md:mt-20"],
  ["md:mt-4", "md:mt-16", "md:mt-0"],
  ["md:mt-12", "md:mt-2", "md:mt-16"],
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        {/* Header block — left aligned */}
        <SectionHeading className="max-w-3xl">
          How We Grow <T>Your Brand</T>
        </SectionHeading>
        <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/70">
          We combine strategy, technology, and creativity to help you attract the right
          audience, convert them into customers, and scale faster than your competition.
        </p>
        <div className="mt-9">
          <ArrowPillButton href="/services">Explore All Services</ArrowPillButton>
        </div>

        {/* Category blocks — sticky rail left, staggered cards right */}
        <div className="mt-24 space-y-24 md:space-y-32">
          {serviceCategories.map((cat, ci) => (
            <div key={cat.slug} className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
              {/* Left rail — sticky category label */}
              <div className="lg:relative">
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <cat.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-4xl font-bold tracking-tight text-white md:text-[42px]">
                      {cat.label}
                    </h3>
                  </div>
                  <p className="mt-5 hidden max-w-[260px] text-sm leading-relaxed text-white/55 lg:block">
                    {cat.intro}
                  </p>
                  <Link
                    href={`/services/${cat.slug === "marketing" ? "digital-marketing" : cat.slug === "technology" ? "website-design-development" : "brand-identity"}`}
                    className="mt-6 hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand lg:inline-flex"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 text-brand" />
                  </Link>
                </div>
              </div>

              {/* Right — staggered card grid */}
              <div>
                <p className="max-w-xl text-[15.5px] leading-relaxed text-white/70 lg:hidden">
                  {cat.intro}
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {cat.items.map((s, i) => {
                    const pattern = offsetPatterns[i % offsetPatterns.length];
                    return (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                        className={cn(pattern[ci % pattern.length])}
                      >
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex h-full min-h-[120px] items-center gap-5 rounded-xl bg-surface px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
                        >
                          <span className="shrink-0 text-brand transition-transform duration-300 group-hover:scale-110">
                            <s.icon className="h-8 w-8" strokeWidth={1.6} />
                          </span>
                          <h4 className="font-display text-[17px] font-bold leading-snug text-white">
                            {s.name}
                          </h4>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
