import { FunctionComponent } from "react";
import classes from "./TravelGuides.module.scss";
import Image from "next/image";
import { Button } from "@/components/UI";

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
          <Button
            type="link"
            text="Start Exploring"
            icon="Arrow-right"
            iconSize="1rem"
            link="/post/tfds"
            animated
            background="transparent-alt"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
