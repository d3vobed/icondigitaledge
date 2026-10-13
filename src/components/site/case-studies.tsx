"use client";

import { motion } from "framer-motion";
import { ArrowPillButton, SectionHeading, T } from "./ui";

const caseStudies = [
  {
    title: "ShopNaija Retail",
    categories: "Digital Marketing · SEO · Web Design and Development",
    body: "ShopNaija needed a stronger digital presence in a competitive market. Through targeted SEO including content optimization, backlink building, and keyword strategy, we delivered a 30% increase in online sales and a 20% boost in customer satisfaction.",
    metric: "+30%",
    metricLabel: "online sales",
  },
  {
    title: "EduLearn Academy",
    categories: "Digital Marketing · Content · PPC",
    body: "EduLearn wanted to fill its cohorts with qualified students at a sustainable cost. A full-funnel mix of paid search, landing page optimization, and content marketing generated 3x more leads while cutting cost per acquisition by 45%.",
    metric: "3x",
    metricLabel: "more leads",
  },
  {
    title: "SterlingTrust Insurance",
    categories: "Brand Design · Web Development · SEO",
    body: "SterlingTrust came to us with an outdated brand and a site that leaked trust. We rebuilt the identity, redesigned the experience, and repositioned their content — organic traffic grew 60% and qualified quote requests rose by a quarter.",
    metric: "+60%",
    metricLabel: "organic traffic",
  },
];

export default function CaseStudies() {
  return (
    <section id="works" className="scroll-mt-20 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading>
          Real Clients. <T>Real Results.</T>
        </SectionHeading>
        <p className="mt-5 text-[16.5px] text-white/70">We let the work speak for itself.</p>
        <div className="mt-8">
          <ArrowPillButton href="#works">See all case studies</ArrowPillButton>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-white/8 bg-surface p-8 transition-colors hover:border-brand/40"
            >
              <h3 className="font-display text-2xl font-bold text-white">{cs.title}</h3>
              <p className="mt-2 text-sm italic text-white/55">{cs.categories}</p>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80">{cs.body}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display text-4xl font-bold text-brand">{cs.metric}</p>
                <p className="mt-1 text-sm text-white/60">{cs.metricLabel}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
