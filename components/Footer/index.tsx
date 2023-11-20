import React from "react";
import classes from "./Footer.module.scss";
import { FaInstagram, FaTwitter, FaFacebookF, FaVk } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__socials}>
        <FaInstagram />
        <FaVk />
        <FaFacebookF />
        <FaTwitter />
      </div>
      <div className={classes.footer__rights}>
        <span>© 2023 by All the Food</span>
        <span>Policies | All Rights Reserved</span>
      </div>
      <div className={classes.footer__creator}>
        Site by <a href="https://ericyakubu.com">Eric Yakubu</a>
      </div>
    </footer>
  );
};

export default Footer;
