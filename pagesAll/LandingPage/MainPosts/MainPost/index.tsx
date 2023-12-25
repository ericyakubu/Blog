import { FunctionComponent } from "react";
import classes from "./Post.module.scss";
import Image from "next/image";
import Button from "@/components/UI/Button";

interface Props {
  post: any;
  order: number;
}

const MainPost: FunctionComponent<Props> = ({ post, order }) => {
  // FIXME refactor
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
      <Image src={post.img} alt={post.title} width={1200} height={600} />
      <Button
        text={"News"}
        link={`/post/${post.id}`}
        type="link"
        size="small"
        className={classes.btn_news}
        background="green-white"
      />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Button
        text={"Read More"}
        link={post.link}
        type="link"
        size="medium"
        className={classes.btn_read}
        background="transparent"
      />
    </article>
  );
};

export default MainPost;
