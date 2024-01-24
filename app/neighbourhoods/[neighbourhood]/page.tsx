import { FunctionComponent } from "react";
import { NeighbourhoodPage } from "@/pagesAll";

const Neighbourhood: FunctionComponent = () => {
  const content = {
    title: `Our Take`,
    description: `Just south of the city centre, bordered by the Grand Canal, head to Portobello for café culture, Michelin-recommended dinners, and homemade pasta.`,
  };
  return <NeighbourhoodPage content={content} />;
};

export default Neighbourhood;
