import { FunctionComponent } from "react";
import classes from "./Restaurants.module.scss";
import Restaurant from "../Restaurant";
interface Props {
  restaurants: {
    name: string;
    types: string[];
    img: string;
  }[];
}

const Restaurants: FunctionComponent<Props> = ({ restaurants }) => {
  return (
    <section className={classes.Restaurants}>
      {restaurants.map((res, i) => (
        <Restaurant restaurant={res} key={i} />
      ))}
    </section>
  );
};

export default Restaurants;
