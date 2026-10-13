import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { industries, serviceCategories } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Digital Marketing | IconDigitalEdge`,
    description: ind.blurb,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const others = industries.filter((i) => i.slug !== slug).slice(0, 6);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb={ind.name}
        title={`Digital Growth for`}
        accent={`${ind.name} Brands`}
        subtitle={ind.blurb}
      >
        <ArrowPillButton href="/contact">Get an Industry-Specific Proposal</ArrowPillButton>
      </PageHero>

      {/* What we deliver */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading className="max-w-2xl">
                Built for How <T>{ind.name} Buyers</T> Decide
              </SectionHeading>
              <p className="mt-7 text-[16.5px] leading-relaxed text-white/75">
                Every industry has its own buying journey, compliance realities, and competitive
                rhythms. We have spent years inside the {ind.name.toLowerCase()} space learning
                what actually moves customers — and just as importantly, what wastes budget.
              </p>
              <p className="mt-5 text-[16.5px] leading-relaxed text-white/75">
                That experience is baked into how we scope every engagement for this sector: the
                benchmarks we set, the creative angles we test, and the KPIs we hold ourselves to
                all reflect how {ind.name.toLowerCase()} businesses genuinely win online.
              </p>
            </div>
            <div className="h-fit rounded-2xl bg-surface p-9">
              <h3 className="font-display text-xl font-bold text-white">Sector focus areas</h3>
              <ul className="mt-7 space-y-5">
                {ind.points.map((p) => (
                  <li key={p} className="flex items-start gap-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={2} />
                    <span className="text-[15px] leading-relaxed text-white/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services that fit */}
      <section className="bg-[#050505] pb-20">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">
            Services We Typically Deploy
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.flatMap((c) =>
              c.items.slice(0, 3).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-5 rounded-xl bg-surface px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
                >
                  <span className="shrink-0 text-brand">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-white">{s.name}</h3>
                    <p className="mt-1 text-[12.5px] text-white/50">{c.label}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <h2 className="font-display text-lg font-bold text-white">Other industries we serve</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/industries/${o.slug}`}
                className="rounded-full border border-white/15 px-6 py-3 text-[14px] text-white/75 transition-colors hover:border-brand hover:text-brand"
              >
                {o.name}
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
