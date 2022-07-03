import Image from "next/image";
import { FunctionComponent } from "react";
import Button from "./Button";

const AboutMetaverse: FunctionComponent = () => {
  return (
    <div className="relative">
      {/* Circle with Dashes */}
      <div className="w-[203px] h-[203px] rounded-full border-dashed border-2 border-dash absolute -right-28 -top-28" />

      {/* <div className="bg-gradient-to-r from-darkGradient to-clay p-[1px]"> */}
      <div className="flex flex-col items-center justify-center md:flex-row-reverse overflow-hidden">
        <div className="md:ml-5 md:w-[50%]">
          <h2 className="text-2xl md:text-4xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-relaxed">
            Let&#8216;s <span className="text-clay leading-tight">Find </span>{" "}
            out about{" "}
            <span className="text-darkRed leading-tight">Metaverse!</span>
          </h2>

          <p className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] w-[98%] lg:w-[90%] break-words whitespace-normal leading-relaxed">
            Metaverse is an Augmented Reality (AR) technology that allows
            individuals to interact with other individuals virtually.
          </p>

          <div className="relative w-[50%] mt-5 lg:mt-10">
            <Button el="a" href="/read-more" passHref className="inline-flex">
              Read More
            </Button>
            {/* Circle with Dashes */}
            <div className="block lg:hidden w-[50px] h-[50px] rounded-full border-dashed border-2 border-dash absolute -right-16 top-0 md:-right-24" />

            {/* Circle with Dashes */}
            <div className="w-[100px] h-[100px] hidden lg:block rounded-full border-dashed border-2 border-dash absolute right-32 top-40" />
          </div>
        </div>

        <div className="p-0 mt-10 md:mt-0 w-full md:w-[50%] md:mr-5">
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
