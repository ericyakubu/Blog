import React from "react";
import classes from "./Reviews.module.scss";
import { Review } from "..";

const Reviews: React.FC = () => {
  return (
    <div className={classes.reviews}>
      <h2 className={classes.reviews_title}>Recent Reviews</h2>
      <div className={classes.reviews_body}>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
