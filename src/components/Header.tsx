import { Fragment, FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/outline";

import MobileHeaderDropdown from "./MobileHeaderDropdown";
import GradientButton from "./GradientButton";

const Header: FunctionComponent = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const router = useRouter();

  const headerItems = [
    {
      label: router.pathname === "/" ? "About Us" : "More",
      href: `${router.pathname === "/" ? "/#aboutUs" : "/more#more_detail"}`,
    },
    {
      label: router.pathname === "/" ? "How It Works" : "Creator",
      href: `${router.pathname === "/" ? "/#howItWorks" : "/more#who_created"}`,
    },
    {
      label: router.pathname === "/" ? "Testimony" : "Advantage",
      href: `${router.pathname === "/" ? "/#testinomy" : "/more#advantage"}`,
    },
    {
      label: router.pathname === "/" ? "Subscribe" : "Possible Stuff",
      href: `${router.pathname === "/" ? "/#subscribe" : "/more#can_do"}`,
    },
  ];

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
        className="w-36 h-36 md:w-[300px] md:h-[300px] rounded-full border-dashed border-2 border-dash absolute -top-20 md:-top-52 left-[35%]"
      />

      <header className="flex w-full items-center justify-between px-7 md:px-16 lg:px-[120px] mt-14 md:mt-0 relative">
        <div
          className="flex items-center space-x-0 md:space-x-5 lg:space-x-16"
          data-aos="fade-right"
        >
          <Link href="/" passHref>
            <a className="font-monserat text-xl font-semibold text-iconColor">
              <span className="text-clay">V</span>riends
            </a>
          </Link>
        </div>

        {router.pathname !== "/virtual_world" && (
          <div className="hidden md:flex items-center md:space-x-6 lg:space-x-12 font-monserat text-iconColor">
            {headerItems.map((item, index) => (
              <Link key={item.href} href={item.href} passHref scroll>
                <a
                  className="md:text-xs text-p lg:text-base hover:text-white font-medium"
                  data-aos="fade-down"
                  data-aos-delay={`${index}00`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}

        <div
          className="hidden md:flex items-center font-manrope justify-center"
          data-aos="zoom-in-left"
        >
          <GradientButton el="a" href="/login" passHref scroll>
            Sign Up
          </GradientButton>
        </div>

        {router.pathname !== "/virtual_world" && (
          <div className="cursor-pointer md:hidden z-30">
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
        )}
      </header>
    </Fragment>
  );
};

export default Header;
