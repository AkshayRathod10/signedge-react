"use client";
import SectionHeader from "../Common/SectionHeader";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import { motion } from "@/components/Common/motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Testimonials`,
                subtitle: `What Our Clients Say`,
                description: `Hear from the businesses we've helped bring their brands to life with signage that lasts.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="mb-20 pb-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-[50px] flex">
                {testimonialData.map((review) => (
                  <div
                    key={review?.id}
                    className="flex-none basis-full pl-[50px] md:basis-1/2"
                  >
                    <SingleTestimonial review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-2 rounded-full bg-stroke transition-all duration-300 dark:bg-strokedark"
                  style={{
                    width: i === selectedIndex ? "24px" : "8px",
                    backgroundColor: i === selectedIndex ? "#0bceb7" : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
