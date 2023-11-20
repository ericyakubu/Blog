import React from "react";
import classes from "./JoinUs.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const testImg = "https://placehold.jp/350x350.png";

const JoinUs: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.section_main}>
        <span className={classes.section_title__mini}>ATF Insiders</span>
        <h2 className={classes.section_title}>
          The Best Seat
          <br />
          in the House
        </h2>
        <span className={classes.section_title__subtitle}>
          Unlock exclusive content as an ATF Insider.
        </span>
        <Link href={`/post/tesdf`}>
          Join Us
          <FiArrowRight />
        </Link>
      </div>
      <div className={classes.img}>
        <img src="https://placehold.jp/450x350.png" />
      </div>
    </section>
  );
};

export default JoinUs;
