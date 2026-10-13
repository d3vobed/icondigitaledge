import type { Metadata } from "next";
import CategoryPage from "@/components/site/category-page";
import { serviceCategories } from "@/lib/site-data";

const category = serviceCategories.find((c) => c.slug === "design")!;

export const metadata: Metadata = {
  title: "Design Services — Brand, Graphic, UX/UI & Video | IconDigitalEdge",
  description:
    "Brand identity, graphic design, UX/UI, and video & animation services that make your brand unforgettable.",
};

export default function Design() {
  return <CategoryPage category={category} />;
}
