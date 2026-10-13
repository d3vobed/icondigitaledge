import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { serviceCategories, type ServiceCategory } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";

/* Shared template for /marketing, /technology, /design category pages */
export default function CategoryPage({ category }: { category: ServiceCategory }) {
  const others = serviceCategories.filter((c) => c.slug !== category.slug);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb={`${category.label} Services`}
        title={`${category.label} Services That`}
        accent="Perform"
        subtitle={category.intro}
      >
        <ArrowPillButton href="/contact">Get a Free Consultation</ArrowPillButton>
      </PageHero>

      {/* Service list — alternating detailed rows */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="space-y-6">
            {category.items.map((s) => (
              <article
                key={s.slug}
                className="group grid gap-8 rounded-2xl bg-surface p-9 transition-colors duration-300 hover:bg-surface-2 md:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white">{s.name}</h2>
                  <p className="mt-3 max-w-3xl text-[15.5px] leading-relaxed text-white/70">
                    {s.detail}
                  </p>
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="group/link inline-flex items-center gap-2 whitespace-nowrap font-semibold text-white transition-colors hover:text-brand"
                >
                  Explore service
                  <ArrowUpRight className="h-4.5 w-4.5 text-brand transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-2xl">
            Explore Our Other <T>Capabilities</T>
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="flex items-center gap-6 rounded-2xl bg-surface p-9 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <c.icon className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{c.label}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                    {c.items.length} services, from strategy to execution.
                  </p>
                </div>
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
