import { SECTION_TYPE } from "@/types";
import { FunctionComponent } from "react";
import classes from "./Section.module.scss";
import SectionHead from "./SectionHead";
import SectionBody from "./SectionBody";

interface Props {
  section: SECTION_TYPE;
  grey?: boolean;
  size?: "small" | "large";
}

const Section: FunctionComponent<Props> = ({ section, grey, size }) => {
  // FIXME add variations to sections
  return (
    <section className={grey ? classes.grey : ""}>
      <SectionHead
        title={section.title}
        subtitle={section.subtitle}
        sectionLink={section.sectionLink}
      />
      <SectionBody posts={section.posts} size={size} />
    </section>
  );
};

export default Section;
