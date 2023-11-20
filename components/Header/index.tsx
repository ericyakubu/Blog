import React from "react";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>logo</div>
      <div className={classes.header_options}>
        <div className={classes.header_options__option}>Option</div>
        <div className={classes.header_options__option}>Option</div>
        <div className={classes.header_options__option}>Option</div>
      </div>
    </header>
  );
};

export default Header;
