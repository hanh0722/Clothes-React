import React, {useContext} from 'react';
import styles from './Overlay.module.scss';
import BlogContext from '../ContextCreated/blog-context';
const OverLay = () =>{
    const blogCtx = useContext(BlogContext);
    return(
        <>
        {
            (!blogCtx.success || !blogCtx.validImage || blogCtx.valid === true) && 
            <div onClick={blogCtx.cancelLayoutHandler} className={styles.overlay}></div>
        }
        </>
    )
}

export default OverLay;