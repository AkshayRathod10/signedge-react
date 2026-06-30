"use client";
import Image from "next/image";
import PageHero from "../Common/PageHero";
import productsHeader from "../../assets/images/products.svg";
import imgLedDisplay from "../../assets/images/led.svg";
import imgMediaPlayer from "../../assets/images/media-player.svg";
import imgCms from "../../assets/images/cms.svg";
import imgTouchscreen from "../../assets/images/interactive-touchscreen.svg";
import imgMountingHardware from "../../assets/images/mounting-hardware.svg";

const productItems = [
  {
    image: imgLedDisplay,
    title: "Digital Signage Displays",
    description:
      "High-quality commercial-grade displays available in various sizes and configurations, including indoor, outdoor, single-screen, and videowall displays.",
  },
  {
    image: imgMediaPlayer,
    title: "Media Players",
    description:
      "Dedicated media players or digital signage players to playback content on displays. These players support different content formats and offer remote management capabilities.",
  },
  {
    image: imgCms,
    title: "Content Management Software (CMS)",
    description:
      "Robust software platforms for creating, scheduling, and managing content for digital signage displays. CMS solutions offer intuitive interfaces, content templates, scheduling tools, and real-time updates.",
  },
  {
    image: imgTouchscreen,
    title: "Interactive Touchscreens",
    description:
      "Touch-enabled displays that allow users to interact with content through gestures, touch, and multi-touch capabilities. Interactive touchscreens are ideal for wayfinding, directories, and interactive presentations.",
  },
  {
    image: imgMountingHardware,
    title: "Mounting Hardware",
    description:
      "Secure mounting solutions for installing displays in various locations, including wall mounts, ceiling mounts, floor stands, and freestanding kiosks. Mounting hardware ensures proper installation and stability.",
  },
];

const Products = () => {
  return (
    <section id="features" className="pb-10">
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
              width={320}
              height={216}
            />
          }
        />
      <div className="mx-auto px-8">
        

        {/* Product rows — separate dark section */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {productItems.map((p, i) => (
            <div
              key={i}
              style={{ background: "var(--gradient-dark)" }}
              className="group flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl px-10 py-10 md:flex-row"
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
    </section>
  );
};

export default Products;
