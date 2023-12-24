"use client";
import React, { useState } from "react";
import classes from "./PostBody.module.scss";
import { Links } from "@/components";
import { SlOptionsVertical } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";
import OutsideClickHandler from "react-outside-click-handler";

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

const PostBody: FunctionComponent<Props> = ({ post }) => {
  const [shareShow, setShareSow] = useState<boolean>(false);
  const toggleShare = () => setShareSow((prev) => !prev);
  const outsideClick = () => {
    if (shareShow) setShareSow(false);
  };

  return (
    <main className={classes.post}>
      <ul className={classes.post_head}>
        <li className={classes.post_head__inner}>{post.author}</li>
        <li className={classes.post_head__inner}>{post.createdAt}</li>
        <li className={classes.post_head__inner}>3 min read</li>
        <li
          className={`${classes.post_head__inner} ${classes.post_head__inner_options}`}
        >
          <button
            className={classes.post_head__inner_bullets}
            onClick={toggleShare}
          >
            <SlOptionsVertical />
          </button>
          {shareShow && (
            <OutsideClickHandler onOutsideClick={outsideClick}>
              <button className={classes.post_head__inner_share}>
                <PiShareFatLight />
                <span>Share Post</span>
              </button>
            </OutsideClickHandler>
          )}
        </li>
      </ul>
      <h1 className={classes.post_title}>{post.title}</h1>
      {post.subtitle && (
        <p className={classes.post_subtitle}>{post.subtitle}</p>
      )}
      {/* TODO check this later */}
      <img
        className={classes.post_coverImg}
        src={post.coverImage}
        alt={post.title}
      />
      {post.sections.map((sec, i) => (
        <article className={classes.post_section} key={i}>
          <h4 className={classes.post_section__title}>{sec.title}</h4>
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
        </article>
      ))}
      <div className={classes.post_tags}>
        <h6 className={classes.post_tags__title}>Tags:</h6>
        <ul className={classes.post_tags__list}>
          {post.tags.map((tag, i) => (
            <li className={classes.post_tags__list_item} key={i}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Links />
    </main>
  );
};

export default PostBody;
