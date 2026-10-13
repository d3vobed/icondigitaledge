import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import Services from "@/components/site/services";
import { serviceCategories } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Our Services — Marketing, Technology & Design | IconDigitalEdge",
  description:
    "Explore IconDigitalEdge's full range of digital marketing, technology, and design services built to grow your brand.",
};

/* Process steps shown beneath the services overview */
const process = [
  {
    step: "01",
    title: "Discover",
    body: "We start with a deep-dive workshop into your market, audience, and goals, so every decision that follows is grounded in evidence rather than guesswork.",
  },
  {
    step: "02",
    title: "Strategize",
    body: "You receive a clear growth roadmap: the channels we will prioritize, the budget allocation, the creative direction, and the metrics that define success.",
  },
  {
    step: "03",
    title: "Execute",
    body: "Our specialists launch campaigns, build products, and ship creative on a weekly cadence — keeping you informed without drowning you in meetings.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We review performance against targets every single week, reallocate spend to what works, and report results in plain language you can act on.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Services"
        title="Explore Our"
        accent="Services"
        subtitle="Marketing, technology, and design under one roof — every service engineered to compound the others and move the same number: your revenue."
      >
        <ArrowPillButton href="/contact">Book a Free Consultation</ArrowPillButton>
      </PageHero>

      <Services />

      {/* Process */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            A Process Built Around <T>Your Growth</T>
          </SectionHeading>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
              >
                <p className="font-display text-5xl font-bold text-brand/30">{p.step}</p>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category summaries */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <div key={cat.slug} className="flex flex-col rounded-2xl bg-surface p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <cat.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{cat.label}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/70">{cat.intro}</p>
                <p className="mt-6 text-sm font-semibold text-brand">
                  {cat.items.length} services available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
