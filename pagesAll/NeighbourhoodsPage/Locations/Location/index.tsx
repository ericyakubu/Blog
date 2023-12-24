import { FunctionComponent } from "react";
import classes from "./Location.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  location: {
    imageSrc: string;
    name: string;
    url: string;
  };
}

const Location: FunctionComponent<Props> = ({ location }) => {
  return (
    <Link href={`/neighbourhoods/${location.url}`} className={classes.location}>
      <Image
        src={location.imageSrc}
        width={500}
        height={500}
        alt={location.name}
      />
      <h4>{location.name}</h4>
    </Link>
  );
};

export default Location;
