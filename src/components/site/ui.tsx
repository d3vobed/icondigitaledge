import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ===== Brand logo — glyph stands in for the leading "I" of ICONDIGITALEDGE ===== */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="IconDigitalEdge home" className={cn("inline-flex items-center gap-2.5 shrink-0", className)}>
      <svg viewBox="0 0 34 34" className="h-8 w-8" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="9" fill="none" stroke="#24aeb0" strokeWidth="2.6" />
        <rect x="14.2" y="11" width="5.6" height="16" rx="2.8" fill="#ffffff" />
        <circle cx="17" cy="7.4" r="2.8" fill="#ffffff" />
      </svg>
      <span className="font-display text-white font-bold tracking-tight text-[17px] leading-none">
        ICON<span className="text-brand">DIGITAL</span>EDGE
      </span>
    </Link>
  );
}

/* ===== Teal solid pill (primary CTA) ===== */
export function PillButton({
  href,
  children,
  variant = "teal",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "teal" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium transition-transform duration-200 hover:-translate-y-0.5",
        variant === "teal" && "bg-brand text-white px-8 py-4 hover:bg-brand-dark",
        variant === "dark" && "bg-[#0b0b0b] text-white px-3 py-[7px]",
        className
      )}
    >
      {children}
    </Link>
  );
}

/* ===== White pill with trailing teal circle arrow — signature button ===== */
export function ArrowPillButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-white text-[#0b0b0b] pl-7 pr-2 py-2 font-medium transition-transform duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
        <ArrowRight className="h-5 w-5" strokeWidth={2} />
      </span>
    </Link>
  );
}

/* ===== Section heading with teal highlight phrase ===== */
export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-bold tracking-tight text-white text-4xl md:text-[44px] md:leading-[1.12]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function T({ children }: { children: React.ReactNode }) {
  return <span className="text-brand">{children}</span>;
}
