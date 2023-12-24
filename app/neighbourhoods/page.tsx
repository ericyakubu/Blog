import { FunctionComponent } from "react";
import { NeighbourhoodsPage } from "@/pages";

const Neighbourhoods: FunctionComponent = () => {
  const content = {
    title: `Where to eat`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consectetur quibusdam veritatis molestiae voluptas hic, officia voluptatem tenetur ad, quod neque ea nobis odio facere illo tempore. Cum, voluptatum quas?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate magni molestiae similique quisquam natus quod? Quiaiste dicta neque optio culpa enim nam at error blanditiis ex, nemoconsequuntur. Architecto, quisquam commodi. Itaque eveniet quipraesentium quia quae, veritatis a harum maiores quis.`,
  };
  return <NeighbourhoodsPage content={content} />;
};

export default Neighbourhoods;
