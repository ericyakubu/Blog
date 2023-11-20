import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import classes from "./Links.module.scss";

const Links: React.FC = () => {
  return (
    <ul className={classes.links}>
      <li className={classes.links__link}>
        <FaFacebookF />
      </li>
      <li className={classes.links__link}>
        <FaTwitter />
      </li>
      <li className={classes.links__link}>
        <FaLinkedinIn />
      </li>
      <li className={classes.links__link}>
        <FaInstagram />
      </li>
      <li className={classes.links__link}>
        <FaLink />
      </li>
    </ul>
  );
};

export default Links;
