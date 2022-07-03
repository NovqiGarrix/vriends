import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FunctionComponent } from "react";
import Button from "./Button";

const Hero: FunctionComponent = () => {
  const peoples = [
    { img: "/peoples/Ellipse258.png" },
    { img: "/peoples/Ellipse259.png" },
    { img: "/peoples/Ellipse260.png" },
    { img: "/peoples/Ellipse261.png" },
  ];

  return (
    <div className="mt-10 relative">
      <div className="px-9 text-center mx-auto md:max-w-2xl lg:max-w-6xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center -space-x-2">
            {peoples.map(({ img }) => (
              <div
                key={img}
                className="w-6 h-6 rounded-full"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
            ))}
          </div>

          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-darkGradient to-clay mx-3" />

          <p className="font-manrope font-medium text-iconColor">
            <span className="text-clay">+400K </span> Active User
          </p>
        </div>

        {/* Circle with Dashes */}
        <div className="w-12 h-12 rounded-full border-dashed border-2 border-dash absolute left-9 top-9" />

        <h1 className="text-2xl lg:text-[64px] relative mt-5 text-iconColor font-medium font-monserat leading-[120%]">
          <span className="text-clay">Explore</span> and{" "}
          <span className="text-darkRed">Find</span> your friends in virtual
          world
        </h1>

        <p className="text-p text-sm lg:text-2xl font-manrope mt-3 leading-[180%]">
          Vriends is the evolution of the Virtual world. Our vision and mission
          is to make it easy for you to explore and find everything you want in
          our amazing virtual world. With us, you don&#8216;t have to worry to
          explore the virtual world.
        </p>

        <div className="w-[203px] h-[203px] rounded-full border-dashed border-2 border-dash absolute top-36 -right-20" />

        <div className="flex items-center w-full justify-around md:justify-center space-x-5 mt-8 relative">
          <Button el="a" href="/login" passHref scroll>
            Let&#8216;s Start!
          </Button>
          <Button
            el="a"
            href="/demo"
            variant="no-bg"
            passHref
            scroll
            className="px-5"
          >
            <p className="mr-2">View Demo</p>
            <ArrowRightIcon className="w-3 h-5 text-iconColor group-hover:text-bg" />
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full flex items-center justify-center flex-col mt-5">
        <div className="w-80 md:w-96 lg:w-full mx-auto flex items-center justify-center">
          <Image
            alt="A Guy Playing with Virtual World"
            src="/ar1.png"
            width={327 * 2.5}
            height={247 * 2.5}
            objectFit="contain"
          />
        </div>
        <div className="companies flex items-center justify-around xl:justify-between xl:space-x-10 w-full py-5 lg:py-12 -mt-[79px] lg:-mt-32 px-10 md:px-48 lg:px-[430px] relative z-10">
          <div className="w-24 lg:w-44">
            <Image
              alt="Google Logo"
              src="/google.png"
              width={76 * 2.5}
              height={24 * 2.5}
              objectFit="contain"
            />
          </div>
          <div className="lg:scale-150">
            <Image
              alt="Android Logo"
              src="/android.png"
              width={24 * 1.4}
              height={24 * 1.4}
              objectFit="contain"
            />
          </div>
          <div className="w-32 lg:w-44 ">
            <Image
              alt="Facebook Logo"
              src="/facebook.png"
              width={117 * 2.5}
              height={24 * 2.5}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
