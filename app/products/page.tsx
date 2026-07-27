import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the range of signage and branding products offered by SignEdge India Pvt Ltd.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <Products />
    </>
  );
}
