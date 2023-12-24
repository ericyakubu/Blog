import {
  JoinUs,
  MainPosts,
  Reviews,
  Section,
  Shop,
  TravelGuides,
} from "@/components";
import { LandingPage } from "@/pages";

import { SECTIONS } from "@/constants";
import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <>
      {/* <>
      <MainPosts />
      <Section section={SECTIONS[0]} />
      <JoinUs />
      <Section section={SECTIONS[1]} /> 
      <Reviews />
      <Section section={SECTIONS[2]} grey={true} size={"large"} />
      <TravelGuides />
      <Section section={SECTIONS[3]} /> 
      <Shop />
    </> */}
      <LandingPage />
    </>
  );
};

export default Home;
