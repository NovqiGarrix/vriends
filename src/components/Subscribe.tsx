import { FormEvent, FunctionComponent, useState } from "react";
import Image from "next/image";

import Button from "./Button";
import GradientButton from "./GradientButton";

const Subscribe: FunctionComponent = () => {
  const [email, setEmail] = useState("");

  const onSubscribe = async (event: FormEvent<HTMLFormElement>) => {};

  return (
    <div className="relative mt-20">
      <div className="bg-transparent lg:bg-gradient-to-r lg:from-darkRed lg:to-clay p-[0px] lg:p-[1px]">
        <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden md:space-x-5 w-full h-full bg-bg">
          <div className="md:w-[65%] lg:w-[50%]">
            <h2 className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-tight">
              <span className="text-clay leading-tight">Subscribe </span> For
              New <span className="text-darkRed leading-tight">Updates</span>{" "}
              From Us
            </h2>

            <p className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] w-[98%] lg:w-[90%] break-words whitespace-normal leading-relaxed">
              Subscribe to our newsletter to get the latest updates from us. You
              can unsubscribe at any time.
            </p>

            <form
              onSubmit={onSubscribe}
              className="mt-5 lg:mt-10 inline-flex items-center justify-center space-x-4 w-full lg:w-[60%]"
            >
              <div className="bg-gradient-to-r from-clay to-darkRed p-[1px] rounded-lg opacity-70 focus-within:opacity-100 duration-150 transition-all w-full">
                <input
                  type="text"
                  className="text-sm outline-none flex-grow text-clay/80 font-medium placeholder:text-p/60 bg-bg px-3 py-3 rounded-lg w-full"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <GradientButton
                el="button"
                type="submit"
                title="Send"
                className="inline-flex"
              >
                Send
              </GradientButton>
              {/* <Button
                el="button"
                type="submit"
                title="Send"
                className="inline-flex"
              >
                Send
              </Button> */}
            </form>
          </div>

          <div className="p-0">
            <Image
              alt="Metaverse"
              src="/ar3.png"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
