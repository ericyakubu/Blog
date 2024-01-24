"use client";
import { FunctionComponent } from "react";
import { useParams } from "next/navigation";
import classes from "./Head.module.scss";

const Head: FunctionComponent = () => {
  const params = useParams();
  const neighbourhood = params.neighbourhood;
  return (
    <div className={classes.head}>
      <h1 className={classes.head_title}>{neighbourhood}</h1>
    </div>
  );
};

export default Head;
