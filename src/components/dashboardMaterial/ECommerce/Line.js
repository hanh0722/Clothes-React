import React from 'react';
import styles from './scss/LineChart.module.scss';
const Line = (props) =>{
    return(
        <div className={styles['line-chart']}>
            <div className={styles.title}>
                <span>{props.title}</span>
                <div>
                    <span>{props.total}</span>
                    <span>({props.percent})</span>
                </div>
            </div>
            <div className={styles.progress}>
                <div style={{width: props.value, background: props.background}}></div>
            </div>
        </div>
    )
}

export default Line;