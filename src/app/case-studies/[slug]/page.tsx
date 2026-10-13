import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { caseStudies } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} Case Study | IconDigitalEdge`,
    description: cs.body,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const more = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero breadcrumb={cs.client} title={cs.client} subtitle={cs.categories.join(" · ")}>
        <ArrowPillButton href="/contact">Get Results Like These</ArrowPillButton>
      </PageHero>

      {/* Challenge / Approach */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                The Challenge
              </p>
              <p className="mt-6 text-[16px] leading-relaxed text-white/80">{cs.challenge}</p>
            </div>
            <div className="rounded-2xl bg-surface p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Our Approach
              </p>
              <p className="mt-6 text-[16px] leading-relaxed text-white/80">{cs.approach}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 rounded-2xl bg-surface p-10 md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              The Results
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="border-l-2 border-brand/50 pl-6">
                  <p className="font-display text-5xl font-bold text-brand">{r.value}</p>
                  <p className="mt-2 text-[15px] text-white/65">{r.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-3xl border-t border-white/10 pt-8 text-[16.5px] leading-relaxed text-white/80">
              {cs.body}
            </p>
          </div>
        </div>
      </section>

      {/* More case studies */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-2xl">
            More <T>Success Stories</T>
          </SectionHeading>
          <div className="mt-12 space-y-4">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/case-studies/${m.slug}`}
                className="flex items-center justify-between gap-6 rounded-xl bg-surface px-8 py-7 transition-all duration-300 hover:bg-surface-2"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{m.client}</h3>
                  <p className="mt-1.5 text-sm italic text-white/50">
                    {m.categories.join(" · ")}
                  </p>
                </div>
                <span className="whitespace-nowrap text-sm text-white/60">{m.country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
