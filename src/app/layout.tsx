import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lagos, Nigeria - IconDigitalEdge",
  description:
    "IconDigitalEdge is a premier digital marketing agency in Lagos, Nigeria. 500+ clients. 32 countries. We build marketing, technology, and design systems that grow businesses — not just campaigns that spend budgets.",
  keywords: [
    "digital marketing agency",
    "IconDigitalEdge",
    "SEO Nigeria",
    "social media marketing",
    "web development Lagos",
    "brand design",
  ],
  authors: [{ name: "IconDigitalEdge" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "IconDigitalEdge — Digital Marketing, Technology & Design",
    description:
      "We build marketing, technology, and design systems that grow businesses. Marketing · Technology · Design.",
    siteName: "IconDigitalEdge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IconDigitalEdge — Digital Marketing Agency",
    description:
      "We build marketing, technology, and design systems that grow businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
