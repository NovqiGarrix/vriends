import { ComponentProps, FunctionComponent } from "react";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  LightningBoltIcon,
  LogoutIcon,
  MapIcon,
  PhotographIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const CanDoList: FunctionComponent = () => {
  const canDoLists = [
    {
      Icon: AcademicCapIcon,
      title: "VR for Education",
    },
    {
      Icon: BriefcaseIcon,
      title: "VR for Business",
    },
    {
      Icon: UserGroupIcon,
      title: "VR for Social",
    },
    {
      Icon: MapIcon,
      title: "VR for Games",
    },
    {
      Icon: PhotographIcon,
      title: "VR for Art",
    },
    {
      Icon: SparklesIcon,
      title: "VR for Entertain",
    },
  ];

  function IconTitle(props: {
    Icon: (props: ComponentProps<"svg">) => JSX.Element;
    title: string;
  }) {
    return (
      <div className="flex items-center justify-center flex-col my-2">
        <div className="p-4 lg:p-5 card-wrapper-icon inline-flex text-center rounded-full">
          <props.Icon className="w-4 h-4 lg:w-5 lg:h-5 text-clay/80" />
        </div>

        <h3 className="font-monserat font-semibold text-base text-light mt-3 md:text-lg lg:text-xl">
          {props.title.split(" ")[0] + " " + props.title.split(" ")[1]}{" "}
          <span className="text-clay">{props.title.split(" ")[2]}</span>
        </h3>
      </div>
    );
  }

  return (
    <div className="mt-10" id="can_do">
      <h1 className="font-monserat text-light font-semibold text-2xl md:text-4xl lg:text-[56px] text-center leading-[120%] tracking-[1px] md:w-[70%] md:mx-auto lg:w-[50%]">
        What can{" "}
        <span className="text-clay" style={{ lineHeight: "120%" }}>
          we do
        </span>{" "}
        in the{" "}
        <span className="text-darkRed" style={{ lineHeight: "120%" }}>
          Virtual World?
        </span>
      </h1>

      <div className="p-[1px] bg-gradient-to-br from-white to-white/20 mt-7 lg:mt-16 rounded-3xl lg:rounded-[40px]">
        <div className="grid gap-3 grid-cols-2 items-center justify-center p-5 py-16 md:grid-cols-3 lg:gap-8 bg-bg rounded-3xl lg:rounded-[40px]">
          {canDoLists.map((canDoList) => (
            <IconTitle key={canDoList.title} {...canDoList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanDoList;
