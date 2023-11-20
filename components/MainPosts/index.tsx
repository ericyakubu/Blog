import React from "react";
import classes from "./MainPosts.module.scss";
import { MAIN_POSTS } from "@/constants";
import { MainPost } from "..";

const MainPosts: React.FC = () => {
  // const row1 = MAIN_POSTS.slice(0, 2);
  // const row2 = MAIN_POSTS.slice(-2);
  return (
    <main className={classes.main}>
      {MAIN_POSTS.map((post, i) => (
        <MainPost post={post} order={i + 1} key={`main_post_${i}`} />
      ))}
      {/* <div className={`${classes.row} ${classes.row__first}`}>
        {row1.map((el, i) => (
          <article key={`article_${i}`}>
            <img src={el.img} alt="" />
          </article>
        ))}
      </div>
      <div className={`${classes.row} ${classes.row__second}`}>
        {row2.map((el, i) => (
          <article key={`article_${i + 2}`}>
            <img src={el.img} alt="" />
          </article>
        ))}
      </div> */}
    </main>
  );
};

export default MainPosts;
