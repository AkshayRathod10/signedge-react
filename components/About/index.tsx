"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import accessoryScene from "../../assets/images/SignEdge-Accessories icon.svg";
import PageHero from "../Common/PageHero";

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
          <div className="relative mb-16 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f25] to-[#1a3a44] px-8 py-8 md:flex-row xl:px-16">
            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#0bceb7]/20" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 rounded-full border border-[#0bceb7]/10" />

            {/* Left: Text */}
            <div className="z-10 max-w-lg text-center md:text-left">
              <span className="mb-4 inline-block rounded-full bg-[#0bceb7]/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#0bceb7]">
                About Us
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
                Redefining Signage{" "}
                <span className="text-[#0bceb7]">Across India</span>
              </h2>
              <p className="text-base leading-relaxed text-white/60">
                SignEdge Digitech is a leading manufacturer and supplier of
                premium signage components — trusted by thousands of businesses
                for quality, reliability, and innovation that stands out in
                every environment.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="z-10 mt-10 md:mt-0">
              <Image
                src={accessoryScene}
                alt="About SignEdge"
                width={340}
                height={216}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About SignEdge"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About SignEdge"
                className="hidden dark:block"
                fill
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
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
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
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
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Our Story
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="SignEdge Innovation"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="SignEdge Innovation"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
