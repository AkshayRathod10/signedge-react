"use client";

import Image from "next/image";
import PageHero from "../Common/PageHero";
import aboutImageOne from "../../assets/images/about-partner.jpg";
import aboutImageTwo from "../../assets/images/about-innovation.jpg";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden py-10">
        {/* About Hero Banner */}

        <div className="mx-auto px-8">
          <PageHero
            badge="About Us"
            heading="Redefining Signage"
            accentText="Across India"
            description="SignEdge Digitech is a leading manufacturer trusted by thousands of businesses for quality and innovation."
            accent="#26A69A"
            accentMuted="rgba(38,166,154,0.12)"
          />

          <div className="mt-6 flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="relative mx-auto hidden aspect-[588/526.5] w-full md:block md:w-1/2">
              <Image
                src={aboutImageOne}
                alt="About SignEdge"
                className="dark:hidden"
                fill
              />
              {/* <Image
                src="/images/about/about-dark-01.png"
                alt="About SignEdge"
                className="hidden dark:block"
                fill
              /> */}
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {"India's"} Trusted Partner in Digital Signage
              </h2>
              <p className="text-base leading-relaxed text-body-color">
                At SignEdge Digitech, we design and deliver precision-engineered
                signage solutions that help businesses communicate boldly and
                effectively. From retail and hospitality to corporate and
                outdoor — we bring your brand to life with technology built to
                perform.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    End-to-End Signage Expertise
                  </h3>
                  <p className="text-sm text-body-color">
                    From concept and design to manufacturing and on-site
                    installation — we handle every stage in-house.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Built for Every Environment
                  </h3>
                  <p className="text-sm text-body-color">
                    Our products are tested and certified for indoor, outdoor,
                    and harsh-weather conditions across all industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="pb-10">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2">
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Decade of Signage{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Innovation
                </span>
              </h2>
              <p className="text-base leading-relaxed text-body-color">
                Founded with a mission to set new standards in the signage
                industry, SignEdge Digitech has grown into one of {"India's"}{" "}
                most trusted manufacturers and suppliers of LED signage
                components, flex channels, power systems, and display
                accessories — serving thousands of businesses nationwide.
              </p>
            </div>

            <div className="relative mx-auto hidden aspect-[588/526.5] w-full md:block md:w-1/2">
              <Image
                src={aboutImageTwo}
                alt="SignEdge Innovation"
                className="dark:hidden"
                fill
              />
              {/* <Image
                src="./images/about/about-dark-02.svg"
                alt="SignEdge Innovation"
                className="hidden dark:block"
                fill
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
