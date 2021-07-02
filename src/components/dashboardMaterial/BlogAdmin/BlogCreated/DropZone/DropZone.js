import React, { useEffect, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./DropZone.module.scss";
import BlogContext from "../ContextCreated/blog-context";
const Previews = (props) => {
  const blogCtx = useContext(BlogContext);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 1) {
        return;
      }
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      blogCtx.changeImageHandler(acceptedFiles[0]);
    }
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div className={styles.images}>
        <img src={file.preview} alt="" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className={styles["form-upload"]}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p style={{ textAlign: "center" }}>
          Drag 'n' drop some files here, or click to select files (1 image)
        </p>
      </div>
      <aside>{thumbs}</aside>
    </div>
  );
};

export default Previews;
