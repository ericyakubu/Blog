import { FunctionComponent } from "react";
import classes from "./Description.module.scss";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const Description: FunctionComponent<Props> = ({ content }) => {
  return (
    <section className={classes.description}>
      <Image
        src={"/assets/maps.webp"}
        width={450}
        height={565}
        className={classes.description_image}
        alt="map"
      />
      <div className={classes.description_main}>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </section>
  );
};

export default Description;
