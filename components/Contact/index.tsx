"use client";
import { motion } from "@/components/Common/motion";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
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
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
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
          message: formData.message,
        });

        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
          captcha: "",
        });
        setErrors({
          name: "",
          email: "",
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
      <PageHero
        badge="Contact Us"
        heading="Let's Build Something"
        accentText="Great Together"
        description="Have a project in mind? Our team is ready to help — reach out and we'll get back to you within 24 hours."
        accent="#D81B60"
        accentMuted="rgba(216,27,96,0.12)"
        right={<ContactStats />}
      />
      <section id="support" className="px-8 py-10">
        <div className="relative mx-auto mt-6 max-w-c-1390 px-6">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg"></div>
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
            {/* Left — Contact Info + Map */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black lg:w-1/2"
            >
              <h2 className="mb-7.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contact Info
              </h2>

              <div className="mb-7.5 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.21z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="flex flex-col gap-1">
                    <a href="tel:9833035262" className="hover:text-primary">
                      +91 9833035262
                    </a>
                    <a href="tel:9667667826" className="hover:text-primary">
                      +91 9667667826
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm8 7L4.5 6h15L12 11zm0 2.2L4 7.7V18h16V7.7l-8 5.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <a
                    href="mailto:info@signedgeindia.com"
                    className="hover:text-primary"
                  >
                    info@signedgeindia.com
                  </a>
                </div>
              </div>

              <div className="mb-7.5">
                <h3 className="mb-2 text-metatitle3 font-medium text-black dark:text-white">
                  Address
                </h3>
                <p>
                  A-432, 2nd Floor, Vashi Plaza, Vashi, Navi Mumbai - 400703
                </p>
              </div>

              <div className="overflow-hidden rounded-lg">
                <iframe
                  title="SignEdge Location"
                  src="https://www.google.com/maps?q=Vashi+Plaza,+Sector+17,+Vashi,+Navi+Mumbai,+Maharashtra+400703&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black lg:w-1/2"
            >
              <h2 className="mb-7.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5">
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name!"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee"
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-7.5">
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email!"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee"
                  />
                  {errors.email && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-7.5">
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message!"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee"
                  ></textarea>
                  {errors.message && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="mb-7.5">
                  <div className="mb-2 text-sm font-medium text-black dark:text-white">
                    {numberOne} + {numberTwo} = ?
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter CAPTCHA"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee"
                  />
                  {errors.captcha && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.captcha}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Send
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
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Contact;
