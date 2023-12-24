import { FunctionComponent } from "react";
import classes from "./Post.module.scss";
import PostLogIn from "./PostLogIn";
import PostBody from "./PostBody";
import PostRecommendations from "./PostRecommendations";
import PostComments from "./PostComments";

interface Props {
  post: {
    title: string;
    subtitle: string;
    coverImage: string;
    sections: {
      title: string;
      content: string;
      imgs: string[];
    }[];
    author: string;
    createdAt: string;
    tags: string[];
  };
}

const PostPage: FunctionComponent<Props> = ({ post }) => {
  return (
    <div className={classes.post_container}>
      <PostLogIn />
      <PostBody post={post} />
      <PostComments />
      <PostRecommendations />
    </div>
  );
};

export default PostPage;
