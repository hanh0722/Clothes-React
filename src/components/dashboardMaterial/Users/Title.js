import React from 'react';
import classes from './scss/Title.module.scss';
const Title = () =>{
    return(
        <div className={classes.title}>
            <p>User List</p>
        </div>
    )
}

export default React.memo(Title);