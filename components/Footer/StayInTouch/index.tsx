"use client";
import { FunctionComponent } from "react";
import classes from "./StayInTouch.module.scss";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const StayInTouch: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (e) => {
    console.log(e.email);
  };

  return (
    <section className={classes.section}>
      <div className={classes.section__main}>
        <h2>Stay in touch</h2>
        <p>
          Get news, reviews and guides to eating out in <b>CITY</b> direct to
          your inbox
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email")}
            placeholder="Please enter your email"
          />
          <button type="submit">Join Us</button>
        </form>
      </div>
    </section>
  );
};

export default StayInTouch;
