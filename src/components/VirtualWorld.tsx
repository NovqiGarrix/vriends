import dynamic from "next/dynamic";
import { FunctionComponent } from "react";

const VirtualWorld: FunctionComponent = () => {
  const VR = dynamic(() => import("./VR"), { ssr: false });

  return (
    <div className="relative mt-20">
      <div>
        <h2 className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-[120%] tracking-[1px] w-[95%]">
          Want to see the{" "}
          <span className="text-clay leading-[120%]">Atmosphere</span> when you
          use{" "}
          <span className="text-darkRed leading-[120%]">Virtual Reality?</span>
        </h2>

        <p className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] break-words whitespace-normal leading-[180%]">
          We provide Virtual Reality video facilities so you can try it and feel
          the sensation in Virtual World
        </p>
      </div>

      <VR />
    </div>
  );
};

export default VirtualWorld;
