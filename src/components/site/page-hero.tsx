import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============ Shared inner-page hero — teal radial glow, breadcrumb, two-tone title ============ */
export default function PageHero({
  breadcrumb,
  title,
  accent,
  after,
  subtitle,
  children,
  align = "left",
}: {
  breadcrumb: string;
  title: string;
  accent?: string;
  after?: string;
  subtitle?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-40 pb-20 md:pt-48 md:pb-24">
      {/* teal radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 340px at 72% 18%, rgba(36,174,176,0.16), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className={cn("flex items-center gap-1.5 text-[13.5px] text-white/50", align === "center" && "justify-center")}
        >
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/80">{breadcrumb}</span>
        </nav>
        <h1
          className={cn(
            "mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {title}
          {accent && <span className="text-brand"> {accent}</span>}
          {after && <span> {after}</span>}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70",
              align === "center" && "mx-auto text-center"
            )}
          >
            {subtitle}
          </p>
        )}
        {children && <div className={cn("mt-10", align === "center" && "flex justify-center")}>{children}</div>}
      </div>
    </section>
  );
}
