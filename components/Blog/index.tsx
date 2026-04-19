import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import BlogCarousel from "./IndustriesCarousel";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Tailored for your industry`,
              subtitle: ``,
              description: ``
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      
      <BlogCarousel blogs={BlogData} />
       
    </section>
  );
};

export default Blog;
