import { FunctionComponent } from "react";
import { SampleComments } from "@/samples";
import classes from "./PostComments.module.scss";

const PostComments: FunctionComponent = () => {
  return (
    <div className={classes.comments}>
      <h2 className={classes.comments_title}>Comments</h2>
      <form action="" className={classes.comments_form}>
        {/* TODO add functionality to textfield (links, images) */}
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className={classes.comments_form__input}
          placeholder="Write a comment..."
        ></textarea>
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
              <div className={classes.comments_list__comment_container}>
                <div className={classes.comments_list__comment_author}>
                  <h4 className={classes.comments_list__comment_author_name}>
                    {com.author}
                  </h4>
                  <span className={classes.comments_list__comment_author_date}>
                    {com.date}
                  </span>
                </div>
                <p className={classes.comments_list__comment_text}>
                  {com.comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostComments;
