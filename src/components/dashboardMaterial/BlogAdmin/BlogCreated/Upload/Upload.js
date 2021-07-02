import React, {useContext} from 'react';
import BlogContext from '../ContextCreated/blog-context';
const Upload = (props) =>{
    const blogCtx = useContext(BlogContext);
    return(
        <form onSubmit={blogCtx.sendDataHandler}>
            {props.children}
        </form>
    )
}

export default Upload;