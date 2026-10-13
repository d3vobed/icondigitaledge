import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { Trophy, Award, Medal, Star, BadgeCheck, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Recognition | IconDigitalEdge",
  description:
    "The awards, certifications, and industry recognition that reflect our standard of work at IconDigitalEdge.",
};

const awards = [
  {
    icon: Trophy,
    year: "2026",
    title: "Digital Agency of the Year — West Africa",
    body: "Recognized for sustained client growth and creative excellence across our marketing, technology, and design practices.",
  },
  {
    icon: Award,
    year: "2025",
    title: "Best Use of AI in Marketing",
    body: "Awarded for our AI-powered audience modeling and personalization work that lifted client conversion rates across three continents.",
  },
  {
    icon: Medal,
    year: "2025",
    title: "Top E-commerce Development Studio",
    body: "Ranked among the region's leading e-commerce builders for storefront performance and measurable revenue impact.",
  },
  {
    icon: Star,
    year: "2024",
    title: "Best Workplace in Tech",
    body: "Our people-first culture earned top marks for growth, inclusion, and employee satisfaction.",
  },
  {
    icon: BadgeCheck,
    year: "2024",
    title: "Google Premier Partner",
    body: "Certified at Premier level for ad spend management, client results, and team certification standards.",
  },
  {
    icon: Crown,
    year: "2023",
    title: "SEO Agency of the Year",
    body: "Recognized for organic growth programs that delivered compounding traffic and revenue for clients in competitive markets.",
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Awards & Recognition"
        title="Recognised for Work That"
        accent="Works"
        subtitle="We do not chase trophies — we chase client results. But when the industry notices the outcomes our clients achieve, we are happy to celebrate."
      >
        <ArrowPillButton href="/contact">Partner With an Award-Winning Team</ArrowPillButton>
      </PageHero>

      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-surface p-9 transition-colors duration-300 hover:bg-surface-2"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-brand/10 p-3 text-brand">
                    <a.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-lg font-bold text-white/30">{a.year}</span>
                </div>
                <h2 className="mt-6 font-display text-lg font-bold leading-snug text-white">
                  {a.title}
                </h2>
                <p className="mt-3.5 text-[14px] leading-relaxed text-white/65">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            The Recognition That <T>Matters Most</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            A 97% client retention rate across 250+ projects. That is the metric we guard most
            fiercely — because clients who stay are clients who win.
          </p>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
