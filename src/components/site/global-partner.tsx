"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading, T } from "./ui";

const locations = [
  { name: "United States of America", short: "USA", img: "/images/loc-usa.jpg", flag: "/images/flags/us.png" },
  { name: "United Kingdom", short: "UK", img: "/images/loc-uk.jpg", flag: "/images/flags/gb.png" },
  { name: "Canada", short: "Canada", img: "/images/loc-canada.jpg", flag: "/images/flags/ca.png" },
  { name: "Nigeria", short: "Nigeria", img: "/images/loc-nigeria.jpg", flag: "/images/flags/ng.png" },
  { name: "Ghana", short: "Ghana", img: "/images/loc-ghana.jpg", flag: "/images/flags/gh.png" },
  { name: "Kenya", short: "Kenya", img: "/images/loc-kenya.jpg", flag: "/images/flags/ke.png" },
];

export default function GlobalPartner() {
  return (
    <section className="hero-glow grain relative overflow-hidden bg-[#050505] py-24 md:py-32">
      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <SectionHeading className="max-w-3xl">
          We are Your <T>Global Digital Marketing Partner</T>
        </SectionHeading>
        <p className="mt-7 max-w-4xl text-[16.5px] leading-relaxed text-white/75">
          Our marketing services are delivered across multiple locations through a globally
          connected team. This approach ensures consistent standards, reliable communication, and
          effective delivery regardless of region.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {locations.map((loc, i) => (
            <motion.article
              key={loc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-[3/4.4] overflow-hidden rounded-xl"
            >
              <Image
                src={loc.img}
                alt={loc.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
              <Image
                src={loc.flag}
                alt={`${loc.short} flag`}
                width={44}
                height={30}
                className="absolute right-3 top-3 rounded-[3px] shadow-md"
              />
              <h3 className="absolute bottom-4 left-4 right-3 font-display text-[17px] font-bold leading-snug text-white">
                {loc.name}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
