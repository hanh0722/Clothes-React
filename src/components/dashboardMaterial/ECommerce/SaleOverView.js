import React from 'react';
import styles from '../scss/SaleOverView.module.scss';
import Card from './container/Card';
import LineChart from './LineChart';
const SaleOverView = () =>{
    return(
        <Card className={styles['box-sale']}>
            <p>Sales overview</p>
            <div>
                <LineChart/>
            </div>
        </Card>
    )
}

export default SaleOverView;