"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHero from "../Common/PageHero";

const ContactStats = () => (
  <div className="flex flex-col gap-6 text-center">
    <div>
      <p className="text-3xl font-bold" style={{ color: "#D81B60" }}>
        24hrs
      </p>
      <p className="text-sm text-white/60">Average response time</p>
    </div>
    <div>
      <p className="text-3xl font-bold" style={{ color: "#D81B60" }}>
        500+
      </p>
      <p className="text-sm text-white/60">Projects delivered</p>
    </div>
    <div>
      <p className="text-3xl font-bold" style={{ color: "#D81B60" }}>
        10+
      </p>
      <p className="text-sm text-white/60">Years of experience</p>
    </div>
  </div>
);

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [numberOne, setNumberOne] = useState(generateRandomNumber());
  const [numberTwo, setNumberTwo] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 9);
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors: typeof errors = {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
      captcha: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (parseInt(formData.captcha) !== numberOne + numberTwo) {
      newErrors.captcha = "CAPTCHA is incorrect";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("/contact.php", {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
        });

        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          captcha: "",
        });
        setErrors({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          captcha: "",
        });
        setNumberOne(generateRandomNumber());
        setNumberTwo(generateRandomNumber());
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
      }
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-8 py-10">
        <PageHero
          badge="Contact Us"
          heading="Let's Build Something"
          accentText="Great Together"
          description="Have a project in mind? Our team is ready to help — reach out and we'll get back to you within 24 hours."
          accent="#D81B60"
          accentMuted="rgba(216,27,96,0.12)"
          right={<ContactStats />}
        />

        {/* <PageHero
          badge="Contact Us"
          heading="Let's Build Something"
          accentText="Great Together"
          description="Have a project in mind? Our team is ready to help — reach out and we'll get back to you within 24 hours."
          background="linear-gradient(135deg, #f9c0d8 0%, #fce8f0 60%, #f9c0d8 100%)"
          accent="#d81b60"
          accentMuted="rgba(216,27,96,0.18)"
          headingColor="#670b2e"
          descriptionColor="#8f1040"
          badgeTextColor="#670b2e"
          right={<ContactStats />}
        /> */}
        
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black lg:w-[70%]"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {errors.name && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-1/2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {errors.email && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {errors.subject && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {errors.phone && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-11.5">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                  {errors.message && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="mb-7.5">
                  <div className="mb-2 text-sm font-medium">
                    Please solve:{" "}
                    <span className="text-lg font-bold">
                      {numberOne} + {numberTwo} = ?
                    </span>
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter CAPTCHA answer"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                  {errors.captcha && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.captcha}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <div className="mb-4 flex md:mb-0"></div>

                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black lg:w-[30%]"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="mb-7.5">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Location
                </h3>
                <p>
                  A-432, 2nd Floor, Vashi Plaza, Vashi, Navi Mumbai - 400703
                </p>
              </div>
              <div className="mb-7.5">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a
                    href="mailto:info@signedgeindia.com"
                    className="hover:underline"
                  >
                    info@signedgeindia.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p className="flex flex-col gap-2">
                  <a href="tel:9833035262" className="hover:underline">
                    +91 9833035262
                  </a>
                  <a href="tel:9667667826" className="hover:underline">
                    +91 9667667826
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contact;
