import { FunctionComponent } from "react";
import Image from "next/image";

const WhoCreated: FunctionComponent = () => {
  return (
    <div className="relative mt-20" id="who_created">
      <div className="flex flex-col items-center justify-center overflow-hidden w-full h-full bg-bg">
        <div>
          <h2 className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-[120%] tracking-[1px] w-[95%]">
            Who <span className="text-clay leading-[120%]">Created</span> the{" "}
            <span className="text-darkRed leading-[120%]">Metaverse</span>{" "}
            World?
          </h2>

          <p className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] break-words whitespace-normal leading-[180%]">
            Metaverse is a phrase coined by Neal Stephenson in the science
            fiction novel &ldquo;Snow Crash&rdquo; (1992) to refer to the
            successor to the Internet. Metaverse is Stephenson&lsquo;s vision of
            how a virtual reality-based Internet could evolve in the near
            future.
          </p>
        </div>

        <div className="p-0 mt-8 w-full">
          <Image
            alt="Metaverse"
            src="/ar4.png"
            width={1920}
            height={1080}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoCreated;
