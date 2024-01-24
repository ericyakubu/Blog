import { FunctionComponent } from "react";
import classes from "./RestaurantsPageFilter.module.scss";
import { Button } from "@/components/UI";

const RestaurantsPageFilter: FunctionComponent = () => {
  return (
    <section className={classes.Filter}>
      <div className={classes.Filter__main}>
        <select
          name=""
          id=""
          placeholder="Neighbourhoods"
          className={classes.Filter__main__select}
        >
          <option value="">Category 1</option>
          <option value="">Category 2</option>
          <option value="">Category 3</option>
          <option value="">Category 4</option>
          <option value="">Category 5</option>
        </select>
        <select
          name=""
          id=""
          placeholder="Neighbourhoods"
          className={classes.Filter__main__select}
        >
          <option value="">Category 1</option>
          <option value="">Category 2</option>
          <option value="">Category 3</option>
          <option value="">Category 4</option>
          <option value="">Category 5</option>
        </select>
        <select
          name=""
          id=""
          placeholder="Neighbourhoods"
          className={classes.Filter__main__select}
        >
          <option value="">Category 1</option>
          <option value="">Category 2</option>
          <option value="">Category 3</option>
          <option value="">Category 4</option>
          <option value="">Category 5</option>
        </select>

        <Button
          text="Reset Filter"
          size="medium"
          type="button"
          background="green-white"
          className={classes.Filter__main__btn}
        />
      </div>
    </section>
  );
};

export default RestaurantsPageFilter;
