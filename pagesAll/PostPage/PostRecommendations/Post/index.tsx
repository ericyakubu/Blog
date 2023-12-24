import Link from "next/link";
import { FunctionComponent } from "react";
import classes from "./Post.module.scss";

interface Props {
  post: {
    image: string;
    link: string;
    title: string;
    desription: string;
  };
}

const Post: FunctionComponent<Props> = ({ post }) => {
  return (
    <div className={classes.post}>
      <Link href={`/post/123`} className={classes.post__link} target="_blank">
        <img
          src={post.image}
          alt={post.title}
          className={classes.post__link_image}
        />
        <h3 className={classes.post__link_title}>{post.title}</h3>
        <p className={classes.post__link_description}>{post.desription}</p>
      </Link>
    </div>
  );
};

export default Post;
