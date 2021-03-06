import Link from "next/link";
import {
  ButtonHTMLAttributes,
  DOMAttributes,
  FunctionComponent,
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ButtonType =
  | {
      el: "button";
      type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
      children: ReactNode;
      title: string;
      aos: string;
      aosDelay?: number | string;
      aosDuration?: number | string;
      className?: string;
      onSubmit?: DOMAttributes<HTMLButtonElement>["onSubmit"];
      onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
      disabled?: boolean;
      style?: HTMLAttributes<HTMLButtonElement>["style"];
      variant?: "with-bg" | "no-bg";
    }
  | {
      el: "a";
      href: string;
      children: ReactNode;
      aos: string;
      aosDelay?: number | string;
      aosDuration?: number | string;
      passHref?: boolean;
      scroll?: boolean;
      className?: string;
      target?: HTMLAttributeAnchorTarget;
      variant?: "with-bg" | "no-bg";
    };

const Button: FunctionComponent<ButtonType> = (props) => {
  const withBg =
    "cursor-pointer flex items-center text-bg font-monserat select-none font-semibold px-6 py-3 bg-gradient-to-br from-darkGradient to-clay min-md:px-5 min-md:py-2 lg:px-8 lg:py-3 rounded-lg text-xs lg:text-sm hover:bg-clay focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-bg group";

  const noBg =
    "cursor-pointer flex items-center border-none text-iconColor font-monserat select-none font-semibold px-6 py-3 min-md:px-5 min-md:py-2 lg:px-8 lg:py-3 rounded-lg text-xs lg:text-sm hover:bg-gradient-to-br hover:from-darkGradient hover:to-clay hover:text-bg focus:ring-2 focus:ring-darkRed focus:ring-offset-2 focus:ring-offset-bg group";

  if (props.el === "button") {
    const {
      className,
      onClick,
      children,
      disabled,
      style,
      variant = "with-bg",
      aos,
      aosDelay,
      aosDuration,
    } = props;

    return (
      <button
        style={style}
        onClick={onClick}
        className={`${variant === "with-bg" ? withBg : noBg} ${className} `}
        disabled={disabled}
        data-aos={aos}
        data-aos-delay={aosDelay}
        data-aos-duration={aosDuration}
      >
        {children}
      </button>
    );
  } else {
    const {
      children,
      href,
      scroll,
      passHref,
      className,
      target,
      variant = "with-bg",
      aos,
      aosDelay,
      aosDuration,
    } = props;

    return (
      <Link href={href} passHref={passHref} scroll={scroll}>
        <a
          data-aos={aos}
          data-aos-delay={aosDelay}
          data-aos-duration={aosDuration}
          target={target}
          className={`${variant === "with-bg" ? withBg : noBg} ${className}`}
        >
          {children}
        </a>
      </Link>
    );
  }
};

export default Button;
