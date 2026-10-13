"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ArrowPillButton, SectionHeading, T } from "./ui";

const testimonials = [
  {
    quote:
      "IconDigitalEdge rebuilt our entire growth engine. Within six months our organic traffic tripled and online sales climbed by a third. They operate like an in-house team that actually cares about the numbers.",
    name: "Adaeze Okafor",
    role: "Head of Growth, ShopNaija Retail",
    initials: "AO",
  },
  {
    quote:
      "The most reliable agency we have worked with across three continents. Clear reporting, honest timelines, and campaigns that keep compounding long after launch.",
    name: "James Whitfield",
    role: "Marketing Director, EduLearn Academy",
    initials: "JW",
  },
  {
    quote:
      "From brand identity to a full e-commerce rebuild, they handled everything with remarkable polish. Our quote requests grew 25% in the first quarter after launch.",
    name: "Funmi Adeyemi",
    role: "CEO, SterlingTrust Insurance",
    initials: "FA",
  },
  {
    quote:
      "Their data-first approach changed how we think about marketing. Every shilling we spend is now tracked, measured, and optimized. Revenue is up 40% year over year.",
    name: "Brian Kimani",
    role: "Founder, SafariPay",
    initials: "BK",
  },
];

const clients = ["NAIJAMART", "PAYFLOW", "EDUSPARK", "GREENLEAF", "SWIFTCARE", "ORBITPAY"];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading>
          Amazing Clients, <T>Amazing Results</T>
        </SectionHeading>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
            <Quote className="absolute right-8 top-8 h-14 w-14 text-brand/15" aria-hidden="true" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex gap-1 text-brand" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display font-bold text-white">{t.name}</span>
                    <span className="block text-sm text-white/60">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 lg:flex-col">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 lg:flex-col">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-brand" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          <ArrowPillButton href="#testimonials" className="self-start">
            See more testimonials
          </ArrowPillButton>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/50">Clients:</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-12 gap-y-5">
              {clients.map((c) => (
                <span key={c} className="font-display text-lg font-bold tracking-widest text-white/35 transition-colors hover:text-white/60">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
