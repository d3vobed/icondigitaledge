import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { testimonials } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say | IconDigitalEdge",
  description:
    "Hear directly from the founders and marketing leaders who trusted IconDigitalEdge with their growth.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Testimonials"
        title="Amazing Clients."
        accent="Amazing Results."
        subtitle="We measure ourselves by our clients' outcomes — and their words mean more than any award. Here is what working with IconDigitalEdge feels like."
      >
        <ArrowPillButton href="/contact">Become Our Next Success Story</ArrowPillButton>
      </PageHero>

      {/* Quote grid */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl bg-surface p-9 transition-colors duration-300 hover:bg-surface-2"
              >
                <Quote className="h-8 w-8 text-brand/50" aria-hidden="true" />
                <div className="mt-5 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-display text-[16px] font-bold text-white">{t.name}</p>
                  <p className="mt-1 text-[13.5px] text-white/55">
                    {t.role}, {t.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Ready to write <T>your own review?</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Every quote on this page started with a first meeting. Book yours and let us show you
            what a genuine growth partner looks like — no deck required, just your goals.
          </p>
          <div className="mt-9">
            <ArrowPillButton href="/contact">Book a Free Consultation</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
