import { FunctionComponent } from "react";
import classes from "./Locations.module.scss";
import Location from "./Location";

const locations = [
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
  {
    imageSrc: "/assets/moscowNight.webp",
    name: "Moscow",
    url: "moscow",
  },
  {
    imageSrc: "/assets/peterburg.webp",
    name: "Peterburg",
    url: "peterburg",
  },
];

const Locations: FunctionComponent = () => {
  return (
    <section className={classes.locations}>
      {locations.map((location, i) => (
        <Location location={location} key={i} />
      ))}
    </section>
  );
};

export default Locations;
