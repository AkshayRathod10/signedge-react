import { Metadata } from "next";
import Blog from "@/components/Blog";
import HeroSection from "@/components/HeroSection";
import heroImg from "../assets/images/hero-banner.webp"

export const metadata: Metadata = {
  title: "SignEdge Digitech Pvt Ltd - Home",
  description: "Your company description here",
  openGraph: {
    title: "SignEdge Digitech Pvt Ltd",
    description: "Your OG description",
    url: "https://www.signedgeindia.com",
    siteName: "SignEdge Digitech",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        heroImage={heroImg}
      />
      {/* <Brands /> */}
      <Blog />
      {/* <FunFact />
      <Testimonial />
      <CTA /> */}
      {/* <Feature /> */}
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <FAQ /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </>
  );
}
