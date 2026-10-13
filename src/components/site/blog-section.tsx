"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowPillButton, SectionHeading, T } from "./ui";

const posts = [
  {
    date: "July 21, 2026",
    category: "Marketing",
    title: "5 Simple Yet Powerful Ways to Upgrade Your Small Business Presence",
    img: "/images/blog-1.jpg",
  },
  {
    date: "June 27, 2026",
    category: "SEO",
    title: "Online Visibility Tactics for Competitive Markets",
    img: "/images/blog-2.jpg",
  },
  {
    date: "June 25, 2026",
    category: "Digital Marketing, Technology",
    title: "The Impact of AI on the Telecommunications Industry",
    img: "/images/blog-3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section id="insights" className="scroll-mt-20 bg-[#050505] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading>
          Insights From <T>the Team</T>
        </SectionHeading>
        <div className="mt-8">
          <ArrowPillButton href="#insights">See all resources</ArrowPillButton>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-white/55">
                <span>{p.date}</span>
                <span className="rounded-full border border-brand/40 px-3 py-1 text-xs font-medium text-brand">
                  {p.category}
                </span>
              </div>
              <h3 className="font-display mt-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-brand">
                {p.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
