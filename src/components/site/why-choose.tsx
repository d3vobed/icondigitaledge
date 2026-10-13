"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  HeartHandshake,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, T } from "./ui";

type Value = { title: string; body: string; icon: LucideIcon };

const values: Value[] = [
  {
    title: "We Turn Data Into Revenue",
    body: "Every decision we make is backed by numbers. We track the metrics that actually move your bottom line — conversions, lifetime value, and revenue — not vanity metrics that look good in decks.",
    icon: BarChart3,
  },
  {
    title: "Search Visibility That Goes Further",
    body: "From technical SEO to content architecture, we build search presence that compounds over time, putting your brand in front of people who are actively looking for what you sell.",
    icon: Search,
  },
  {
    title: "A Team That Works Like a Partner",
    body: "No account-manager telephone games. You work directly with strategists, creatives, and engineers who know your business and answer when you call.",
    icon: HeartHandshake,
  },
  {
    title: "Your Growth Is Our Only Metric",
    body: "We succeed when you grow. Our strategies are built around your business objectives, reviewed against real targets, and adjusted the moment the data says so.",
    icon: Target,
  },
  {
    title: "Continuous Optimization",
    body: "Launch is the starting line. We test, learn, and refine every campaign and experience continuously, so performance keeps improving month after month.",
    icon: RefreshCw,
  },
  {
    title: "Long-Term Relationships",
    body: "Most of our clients have been with us for years. We build that trust by shipping consistent results and telling you the truth, even when it is inconvenient.",
    icon: TrendingUp,
  },
];

export default function WhyChoose() {
  return (
    <section className="hero-glow grain relative overflow-hidden bg-[#050505] py-24 md:py-32">
      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading className="max-w-3xl">
          Why Brands Choose IconDigitalEdge as <T>Your Digital Marketing Agency</T>
        </SectionHeading>
        <p className="mt-7 max-w-4xl text-[16.5px] leading-relaxed text-white/75">
          With over a decade of excellence in digital marketing, we specialize in creating bespoke
          strategies that are precisely aligned with your business objectives — ensuring you stay
          ahead in the competitive digital arena.
        </p>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <span className="flex h-13 w-13 items-center justify-center text-brand">
                  <Icon className="h-9 w-9" strokeWidth={1.6} />
                </span>
                <h3 className="font-display mt-5 text-[21px] font-bold text-white">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
