import IcomoonReact from "icomoon-react";
import { CSSProperties, FunctionComponent } from "react";
import { IconNames } from "./Icon.type";
import IconSet from "./selection.json";

export interface IconProps {
  icon: IconNames;
  size: string | number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon: FunctionComponent<IconProps> = ({
  icon,
  size = "100%",
  color,
  style,
  className,
  onClick,
}) => {
  return (
    <IcomoonReact
      iconSet={IconSet}
      icon={icon}
      color={color}
      size={size}
      style={style}
      className={className}
      onclick={onClick}
    />
  );
};

export default Icon;
