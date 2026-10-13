import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { caseStudies } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Works — Case Studies & Client Results | IconDigitalEdge",
  description:
    "Real clients, real results. Explore how IconDigitalEdge has grown brands across industries and continents.",
};

const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "6", label: "Countries served" },
  { value: "97%", label: "Client retention" },
  { value: "12+", label: "Industries mastered" },
];

export default function OurWorks() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Our Works"
        title="Real Clients."
        accent="Real Results."
        subtitle="We let the work speak for itself. Every engagement below started with a business problem and ended with numbers our clients can take to the bank."
      >
        <ArrowPillButton href="/contact">Start Your Success Story</ArrowPillButton>
      </PageHero>

      {/* Stats bar */}
      <section className="bg-[#050505] pb-8">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-5 rounded-2xl bg-surface p-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-brand md:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacked case cards — same pattern as homepage */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="rounded-2xl bg-surface px-7 py-10 transition-colors duration-300 hover:bg-surface-2 md:px-14 md:py-14"
              >
                <h2 className="font-display text-2xl font-bold text-white md:text-[28px]">
                  {cs.client}
                </h2>
                <p className="mt-3 text-[15px] italic text-white/50">
                  {cs.categories.join(" · ")}
                </p>
                <p className="mt-7 max-w-[520px] text-[15.5px] leading-relaxed text-white/80">
                  {cs.body}
                </p>

                {/* Results */}
                <div className="mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-3xl font-bold text-brand md:text-4xl">
                        {r.value}
                      </p>
                      <p className="mt-1.5 text-[13px] text-white/60">{r.label}</p>
                    </div>
                  ))}
                </div>

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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA heading */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Want results like these <T>for your brand?</T>
          </SectionHeading>
          <div className="mt-9">
            <ArrowPillButton href="/contact">Let&rsquo;s Talk About Your Goals</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
