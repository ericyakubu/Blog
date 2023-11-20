import { SECTION_TYPE } from "@/types";
import React from "react";
import classes from "./Section.module.scss";

import { SectionBody, SectionHead } from "..";
interface Props {
  section: SECTION_TYPE;
  grey?: boolean;
}

const Section: React.FC<Props> = ({ section, grey }) => {
  return (
    <section className={grey ? classes.grey : ""}>
      <SectionHead
        title={section.title}
        subtitle={section.subtitle}
        sectionLink={section.sectionLink}
      />
      <SectionBody posts={section.posts} />
    </section>
  );
};

export default Section;
