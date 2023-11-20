import React from "react";
import classes from "./SectionHead.module.scss";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
interface Props {
  title: string;
  subtitle: string;
  sectionLink: {
    link: string;
    title: string;
  };
}

const SectionHead: React.FC<Props> = ({ title, subtitle, sectionLink }) => {
  return (
    <div className={classes.head}>
      <span className={classes.head__title}>{title}</span>
      <div className={classes.head__subtitle}>
        {subtitle}
        <Link href={sectionLink.link} className={classes.head__subtitle_link}>
          <span>{sectionLink.title}</span>
          <RiArrowRightDoubleFill />
        </Link>
      </div>
    </div>
  );
};

export default SectionHead;
