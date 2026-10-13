import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import CtaBanner from "@/components/site/cta-banner";
import { blogPosts } from "@/lib/site-data";
import { ArrowPillButton, SectionHeading, T } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Blog — Insights From the Team | IconDigitalEdge",
  description:
    "Growth playbooks, industry analysis, and practical marketing advice from the IconDigitalEdge team.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Blog"
        title="Insights From"
        accent="the Team"
        subtitle="No fluff, no recycled listicles — just what we are learning from real campaigns, real budgets, and real growth targets."
      />

      {/* Featured post */}
      <section className="bg-[#050505] pb-20">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl bg-surface transition-colors duration-300 hover:bg-surface-2 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-9 md:p-14">
              <div className="flex items-center gap-4 text-[13.5px]">
                <span className="rounded-full bg-brand/15 px-4 py-1.5 font-semibold text-brand">
                  {featured.category}
                </span>
                <span className="text-white/50">{featured.date}</span>
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold leading-snug text-white md:text-[32px]">
                {featured.title}
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/70">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition-colors group-hover:text-brand">
                Read article
                <span className="text-brand">↗</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <SectionHeading className="max-w-2xl">
            Latest <T>Articles</T>
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[12.5px]">
                    <span className="font-semibold text-brand">{post.category}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/50">{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-[14px] leading-relaxed text-white/60">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 text-[13.5px] text-white/50">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <ArrowPillButton href="/contact">Subscribe to Our Newsletter</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
