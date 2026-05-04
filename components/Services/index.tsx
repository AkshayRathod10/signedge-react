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

        {/* <PageHero
          badge="Our Services"
          heading="End-to-End Digital Signage"
          accentText="Solutions"
          description="From concept to installation, SignEdge delivers complete signage services tailored to your brand."
          background="linear-gradient(135deg, var(--color-orange-100) 0%, var(--color-orange-50) 60%, var(--color-orange-100) 100%)"
          accent="var(--color-orange-500)"
          accentMuted="rgba(244,81,30,0.18)"
          headingColor="var(--color-orange-800)"
          descriptionColor="var(--color-orange-700)"
          badgeTextColor="var(--color-orange-800)"
          right={
            <Image
              src={servicesBanner}
              alt="Services"
              width={340}
              height={216}
            />
          }
        /> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {servicesData.map((service, key) => (
            <SingleService service={service} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
