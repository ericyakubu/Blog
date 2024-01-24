import { FunctionComponent } from "react";
import Head from "./Head";
import { Description, JoinUs } from "@/components";
import RestaurantsPageFilter from "./RestaurantsPageFilter";
import { SampleRestaurants } from "@/samples";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";

const RestaurantsPage: FunctionComponent = () => {
  const content = {
    title: `Where to eat`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consectetur quibusdam veritatis molestiae voluptas hic, officia voluptatem tenetur ad, quod neque ea nobis odio facere illo tempore. Cum, voluptatum quas?`,
  };

  const content1 = {
    microtitle: `Join ATF Insiders`,
    title: "Make the Most\nof Every Meal",
    subtitle: ``,
    color: `dark`,
    size: "full",
  };
  return (
    <>
      <Head />
      <Description content={content} />
      <RestaurantsPageFilter />
      <Restaurants restaurants={SampleRestaurants} />
      <JoinUs content={content1} />
    </>
  );
};

export default RestaurantsPage;
