import type { Metadata } from "next";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { openRoles } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Our Team | IconDigitalEdge",
  description:
    "Build your career at IconDigitalEdge. Explore open roles in marketing, technology, and design across our global team.",
};

const perks = [
  {
    title: "Remote-First Flexibility",
    body: "Work from anywhere in our six-country network. We care about output, not office hours — our team spans time zones and still ships weekly.",
  },
  {
    title: "Learning Budget",
    body: "Every team member gets an annual budget for courses, conferences, and certifications. When you level up, the whole agency levels up.",
  },
  {
    title: "Real Ownership",
    body: "You will own projects end-to-end and present your work directly to clients. No layers of account management between you and the impact you create.",
  },
  {
    title: "Health & Wellness",
    body: "Comprehensive health coverage, mental health support, and team retreats that recharge creativity across the whole company.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Careers"
        title="Do the Best Work"
        accent="of Your Career"
        subtitle="We are a team of marketers, engineers, and designers building growth stories for brands on four continents — and we are growing fast."
      >
        <ArrowPillButton href="#roles">See Open Roles</ArrowPillButton>
      </PageHero>

      {/* Perks */}
      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Why People <T>Stay Here</T>
          </SectionHeading>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl bg-surface p-9 transition-colors duration-300 hover:bg-surface-2">
                <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="scroll-mt-24 bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Open <T>Positions</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] text-white/70">
            Do not see your exact role? We keep a talent pool warm — send your portfolio and tell
            us where you would make a difference.
          </p>
          <div className="mt-12 space-y-4">
            {openRoles.map((r) => (
              <a
                key={r.title}
                href="mailto:careers@icondigitaledge.com"
                className="group flex flex-wrap items-center justify-between gap-6 rounded-xl bg-surface px-8 py-7 transition-all duration-300 hover:bg-surface-2"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{r.title}</h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm text-white/55">
                    <span>{r.team}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand" /> {r.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand" /> {r.type}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-white transition-colors group-hover:text-brand">
                  Apply now
                  <ArrowUpRight className="h-4.5 w-4.5 text-brand" />
                </span>
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
