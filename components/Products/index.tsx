"use client";
import React from "react";
import Image from "next/image";
import productsData from "./productsData";
import SingleProduct from "./SingleProduct";
import SectionHeader from "../Common/SectionHeader";
import accessoryScene from "../../assets/images/SignEdge-Accessories icon.svg";
import accesoriesIcon from "../../assets/images/SignEdge-Accessories icon (2).svg";
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
              src={accessoryScene}
              alt="Products"
              width={340}
              height={216}
            />
          }
        />

<div className="relative mb-16 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 px-8 py-8 md:flex-row xl:px-16">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#0bceb7]/20" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 rounded-full border border-[#0bceb7]/10" />

          {/* Left: Text */}
          <div className="z-10 max-w-lg text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-[#0bceb7]/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#0bceb7]">
              Product Range
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
              Built for Signs.{" "}
              <span className="text-[#0bceb7]">Engineered to Perform.</span>
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              Every SignEdge product is precision-crafted for the signage
              industry — from robust LED modules to weatherproof accessories,
              designed to deliver flawless results on every installation.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="z-10 mt-10 md:mt-0">
            <Image
              src={accessoryScene}
              alt="SignEdge Products"
              width={340}
              height={216}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

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
