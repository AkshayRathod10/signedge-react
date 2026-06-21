"use client";
import React from "react";
import Image from "next/image";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import servicesBanner from "../../assets/images/services.svg";
import consultationPromo from "../../assets/images/2_consultation-planning.svg";
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

        {/* Promo Banners Row */}
        <div className="mt-14 flex flex-col md:flex-row gap-6">

          {/* Promo Banner 1 - Green */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-[#e8f5eb] flex flex-col md:flex-row items-center justify-between px-10 py-12 gap-8">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-3">
                Winning with<br />digital signage
              </h2>
              <p className="text-gray-600 text-sm">
                Introducing the SignEdge Consultation Framework
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-70 h-70 rounded-full bg-white p-5 shadow-md">
              <Image
                src={consultationPromo}
                alt="Consultation & Planning"
                width={200}
                height={160}
                className="object-contain"
              />
            </div>
          </div>

          {/* Promo Banner 3 - Orange */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-[#fef0eb] flex flex-col md:flex-row items-center justify-between px-10 py-12 gap-8">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-3">
                Plan smarter,<br />deploy faster
              </h2>
              <p className="text-[#a6320c] text-sm">
                Streamline your signage strategy with expert consultation
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-70 h-70 rounded-full bg-white p-5 shadow-md">
              <Image
                src={consultationPromo}
                alt="Consultation & Planning"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

        </div>

        {/* Promo Banners Row - Dark */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">

          {/* Dark Banner Left */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-[#162040] flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-8">
              <Image
                src={consultationPromo}
                alt="Consultation & Planning"
                width={260}
                height={260}
                className="object-contain w-full h-auto max-h-[260px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-white py-12 px-8">
              <p className="text-sm leading-relaxed text-gray-200">
                We know that for businesses like yours, every client and every project counts. And just screening solutions for a single deployment can take several days.{" "}
                <span className="font-semibold text-white">
                  What if you could cut that time dramatically?
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-200">
                Meet SignEdge Consultation Pro, an all-in-one solution that helps manage your signage workflow.
              </p>
            </div>
          </div>

          {/* Dark Banner Right */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-[#162040] flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-8">
              <Image
                src={consultationPromo}
                alt="Consultation & Planning"
                width={260}
                height={260}
                className="object-contain w-full h-auto max-h-[260px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-white py-12 px-8">
              <p className="text-sm leading-relaxed text-gray-200">
                Our clients report saving an average of 6+ hours per week with streamlined planning and expert consultation built into every step.{" "}
                <span className="font-semibold text-white">
                  Deliver the perfect signage experience every time.
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-200">
                SignEdge clients report saving an average of 6+ hours per week on deployment workflows.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
