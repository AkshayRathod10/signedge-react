import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd - Products",

  // other metadata
  description: "This is a Products page for SignEdge India Pvt Ltd."
};

export default function ProductsPage() {
  return (
    <>
      <Products />
    </>
  );
}
