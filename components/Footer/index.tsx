import { FunctionComponent } from "react";
import classes from "./Footer.module.scss";
import StayInTouch from "./StayInTouch";
import BecomeInsider from "./BecomeInsider";
import AllTheFood from "./AllTheFood";
import Icon from "../UI/Icon";

const Footer: FunctionComponent = () => {
  return (
    <>
      <StayInTouch />
      <BecomeInsider />
      <AllTheFood />
      <footer className={classes.footer}>
        <div className={classes.footer__socials}>
          <Icon icon="Instagram" size={"1.25rem"} color="#777a82" />
          <Icon icon="Vkontakte" size={"1.25rem"} color="#777a82" />
          <Icon icon="Facebook-f" size={"1.25rem"} color="#777a82" />
          <Icon icon="Twitter" size={"1.25rem"} color="#777a82" />
        </div>
        <div className={classes.footer__rights}>
          <span>© 2023 by All the Food</span>
          <span>Policies | All Rights Reserved</span>
        </div>
        <div className={classes.footer__creator}>
          Site by <a href="https://ericyakubu.com">Eric Yakubu</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
