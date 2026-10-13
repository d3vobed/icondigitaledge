import type { Metadata } from "next";
import CategoryPage from "@/components/site/category-page";
import { serviceCategories } from "@/lib/site-data";

const category = serviceCategories.find((c) => c.slug === "marketing")!;

export const metadata: Metadata = {
  title: "Marketing Services — Digital, SEO, PPC & More | IconDigitalEdge",
  description:
    "Full-funnel marketing services: digital marketing, SEO, paid media, social media, content, and more — engineered to grow revenue.",
};

export default function Marketing() {
  return <CategoryPage category={category} />;
}
