import React from "react";
import classes from "./SectionBody.module.scss";
import { Post } from "@/components";
import { POST_TYPE } from "@/types";
interface Props {
  posts: POST_TYPE[];
}

const SectionBody: React.FC<Props> = ({ posts }) => {
  return (
    <div className={classes.main}>
      {posts.map((post, i) => (
        <Post post={post} key={`post_${i}`} />
      ))}
    </div>
  );
};

export default SectionBody;
