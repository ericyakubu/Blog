import { FunctionComponent } from "react";
import classes from "./Head.module.scss";

const Head: FunctionComponent = () => {
  return (
    <div className={classes.head}>
      <h3 className={classes.head_subtitle}>
        Dublin Restaurant Guides & Reviews
      </h3>
      <h1 className={classes.head_title}>Neighbourhoods</h1>
    </div>
  );
};

export default Head;
