import React from "react";
import classes from "./Insider.module.scss";
import Link from "next/link";

const BecomeInsider: React.FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.section__main}>
        <h2>Become an Insider</h2>
        <p>
          Get access to the best restaurants, bars, and food Dublin has to
          offer.
        </p>
        <Link href={`/post/234`}>Join ATF Insiders</Link>
      </div>
      <img src="https://placehold.jp/350x350.png" alt="" />
    </section>
  );
};

export default BecomeInsider;
