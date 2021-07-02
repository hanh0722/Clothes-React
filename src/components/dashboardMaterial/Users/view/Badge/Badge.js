import React from "react";
import styles from "./Badge.module.scss";
const Badge = ({checkActive}) => {
  return <div className={styles.badge}>
    <span className={!checkActive ? styles.isBanned : styles.isNotBanned}>{
        !checkActive ? 'Banned' : 'Active'
    }</span>
  </div>;
};

export default Badge;
