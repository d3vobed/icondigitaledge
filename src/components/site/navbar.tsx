"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./ui";
import { cn } from "@/lib/utils";

const marketingServices = [
  "Digital Marketing",
  "Social Media Marketing",
  "Search Engine Optimisation",
  "AI Marketing",
  "Pay Per Click (PPC) Marketing",
  "Public Relations",
  "Influencer Marketing",
  "Content Marketing",
  "Email & SMS Marketing",
  "Online Reputation",
];
const techServices = [
  "Website Design & Development",
  "Web & Mobile App Development",
  "E-commerce Solutions",
];
const designServices = ["Brand Design", "Graphic Design", "UX/UI Design", "Video & Animation"];
const resources = ["Blog", "Testimonials", "E-books", "Awards & Recognition", "Give Back"];

const anchorFor = (label: string) =>
  "/" +
  ({
    "Our Works": "#works",
    "About Us": "#about",
    Careers: "#footer",
    Contact: "#contact",
    Blog: "#insights",
    Testimonials: "#testimonials",
    "E-books": "#insights",
    "Awards & Recognition": "#awards",
    "Give Back": "#about",
  }[label] || "#");

type NavItem = { label: string; href: string; menu?: boolean };

const navItems: NavItem[] = [
  { label: "Services", href: "#services", menu: true },
  { label: "Our Works", href: "#works" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#footer" },
  { label: "Resources", href: "#insights", menu: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled || openMenu ? "bg-[#050505]/95 backdrop-blur-md" : "bg-[#050505]"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navItems.map((item) =>
            item.menu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className="flex items-center gap-1.5 text-[15px] text-white/90 hover:text-white transition-colors"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-4 w-4 text-white/60 transition-transform", openMenu === item.label && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                    >
                      {item.label === "Services" ? (
                        <div className="w-[640px] rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 shadow-2xl shadow-black/60">
                          <div className="grid grid-cols-3 gap-7">
                            {[
                              { title: "Marketing", items: marketingServices },
                              { title: "Technology", items: techServices },
                              { title: "Design", items: designServices },
                            ].map((col) => (
                              <div key={col.title}>
                                <p className="text-brand text-sm font-semibold mb-4">{col.title}</p>
                                <ul className="space-y-2.5">
                                  {col.items.map((s) => (
                                    <li key={s}>
                                      <Link
                                        href="#services"
                                        onClick={() => setOpenMenu(null)}
                                        className="text-[13.5px] leading-snug text-white/75 hover:text-brand transition-colors"
                                      >
                                        {s}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="w-56 rounded-2xl border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl shadow-black/60">
                          <ul>
                            {resources.map((r) => (
                              <li key={r}>
                                <Link
                                  href={anchorFor(r)}
                                  onClick={() => setOpenMenu(null)}
                                  className="block rounded-lg px-4 py-2.5 text-[14px] text-white/80 hover:bg-white/5 hover:text-brand transition-colors"
                                >
                                  {r}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
          >
            Work With Us
          </Link>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#070707]"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-5 py-6 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.menu ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-lg font-medium text-white/90">
                        {item.label}
                        <ChevronDown className="h-5 w-5 text-white/50 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pb-3 pl-4">
                        {item.label === "Services" ? (
                          <div className="space-y-4">
                            {[
                              { title: "Marketing", items: marketingServices },
                              { title: "Technology", items: techServices },
                              { title: "Design", items: designServices },
                            ].map((col) => (
                              <div key={col.title}>
                                <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-2">{col.title}</p>
                                <ul className="space-y-1">
                                  {col.items.map((s) => (
                                    <li key={s}>
                                      <Link
                                        href="#services"
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-1 text-[15px] text-white/70"
                                      >
                                        {s}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-1">
                            {resources.map((r) => (
                              <li key={r}>
                                <Link
                                  href={anchorFor(r)}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1 text-[15px] text-white/70"
                                >
                                  {r}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-lg font-medium text-white/90"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-full bg-brand px-7 py-3.5 text-center text-[15px] font-medium text-white"
              >
                Work With Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
