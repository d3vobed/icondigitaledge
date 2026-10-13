"use client";

import { motion } from "framer-motion";
import { Building2, HeartHandshake, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import { ArrowPillButton, SectionHeading, T } from "./ui";

type Segment = { title: string; body: string; icon: LucideIcon };

const segments: Segment[] = [
  {
    title: "Startups and Founders",
    body: "You are building something from scratch and every naira or dollar needs to work. We help early-stage businesses establish a credible digital presence, attract their first wave of customers, and build marketing systems that scale as the business grows.",
    icon: Rocket,
  },
  {
    title: "Growing Businesses",
    body: "You have product-market fit and you are ready to grow faster than your current marketing can take you. We come in as a strategic partner, not just an execution team, to build the channels, campaigns, and content architecture that compound over time.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise and Corporate Brands",
    body: "You need a partner that understands compliance, complexity, and scale. We integrate with internal teams, align with governance requirements, and deliver measurable outcomes across regions and business units.",
    icon: Building2,
  },
  {
    title: "NGOs and Nonprofits",
    body: "Your mission deserves to be seen. We help nonprofits amplify their cause, grow donations, and mobilize communities with storytelling and digital campaigns that stretch every budget for maximum impact.",
    icon: HeartHandshake,
  },
];

export default function BusinessTypes() {
  return (
    <section className="bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading className="max-w-3xl">
          We Know What Different Businesses <T>Actually Need</T>
        </SectionHeading>
        <p className="mt-6 text-[16.5px] text-white/70">
          Whatever stage you are at, if growth is the goal, we have done this before.
        </p>
        <div className="mt-8">
          <ArrowPillButton href="#contact">Tell Us About Your Business</ArrowPillButton>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-16 md:grid-cols-2">
          {segments.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <Icon className="h-11 w-11 text-brand" strokeWidth={1.5} />
                <h3 className="font-display mt-6 text-[26px] font-bold text-white">{s.title}</h3>
                <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/75">{s.body}</p>
                <div className="mt-10 h-px w-full bg-brand/70" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
