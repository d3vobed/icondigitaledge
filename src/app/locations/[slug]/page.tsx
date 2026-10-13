import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { locations } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { Mail, Phone } from "lucide-react";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `IconDigitalEdge ${loc.name} — Digital Agency in ${loc.city}`,
    description: loc.blurb,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();
  const others = locations.filter((l) => l.slug !== slug);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb={loc.country}
        title={`Digital Marketing Agency in`}
        accent={loc.city}
        subtitle={loc.blurb}
      >
        <ArrowPillButton href="/contact">Book a Free Consultation</ArrowPillButton>
      </PageHero>

      {/* Office image + contact card */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="relative min-h-[340px] overflow-hidden rounded-2xl">
              <Image
                src={loc.image}
                alt={`${loc.name} skyline`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 to-transparent" />
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-surface p-9">
              <h2 className="font-display text-xl font-bold text-white">{loc.city}</h2>
              <ul className="mt-7 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm text-white/55">Email</p>
                    <a href={`mailto:${loc.email}`} className="mt-1 block font-medium text-white hover:text-brand">
                      {loc.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm text-white/55">Phone</p>
                    <a href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`} className="mt-1 block font-medium text-white hover:text-brand">
                      {loc.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we do there */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Serving <T>{loc.country}</T> Brands End to End
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Local insight, global standards",
                d: `Our ${loc.country} team knows the local market dynamics, buying culture, and competitive landscape — while holding every deliverable to international quality bars.`,
              },
              {
                t: "Full-service under one roof",
                d: "Marketing, technology, and design work as one coordinated unit, so your campaigns, website, and brand all pull in the same direction.",
              },
              {
                t: "Transparent, weekly reporting",
                d: "You will always know what we shipped, what it produced, and what comes next — in clear language tied to the metrics you care about.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-surface p-8">
                <h3 className="font-display text-lg font-bold text-white">{c.t}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">{c.d}</p>
              </div>
            ))}
          </div>

          {/* Other locations */}
          <div className="mt-16">
            <h3 className="font-display text-lg font-bold text-white">Our other offices</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="rounded-full border border-white/15 px-6 py-3 text-[14px] text-white/75 transition-colors hover:border-brand hover:text-brand"
                >
                  {o.city}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
