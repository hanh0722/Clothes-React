import React, { useContext } from "react";
import styles from "./Notification.module.scss";
import BlogContext from "../ContextCreated/blog-context";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Notification = () => {
  const blogCtx = useContext(BlogContext);
  return (
    <div
      className={`${styles.notification} ${
        (!blogCtx.validImage || !blogCtx.success || blogCtx.valid) &&
        styles["transform_back"]
      }`}
    >
      <p>Notification</p>
      {blogCtx.validImage === false && <p>Please include an image!</p>}
      {blogCtx.content.trim().length === 0 && <p>Please include content!</p>}
      {blogCtx.title.trim().length === 0 && <p>Please include title!</p>}
      {blogCtx.success === true && blogCtx.validImage === true && (
        <>
          <p>Uploaded successfully</p>
          <Link to="/admin/blog">
            <button>Back to dashboard!</button>
          </Link>
        </>
      )}
      <FontAwesomeIcon
        onClick={blogCtx.cancelLayoutHandler}
        icon={faWindowClose}
      />
    </div>
  );
};

export default React.memo(Notification);
