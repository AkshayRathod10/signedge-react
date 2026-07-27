import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SignEdge India Pvt Ltd — our team, mission and signage & branding expertise.",
  alternates: { canonical: "/about-us/" },
};

export default function AboutUsPage() {
  return (
    <>
      <About />
    </>
  );
}
