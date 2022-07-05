import { FunctionComponent } from "react";
import HowCard, { IHowCardProps } from "./HowCard";
import LoginIcon from "./Icons/Login";
import ProfileIcon from "./Icons/Profile";
import StarIcon from "./Icons/Star";

const HowItWorks: FunctionComponent = () => {
  const howItWorks: Array<Omit<IHowCardProps, "index">> = [
    {
      Icon: ProfileIcon,
      title: "Create a Account",
      description:
        "Create an account first so you can enter the server selection menu",
    },
    {
      Icon: LoginIcon,
      title: "Select Your Server",
      description:
        "Choose a server to play on or  invite your friends to play together",
    },
    {
      Icon: StarIcon,
      title: "Enjoy Your Virtual World",
      description:
        "The final step is to enter the virtual reality world and play alone or with your friends!",
    },
  ];

  return (
    <div
      className="mt-20"
      id="howItWorks"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <h1
        className="font-monserat text-light font-semibold text-2xl md:text-4xl lg:text-[56px] md:text-center leading-[120%] tracking-[1px]"
        data-aos="slide-down"
      >
        How it <span className="text-clay">Work</span>
      </h1>

      <p
        className="text-p font-manrope text-sm mt-5 leading-relaxed md:text-lg lg:text-2xl md:text-center md:w-[80%] lg:w-[65%] mx-auto"
        data-aos="fade-down"
      >
        Designed by professional developers for users to get satisfactio and
        ease of working from our platform so we made it simpler
      </p>

      <div className="grid gap-5 grid-rows-3 items-center justify-center mt-6 md:mt-8 md:grid-rows-none md:grid-cols-3 lg:gap-8">
        {howItWorks.map((howItWork, index) => (
          <HowCard
            key={howItWork.title}
            Icon={howItWork.Icon}
            description={howItWork.description}
            title={howItWork.title}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
