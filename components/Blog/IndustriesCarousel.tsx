"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Add this to your Blog type if not already there
// tagColor?: { bg: string; text: string; dot: string }

const BlogCarousel = ({ blogs }: { blogs: Blog[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
      {/* Viewport */}
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
      <div className="mt-6 flex items-center justify-between px-1">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {blogs.map((blog, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === selectedIndex ? "20px" : "6px",
                background: i === selectedIndex
                  ? (blog.tagColor?.dot ?? "#6366f1")
                  : "#d1d5db",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <span className="text-sm text-gray-400 dark:text-gray-500">
          {selectedIndex + 1} / {blogs.length}
        </span>

        {/* Prev / Next */}
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-black transition hover:bg-primary hover:text-white dark:border-strokedark dark:bg-blacksection dark:text-white"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-black transition hover:bg-primary hover:text-white dark:border-strokedark dark:bg-blacksection dark:text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, extraInfo, tagColor } = blog;

  const accentColor = tagColor?.dot ?? "#6366f1";
  const tagBg = tagColor?.bg ?? "#eef2ff";
  const tagText = tagColor?.text ?? "#3730a3";

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
      className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-stroke bg-white dark:border-strokedark dark:bg-blacksection"
      style={{ minHeight: "320px" }}
    >
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 py-10">
        {/* Tag pill */}
        <span
          className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest"
          style={{ background: tagBg, color: tagText }}
        >
          {title}
        </span>

        {/* Title */}
        <h3 className="mb-6 text-2xl font-medium text-black dark:text-white">
          {title}
        </h3>

        {/* Feature list */}
        {extraInfo && extraInfo.length > 0 && (
          <ul className="flex flex-col gap-3">
            {extraInfo.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: accentColor }}
                />
                <span>
                  <span className="font-medium text-black dark:text-white">
                    {item.label}
                  </span>{" "}
                  — {item.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: Image panel */}
      <div
        className="relative"
        style={{ background: tagBg }}
      >
        <Image
          src={mainImage}
          alt={title}
          fill
          className="transition-transform duration-500 hover:scale-105"
        />
        {/* Subtle color overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: accentColor }}
        />
      </div>
    </motion.div>
  );
};

export default BlogCarousel;