import { FunctionComponent } from "react";
import classes from "./TravelGuides.module.scss";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const TravelGuides: FunctionComponent = () => {
  return (
    <section className={classes.section}>
      {/* FIXME change image */}
      <Image
        className={classes.section__img}
        width={1000}
        height={1000}
        src={"/assets/random.jpg"}
        alt="image"
      />
      <div className={classes.section__main}>
        <div className={classes.section__main_body}>
          <h2>
            See the Sights.
            <br />
            Eat the Food.
          </h2>
          <p>Travel guides and inspiration</p>
          {/* TODO create UI componet */}
          <Link href={`/post/tesdf`}>
            Start Exploring
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
