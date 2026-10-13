import type { Metadata } from "next";
import CategoryPage from "@/components/site/category-page";
import { serviceCategories } from "@/lib/site-data";

const category = serviceCategories.find((c) => c.slug === "technology")!;

export const metadata: Metadata = {
  title: "Technology Services — Websites, Apps & E-commerce | IconDigitalEdge",
  description:
    "Website design and development, web and mobile apps, and e-commerce solutions built for speed, scale, and conversion.",
};

export default function Technology() {
  return <CategoryPage category={category} />;
}
