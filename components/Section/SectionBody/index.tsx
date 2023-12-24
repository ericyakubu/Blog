import { FunctionComponent } from "react";
import classes from "./SectionBody.module.scss";
import { POST_TYPE } from "@/types";
import SectionPost from "../SectionPost";
interface Props {
  posts: POST_TYPE[];
  size?: "small" | "large";
}

const SectionBody: FunctionComponent<Props> = ({ posts, size }) => {
  return (
    <div className={`${classes.main} ${size === "large" ? classes.large : ""}`}>
      {posts.map((post, i) => (
        <SectionPost post={post} size={size} key={`post_${i}`} />
      ))}
    </div>
  );
};

export default SectionBody;
