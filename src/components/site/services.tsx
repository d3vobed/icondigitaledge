"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Clapperboard,
  Fingerprint,
  Globe,
  LayoutDashboard,
  Mail,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Newspaper,
  PenTool,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, T } from "./ui";
import { cn } from "@/lib/utils";

type Service = { name: string; icon: LucideIcon };

const marketing: Service[] = [
  { name: "Digital Marketing", icon: Megaphone },
  { name: "Social Media Marketing", icon: Share2 },
  { name: "Search Engine Optimisation", icon: Search },
  { name: "AI Marketing", icon: Bot },
  { name: "Pay Per Click (PPC) Marketing", icon: MousePointerClick },
  { name: "Public Relations", icon: Newspaper },
  { name: "Influencer Marketing", icon: Users },
  { name: "Content Marketing", icon: PenTool },
  { name: "Email & SMS Marketing", icon: Mail },
  { name: "Online Reputation", icon: MonitorSmartphone },
];

const technology: Service[] = [
  { name: "Website Design & Development", icon: Globe },
  { name: "Web & Mobile App Development", icon: Smartphone },
  { name: "E-commerce Solutions", icon: ShoppingCart },
];

const design: Service[] = [
  { name: "Brand Design", icon: Fingerprint },
  { name: "Graphic Design", icon: PenTool },
  { name: "UX/UI Design", icon: LayoutDashboard },
  { name: "Video & Animation", icon: Clapperboard },
];

const tabs: { label: string; items: Service[] }[] = [
  { label: "Marketing", items: marketing },
  { label: "Technology", items: technology },
  { label: "Design", items: design },
];

const featured = ["AI Marketing", "Search Engine Optimisation", "Website Design & Development"];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="scroll-mt-20 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading className="text-center">
          How We <T>Grow Your Brand</T>
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[16.5px] leading-relaxed text-white/70">
          Full-funnel services across marketing, technology, and design — engineered to work
          together as one growth system for your business.
        </p>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Service categories" className="inline-flex rounded-full border border-white/10 bg-surface p-1.5">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full px-8 py-3 text-[15px] font-medium transition-all",
                  active === i ? "bg-brand text-white" : "text-white/70 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5"
          >
            {tabs[active].items.map((s) => {
              const Icon = s.icon;
              const isFeatured = featured.includes(s.name);
              return (
                <div
                  key={s.name}
                  className={cn(
                    "group flex items-center gap-5 rounded-xl border bg-surface px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50",
                    isFeatured ? "border-brand/30" : "border-white/8"
                  )}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-[19px] font-bold text-white">{s.name}</h3>
                  {isFeatured && (
                    <Star className="ml-auto h-4 w-4 shrink-0 fill-brand text-brand" aria-label="Most requested" />
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
