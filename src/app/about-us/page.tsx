import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "About Us — Who We Are | IconDigitalEdge",
  description:
    "IconDigitalEdge is a global digital agency scaling companies sustainably across emerging and mature markets through personalized solutions.",
};

const values = [
  {
    title: "Results Over Vanity",
    body: "We report revenue, pipeline, and retention — not impressions that flatter but never pay. If a metric does not connect to your growth, we do not lead with it.",
  },
  {
    title: "Partners, Not Vendors",
    body: "Our team plugs into yours. We sit in your planning, challenge your assumptions respectfully, and act with the urgency of owners rather than the detachment of suppliers.",
  },
  {
    title: "Craft With Speed",
    body: "Fast should not mean sloppy. We ship on weekly cadences without ever cutting corners on quality, because your brand deserves both velocity and polish.",
  },
  {
    title: "Radical Transparency",
    body: "Clear pricing, honest reporting, and difficult conversations early. You will always know exactly where your budget goes and what it produced.",
  },
];

const milestones = [
  { year: "2018", text: "Founded in Lagos with three laptops and one stubborn belief: African agencies can compete with anyone globally." },
  { year: "2020", text: "Expanded into technology and design services, becoming a true end-to-end digital partner for growing brands." },
  { year: "2022", text: "Opened offices in the US, UK, and Canada, serving clients across four continents from three time zones." },
  { year: "2024", text: "Launched our AI marketing practice and crossed 250 delivered projects with a 97% client retention rate." },
  { year: "2026", text: "Six global locations, one team — still obsessed with the same thing: measurable growth for every client we serve." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="About Us"
        title="We Scale Companies"
        accent="Sustainably"
        subtitle="IconDigitalEdge grows brands in both emerging and mature economies through personalized marketing, technology, and design — built around your goals, not our service list."
      >
        <ArrowPillButton href="/contact">Work With Us</ArrowPillButton>
      </PageHero>

      {/* Mission card */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="rounded-2xl bg-surface p-10 md:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading>
                  Who We <T>Are</T>
                </SectionHeading>
                <p className="mt-7 text-[16.5px] leading-relaxed text-white/75">
                  We started as a small team convinced that great digital work does not need to
                  come from big agency price tags. Today we operate across six countries, yet every
                  engagement still gets the same thing: senior strategists, hands-on specialists,
                  and a genuine obsession with your numbers.
                </p>
                <p className="mt-5 text-[16.5px] leading-relaxed text-white/75">
                  Our model is simple — bring marketing, technology, and design under one roof so
                  they reinforce each other instead of pulling apart. When your SEO team talks to
                  your developers, and your brand designers talk to your advertisers, growth stops
                  being a guessing game.
                </p>
                <div className="mt-9">
                  <ArrowPillButton href="/our-works">See Our Work</ArrowPillButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/cta-team.jpg"
                  alt="The IconDigitalEdge team collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#050505] pb-20 md:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            The Values Behind <T>Every Project</T>
          </SectionHeading>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-surface p-9 transition-colors duration-300 hover:bg-surface-2">
                <h3 className="font-display text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Our Journey <T>So Far</T>
          </SectionHeading>
          <div className="mt-14 space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="grid gap-4 border-l-2 border-white/10 pb-10 pl-8 last:pb-0 md:grid-cols-[140px_1fr] md:gap-10"
                style={i === 0 ? { borderColor: "#24aeb0" } : undefined}
              >
                <p className="font-display text-2xl font-bold text-brand">{m.year}</p>
                <p className="text-[15.5px] leading-relaxed text-white/75">{m.text}</p>
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
