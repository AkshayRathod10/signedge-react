"use client";
import Reveal from "@/components/Common/Reveal";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <Reveal
        as="div"
        y={-20}
        duration={1}
        delay={0.1}
        className="animate_top mx-auto text-center"
      >
        <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </Reveal>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
