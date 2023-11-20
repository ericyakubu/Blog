import React from "react";

import classes from "./PostPage.module.scss";
import { SamplePost } from "@/samples";
import {
  AllTheFood,
  BecomeInsider,
  Comments,
  Links,
  StayInTouch,
} from "@/components";

const PostPage = () => {
  return (
    <>
      <main className={classes.post}>
        <ul className={classes.post_head}>
          <li className={classes.post_head__inner}>{SamplePost.author}</li>
          <li className={classes.post_head__inner}>{SamplePost.createdAt}</li>
          <li className={classes.post_head__inner}>3 min read</li>
        </ul>
        <h1 className={classes.post_title}>{SamplePost.title}</h1>
        {SamplePost.subtitle && <p>{SamplePost.subtitle}</p>}
        <img
          className={classes.post_coverImg}
          src={SamplePost.coverImage}
          alt={SamplePost.title}
        />
        {SamplePost.sections.map((sec, i) => (
          <section className={classes.post_section} key={i}>
            <h2 className={classes.post_section__title}>{sec.title}</h2>
            <p className={classes.post_section__content}>{sec.content}</p>
            {sec.imgs && (
              <div className={classes.post_section__images}>
                {sec.imgs.map((img, i) => (
                  <img
                    className={classes.post_section__images_img}
                    src={img}
                    key={i}
                    alt={`${sec.title} image`}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
        <Links />
      </main>
      <Comments />
      <StayInTouch />
      <BecomeInsider />
      <AllTheFood />
    </>
  );
};

export default PostPage;
