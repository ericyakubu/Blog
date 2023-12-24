import { FunctionComponent } from "react";
import classes from "./WhatsNew.module.scss";
import Post from "./Post";
import { SECTION_TYPE } from "@/types";
import { SectionHead } from "@/components";

interface Props {
  content: SECTION_TYPE;
}

const WhatsNew: FunctionComponent<Props> = ({ content }) => {
  return (
    <section>
      <SectionHead
        title={content.title}
        subtitle={content.subtitle}
        sectionLink={content.sectionLink}
      />
      <div className={classes.main}>
        {content.posts.map((post, i) => (
          <Post post={post} key={`post_${i}`} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
