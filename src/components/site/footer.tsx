import Image from "next/image";
import Link from "next/link";
import { Logo } from "./ui";

const company = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#works" },
  { label: "Blog", href: "#insights" },
  { label: "Careers", href: "#footer", hiring: true },
  { label: "Internship program", href: "#footer" },
  { label: "Locations", href: "#footer" },
];

const services = [
  { label: "Marketing", href: "#services" },
  { label: "Technology", href: "#services" },
  { label: "Design", href: "#services" },
];

const industries = [
  "Technology",
  "Real Estate",
  "Finance",
  "Health",
  "Nonprofits",
  "Education",
  "Transportation",
  "Cryptocurrency",
  "Web 3.0",
];

const locations = [
  { label: "USA", flag: "/images/flags/us.png" },
  { label: "UK", flag: "/images/flags/gb.png" },
  { label: "Canada", flag: "/images/flags/ca.png" },
  { label: "Nigeria", flag: "/images/flags/ng.png" },
  { label: "Ghana", flag: "/images/flags/gh.png" },
  { label: "Kenya", flag: "/images/flags/ke.png" },
];

/* Brand social icons as inline SVG paths */
const socials = [
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.35-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A3.99 3.99 0 1 1 16 12a3.99 3.99 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z",
  },
  {
    label: "Twitter",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z",
  },
  {
    label: "Facebook",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z",
  },
  {
    label: "WhatsApp",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.87zM20.5 3.49A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.44h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.44-8.41z",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="scroll-mt-20 border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.1fr_1fr_1.1fr] lg:gap-8">
          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Company</h3>
            <ul className="mt-6 space-y-4">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[15px] text-white/70 transition-colors hover:text-brand">
                    {l.label}
                    {l.hiring && <span className="ml-2 text-brand">We&rsquo;re hiring</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Services</h3>
            <ul className="mt-6 space-y-4">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[15px] text-white/70 transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Industries</h3>
            <ul className="mt-6 space-y-4">
              {industries.map((l) => (
                <li key={l}>
                  <Link href="#footer" className="text-[15px] text-white/70 transition-colors hover:text-brand">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Locations</h3>
            <ul className="mt-6 space-y-4">
              {locations.map((l) => (
                <li key={l.label}>
                  <Link href="#footer" className="flex items-center gap-3 text-[15px] font-semibold text-white/80 transition-colors hover:text-brand">
                    <Image src={l.flag} alt={`${l.label} flag`} width={26} height={18} className="rounded-[2px]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="scroll-mt-24">
            <h3 className="font-display text-lg font-bold text-white">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="mailto:info@icondigitaledge.com" className="text-[15px] text-white/70 transition-colors hover:text-brand">
                  info@icondigitaledge.com
                </a>
              </li>
              <li>
                <a href="tel:+2349151460000" className="text-[15px] text-white/70 transition-colors hover:text-brand">
                  +234 915 146 0000
                </a>
              </li>
            </ul>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#footer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-brand hover:text-brand"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <p className="text-sm text-white/55">© 2026 IconDigitalEdge Digital Agency</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/70">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M6.36 5.21 2.3 12.03a.14.14 0 0 0 .12.2h3.87c.05 0 .1-.02.12-.07l2.87-4.98a.14.14 0 0 0 0-.13L7.4 3.13c-.05-.1-.2-.1-.25 0l-.79 1.37c-.4.7-.4.77 0 .71zM17.4 8.1a.14.14 0 0 0-.12 0l-2.1 3.64-1.08 1.87-2.1 3.63a.14.14 0 0 0 .12.2h3.87c.05 0 .1-.02.12-.07l4.06-7.03-2.63-4.56-.14 2.32z"/>
              </svg>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">Meta</span>
                <span className="block text-[11px] text-white/50">Business Partner</span>
              </span>
            </div>
            <div className="text-white/70">
              <span className="text-lg leading-none">
                <span className="font-semibold text-white">Google</span>{" "}
                <span className="font-light">Partner</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
