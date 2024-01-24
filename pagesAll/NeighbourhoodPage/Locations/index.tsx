import { FunctionComponent } from "react";
import classes from "./Locations.module.scss";
import Location from "./Location";

const locations = [
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Джонни Ву",
    url: "jonny-woo",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Черчилль Bar",
    url: "cherchil-bar",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Три оленя",
    url: "three-deers",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Хокку",
    url: "hokku",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Кафе Puri",
    url: "cafe-puri",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Пилзнер",
    url: "pilzner",
  },
];

const Locations: FunctionComponent = () => {
  return (
    <section className={classes.container}>
      <h2>Where to Eat</h2>
      <div className={classes.locations}>
        {locations.map((location, i) => (
          <Location location={location} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Locations;
