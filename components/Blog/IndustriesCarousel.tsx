"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const TEAL = "#0bceb7";
const TEAL_LIGHT = "#e6faf8";

const IndustriesCarousel = ({ blogs }: { blogs: Blog[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="mx-auto max-w-c-1280 px-4 py-8">
      {/* Section label */}
      <div className="mb-10 flex items-center gap-3">
        <span
          className="h-px w-8"
          style={{ backgroundColor: TEAL }}
        />
        <p
          className="text-[11px] font-medium uppercase tracking-[4px]"
          style={{ color: TEAL }}
        >
          Products & Solutions
        </p>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogs.map((blog, key) => (
            <div key={key} className="flex-none w-full">
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {blogs.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                height: "6px",
                width: i === selectedIndex ? "24px" : "6px",
                backgroundColor: i === selectedIndex ? TEAL : "#d1d5db",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-xs tabular-nums text-gray-400">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(blogs.length).padStart(2, "0")}
        </span>

        {/* Prev / Next */}
        <div className="flex gap-2">
          {[
            { fn: scrollPrev, label: "Previous slide", arrow: "←" },
            { fn: scrollNext, label: "Next slide", arrow: "→" },
          ].map(({ fn, label, arrow }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-500 transition-all duration-200 hover:border-transparent hover:text-white"
              style={{
                ["--hover-bg" as string]: TEAL,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = TEAL;
                (e.currentTarget as HTMLButtonElement).style.borderColor = TEAL;
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
                (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, extraInfo, tagColor } = blog;
  const accentColor = tagColor?.dot ?? TEAL;
  const tagBg = tagColor?.bg ?? TEAL_LIGHT;
  const tagText = tagColor?.text ?? "#056358";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 overflow-hidden rounded-2xl border border-strokedark bg-white lg:grid-cols-2"
      style={{ minHeight: "340px" }}
    >
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-10 py-12">
        {/* Teal top accent line */}
        <div
          className="mb-8 h-0.5 w-10 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        {/* Tag pill */}
        <span
          className="mb-5 w-fit rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest"
          style={{ background: tagBg, color: tagText }}
        >
          {blog.tagColor ? "Featured" : "Product"}
        </span>

        {/* Title */}
        <h3 className="mb-6 text-2xl font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        {/* Feature list */}
        {extraInfo && extraInfo.length > 0 && (
          <ul className="flex flex-col gap-3">
            {extraInfo.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-sm leading-relaxed text-gray-500">
                  <span className="font-medium text-gray-800">{item.label}</span>
                  {" — "}
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <a
          href="/products"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: accentColor }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          View product
          <span className="text-base">→</span>
        </a>
      </div>

      {/* Right: Image panel */}
      <div
        className="relative min-h-[240px]"
        style={{ backgroundColor: tagBg }}
      >
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
    </motion.div>
  );
};

export default IndustriesCarousel;