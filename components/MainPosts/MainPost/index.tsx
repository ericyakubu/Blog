import { FunctionComponent } from "react";
import classes from "./MainPost.module.scss";
import Image from "next/image";

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
      <button className={classes.btn_news}>News</button>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button className={classes.btn_read}>Read More</button>
    </article>
  );
};

export default MainPost;
