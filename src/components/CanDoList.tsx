import { ComponentProps, FunctionComponent } from "react";

import PaperIcon from "./Icons/Paper";
import BusinessIcon from "./Icons/Business";
import UserGroupIcon from "./Icons/UserGroup";
import GameIcon from "./Icons/Game";
import ImageIcon from "./Icons/Image";
import HeartIcon from "./Icons/Heart";

const CanDoList: FunctionComponent = () => {
  const canDoLists = [
    {
      Icon: PaperIcon,
      title: "VR for Education",
    },
    {
      Icon: BusinessIcon,
      title: "VR for Business",
    },
    {
      Icon: UserGroupIcon,
      title: "VR for Social",
    },
    {
      Icon: GameIcon,
      title: "VR for Games",
    },
    {
      Icon: ImageIcon,
      title: "VR for Art",
    },
    {
      Icon: HeartIcon,
      title: "VR for Entertain",
    },
  ];

  function IconTitle(props: {
    Icon: (props: ComponentProps<"svg">) => JSX.Element;
    title: string;
    index: number;
  }) {
    return (
      <div
        className="flex items-center justify-center flex-col my-2"
        data-aos="fade-up"
        data-aos-delay={props.index * 100}
      >
        <div className="p-4 lg:p-5 card-wrapper-icon inline-flex text-center rounded-full">
          <props.Icon />
        </div>

        <h3 className="font-monserat font-semibold text-base text-light mt-3 md:text-lg lg:text-xl">
          {props.title.split(" ")[0] + " " + props.title.split(" ")[1]}{" "}
          <span className="text-clay">{props.title.split(" ")[2]}</span>
        </h3>
      </div>
    );
  }

  return (
    <div
      className="mt-10"
      id="can_do"
      data-aos="zoom-in"
      data-aos-duration="200"
    >
      <h1
        className="font-monserat text-light font-semibold text-2xl md:text-4xl lg:text-[56px] text-center leading-[120%] tracking-[1px] md:w-[70%] md:mx-auto lg:w-[50%]"
        data-aos="fade-down"
      >
        What can{" "}
        <span className="text-clay" style={{ lineHeight: "120%" }}>
          we do
        </span>{" "}
        in the{" "}
        <span className="text-darkRed" style={{ lineHeight: "120%" }}>
          Virtual World?
        </span>
      </h1>

      <div
        className="p-[1px] bg-gradient-to-br from-white to-white/20 mt-7 lg:mt-16 rounded-3xl lg:rounded-[40px]"
        data-aos="zoom-in"
      >
        <div className="grid gap-3 grid-cols-2 items-center justify-center p-5 py-10 md:py-16 md:grid-cols-3 lg:gap-8 bg-bg rounded-3xl lg:rounded-[40px]">
          {canDoLists.map((canDoList, index) => (
            <IconTitle
              key={canDoList.title}
              title={canDoList.title}
              index={index}
              Icon={canDoList.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanDoList;
