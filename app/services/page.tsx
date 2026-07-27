import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Signage, branding and digital services offered by SignEdge India Pvt Ltd.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
