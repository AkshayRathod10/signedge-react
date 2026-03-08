import { Metadata } from "next";
import Feature from "@/components/Features";

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd - Services",

  // other metadata
  description: "This is a Services page for SignEdge India Pvt Ltd."
};

export default function Products() {
  return (
    <main>
      <Feature />
    </main>
  );
}
