import Link from "next/link";
import cn from "classnames";
import { FunctionComponent } from "react";
import { Icon } from "../index";
import classes from "./Button.module.scss";
import IconNames from "../Icon/Icon.type";
import { MouseEvent } from "react";

interface Props {
  size: "small" | "medium" | "large";
  background?:
    | "green-white"
    | "transparent"
    | "transparent-dark"
    | "transparent-alt";
  text: string;
  type: "button" | "submit" | "link";
  link?: string;
  icon?: IconNames;
  iconSize?: string;
  className?: string;
  animated?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<Props> = ({
  size,
  background,
  text,
  link,
  icon,
  iconSize,
  animated,
  className,
  type,
  onClick,
}) => {
  return (
    <>
      {type === "button" || type === "submit" ? (
        <button
          type={type}
          onClick={onClick}
          className={cn(className, classes.Button, {
            [classes.Button_animated]: animated,
            [classes.Button_small]: size === "small",
            [classes.Button_medium]: size === "medium",
            [classes.Button_large]: size === "large",
            [classes.Button_background_greenWhite]:
              background === "green-white",
            [classes.Button_background_transparent]:
              background === "transparent",
            [classes.Button_background_transparentDark]:
              background === "transparent-dark",
            [classes.Button_background_transparentAlt]:
              background === "transparent-alt",
          })}
        >
          {text}
          {icon && iconSize && <Icon icon={icon} size={iconSize} />}
        </button>
      ) : null}
      {type === "link" && link && (
        <Link
          href={link}
          className={cn(className, classes.Button, {
            [classes.Button_animated]: animated,
            [classes.Button_small]: size === "small",
            [classes.Button_medium]: size === "medium",
            [classes.Button_large]: size === "large",
            [classes.Button_background_greenWhite]:
              background === "green-white",
            [classes.Button_background_transparent]:
              background === "transparent",
            [classes.Button_background_transparentDark]:
              background === "transparent-dark",
            [classes.Button_background_transparentAlt]:
              background === "transparent-alt",
          })}
        >
          {text}
          {icon && iconSize && <Icon icon={icon} size={iconSize} />}
        </Link>
      )}
    </>
  );
};

export default Button;
