import React from 'react';
import styles from './scss/Container.module.scss';
const Container = (props) =>{
    return(
        <div className={`${styles['container__shop']} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container;