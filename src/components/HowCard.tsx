import { FunctionComponent } from "react";

export interface IHowCardProps {
  Icon: FunctionComponent;
  title: string;
  description: string;
  index: number;
}

const HowCard: FunctionComponent<IHowCardProps> = (props) => {
  const { Icon, description, title, index } = props;

  return (
    <div
      className="p-5 rounded-2xl bg-[#101C1C] md:min-h-[250px] lg:min-h-full"
      data-aos-delay={`${index}00`}
      data-aos="fade-up"
    >
      <div className="p-4 lg:p-5 card-wrapper-icon inline-flex text-center rounded-full">
        <Icon />
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
