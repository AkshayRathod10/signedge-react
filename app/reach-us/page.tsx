import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Reach Us",
  description:
    "Contact SignEdge India Pvt Ltd — get in touch for signage and branding enquiries.",
  alternates: { canonical: "/reach-us/" },
};

export default function ReachUs() {
  return (
    <>
      <Contact />
    </>
  );
}
