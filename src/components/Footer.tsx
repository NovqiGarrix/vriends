import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex w-full flex-col space-y-8 md:flex-row md:justify-between md:items-start md:space-y-0">
      <div>
        <h2 className="font-monserat text-xl md:text-2xl font-semibold text-iconColor">
          <span className="text-clay">V</span>riends
        </h2>

        <p className="text-p text-sm md:text-lg font-manrope mt-2 w-[60%] md:w-[80%]">
          Explore and Find your friends in virtual world
        </p>
      </div>

      <p className="text-sm text-p font-manrope md:text-base">
        All rights reserved @2022 Vriends
      </p>
    </footer>
  );
};

export default Footer;
