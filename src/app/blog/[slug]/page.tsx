import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import CtaBanner from "@/components/site/cta-banner";
import { blogPosts } from "@/lib/site-data";
import { ArrowPillButton } from "@/components/site/ui";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | IconDigitalEdge Blog`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <article className="bg-[#050505] pt-32 md:pt-40">
        <div className="mx-auto max-w-[820px] px-5 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13.5px] text-white/50">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand">Blog</Link>
            <span>/</span>
            <span className="text-white/80">{post.category}</span>
          </nav>

          <h1 className="mt-8 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-[44px]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px] text-white/55">
            <span className="rounded-full bg-brand/15 px-4 py-1.5 font-semibold text-brand">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.image} alt={post.title} fill sizes="(max-width: 820px) 100vw, 820px" className="object-cover" priority />
          </div>

          <div className="mt-12 space-y-7 pb-16">
            <p className="text-[19px] font-medium leading-relaxed text-white/90">{post.excerpt}</p>
            {post.body.map((para, i) => (
              <p key={i} className="text-[16.5px] leading-[1.85] text-white/75">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Keep Reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl bg-surface p-7 transition-all duration-300 hover:bg-surface-2"
              >
                <span className="text-[12.5px] font-semibold text-brand">{p.category}</span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-[14px] text-white/60">{p.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-14">
            <ArrowPillButton href="/blog">Back to All Articles</ArrowPillButton>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
