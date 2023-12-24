import { FunctionComponent } from "react";
import { JoinUs } from "..";
import Reviews from "./Reviews";
import MainPosts from "./MainPosts";
import TravelGuides from "./TravelGuides";
import Shop from "./Shop";
import WhatsNew from "./WhatsNew";
import InsiderFeatures from "./InsiderFeatures";
import WhereToDrink from "./WhereToDrink";
import Guides from "./Guides";

import { SECTION } from "./constants";

const LandingPage = () => {
  return (
    <>
      <MainPosts />
      <WhatsNew content={SECTION.WhatsNew} />
      <JoinUs />
      <InsiderFeatures content={SECTION.InsiderFeatures} />
      <Reviews />
      <WhereToDrink content={SECTION.WhereToDrink} />
      <TravelGuides />
      <Guides content={SECTION.Guides} />
      <Shop />
    </>
  );
};

export default LandingPage;
