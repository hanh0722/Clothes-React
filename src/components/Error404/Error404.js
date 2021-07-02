import React from "react";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faSadTear} />
        </div>
        <div className={styles.text}>
          <p>404</p>
          <p className={styles.content}>
            Oops, We are sorry, the page you are looking for can't be found!
          </p>
          <Link to='/'><button>Come back homepage!</button></Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
