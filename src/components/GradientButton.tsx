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
      className?: string;
      onSubmit?: DOMAttributes<HTMLButtonElement>["onSubmit"];
      onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
      disabled?: boolean;
      style?: HTMLAttributes<HTMLButtonElement>["style"];
    }
  | {
      el: "a";
      href: string;
      children: ReactNode;
      passHref?: boolean;
      scroll?: boolean;
      className?: string;
      target?: HTMLAttributeAnchorTarget;
    };

const GradientButton: FunctionComponent<ButtonType> = (props) => {
  const noBg =
    "cursor-pointer bg-gradient-to-br from-darkRed to-clay flex items-center text-iconColor p-[1px] font-monserat select-none font-semibold rounded-lg text-xs lg:text-sm";

  const childClasses =
    "bg-bg px-8 py-3 min-md:px-5 min-md:py-2 lg:px-8 lg:py-3 rounded-lg text-clay duration-150 transition-all";

  if (props.el === "button") {
    const { className, onClick, type, children, disabled, title, style } =
      props;

    return (
      <button
        title={title}
        type={type}
        style={style}
        onClick={onClick}
        className={`${noBg} ${className}`}
        disabled={disabled}
      >
        <div className={`${childClasses}`}>{children}</div>
      </button>
    );
  } else {
    const { children, href, scroll, passHref, className, target } = props;

    return (
      <Link href={href} passHref={passHref} scroll={scroll}>
        <a target={target} className={`${noBg} ${className}`}>
          <div className={`${childClasses}`}>{children}</div>
        </a>
      </Link>
    );
  }
};

export default GradientButton;
