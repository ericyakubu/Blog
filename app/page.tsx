import {
  AllTheFood,
  BecomeInsider,
  JoinUs,
  MainPosts,
  Reviews,
  Section,
  Shop,
  StayInTouch,
  TravelGuides,
} from "@/components";

import { SECTIONS } from "@/constants";

export default function Home() {
  return (
    <div>
      <MainPosts />
      <Section section={SECTIONS[0]} />

      <JoinUs />
      <Section section={SECTIONS[1]} />

      <Reviews />
      <Section section={SECTIONS[2]} grey={true} />

      <TravelGuides />
      <Section section={SECTIONS[3]} />

      <Shop />
      <StayInTouch />
      <BecomeInsider />
      <AllTheFood />
    </div>
  );
}
