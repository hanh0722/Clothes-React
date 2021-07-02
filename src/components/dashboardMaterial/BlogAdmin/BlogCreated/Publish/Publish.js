import React, { useContext} from "react";
import styles from "./Publish.module.scss";
import classes from "../Content.module.scss";
import BlogContext from "../ContextCreated/blog-context";
const Publish = () => {
  const blogCtx = useContext(BlogContext);
  return (
    <div className={`${classes.content} ${styles.publish}`}>
      <div className={styles.line}>
        <p>Publish</p>
        <div
          className={`${styles.button} ${blogCtx.publish === true &&styles["setting_line"]}`}
        >
          <div
            onClick={blogCtx.changePublishHandler}
            className={`${styles.btn} ${blogCtx.publish === true && styles["setting_btn"]}`}
          ></div>
        </div>
      </div>
      <button type='submit'>Publish!</button>
    </div>
  );
};

export default Publish;
