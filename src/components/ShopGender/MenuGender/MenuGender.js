import React from "react";
import { Link } from "react-router-dom";
import CardGender from "./CardGender";
import styles from "./CardGender.module.scss";
import { LinkPath } from "./Link";
const MenuGender = ({ data }) => {
  return (
    <CardGender className={styles["card_gender"]}>
      <div className={styles.title}>
        <p>Categories</p>
        <span className={styles.progress}></span>
      </div>
      <ul className={styles["link_item"]}>
        {LinkPath.map((items, index) => {
          return (
            <Link key={index} to={items.path}>
              <li>{items.name}</li>
              <span className={styles.number}>{data[index].length}</span>
            </Link>
          );
        })}
      </ul>
    </CardGender>
  );
};

export default MenuGender;
