import { FunctionComponent } from "react";
import { SamplePost } from "@/samples";
import { PostPage } from "@/pages";

const Post: FunctionComponent = () => {
  return <PostPage post={SamplePost} />;
};

export default Post;
