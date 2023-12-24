import { FunctionComponent } from "react";
import classes from "./Product.module.scss";
import { PRODUCT_TYPE } from "@/types";
import Image from "next/image";
interface Props {
  product: PRODUCT_TYPE;
}

const Product: FunctionComponent<Props> = ({ product }) => {
  return (
    <div className={classes.product}>
      <Image src={product.image} alt={product.name} width={700} height={700} />
      <h4>{product.name}</h4>
      <span>${product.price}</span>
    </div>
  );
};

export default Product;
