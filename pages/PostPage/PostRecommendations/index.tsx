import { FunctionComponent } from "react";
import classes from "./PostRecommendations.module.scss";
import Post from "./Post";

const PostRecommendations: FunctionComponent = () => {
  const posts = [
    {
      image: `https://placehold.jp/350x350.png`,
      link: `http://youtube.com`,
      title: `Title goes here Title goes here Title goes here Title goes here Title goes here`,
      desription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam!`,
    },
    {
      image: `https://placehold.jp/350x350.png`,
      link: `http://youtube.com`,
      title: `Title goes here`,
      desription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam!`,
    },
    {
      image: `https://placehold.jp/350x350.png`,
      link: `http://youtube.com`,
      title: `Title goes here`,
      desription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam!`,
    },
  ];

  return (
    <div className={classes.recommendations}>
      {posts.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </div>
  );
};

export default PostRecommendations;
