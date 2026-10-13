import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Give Back — Our Social Impact | IconDigitalEdge",
  description:
    "How IconDigitalEdge invests skills, time, and resources back into the communities that shaped us.",
};

const programs = [
  {
    title: "Digital Skills Bootcamp",
    body: "Every year we train 100+ young people in SEO, design, and web development through a free eight-week program led by our senior team — with real client projects as coursework.",
    stat: "500+",
    statLabel: "graduates trained",
  },
  {
    title: "Nonprofit Growth Grants",
    body: "We award pro-bono marketing engagements to nonprofits whose work moves us. Each grant covers strategy, creative, and three months of campaign management at no cost.",
    stat: "$250K+",
    statLabel: "services donated",
  },
  {
    title: "Internship Pathways",
    body: "Our structured internship program turns raw talent into hire-ready professionals. Over half of our current full-time team started as interns.",
    stat: "60%",
    statLabel: "intern-to-hire rate",
  },
  {
    title: "Local Business Clinics",
    body: "Free monthly clinics where small business owners bring their digital challenges and leave with a practical 30-day action plan from our strategists.",
    stat: "1,200+",
    statLabel: "businesses advised",
  },
];

export default function GiveBackPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Give Back"
        title="Growing Brands While"
        accent="Growing Communities"
        subtitle="We exist because communities invested in us. Give Back is how we return the favor — with skills, time, and services that create opportunity."
      >
        <ArrowPillButton href="/contact">Partner With Our Programs</ArrowPillButton>
      </PageHero>

      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-surface p-10 transition-colors duration-300 hover:bg-surface-2"
              >
                <p className="font-display text-4xl font-bold text-brand">{p.stat}</p>
                <p className="mt-1 text-sm text-white/55">{p.statLabel}</p>
                <h2 className="mt-6 font-display text-xl font-bold text-white">{p.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Know an Organization <T>We Should Support?</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            We review partnership requests every quarter. Tell us about the mission, the people it
            serves, and where digital could change the trajectory — we read every submission.
          </p>
          <div className="mt-9">
            <ArrowPillButton href="/contact">Submit an Organization</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
