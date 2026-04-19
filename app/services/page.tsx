import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd - Services",

  // other metadata
  description: "This is a Services page for SignEdge India Pvt Ltd."
};

export default function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
