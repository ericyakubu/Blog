import Image from "next/image";
import { FunctionComponent } from "react";
import classes from "./Restaurant.module.scss";
import Link from "next/link";

interface Props {
  restaurant: {
    name: string;
    types: string[];
    img: string;
  };
}

const Restaurant: FunctionComponent<Props> = ({ restaurant }) => {
  const { name, types, img } = restaurant;

  return (
    <Link
      href={"https://www.youtube.com/"}
      target="_blank"
      className={classes.Restaurant}
    >
      <Image
        src={img}
        width={600}
        height={600}
        alt="restaurant"
        className={classes.Restaurant__image}
      />
      <h3 className={classes.Restaurant__title}>{name}</h3>
      <p className={classes.Restaurant__types}>
        {types.toString().replaceAll(",", ", ")}
      </p>
    </Link>
  );
};

export default Restaurant;
