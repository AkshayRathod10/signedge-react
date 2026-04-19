"use client";
import React from "react";
import Image from "next/image";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import servicesBanner from "../../assets/images/SignEdge-Accessories icon.svg";
import PageHero from "../Common/PageHero";

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="mx-auto px-8">
        <PageHero
          badge="Our Services"
          heading="End-to-End Digital Signage"
          accentText="Solutions"
          description="From concept to installation, SignEdge delivers complete signage services tailored to your brand."
          accent="#F4511E"
          accentMuted="rgba(244,81,30,0.12)"
          right={
            <Image
              src={servicesBanner}
              alt="Services"
              width={340}
              height={216}
            />
          }
        />

        {/* Hero Banner */}
        <div className="relative mb-16 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f25] to-[#1a3a44] px-8 py-8 md:flex-row xl:px-16">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#0bceb7]/20" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 rounded-full border border-[#0bceb7]/10" />

          {/* Left: Text */}
          <div className="z-10 max-w-lg text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-[#0bceb7]/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#0bceb7]">
              Our Services
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
              End-to-End <span className="text-[#0bceb7]">Digital Signage</span>{" "}
              Solutions
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              From concept to installation, SignEdge delivers complete signage
              services — tailored to your brand, built for impact, and
              engineered to last in any environment.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="z-10 mt-10 md:mt-0">
            <Image
              src={servicesBanner}
              alt="SignEdge Services"
              width={340}
              height={216}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {servicesData.map((service, key) => (
            <SingleService product={service} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
