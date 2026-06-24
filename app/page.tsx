import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import heroImg from "../assets/images/Image-1.jpg"

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
