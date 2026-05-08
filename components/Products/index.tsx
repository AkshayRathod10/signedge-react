"use client";
import Image from "next/image";
import productsData from "./productsData";
import SingleProduct from "./SingleProduct";
import productsHeader from "../../assets/images/products.svg";
import PageHero from "../Common/PageHero";

const Products = () => {
  return (
    <section id="features" className="py-10">
      {/* <div className="flex justify-center mb-6">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0bceb7]/20 to-[#0bceb7]/5 border border-[#0bceb7]/30 shadow-[0_0_30px_rgba(11,206,183,0.2)]">
          <Image
            src={accesoriesIcon}
            alt="Accessories Icon"
            width={44}
            height={44}
          />
        </div>
      </div> */}

      <div className="mx-auto px-8">
        {/* Split Hero Banner */}
        {/* Hero Banner */}

        <PageHero
          badge="Product Range"
          heading="Built for Signs."
          accentText="Engineered to Perform."
          description="Every SignEdge product is precision-crafted for the signage industry — robust LED modules to weatherproof accessories."
          accent="#F4B400"
          accentMuted="rgba(244,180,0,0.12)"
          right={
            <Image
              src={productsHeader}
              alt="Products"
              width={340}
              height={216}
            />
          }
        />

        {/* <PageHero
          badge="Product Range"
          heading="Built for Signs."
          accentText="Engineered to Perform."
          description="Every SignEdge product is precision-crafted for the signage industry — robust LED modules to weatherproof accessories."
          background="linear-gradient(135deg, var(--color-amber-100) 0%, var(--color-amber-50) 60%, var(--color-amber-100) 100%)"
          accent="var(--color-amber-500)"
          accentMuted="rgba(244,180,0,0.18)"
          headingColor="var(--color-amber-800)"
          descriptionColor="var(--color-amber-700)"
          badgeTextColor="var(--color-amber-800)"
          right={
            <Image
              src={accessoryScene}
              alt="Products"
              width={340}
              height={216}
            />
          }
        /> */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {productsData.map((product, key) => (
            <SingleProduct product={product} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
