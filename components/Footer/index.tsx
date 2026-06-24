"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/images/signage-logo-crop.svg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer
      style={{ background: "var(--gradient-dark)" }}
      className="relative border-t border-white/[0.06]"
    >
      {/* Subtle teal top-border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0bceb7]/40 to-transparent" />

      <div className="mx-auto px-8">

        {/* ── Top ── */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">

            {/* Brand column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <a href="/" className="mb-6 inline-block">
                <Image
                  width={110}
                  height={80}
                  src={logo}
                  alt="SignEdge Digitech"
                />
              </a>

              <p className="mb-8 text-sm leading-relaxed text-white/50">
                India's leading manufacturer of precision LED modules, digital
                displays, and signage accessories — trusted by 500+ businesses
                across the country.
              </p>

              {/* Contact */}
              <p
                className="mb-2 text-[11px] uppercase tracking-[4px]"
                style={{ color: "#0bceb7" }}
              >
                Get in touch
              </p>
              <a
                href="mailto:info@signedgeindia.com"
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                info@signedgeindia.com
              </a>
            </motion.div>

            {/* Quick links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <p
                className="mb-6 text-[11px] uppercase tracking-[4px]"
                style={{ color: "#0bceb7" }}
              >
                Quick Links
              </p>
              <ul className="space-y-3">
  {footerLinks.map((link) => (
    <li key={link.href}>
      <a
        href={link.href}
        className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
      >
        <span
          className="h-px w-4 transition-all duration-200 group-hover:w-6"
          style={{ backgroundColor: "#0bceb7" }}
        />
        {link.label}
      </a>
    </li>
  ))}
</ul>
            </motion.div>

            {/* CTA / tagline column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <p
                className="mb-6 text-[11px] uppercase tracking-[4px]"
                style={{ color: "#0bceb7" }}
              >
                Our promise
              </p>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                Every product is built to perform in the field — designed to
                impress, engineered to last.
              </p>
              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-200 hover:border-[#0bceb7]/40 hover:text-white"
              >
                Explore Products
                <span className="text-[#0bceb7]">→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 md:flex-row">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs text-white/30"
          >
            © {new Date().getFullYear()} SignEdge Digitech. All rights reserved.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {/* LinkedIn */}
            <li>
              
               <a href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-200 hover:border-[#0bceb7]/40 hover:text-[#0bceb7]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 1 1-4-.002A2 2 0 0 1 6.94 5zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
                </svg>
              </a>
            </li>
          </motion.ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;