import { FunctionComponent } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { LogIn } from "..";
import { Icon } from "../UI";

const Header: FunctionComponent = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.header_top}>
        <li>
          <button type="submit">search</button>
        </li>
        <li>
          <a href="http://youtube" target="_blank" rel="noopener noreferrer">
            <Icon icon="Instagram" size={"0.8rem"} color="#fff" />
          </a>
          <a href="http://youtube" target="_blank" rel="noopener noreferrer">
            <Icon icon="Vkontakte" size={"0.8rem"} color="#fff" />
          </a>
          <a href="http://youtube" target="_blank" rel="noopener noreferrer">
            <Icon icon="Facebook-f" size={"0.8rem"} color="#fff" />
          </a>
          <a href="http://youtube" target="_blank" rel="noopener noreferrer">
            <Icon icon="Twitter" size={"0.8rem"} color="#fff" />
          </a>
        </li>

        <li>
          <Link href={`/industry-jobs`}>industry jobs</Link>
        </li>
        <li>
          <Link href={`/shop`}>shop</Link>
        </li>
        <li>
          <Link href={`/insider-hub`}>insider hub</Link>
        </li>
      </ul>

      <section className={classes.header_main}>
        <button className={classes.header_main_btn}>Join ATF Insiders</button>
        <h1 className={classes.header_main_title}>
          <Link href={`/`}>all the food</Link>
        </h1>
        <div className={classes.header_main_login}>
          <LogIn variant="green" />
          <button className={classes.header_main_login__shoppingBag}>
            <Icon icon="Shopping-bag" size={"2.25rem"} color="#114b5f" />
            <span>0</span>
          </button>
        </div>
      </section>

      <nav className={classes.header_nav}>
        <ul className={classes.header_nav__list}>
          <li>
            <a href="/neighbourhoods">neighbourhoods</a>
          </li>
          <li>
            <a href="/reviews">reviews</a>
          </li>
          <li>
            <a href="/restaurants">restaurants</a>
          </li>
          <li>
            <a href="/guides">dublin guides</a>
          </li>
          <li>
            <a href="/travel-guides">travel guides</a>
          </li>
          <li>
            <a href="/whats-new">what&apos;s new</a>
          </li>
          <li>
            <a href="/all-news">all news</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
