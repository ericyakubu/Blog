import React from "react";
import classes from "./TravelGuides.module.scss";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const TravelGuides: React.FC = () => {
  return (
    <section className={classes.section}>
      <img
        className={classes.section__img}
        src="https://placehold.jp/150x150.png"
        alt=""
      />
      <div className={classes.section__main}>
        <div className={classes.section__main_body}>
          <h2>
            See the Sights.
            <br />
            Eat the Food.
          </h2>
          <p>Travel guides and inspiration</p>
          <Link href={`/post/tesdf`}>
            Join Us
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
