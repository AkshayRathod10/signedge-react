import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd - Reach Us",

  // other metadata
  description: "This is a Contact page for SignEdge India Pvt Ltd."
};

export default function ReachUs() {
  return (
    <>
      <Contact />
    </>
  );
}
