import { FunctionComponent } from "react";
import Image from "next/image";

const Advantage: FunctionComponent = () => {
  return (
    <div className="relative mt-10 md:mt-12 lg:mt-16" id="advantage">
      <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden md:space-x-5 w-full h-full bg-bg">
        <div className="md:w-[65%] lg:w-[45%]">
          <h2 className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-[120%] tracking-[1px]">
            <span className="text-clay leading-tight">Advantages</span> of{" "}
            <span className="text-darkRed leading-tight">Metaverse</span>{" "}
          </h2>

          <p className="font-manrope text-sm text-p lg:text-2xl mt-5">
            The advantage of Metaverse is that users can socialize freely and
            widely, improve the economy, as a means of virtual entertainment,
            create career opportunities, and create space to work in a virtual
            form.
          </p>
        </div>

        <div className="p-0 w-full md:w-[75%] lg:w-2/4">
          <Image
            alt="Metaverse"
            src="/ar3.png"
            width={500 * 1.5}
            height={500 * 1.5}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
