import { FunctionComponent } from "react";
import classes from "./Links.module.scss";
import { Icon } from "../UI";

const Links: FunctionComponent = () => {
  return (
    <ul className={classes.links}>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Facebook-f" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Twitter" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Vkontakte" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Linkedin-in" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Instagram" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="Link" size={"1.2rem"} color="#000" />
        </a>
      </li>
      <li>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          News & Openings
        </a>
      </li>
    </ul>
  );
};

export default Links;
