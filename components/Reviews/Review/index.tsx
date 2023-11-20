import React from "react";
import classes from "./Review.module.scss";

const Review: React.FC = () => {
  return (
    <div className={classes.review}>
      <img src="https://placehold.jp/150x150.png" alt="" />
      <h3 className={classes.title}>Review title</h3>
      <p className={classes.options}>3rd October 2021</p>
    </div>
  );
};

export default Review;
