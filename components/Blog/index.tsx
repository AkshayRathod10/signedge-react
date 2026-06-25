import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import IndustriesCarousel from "./IndustriesCarousel";

const Blog = async () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Industries We Serve`,
              subtitle: `Tailored for Your Industry`,
              description: `From retail and hospitality to corporate and transport, SignEdge delivers signage solutions built around the way each industry works.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      
      <IndustriesCarousel blogs={BlogData} />
       
    </section>
  );
};

export default Blog;
