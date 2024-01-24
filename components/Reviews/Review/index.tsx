import { FunctionComponent } from "react";
import classes from "./Review.module.scss";
import Image from "next/image";

const Review: FunctionComponent = () => {
  return (
    <div className={classes.review}>
      <Image
        src={"/assets/food_4.jpg"}
        alt={"review"}
        width={600}
        height={600}
      />
      <h3 className={classes.title}>Review title</h3>
      <p className={classes.options}>3rd October 2021</p>
    </div>
  );
};

export default Review;
