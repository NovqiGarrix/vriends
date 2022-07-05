import { FunctionComponent } from "react";
import Image from "next/image";

const AboutMetaverse: FunctionComponent = () => {
  return (
    <div className="relative mt-20" id="more_detail">
      {/* Circle with Dashes */}
      <div className="w-[68px] h-[68px] md:w-[70px] md:h-[70px] lg:w-[117px] lg:h-[117px] rounded-full border-dashed border-2 border-dash absolute -left-10 -top-5" />

      {/* <div className="bg-gradient-to-r from-darkGradient to-clay p-[1px]"> */}
      <div className="flex flex-col items-center justify-center md:flex-row-reverse overflow-hidden">
        <div className="md:ml-5 md:w-[50%]" data-aos="fade-right">
          <h2
            className="text-2xl md:text-4xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-[120%] tracking-[1px]"
            data-aos="slide-left"
          >
            Let&#8216;s <span className="text-clay leading-tight">Find </span>{" "}
            out about{" "}
            <span className="text-darkRed leading-tight">Metaverse!</span>
          </h2>

          <p className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] w-[98%] lg:w-[90%] break-words whitespace-normal leading-relaxed">
            Metaverse is an Augmented Reality (AR) technology that allows
            individuals to interact with other individuals virtually. Meta
            universes in a broader sense may not only refer to virtual
            environments operated by social media companies but the entire
            spectrum of augmented reality.
          </p>

          <div className="relative w-[50%] mt-5 lg:mt-10">
            {/* Circle with Dashes for Small Devices */}
            <div className="block lg:hidden w-[68px] h-[68px] rounded-full border-dashed border-2 border-dash absolute -right-48" />

            {/* Circle with Dashes for Large Devices */}
            <div className="w-[100px] h-[100px] hidden lg:block rounded-full border-dashed border-2 border-dash absolute right-32 top-40" />
          </div>
        </div>

        <div
          className="p-0 mt-10 md:mt-0 w-full md:w-[50%] md:mr-5"
          data-aos="zoom-in"
        >
          <Image
            alt="Metaverse"
            src="/ar2.png"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutMetaverse;
