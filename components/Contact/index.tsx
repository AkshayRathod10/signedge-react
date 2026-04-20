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
        const request = {
          sender: {
            name: "Signedge",
            email: "admin@signedgeindia.com",
          },
          to: [
            {
              email: "info@signedgeindia.com",
              name: "Signedge",
            },
          ],
          subject: "Enquiry Received – SignEdge Website",
          htmlContent: `<!DOCTYPE html>
          <html>
          <head>
              <style>
                  body { font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; }
                  .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
                  h2 { color: #333; }
                  p { font-size: 16px; color: #555; }
                  .info { margin: 10px 0; }
                  .footer { margin-top: 20px; font-size: 14px; color: #888; text-align: center; }
              </style>
          </head>
          <body>
              <div class='container'>
                  <h2>New Enquiry Received</h2>
                  <div class='info'><strong>Name:</strong> ${formData.name}</div>
                  <div class='info'><strong>Email:</strong> ${formData.email}</div>
                  <div class='info'><strong>Phone:</strong> ${formData.phone}</div>
                  <div class='info'><strong>Subject:</strong> ${formData.subject}</div>
                  <div class='info'><strong>Message:</strong></div>
                  <p>${formData.message}</p>
                  <div class='footer'>
                      <p>This is an automated email. Please do not reply.</p>
                  </div>
              </div>
          </body>
          </html>`,
        };

        await axios.post("https://api.brevo.com/v3/smtp/email", request, {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
          },
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

        <PageHero
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
        />
        <section className="py-10">
          <div className="mx-auto">
            <div className="relative mb-16 flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f25] to-[#1a3a44] px-8 py-8 md:flex-row xl:px-16">
              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#0bceb7]/20" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 rounded-full border border-[#0bceb7]/10" />

              {/* Left: Text */}
              <div className="z-10 max-w-lg text-center md:text-left">
                <span className="mb-4 inline-block rounded-full bg-[#0bceb7]/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#0bceb7]">
                  Contact Us
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
                  Let&apos;s Build Something{" "}
                  <span className="text-[#0bceb7]">Great Together</span>
                </h2>
                <p className="text-base leading-relaxed text-white/60">
                  Have a project in mind or need expert advice on your signage
                  requirements? Our team is ready to help — reach out and
                  we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Right: Quick contact info */}
              <div className="z-10 mt-10 flex flex-col gap-5 md:mt-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0bceb7]/15">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#0bceb7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-white/70">
                    A-432, 2nd Floor, Vashi Plaza,
                    <br />
                    Navi Mumbai - 400703
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0bceb7]/15">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        fill="#0bceb7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-white/70">
                    info@signedgeindia.com
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0bceb7]/15">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                        fill="#0bceb7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-white/70">
                    +91 9833035262
                    <br />
                    +91 9667667826
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

          <div className="flex flex-col-reverse flex-wrap gap-8 w-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black"
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
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
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

            {/* <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
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
            </motion.div> */}
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contact;
