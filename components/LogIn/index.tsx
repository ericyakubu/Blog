import { FunctionComponent } from "react";
import classes from "./LogIn.module.scss";
import Icon from "../UI/Icon";

interface Props {
  variant: "green" | "white";
}

const LogIn: FunctionComponent<Props> = ({ variant }) => {
  const avatar = false;

  return (
    <button
      className={`${classes.Login} ${variant === "green" ? classes.Green : ""}`}
    >
      {avatar && <img src="https://placehold.jp/30x30.png" alt="user avatar" />}
      {!avatar && (
        <>
          <Icon icon="User" size={"2rem"} />
        </>
      )}
      <span>Log In</span>
    </button>
  );
};

export default LogIn;
