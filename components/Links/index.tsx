import { FunctionComponent } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
  FaVk,
} from "react-icons/fa";
import classes from "./Links.module.scss";

const Links: FunctionComponent = () => {
  return (
    <ul className={classes.links}>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaVk />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </li>
      <li className={classes.links__link}>
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaLink />
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
