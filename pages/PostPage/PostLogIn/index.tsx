import { FunctionComponent } from "react";
import { LogIn } from "@/components";
import classes from "./PostLogIn.module.scss";

const PostLogIn: FunctionComponent = () => {
  return (
    <div className={classes.post_login}>
      <h3 className={classes.post_login__title}>
        All the Food, <span>Guides</span>, Features <span>& News</span>
      </h3>
      <LogIn variant="white" />
    </div>
  );
};

export default PostLogIn;
