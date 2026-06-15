import { Product } from "@/types/product";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleProduct = ({ product }: { product: Product }) => {
  const { image, title, description } = product;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 overflow-hidden rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="-mx-7.5 -mt-7.5 mb-7.5">
          <Image
            src={image}
            width={520}
            height={320}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mb-5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleProduct;
