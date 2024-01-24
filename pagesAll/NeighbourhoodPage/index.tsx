import { FunctionComponent } from "react";
import Head from "./Head";
import Locations from "./Locations";
import { Description } from "@/components";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const NeighbourhoodPage: FunctionComponent<Props> = ({ content }) => {
  const content1 = {
    microtitle: `Join ATF Insiders`,
    title: "Make the Most\nof Every Meal",
    subtitle: ``,
    color: `dark`,
    size: "full",
  };
  // TODO make it dinamical for both /neighbourhoods and /neighbourhoods/[location]
  return (
    <>
      <Head />
      <Description content={content} />
      <Locations />
      {/* TODO add google map here */}
    </>
  );
};

export default NeighbourhoodPage;
