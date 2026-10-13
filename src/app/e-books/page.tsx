import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "E-books — Free Growth Resources | IconDigitalEdge",
  description:
    "Download free e-books and playbooks on digital marketing, SEO, and growth strategy from IconDigitalEdge strategists.",
};

const books = [
  {
    title: "The Founder's Guide to Digital Growth",
    pages: "42 pages",
    desc: "A practical playbook for early-stage founders: how to pick your first channels, set a realistic budget, and measure what matters.",
    image: "/images/blog-1.jpg",
  },
  {
    title: "SEO From Zero: A 90-Day Roadmap",
    pages: "56 pages",
    desc: "The exact sequence we run for new clients — technical fixes, content architecture, and authority building laid out week by week.",
    image: "/images/blog-3.jpg",
  },
  {
    title: "The Conversion-First Website Checklist",
    pages: "28 pages",
    desc: "Fifty-two checkpoints our CRO team audits before any redesign goes live, from page speed to persuasive hierarchy.",
    image: "/images/blog-2.jpg",
  },
];

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="E-books"
        title="Free Resources From"
        accent="Our Strategists"
        subtitle="The same frameworks we use with paying clients, packaged into e-books you can download and apply today — free, no strings attached."
      />

      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((b) => (
              <div
                key={b.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-[13px] font-semibold text-brand">{b.pages}</span>
                  <h2 className="mt-3.5 font-display text-lg font-bold leading-snug text-white">
                    {b.title}
                  </h2>
                  <p className="mt-3.5 flex-1 text-[14px] leading-relaxed text-white/65">{b.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-brand px-6 py-3 text-[14px] font-medium text-white transition-all hover:bg-brand-dark"
                  >
                    <Download className="h-4 w-4" />
                    Download Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-3xl">
            Want the Personalized <T>Version?</T>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            E-books give you the map. A consultation gives you the route built for your business.
            Book a free session and we will apply these frameworks directly to your numbers.
          </p>
          <div className="mt-9">
            <ArrowPillButton href="/contact">Book a Free Session</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
