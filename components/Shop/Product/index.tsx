import React from "react";
import classes from "./Product.module.scss";
import { PRODUCT_TYPE } from "@/types";
interface Props {
  product: PRODUCT_TYPE;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className={classes.product}>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <span>${product.price}</span>
    </div>
  );
};

export default Product;
