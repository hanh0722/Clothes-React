import React from 'react';
import styles from '../scss/Product.module.scss'
const Product = ({name, price, url, sale}) =>{
    return(
        <div className={styles.list}>
            <div className={styles.img}>
                <img src={require(`../../../img/${url}`).default} alt=''/>
            </div>
            <div className={styles.content}>
                <p>{name}</p>
                <div style={{display: 'flex'}}>
                    {sale ? <p className={styles.sale}>${sale}</p> : <p>${price}</p>}
                    {sale && <span style={{marginLeft: '10px'}}>${price}</span>}
                </div>
            </div>
        </div>
    )
}

export default Product;