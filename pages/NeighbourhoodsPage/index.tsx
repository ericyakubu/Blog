import { FunctionComponent } from "react";
import Head from "./Head";
import Description from "./Description";
import Locations from "./Locations";
import { JoinUs } from "@/components";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const NeighbourhoodsPage: FunctionComponent<Props> = ({ content }) => {
  const content1 = {
    microtitle: `Join ATF Insiders`,
    title: "Make the Most\nof Every Meal",
    subtitle: ``,
    color: `dark`,
    size: "full",
  };
  // TODO make it dinamical for both /neighbourhoods and /neighbourhoods/[location]
  // probably no need to break it into subfolders
  return (
    <>
      <Head />
      <Description content={content} />
      <Locations />
      {/* FIXME idk wtf the problem is, needs to be fixed */}
      <JoinUs content={content1} />
    </>
  );
};

export default NeighbourhoodsPage;
