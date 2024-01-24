import { FunctionComponent } from "react";
import classes from "./Head.module.scss";

const Head: FunctionComponent = () => {
  return (
    <div className={classes.head}>
      <h3 className={classes.head_subtitle}>Find a Restaurant Near You</h3>
      <h1 className={classes.head_title}>Our Restaurant Listings</h1>
    </div>
  );
};

export default Head;
