import React, {useContext} from "react";
import styles from "./Content.module.scss";
import Input from "./Input/Input";
import Previews from './DropZone/DropZone';
import BlogContext from "./ContextCreated/blog-context";
const Content = () => {
  const blogCtx = useContext(BlogContext);
  return (
    <div className={styles.content}>
      <Input
        input={{
          type: "text",
          id: 'title-post',   
          onChange: blogCtx.changeTitleHandler
        }}
        id='title-post'
        label='Post Title'
      />
      
      <label htmlFor='description'>Description</label>
        <textarea onChange={blogCtx.changeContentHandler} id='description' />
        <label>Cover</label>
        <Previews/>
    </div>
  );
};

export default Content;
