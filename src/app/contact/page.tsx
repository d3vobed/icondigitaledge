"use client";

import { useState } from "react";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageHero from "@/components/site/page-hero";
import { serviceCategories, locations } from "@/lib/site-data";
import { SectionHeading, T } from "@/components/site/ui";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <PageHero
        breadcrumb="Contact"
        title="Let's Grow Your"
        accent="Business"
        subtitle="Tell us where you are and where you want to be. We will reply within one business day with honest next steps — no pushy sales calls, ever."
      />

      <section className="bg-[#050505] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            {/* Form */}
            <div className="rounded-2xl bg-surface p-9 md:p-12">
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-brand" strokeWidth={1.5} />
                  <h2 className="mt-7 font-display text-2xl font-bold text-white">
                    Message received!
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                    Thank you for reaching out. A strategist from our team will review your brief
                    and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                        Full name
                      </label>
                      <input id="name" required placeholder="Ada Obi" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="ada@company.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/80">
                        Company
                      </label>
                      <input id="company" placeholder="Company name" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/80">
                        Monthly budget
                      </label>
                      <select id="budget" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-white/80">
                      What do you need help with?
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceCategories.flatMap((c) =>
                        c.items.slice(0, 4).map((s) => (
                          <label
                            key={s.slug}
                            className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-[13px] text-white/70 transition-colors hover:border-brand has-checked:border-brand has-checked:bg-brand/15 has-checked:text-brand"
                          >
                            <input type="checkbox" className="peer sr-only" />
                            {s.name}
                          </label>
                        ))
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Where is your business today, and what would success look like in 12 months?"
                      className={inputCls}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-brand px-9 py-4 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Send Message
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-surface p-9">
                <h3 className="font-display text-xl font-bold text-white">Reach us directly</h3>
                <ul className="mt-7 space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Mail className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm text-white/55">Email us</p>
                      <a
                        href="mailto:info@icondigitaledge.com"
                        className="mt-1 block font-medium text-white hover:text-brand"
                      >
                        info@icondigitaledge.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm text-white/55">Call us</p>
                      <a href="tel:+2349151460000" className="mt-1 block font-medium text-white hover:text-brand">
                        +234 915 146 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <MapPin className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm text-white/55">Headquarters</p>
                      <p className="mt-1 font-medium text-white">Lagos, Nigeria</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-surface p-9">
                <h3 className="font-display text-xl font-bold text-white">Our offices</h3>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                  {locations.map((l) => (
                    <a
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="text-[14.5px] text-white/70 transition-colors hover:text-brand"
                    >
                      {l.city}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-friendly closing */}
      <section className="hidden">
        <SectionHeading>
          <T>Contact IconDigitalEdge</T>
        </SectionHeading>
      </section>

      <Footer />
    </main>
  );
}
