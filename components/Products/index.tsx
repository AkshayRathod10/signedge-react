"use client";
import Image from "next/image";
import PageHero from "../Common/PageHero";
import productsHeader from "../../assets/images/products.svg";
import imgLedDisplay from "../../assets/images/10_LED.svg";
import imgMediaPlayer from "../../assets/images/1_media-player.svg";
import imgCms from "../../assets/images/6_CMS.svg";
import imgTouchscreen from "../../assets/images/9_interactive-touchscreen.svg";
import imgMountingHardware from "../../assets/images/11_mounting-hardware.svg";

const productItems = [
  {
    image: imgLedDisplay,
    title: "Digital Signage Displays",
    description:
      "High-brightness LED displays engineered for crisp, vivid visuals in any environment — indoor or outdoor, day or night.",
  },
  {
    image: imgMediaPlayer,
    title: "Media Players",
    description:
      "Reliable, high-performance media players that drive your screens with smooth, always-on content playback.",
  },
  {
    image: imgCms,
    title: "Content Management Software (CMS)",
    description:
      "An intuitive CMS to schedule, update, and manage content across all your displays from a single dashboard.",
  },
  {
    image: imgTouchscreen,
    title: "Interactive Touchscreens",
    description:
      "Responsive touchscreen displays that turn passive viewers into engaged users with interactive experiences.",
  },
  {
    image: imgMountingHardware,
    title: "Mounting Hardware",
    description:
      "Durable mounts, brackets, and accessories designed to install and secure your signage in any setting.",
  },
];

const Products = () => {
  // last row start index (2-column grid) — items below it get no bottom border
  const lastRowStart =
    productItems.length % 2 === 0
      ? productItems.length - 2
      : productItems.length - 1;

  return (
    <section id="features" className="py-10">
      <div className="mx-auto px-8">
        <PageHero
          badge="Product Range"
          heading="Built for Signs."
          accentText="Engineered to Perform."
          description="Every SignEdge product is precision-crafted for the signage industry — robust LED modules to weatherproof accessories."
          accent="#F4B400"
          accentMuted="rgba(244,180,0,0.12)"
          right={
            <Image
              src={productsHeader}
              alt="Products"
              width={340}
              height={216}
            />
          }
        />

        {/* Product rows — separate dark section */}
        <div
          style={{ background: "var(--gradient-dark)" }}
          className="mt-16 overflow-hidden rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {productItems.map((p, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center justify-between gap-6 px-10 py-10 md:flex-row
                  ${i % 2 === 0 && i < productItems.length - 1 ? "md:border-r md:border-amber-500/15" : ""}
                  ${i < lastRowStart ? "border-b border-amber-500/15" : ""}
                `}
              >
                <div className="flex w-full items-center justify-center md:w-1/2">
                  <Image src={p.image} alt={p.title} className="w-full object-contain" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="mb-2 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-amber-500">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
