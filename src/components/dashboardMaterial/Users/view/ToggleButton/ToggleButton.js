import React from 'react';
import styles from './ToggleButton.module.scss';
const ToggleButton = ({isBannedHandler, banned}) =>{
    return(
        <div className={`${styles.button} ${!banned && styles['button_back']}`}>
            <div onClick={isBannedHandler} className={`${styles.toggle} ${!banned && styles['toggle-back']}`}>
            </div>
        </div>
    )
}

export default React.memo(ToggleButton);