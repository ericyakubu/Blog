import { FunctionComponent } from "react";
import classes from "./Shop.module.scss";
import { SHOP_PRODUCTS } from "@/constants";
import { Product, SectionHead } from "../..";
import Link from "next/link";

const Shop: FunctionComponent = () => {
  const sectionInfo = {
    title: `Shop for Swag`,
    subtitle: "",
    sectionLink: {
      link: `/shop`,
      title: "Our Shop",
    },
  };

  return (
    <section className={classes.section}>
      <SectionHead
        title={sectionInfo.title}
        subtitle={sectionInfo.subtitle}
        sectionLink={sectionInfo.sectionLink}
      />
      <div className={classes.section__main}>
        <div className={classes.section__main_inside}>
          {SHOP_PRODUCTS.map((product, i) => (
            <Product product={product} key={`product ${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
