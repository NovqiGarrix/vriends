import { FunctionComponent, useState } from "react";
import Image from "next/image";

import Button from "./Button";

const Subscribe: FunctionComponent = () => {
  const [email, setEmail] = useState("");

  const onSubscribe = async () => {};

  return (
    <div
      className="relative mt-20"
      id="subscribe"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div
        className="bg-transparent xl:bg-gradient-to-rxl:from-darkRedxl:to-clay p-[0px]xl:p-[1px]"
        data-aos="fade"
      >
        <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden md:space-x-5 w-full h-full bg-bg">
          <div className="md:w-[65%] lg:w-[50%]">
            <h2
              className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-[120%] tracking-[1px]"
              data-aos="slide-right"
            >
              <span className="text-clay leading-tight">Subscribe </span> For
              New <span className="text-darkRed leading-tight">Updates</span>{" "}
              From Us
            </h2>

            <p
              className="font-manrope text-sm text-p lg:text-2xl mt-5 tracking-[0.5px] w-[98%] lg:w-[90%] break-words whitespace-normal leading-[180%]"
              data-aos="slide-right"
              data-aos-delay="200"
            >
              Subscribe to our newsletter to get the latest updates from us. You
              can unsubscribe at any time.
            </p>

            <form
              data-aos="fade-up"
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
              <Button
                aos="slide-left"
                el="button"
                type="submit"
                title="Send"
                className="inline-flex"
              >
                Send
              </Button>
            </form>
          </div>

          <div className="p-0" data-aos="zoom-out">
            <Image
              alt="Metaverse"
              src="/ar3.png"
              width={500}
              height={500}
              objectFit="contain"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
