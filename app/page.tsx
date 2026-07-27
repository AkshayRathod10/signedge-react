import { Metadata } from "next";
import Blog from "@/components/Blog";
import HeroSection from "@/components/HeroSection";
import heroImg from "../assets/images/hero-banner.webp"

export const metadata: Metadata = {
  title: {
    absolute: "SignEdge India Pvt Ltd — Signage & Branding Solutions",
  },
  description:
    "SignEdge India Pvt Ltd delivers signage, branding and digital solutions for businesses across India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SignEdge India Pvt Ltd",
    description:
      "SignEdge India Pvt Ltd delivers signage, branding and digital solutions for businesses across India.",
    url: "https://www.signedgeindia.com/",
    siteName: "SignEdge India",
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
