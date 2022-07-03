import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import Button from "./Button";
import { ArrowRightIcon } from "@heroicons/react/outline";

interface MobileHeaderDropdownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  headerItems: Array<{ label: string; href: string }>;
}

const MobileHeaderDropdown: FunctionComponent<MobileHeaderDropdownProps> = ({
  isOpen,
  setIsOpen,
  headerItems,
}) => {
  const mobileHeaderDropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = useCallback(
    (e: any) => {
      if (
        mobileHeaderDropdownRef.current &&
        !mobileHeaderDropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [closeDropdown]);

  return (
    <div
      ref={mobileHeaderDropdownRef}
      className={`absolute top-0 left-0 py-5 pt-0 right-0 w-full bg-bg mx-auto font-monserat transition-all ease-in-out duration-500 ${
        isOpen
          ? "top-6 opacity-100 scale-100 z-50"
          : "-top-96 opacity-0 scale-0 -z-50"
      }`}
    >
      <div className="flex max-w-[65%] mx-auto flex-col text-[#7B7B7B] items-center space-y-4 py-10 pb-5">
        {headerItems.map((item) => (
          <Link key={item.href} href={item.href} passHref scroll>
            <a className="border-b w-full text-center border-b-[#7B7B7B] h-10">
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeaderDropdown;
