import React from "react";
import classes from "./MainPost.module.scss";

interface Props {
  post: any;
  order: number;
}

const MainPost: React.FC<Props> = ({ post, order }) => {
  const check = order === 1 || order === 4;

  if (order === 2)
    return (
      <div className={`${classes.aside} ${classes.small}`}>
        <p>{post.subtitle}</p>
        <h2>{post.title}</h2>
      </div>
    );

  return (
    <article
      className={`${classes.article} ${check ? classes.big : classes.small}`}
    >
      <img src={post.img} alt={post.title} />
      <button className={classes.btn_news}>News</button>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button className={classes.btn_read}>Read More</button>
    </article>
  );
};

export default MainPost;
