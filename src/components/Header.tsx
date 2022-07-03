import { Fragment, FunctionComponent, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";

import MobileHeaderDropdown from "./MobileHeaderDropdown";
import GradientButton from "./GradientButton";

const Header: FunctionComponent = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const headerItems = [
    { label: "About Us", href: "#aboutUs" },
    { label: "How It Works", href: "#howItWorks" },
    { label: "Testinomies", href: "#testinomies" },
    { label: "Subscribe", href: "#subscribe" },
  ];

  return (
    <Fragment>
      <div className="w-36 h-36 md:w-[300px] md:h-[300px] rounded-full border-dashed border-2 border-dash absolute -top-20 md:-top-52 left-[35%]" />

      <header className="flex w-full items-center justify-between px-7 mt-14 md:mt-0 relative">
        <div className="flex items-center space-x-0 md:space-x-5 lg:space-x-16">
          <Link href="/" passHref>
            <a className="font-monserat text-xl font-semibold text-iconColor">
              <span className="text-clay">V</span>riends
            </a>
          </Link>
        </div>

        <div className="hidden md:flex items-center md:space-x-6 lg:space-x-12 font-monserat text-iconColor">
          {headerItems.map((item) => (
            <Link key={item.href} href={item.href} passHref scroll>
              <a className="md:text-xs text-p lg:text-base hover:text-white font-medium">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center font-manrope justify-center">
          <GradientButton el="a" href="/login" passHref scroll>
            Sign Up
          </GradientButton>
        </div>

        <div className="cursor-pointer md:hidden">
          <MenuIcon
            className="w-6 h-6 text-iconColor"
            onClick={() => setIsMobileDropdownOpen(true)}
          />

          <MobileHeaderDropdown
            headerItems={headerItems}
            isOpen={isMobileDropdownOpen}
            setIsOpen={setIsMobileDropdownOpen}
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
