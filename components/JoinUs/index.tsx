import { FunctionComponent } from "react";
import classes from "./JoinUs.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
interface Props {
  content?: {
    microtitle: string;
    title: string;
    subtitle: string;
    color: "light" | "dark";
    size: "small" | "full";
  };
}

const JoinUs: FunctionComponent<Props> = ({ content }) => {
  const general = {
    microtitle: `ATF Insiders`,
    title: "The Best Seat\nin the House",
    subtitle: `Unlock exclusive content as an ATF insider`,
    color: `light`,
  };
  return (
    <section
      className={`${classes.container} ${
        content?.color === `dark` ? classes.dark : ""
      } ${content?.size === `full` ? classes.full : ""}`}
    >
      <div className={classes.section_main}>
        <span className={classes.section_title__mini}>
          {content ? content.microtitle : general.microtitle}
        </span>
        <h2 className={classes.section_title}>
          {content ? content.title : general.title}
        </h2>
        {content ? (
          <span className={classes.section_title__subtitle}>
            {content.subtitle}
          </span>
        ) : (
          <span className={classes.section_title__subtitle}>
            {general.subtitle}
          </span>
        )}
        <Link
          href={`/post/tesdf`}
          className={content?.color === `dark` ? classes.dark : ``}
        >
          Join Us
          <FiArrowRight />
        </Link>
      </div>
      <div className={classes.img}>
        <Image
          src={"/assets/random.jpg"}
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default JoinUs;
