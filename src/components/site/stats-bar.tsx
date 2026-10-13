"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 500, suffix: "+", label: "Brands Served" },
  { to: 10, suffix: "m+", label: "Leads Generated" },
  { to: 300, suffix: "m+", label: "Traffic Driven" },
  { to: 256, prefix: "$", suffix: "m+", label: "In Client Revenue." },
  { to: 32, suffix: "", label: "Countries Reached" },
  { to: 150, suffix: "+", label: "Experts on Staff" },
];

export default function StatsBar() {
  return (
    <section aria-label="Agency statistics" className="border-y border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          <div className="hidden lg:flex items-center border-r border-white/10 px-6 py-12">
            <p className="text-[15px] leading-snug text-white/75">Our Numbers Do the Talking for Us</p>
          </div>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-10 text-center ${
                i % 2 === 0 ? "border-r border-white/10" : ""
              } md:border-r md:border-white/10 ${i === stats.length - 1 ? "lg:border-r-0" : ""} ${
                i >= 4 ? "border-t border-white/10 md:border-t-0" : ""
              }`}
            >
              <p className="font-display text-4xl font-bold text-white lg:text-[40px]">
                <CountUp to={s.to} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </p>
              <p className="text-[14px] text-white/65">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
