"use client";
import React from "react";
import Image from "next/image";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import servicesBanner from "../../assets/images/services.svg";
import PageHero from "../Common/PageHero";
import imgContentCreationTools from "../../assets/images/4_content-creation-tool.svg";
import imgMaintenanceSupport from "../../assets/images/7_maintenance-support.svg";
import imgInstallationDeployment from "../../assets/images/8_installation-deployment.svg";
import imgContentCreation from "../../assets/images/3_content-creation.svg";
import imgHardwareSolutions from "../../assets/images/5_hardware-solutions.svg";
import imgConsultationPlanning from "../../assets/images/2_consultation-planning.svg";

const promoServices = [
  { image: imgContentCreationTools, title: "Content Creation Tools", description: "Software tools and templates for creating and designing multimedia content, including videos, images, graphics, text, and animations." },
  { image: imgMaintenanceSupport, title: "Maintenance & Support", description: "Enjoy peace of mind with our proactive maintenance and round-the-clock support services, ensuring your digital signage remains operational." },
  { image: imgInstallationDeployment, title: "Installation & Deployment", description: "Leave the technicalities to us. Our expert technicians ensure seamless installation and deployment of your digital signage solutions." },
  { image: imgContentCreation, title: "Content Creation", description: "Our team of creative professionals crafts compelling content that resonates with your audience and reinforces your brand message." },
  { image: imgHardwareSolutions, title: "Hardware Solutions", description: "From displays and media players to mounts and accessories, we offer high-quality hardware options to suit any environment." },
  { image: imgConsultationPlanning, title: "Consultation & Planning", description: "We work closely with you to understand your objectives and develop customized digital signage strategies tailored to your specific needs." },
];

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
        {/* <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {servicesData.map((service, key) => (
            <SingleService service={service} key={key} />
          ))}
        </div> */}


        {/* Green + Orange promo variants retired — client approved the Dark Blue layout below.
            Kept here (disabled) in case we want to revisit. */}
        {false && (
          <>
            {/* Green Section — all 6 services */}
            <div className="mt-14 overflow-hidden rounded-2xl bg-[#e8f5eb]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {promoServices.map((s, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10
                      ${i % 2 === 0 ? "border-r border-green-200" : ""}
                      ${i < 4 ? "border-b border-green-200" : ""}
                    `}
                  >
                    <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                      <div className="flex items-center justify-center w-50 h-50 rounded-full bg-white shadow-md p-4">
                        <Image src={s.image} alt={s.title} className="object-contain w-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orange Section — all 6 services */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-[#fdd5c8]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {promoServices.map((s, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10
                      ${i % 2 === 0 ? "border-r border-orange-200" : ""}
                      ${i < 4 ? "border-b border-orange-200" : ""}
                    `}
                  >
                    <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">{s.title}</h3>
                      <p className="text-sm text-[#7a2c0a] leading-relaxed">{s.description}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                      <div className="flex items-center justify-center w-50 h-50 rounded-full bg-white shadow-md p-4">
                        <Image src={s.image} alt={s.title} className="object-contain w-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Service rows — separate dark section */}
        <div
          style={{ background: "var(--gradient-dark)" }}
          className="mt-16 overflow-hidden rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {promoServices.map((s, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center justify-between gap-6 px-10 py-10 md:flex-row
                  ${i % 2 === 0 ? "md:border-r md:border-orange-500/15" : ""}
                  ${i < promoServices.length - 2 ? "border-b border-orange-500/15" : ""}
                `}
              >
                <div className="flex w-full items-center justify-center md:w-1/2">
                  <Image src={s.image} alt={s.title} className="w-full object-contain" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="mb-2 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
