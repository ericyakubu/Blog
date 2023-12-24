import { FunctionComponent } from "react";
import classes from "./LogIn.module.scss";

import { FaUserLarge } from "react-icons/fa6";

interface Props {
  variant: "green" | "white";
}

const LogIn: FunctionComponent<Props> = ({ variant }) => {
  const avatar = false;

  return (
    <button
      className={`${classes.login} ${variant === "green" ? classes.green : ""}`}
    >
      {avatar && <img src="https://placehold.jp/30x30.png" alt="user avatar" />}
      {!avatar && (
        <div>
          <FaUserLarge />
        </div>
      )}
      <span>Log In</span>
    </button>
  );
};

export default LogIn;
