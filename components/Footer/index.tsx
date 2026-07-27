"use client";
import Reveal from "@/components/Common/Reveal";
import Image from "next/image";
import logoWhite from "../../assets/images/signage-white-logo.svg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.94 5a2 2 0 1 1-4-.002A2 2 0 0 1 6.94 5zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

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
        <div className="py-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
            {/* Brand column */}
            <Reveal as="div" duration={0.7} delay={0.1} className="lg:pr-12">
              <a href="/" className="mb-6 inline-block">
                <Image
                  width={150}
                  height={90}
                  src={logoWhite}
                  alt="SignEdge Digitech"
                />
              </a>

              {/* <p className="mb-8 text-sm leading-relaxed text-white/50">
                India's leading manufacturer of precision LED modules, digital
                displays, and signage accessories — trusted by 500+ businesses
                across the country.
              </p> */}

              {/* Contact */}
              <p
                className="mb-2 text-[11px] uppercase tracking-[4px]"
                style={{ color: "#0bceb7" }}
              >
                <a href="/reach-us" className="text-[16px]">Get in touch</a>
              </p>
              {/* <a
                href="mailto:info@signedgeindia.com"
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                info@signedgeindia.com
              </a> */}
            </Reveal>

            {/* Quick links */}
            {/* <Reveal as="div" duration={0.7} delay={0.2} className="lg:pl-8">
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
            </Reveal> */}

            {/* CTA / tagline column */}
            {/* <Reveal as="div" duration={0.7} delay={0.3} className="lg:pl-8">
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
            </Reveal> */}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-2 md:flex-row">
          <Reveal
            as="p"
            duration={0.7}
            delay={0.1}
            className="text text-white"
          >
            © {new Date().getFullYear()} SignEdge Digitech. All rights
            reserved.
          </Reveal>

          <Reveal
            as="ul"
            duration={0.7}
            delay={0.2}
            className="flex items-center gap-4"
          >
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-200 hover:border-[#0bceb7]/40 hover:text-[#0bceb7]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
