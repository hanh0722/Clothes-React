import React, { useEffect, useState } from "react";
import Card from "./container/Card";
import styles from "./scss/LatestProduct.module.scss";
import classes from "../scss/SaleOverView.module.scss";
import Product from "./container/Product";
const LatestProduct = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/products/latest");
      const data = await response.json();
      setList(data);
    };
    fetchData();
  }, []);
  const ListProduct = list.map((item) => {
    return (
      <Product
        key={item.id}
        name={item.name}
        url={item.img}
        price={item.price}
        sale={item.sale}
      />
    );
  });
  return (
    <Card className={`${classes["box-sale"]} ${styles.container}`}>
      <p>Latest Product</p>
      {ListProduct}
    </Card>
  );
};

export default React.memo(LatestProduct);
