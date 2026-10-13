import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { serviceCategories } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return serviceCategories.flatMap((c) => c.items.map((s) => ({ slug: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.flatMap((c) => c.items).find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} Services | IconDigitalEdge`,
    description: service.blurb,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.items.some((s) => s.slug === slug));
  const service = category?.items.find((s) => s.slug === slug);
  if (!category || !service) notFound();

  const others = category.items.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero breadcrumb={service.name} title={service.name} subtitle={service.blurb}>
        <ArrowPillButton href="/contact">Start a Project</ArrowPillButton>
      </PageHero>

      {/* Overview */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                {category.label} Services
              </p>
              <SectionHeading className="mt-4 max-w-2xl">
                What You Get With <T>{service.name}</T>
              </SectionHeading>
              <p className="mt-7 text-[16.5px] leading-relaxed text-white/75">{service.detail}</p>
              <p className="mt-5 text-[16.5px] leading-relaxed text-white/75">
                Every engagement begins with your goals — not our deliverables list. We scope the
                work around the outcome you need, agree on measurable targets, and report progress
                in plain language from day one. You always know what we are doing, why we are doing
                it, and what it is producing for your business.
              </p>
            </div>

            {/* Deliverables card */}
            <div className="h-fit rounded-2xl bg-surface p-9">
              <h3 className="font-display text-xl font-bold text-white">What is included</h3>
              <ul className="mt-7 space-y-5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={2} />
                    <span className="text-[15px] leading-relaxed text-white/80">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 border-t border-white/10 pt-7">
                <ArrowPillButton href="/contact">Get a Proposal</ArrowPillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services in this category */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">
            More {category.label} Services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-5 rounded-xl bg-surface px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
              >
                <span className="shrink-0 text-brand">
                  <s.icon className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <div>
                  <h4 className="font-display text-[17px] font-bold text-white">{s.name}</h4>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/55">
                    {s.blurb}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
