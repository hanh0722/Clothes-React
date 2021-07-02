import React from "react";
import ShopComponent from "../../shopcomponent/shopcomponent";
import CardGender from "../MenuGender/CardGender";
import styles from "./Product.module.scss";
const ProductGender = ({ products }) => {
  return (
    <CardGender className={styles["list_gender"]}>
      {products.map((item) => {
        return (
          <ShopComponent
            key={item.id}
            url={item.img}
            name={item.name}
            id={item.id}
            sale={item.sale}
            price={item.price}
            className1={styles.classItem}
          />
        );
      })}
    </CardGender>
  );
};

export default ProductGender;
