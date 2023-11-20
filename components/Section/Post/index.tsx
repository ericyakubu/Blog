import { POST_TYPE } from "@/types";
import React from "react";
import classes from "./Post.module.scss";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

interface PostProps {
  post: POST_TYPE;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Link className={classes.post} href={`/post/${post.id}`}>
      <img
        className={classes.post_img}
        src={post.images.main}
        alt={post.title}
      />
      <div className={classes.post_body}>
        <div className={classes.post_options}>
          <span className={classes.post_options__date}>
            {post.publish_date}
          </span>
          <FaCircle />
          <span className={classes.post_options__author}>By {post.author}</span>
        </div>
        <h1 className={classes.post_title}>{post.title}</h1>
      </div>
    </Link>
  );
};

export default Post;
