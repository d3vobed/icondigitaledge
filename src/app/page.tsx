import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import StatsBar from "@/components/site/stats-bar";
import GlobalPartner from "@/components/site/global-partner";
import Testimonials from "@/components/site/testimonials";
import Services from "@/components/site/services";
import CaseStudies from "@/components/site/case-studies";
import AboutCard from "@/components/site/about-card";
import WhyChoose from "@/components/site/why-choose";
import BusinessTypes from "@/components/site/business-types";
import Awards from "@/components/site/awards";
import BlogSection from "@/components/site/blog-section";
import CtaBanner from "@/components/site/cta-banner";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <GlobalPartner />
      <Testimonials />
      <Services />
      <CaseStudies />
      <AboutCard />
      <WhyChoose />
      <BusinessTypes />
      <Awards />
      <BlogSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
