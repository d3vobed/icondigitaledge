import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { locations } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations — Where We Operate | IconDigitalEdge",
  description:
    "IconDigitalEdge operates across the USA, UK, Canada, Nigeria, Ghana, and Kenya — a global team serving clients on four continents.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Locations"
        title="Your Global Digital"
        accent="Marketing Partner"
        subtitle="Six countries, four continents, one standard of excellence. Wherever your customers are, there is an IconDigitalEdge team ready to grow your brand."
      >
        <ArrowPillButton href="/contact">Talk to Your Local Team</ArrowPillButton>
      </PageHero>

      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-6 font-display text-xl font-bold text-white">
                    {loc.country}
                  </p>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-lg font-bold text-white">{loc.city}</h2>
                    <ArrowUpRight className="h-4.5 w-4.5 text-brand" />
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/60">{loc.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Not in one of our <T>cities?</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Most of our clients work with us fully remotely. With teams spanning every major time
            zone, you get same-day responses and weekly demos no matter where you call home.
          </p>
          <div className="mt-9">
            <ArrowPillButton href="/contact">Book a Remote Consultation</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
