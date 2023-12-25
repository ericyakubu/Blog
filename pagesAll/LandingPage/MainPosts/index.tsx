import { FunctionComponent } from "react";
import classes from "./MainPosts.module.scss";
import { MAIN_POSTS } from "@/constants";
import MainPost from "./MainPost";

const MainPosts: FunctionComponent = () => {
  return (
    <main className={classes.main}>
      {MAIN_POSTS.map((post, i) => (
        <MainPost post={post} order={i + 1} key={`main_post_${i}`} />
      ))}
    </main>
  );
};

export default MainPosts;
