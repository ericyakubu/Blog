import { FunctionComponent } from "react";
import classes from "./Insider.module.scss";
import { Button } from "@/components/UI";

const BecomeInsider: FunctionComponent = () => {
  return (
    <section className={classes.section}>
      <div className={classes.section__main}>
        <h2>Become an Insider</h2>
        <p>
          Get access to the best restaurants, bars, and food Dublin has to
          offer.
        </p>
        {/* TODO slight style change needed */}
        <Button
          type="link"
          text="Join ATF Insiders"
          link="/post/tfds"
          background="transparent-dark"
          size="medium"
        />
      </div>
      <img src="https://placehold.jp/350x350.png" alt="" />
    </section>
  );
};

export default BecomeInsider;
