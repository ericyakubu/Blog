import { POST_TYPE } from "@/types";
import { FunctionComponent } from "react";
import classes from "./SectionPost.module.scss";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface PostProps {
  post: POST_TYPE;
  size?: "small" | "large";
}

const SectionPost: FunctionComponent<PostProps> = ({ post, size }) => {
  return (
    <Link
      className={`${classes.post} ${size === "large" ? classes.large : ""}`}
      href={`/post/${post.id}`}
    >
      <Image
        className={classes.post_img}
        width={1500}
        height={1500}
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

export default SectionPost;
