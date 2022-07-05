import { ComponentProps, FunctionComponent } from "react";

export interface IHowCardProps {
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  title: string;
  description: string;
}

const HowCard: FunctionComponent<IHowCardProps> = (props) => {
  const { Icon, description, title } = props;

  return (
    <div
      className="p-5 rounded-2xl bg-[#101C1C] md:min-h-[250px] lg:min-h-full"
      {...props}
    >
      <div className="p-4 lg:p-5 card-wrapper-icon inline-flex text-center rounded-full">
        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-clay/80" />
      </div>

      <h3 className="font-monserat font-semibold text-lg text-light mt-5 md:text-base lg:text-xl">
        {title}
      </h3>
      <p className="font-manrope text-sm text-p leading-relaxed mt-2 md:text-sm lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default HowCard;
