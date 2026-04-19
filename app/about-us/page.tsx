import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd - Products",

  // other metadata
  description: "This is a Products page for SignEdge India Pvt Ltd."
};

export default function AboutUsPage() {
  return (
    <>
      <About />
    </>
  );
}
