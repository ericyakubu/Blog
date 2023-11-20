import React from "react";
import { SampleComments } from "@/samples";
import classes from "./Comments.module.scss";

const Comments: React.FC = () => {
  return (
    <div className={classes.comments}>
      <h2 className={classes.comments_title}>Comments</h2>
      <form action="" className={classes.comments_form}>
        <input type="text" className={classes.comments_form__input} />
      </form>
      {SampleComments && (
        <ul className={classes.comments_list}>
          {SampleComments.map((com, i) => (
            <li className={classes.comments_list__comment} key={i}>
              <img
                src={com.image}
                alt=""
                className={classes.comments_list__comment_img}
              />
              <h4 className={classes.comments_list__comment_author}>
                {com.author}
              </h4>
              <p className={classes.comments_list__comment_text}>
                {com.comment}
              </p>
              <span className={classes.comments_list__comment_date}>
                {com.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
